import { client } from "@repo/redis/redisClient";

async function processSubmission(sumbission: string | undefined) {
  const { problemId, code, language } = JSON.parse(sumbission || "")
  console.log(problemId, code, language)
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
