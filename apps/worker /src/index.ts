import { client } from "@repo/redis/redisClient";
import axios from "axios";

async function processSubmission(sumbission: string | undefined) {
  const { userId, code, language, problemId } = JSON.parse(sumbission || "");
  try {
    console.log("request sent to server");
    const response = await axios.post("http://65.0.180.17:2358/submissions?base64_encoded=false&wait=true", {
      language_id: language,
      source_code: code
    });
    console.log("solved")
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
      console.log("i poped")
      await processSubmission(response?.element)
    }

  } catch (err) {
    console.log("something went wrong", err)
  }
}
startWorker();

