"use client";
import { signOut } from "next-auth/react"
import { redirect } from "next/navigation"

export default function SignoutButton() {
  return <>

    <button onClick={async () => {
      await signOut()
      redirect("/")
    }}>signout</button>
  </>
}
