import { connectDB } from "@/db/db";
import Image from "next/image";

export const metadata = {
  title: "Home : Work Manager"
}

connectDB()
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold text-center">Welcome to Work Manager</h1>
    </main>
  );
}
