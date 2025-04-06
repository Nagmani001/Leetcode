"use client"
import { CodeEditor } from "./components/codeEditor";

export default function Home() {
  return <div>
    <CodeEditor onSubmitCode={(code: any) => {
      console.log(code);
    }} />
  </div>
}
