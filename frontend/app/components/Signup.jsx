"use client";

import RetroGrid from "@/components/magicui/retro-grid";
import Link from "next/link";

export default function SignUp() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <span className="pointer-events-none pb-6 pr-3 z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
        <div>Sign Up</div>
      </span>

      <div className="flex flex-col w-2/5 min-h-2.5 mt-4 py-2 px-3 gap-2">
      <label className="font-semibold" htmlFor="firstName">First Name</label>
      <input type="text" name="firstName" placeholder="John" className="border-2 pl-4 py-1 rounded-md"/>
      <label className="font-semibold" htmlFor="lastName">Last Name</label>
      <input type="text" name="lastName" placeholder="Doe" className="border-2 pl-4 py-1 rounded-md"/>
      <label className="font-semibold" htmlFor="email">Username</label>
      <input type="text" name="email" placeholder="JohnDoe@gmail.com" className="border-2 pl-4 py-1 rounded-md" />
      <label className="font-semibold" htmlFor="password">Password</label>
      <input type="text" name="password" className="border-2 pl-4 py-1 rounded-md"/>
      </div>

      <div className="pt-4">
        Already have an account?<Link href={'/signin'} className="font-semibold underline">Sign in</Link>
      </div>

      <button className="text-white bg-[#FD3D0D] font-semibold mt-4 px-9 py-2 rounded-md">
        Sign in
      </button>
      <RetroGrid />
    </div>
  );
}