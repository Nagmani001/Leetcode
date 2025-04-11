import { client } from "@repo/redis/redisClient";
import axios from "axios";

async function processSubmission(sumbission: string | undefined) {
  console.log(sumbission)
  // also get userId 
  await client.connect();
  const { problemId, code, language, userId } = JSON.parse(sumbission || "");
  console.log(code);
  console.log(language);
  try {
    const response = await axios.post("http://52.66.252.35:2358/submissions?base64_encoded=false&wait=true", {
      language_id: language,
      source_code: code
    });
    const channel = `userId:${userId},problemId:${problemId}`
    await client.publish(channel, response.data)
    // publish to pubsub : {
    // userId,
    // response from judge0,
    // }
    console.log(response.data)
  } catch (err) {
    console.log(err)
  }


}
async function startWorker() {
  try {
    await client.connect();
    while (true) {
      const response = await client.Pop("problems", 0)
      await processSubmission(response?.element)
    }

  } catch (err) {
    console.log("something went wrong", err)
  }
}
startWorker();

