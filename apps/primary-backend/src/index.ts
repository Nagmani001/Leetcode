import express, { Request, Response } from "express";
import { prismaClient } from "@repo/db/client";
import bcrypt from "bcrypt";
import { signupSchema } from "@repo/common/types";
import cors from "cors";
import { client } from "@repo/redis/redisClient";

const app = express();

app.use(express.json());
app.use(cors())
client.on("error", (err) => {
  console.log("redis client error occured", err)
})

app.post("/submit", async (req: Request, res: Response) => {
  const { problemId, code, language, userId } = req.body;
  console.log(req.body)
  try {
    await client.lPush("problems", JSON.stringify({
      code: req.body.source_code,
      userId,
      problemId,
      language: req.body.language_id,
    }))
    res.json({
      msg: "pused to redis"
    })

  } catch (err) {
    console.log("Error pushing to server ", err)
  }
});


app.post("/signup", async (req: Request, res: Response) => {
  console.log(req.body)
  const parsedData = signupSchema.safeParse(req.body);
  if (!parsedData.success) {
    res.json({
      msg: "invalid data"
    })
  }
  if (!parsedData.data?.password) {
    return;
  }
  const hashedPassword = await bcrypt.hash(parsedData.data?.password, 10);
  const addUser = await prismaClient.user.create({
    data: {
      username: parsedData.data.username,
      email: parsedData.data.email,
      password: hashedPassword,
      role: "USER"
    }
  });
  res.json({
    msg: "user created"
  })
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
