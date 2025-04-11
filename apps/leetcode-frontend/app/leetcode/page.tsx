"use client";

import { useState } from 'react';
import Editor from '@monaco-editor/react';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';

export default function ProblemPage() {
  const [code, setCode] = useState(`function solution() {\n  // Your code here\n}`);
  const [output, setOutput] = useState('');

  const runCode = () => {
    try {
      // Capture console.log output
      let logs: string[] = [];
      const originalLog = console.log;
      console.log = (...args) => {
        logs.push(args.join(' '));
        originalLog(...args);
      };

      // Simple sandboxed execution (Note: this is basic example, not secure)
      const result = eval(code);

      // Restore console.log
      console.log = originalLog;

      setOutput(logs.join('\n') + (result !== undefined ? `\nResult: ${result}` : ''));
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  return (
    <div className="h-screen w-full bg-gray-100">
      <PanelGroup direction="horizontal" className="h-full">
        {/* Left Panel - Problem Description */}
        <Panel defaultSize={50} minSize={30}>
          <div className="h-full overflow-y-auto p-4 bg-white">
            <h1 className="text-2xl font-bold mb-4">1. Two Sum</h1>
            <div className="prose">
              <p>Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.</p>
              <h3>Example 1:</h3>
              <pre>Input: nums = [2,7,11,15], target = 9<br />Output: [0,1]</pre>
              <h3>Constraints:</h3>
              <ul>
                <li>2 ≤ nums.length ≤ 10⁴</li>
                <li>-10⁹ ≤ nums[i] ≤ 10⁹</li>
              </ul>
            </div>
          </div>
        </Panel>

        <PanelResizeHandle className="w-2 bg-gray-200 hover:bg-blue-400 cursor-col-resize" />

        {/* Right Panel */}
        <Panel defaultSize={50} minSize={30}>
          <PanelGroup direction="vertical">
            {/* Top Panel - Editor */}
            <Panel defaultSize={70} minSize={30}>
              <div className="h-full flex flex-col">
                <div className="flex justify-between items-center p-2 bg-gray-800 text-white">
                  <span>JavaScript</span>
                  <button
                    onClick={runCode}
                    className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded"
                  >
                    Run
                  </button>
                </div>
                <Editor
                  height="100%"
                  defaultLanguage="javascript"
                  defaultValue={code}
                  onChange={(value) => setCode(value || '')}
                  theme="vs-dark"
                  options={{
                    minimap: { enabled: false },
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                  }}
                />
              </div>
            </Panel>

            <PanelResizeHandle className="h-2 bg-gray-200 hover:bg-blue-400 cursor-row-resize" />

            {/* Bottom Panel - Output */}
            <Panel defaultSize={30} minSize={20}>
              <div className="h-full bg-gray-800 text-white p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold">Output</h3>
                </div>
                <pre className="whitespace-pre-wrap font-mono text-sm overflow-y-auto h-[calc(100%-40px)]">
                  {output || 'Click "Run" to see your output'}
                </pre>
              </div>
            </Panel>
          </PanelGroup>
        </Panel>
      </PanelGroup>
    </div>
  );
}
