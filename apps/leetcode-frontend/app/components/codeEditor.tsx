"use client"
import Editor from "@monaco-editor/react";
import React from "react";

export function CodeEditor({ onCodeSubmit }: {
  onCodeSubmit: any
}) {
  const [code, setCode] = React.useState("");

  // Default code template with JSDoc
  const defaultCode = `/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // Write your code here
};`;

  return (
    <div>
      <Editor
        height="400px"
        defaultLanguage="javascript"
        defaultValue={defaultCode}
        onChange={(value) => setCode(value || "")}
      />
      <button onClick={() => onCodeSubmit(code)}>Submit</button>
    </div>
  );
}
