import { WebSocket, WebSocketServer } from "ws";
import { PubSub } from "./pubsubManager";

const wss = new WebSocketServer({ port: 8000 });

wss.on("connection", (socket: WebSocket) => {

  const pubSub = PubSub.getInstance();

  socket.on("message", (data: any) => {
    const parsedData = JSON.parse(data);

    if (parsedData.type === "subscribe") {
      pubSub.userSubscribe(parsedData.userId, parsedData.problemId);
    }

    if (parsedData.type === "unSubscribe") {
      pubSub.userUnsubscribe(parsedData.userId, parsedData.problemId);

    }

  })

})
