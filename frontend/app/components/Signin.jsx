"use client"
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Signin() {
  const router = useRouter()
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
      <div className="z-10 whitespace-pre-wrap text-center dark:text-white">
      <div className="main w-[32vw] h-[42vw] rounded-[3rem] flex box-border font-dns bg-[#0B1437] ">
        <div className="input mx-auto h-screen content-center">
            <div className='text-white m-auto w-[410px] h-[452px]'>
                <h1 className="font-bold leading-[56px] text-[#FFFFFF] -mt-[185px] text-[36px]">Sign In</h1>
                <p className='leading-4 text-[#A3AED0] mt-5'>Enter your email and password to sign in!</p>
            
            <div className="form mt-[72px]">
              <div className='flex flex-col justify-between h-[316px]'>
                <div className='flex flex-col gap-3'>
                <label className='text-sm font-medium'>Email*</label>
                <input 
                value={email}
                 onChange={(e)=>{setemail(e.target.value)}}
                 className='bg-transparent border-slate-500 border-[1.5px] rounded-lg py-[5px] pl-[24px] text-sm text-[#A3AED0]' type="text" placeholder='mail@gmail.com'/>
                <label className='text-sm font-medium'>Password*</label>
                <input 
                value={password}
                onChange={(e)=>{setpassword(e.target.value)}}
                className='bg-transparent border-slate-500 border-[1.5px] rounded-lg py-[5px] pl-[24px] text-sm text-[#A3AED0]' type='password' placeholder='Min. 8 characters'/>
                </div>
              
              <div className="flex justify-between text-sm">
                <div className='flex gap-x-2 justify-between'>
                <input type="checkbox" />
                <p>Keep me logged in</p>
                </div>
                <Link href={"/"}>Forgot password?</Link>
              </div>
              
              <button onClick={()=>{router.push("/Dashboard")}} className='bg-[#7551FF] rounded-[1rem] text-md font-bold py-2'>Sign In</button>
              </div>
              <div className="mt-4">New user?<Link className="underline" href={"/signup"}>Sign up</Link></div>
            </div>
            </div>
        </div>
    </div> 

      </div>
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
    </div>
  );
}
