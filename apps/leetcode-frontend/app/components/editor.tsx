"use client"
import { Editor } from '@monaco-editor/react';
import { useState } from 'react';


export default function EditorNag() {
  const [code, setCode] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const languages = ['javascript', 'typescript', 'python', 'java', 'c++', 'go'];

  return (
    <div className="flex flex-col h-full w-full rounded-2xl">
      <div className="bg-cardTop flex justify-between items-center px-4 py-2">
        <span>Code</span>
        <div className="relative">
          <button
            onClick={() => setShowLangDropdown(!showLangDropdown)}
            className="flex items-center gap-2 text-sm px-3 py-1 rounded hover:bg-gray-700"
          >
            {selectedLanguage}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {showLangDropdown && (
            <div className="absolute right-0 mt-1 bg-cardBackground border border-gray-600 rounded-md shadow-lg z-10">
              {languages.map(lang => (
                <div
                  key={lang}
                  onClick={() => {
                    setSelectedLanguage(lang);
                    setShowLangDropdown(false);
                  }}
                  className="px-4 py-2 hover:bg-gray-800 cursor-pointer text-sm"
                >
                  {lang}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="bg-cardBackground h-full w-full">
        <Editor
          language={selectedLanguage}
          defaultLanguage="javascript"
          onChange={(value) => setCode(value || "")}
        />
      </div>
    </div>
  );
};
