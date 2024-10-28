"use client";
import { TypewriterEffectSmooth } from "./ui/typing-word";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Welcome",
    },
    {
      text: " I'm ",
    },
    {
      text: " Godstime",
    },
    // {
    //   text: "with",
    // },
    {
      text: " Ohwojero.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center gap-10 justify-center h-[5rem]">
    
      <TypewriterEffectSmooth words={words} />
      
    </div>
  );
}
