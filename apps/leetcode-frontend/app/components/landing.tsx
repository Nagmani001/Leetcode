"use client";
import { signIn } from "next-auth/react"

export default function Landing() {
  return <div>
    landing page
    <button onClick={() => {
      signIn()
    }}> signin </button>
  </div>
}
