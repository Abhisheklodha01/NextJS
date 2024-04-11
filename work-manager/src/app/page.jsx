import Image from "next/image";
import HomeImage from '../assets/home.svg'
import { connectDB } from "@/db/db";

export const metadata = {
  title: "Home : Work Manager"
}
connectDB()
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-800">
      <h1 className="text-3xl font-bold text-center">Welcome to Work Manager</h1>
      <Image src={HomeImage} alt="homeImage" />
    </main>
  );
}
