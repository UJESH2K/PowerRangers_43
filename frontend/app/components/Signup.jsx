"use client";

import RetroGrid from "@/components/magicui/retro-grid";
import Link from "next/link";
import TypingAnimation from "@/components/magicui/typing-animation";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const router = useRouter(); // Moved inside the function

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <span className="pointer-events-none pb-6 pr-3 z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
        <div>Sign Up</div>
      </span>
      
      <TypingAnimation
        className="text-md font-medium text-black dark:text-white"
        text="Enter your details to get started on your new fitness journey!"
        duration={55}
      />

      <div className="flex flex-col w-2/5 min-h-2.5 mt-4 py-2 px-3 gap-2">
        <label className="font-semibold" htmlFor="firstName">First Name</label>
        <input
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          type="text"
          name="firstName"
          placeholder="John"
          className="border-2 pl-4 py-1 rounded-md"
        />

        <label className="font-semibold" htmlFor="lastName">Last Name</label>
        <input
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          type="text"
          name="lastName"
          placeholder="Doe"
          className="border-2 pl-4 py-1 rounded-md"
        />

        <label className="font-semibold" htmlFor="email">Username</label>
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="email"
          name="email"
          placeholder="JohnDoe@gmail.com"
          className="border-2 pl-4 py-1 rounded-md"
        />

        <label className="font-semibold" htmlFor="password">Password</label>
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
          name="password"
          className="border-2 pl-4 py-1 rounded-md"
        />
      </div>

      <div className="pt-4">
        Already have an account?{" "}
        <Link href="/signin" className="font-semibold underline">
          Sign in
        </Link>
      </div>

      <button
        onClick={() => router.push("/Dashboard")}
        className="text-white bg-[#FD3D0D] font-semibold mt-4 px-9 py-2 rounded-md"
      >
        Sign up
      </button>

      <RetroGrid />
    </div>
  );
}
