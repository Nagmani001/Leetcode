import { client } from "@repo/redis/redisClient";
import { WebSocket } from "ws";

export class PubSub {

  private redisClient
  private static instance: PubSub
  private subscriptions: Map<string, string>

  constructor() {
    this.redisClient = client;
    this.redisClient.connect();
    this.subscriptions = new Map()
  }
  userSubscribe(userId: string, problemId: string, socket: WebSocket) {
    this.subscriptions.set(userId, problemId);
    if (this.subscriptions.has(userId)) {
      const channel = `userId:${userId},problemId:${problemId}`
      this.redisClient.subscribe(channel, (message) => {
        socket.send(message)
        console.log(message)
        this.redisClient.unsubscribe(channel);
        socket.terminate();
      })
    }
  }

  userUnsubscribe(userId: string, problemId: string) {
    if (this.subscriptions.has(userId)) {
      this.subscriptions.delete(userId);
    }
    const channel = `userId:${userId},problemId:${problemId}`
    this.redisClient.unsubscribe(channel);
    console.log("unsubscribed");

  }

  handleMessage(message: any) {
  }

  public static getInstance() {
    if (PubSub.instance) {
      return PubSub.instance
    }
    PubSub.instance = new PubSub();
    return PubSub.instance
  }

  async disconnect() {
    await this.redisClient.quit();
  }
}
