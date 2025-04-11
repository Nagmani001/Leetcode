"use client"
import Editor from "@monaco-editor/react";
import axios from "axios";
import React, { useState } from "react";

export function CodeEditor() {
  const [code, setCode] = React.useState("");
  const [response, setResponse] = useState(null);

  // Default code template with JSDoc
  const defaultCode = `/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // Write your code here
};`;

  function onCodeSubmit(code: string) {
    console.log(code);
  }

  return (
    <div className="flex h-screen w-screen">
      <div className="flex h-full w-full flex-col">
        something
      </div>
      <div>
      </div>
      <div className="flex flex-col h-full w-full ">
        <div className="bg-red-50  h-full w-full">
          <Editor
            height="500px"
            defaultLanguage="javascript"
            defaultValue={defaultCode}
            onChange={(value) => setCode(value || "")}
          />
        </div>
        <div>
          <button onClick={async () => {
            const socket = new WebSocket("ws://localhost:8000")
            try {
              await axios.post("http://localhost:3001/submit", {
                language_id: 63,
                source_code: code,
                userId: 1,
                problemId: 2
              });
            } catch (err) {
              console.log(err)
            }
            try {
              if (socket) {
                socket.send(JSON.stringify({
                  type: "subscribe",
                  userId: 1,
                  problemId: 2
                }));
                socket.addEventListener("message", (data: any) => {
                  const parsedData = JSON.parse(data);
                  console.log(response);
                  setResponse(parsedData)
                })
              }

            } catch (err) {

            }

          }}>Submit</button>
        </div>
        <div className=" h-full w-full bg-red-50">
          {response?.stdout ? response?.stdout : response?.stderr}
        </div>
      </div>
    </div >
  );
}
