"use client";

export default function Page({ params }: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1>Profile Page</h1>
      <h2 className="p-3 bg-green-500 rounded text-black">{params.userid}</h2>
    </div>
  );
}
