import { client } from "@repo/redis/redisClient";
import axios from "axios";

async function processSubmission(sumbission: string | undefined) {
  const { userId, code, language, problemId } = JSON.parse(sumbission || "");
  try {
    const response = await axios.post("http://52.66.252.35:2358/submissions?base64_encoded=false&wait=true", {
      language_id: language,
      source_code: code
    });
    console.log(response.data);
    const channel = `userId:${userId},problemId:${problemId}`

    await client.publish(channel, JSON.stringify(response.data))
    // publish to pubsub : {
    // userId,
    // response from judge0,
    // }
  } catch (err) {
    console.log("hi bro ")
    console.log(err)
  }


}
async function startWorker() {
  try {
    await client.connect();
    while (true) {
      const response = await client.brPop("problems", 0)
      await processSubmission(response?.element)
    }

  } catch (err) {
    console.log("something went wrong", err)
  }
}
startWorker();

