import { getServerSession } from "next-auth";
import { AUTH_OPTIONS } from "../lib/auth";
import { redirect } from "next/navigation";
import SignoutButton from "../components/Button";


async function getSession() {
  const session = await getServerSession(AUTH_OPTIONS);
  if (session) {
    return session;
  }
}

export default async function Home() {
  const session = await getSession();
  if (!session?.email) {
    redirect("/")
  }
  //nav bar which shows user's details and lets the user log out 
  //problems section where user can select a problem and reach /problems/problemID
  return <div>
    welcome to home page
    <SignoutButton />
  </div>
}
