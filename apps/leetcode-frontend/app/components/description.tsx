"use client";

import MainDescription from "./mainDescription";

export default function Description() {
  return <div className="flex flex-col h-full w-full  rounded-2xl  ">
    <div className="bg-cardTop">
      <button>Description</button>
    </div>
    <div className="bg-cardBackground h-full w-full">
      <MainDescription />
    </div>
  </div>


}

