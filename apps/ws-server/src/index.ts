import { WebSocket, WebSocketServer } from "ws";
import { PubSub } from "./pubsubManager";

const wss = new WebSocketServer({ port: 8000 });
let connection = 0;

wss.on("connection", (socket: WebSocket) => {
  connection++;
  console.log(connection);
  const pubSub = PubSub.getInstance();

  socket.on("message", (data: any) => {
    const parsedData = JSON.parse(data);

    if (parsedData.type === "subscribe") {
      pubSub.userSubscribe(parsedData.userId, parsedData.problemId, socket);
    }

    if (parsedData.type === "unSubscribe") {
      pubSub.userUnsubscribe(parsedData.userId, parsedData.problemId);

    }

  })
  socket.on("close", () => {
    connection--;
    console.log(connection);
  })

})
