"use client"
import FlickeringGrid from "@/components/magicui/flickering-grid";

export default function FlickeringGridDemo() {
  return (
    <div className="relative h-screen rounded-lg w-screen bg-background overflow-hidden">
      <FlickeringGrid
        className="z-0 absolute inset-0 size-full content-center "
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1}
        height={800}
        width={1440}
      />
      <div className="h-3/4 w-2/5 bg-slate-50 border-2 mx-auto border-black">

      </div>
    </div>
  );
}
