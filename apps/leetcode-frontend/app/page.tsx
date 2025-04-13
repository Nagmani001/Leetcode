import { getServerSession } from "next-auth";
import { AUTH_OPTIONS } from "./lib/auth";
import Landing from "./components/landing";
import { redirect } from "next/navigation";

async function getSession() {
  const session = await getServerSession(AUTH_OPTIONS);
  if (session) {
    return session;
  }
}

export default async function Home() {
  const session = await getSession();
  if (session?.email) {
    redirect("/home")
  }

  return <>
    <Landing />
  </>
}
