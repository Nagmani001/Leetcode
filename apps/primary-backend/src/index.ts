import express, { Request, Response } from "express";
import { client } from "@repo/redis/redisClient";

const app = express();

app.use(express.json());
client.on("error", (err) => {
  console.log("redis client error occured", err)
})

app.post("/submit", async (req: Request, res: Response) => {
  const { problemId, code, language } = req.body;
  try {
    await client.lPush("problems", JSON.stringify({
      problemId,
      language,
      code,
    }))
    res.json({
      msg: "pused to redis"
    })

  } catch (err) {
    console.log("Error pushing to server ", err)
  }
});


async function startServer() {
  try {
    await client.connect()
    app.listen(3001, () => {
      console.log("server running on port 3001")
    })

  } catch (err) {
    console.log("error occured while starting the server ", err)
  }
}
startServer()
