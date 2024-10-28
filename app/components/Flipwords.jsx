import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWordsDemo() {
  const words = ["FINTECH", "SOCIAL MEDIA", "EDUCATION", "GOVERNMENT","PROPERTY","BLOCKCHAIN","LOGISTICS","HEALTHCARE"];

  return (
    (<div className=" flex justify-center items-center px-4">
      <div
        className="text-4xl mx-auto font-normal text-white mt-0">
         We Build Apps Across Different Industries:
        
        <div>
        <FlipWords words={words}/> 
        </div>
      </div>
      
    </div>)
  );
}
