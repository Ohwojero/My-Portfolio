"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { FlipWordsDemo } from "./Flipwords";
import MagicButton from "./ui/MagicButton";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
export function LampDemo() {
  return (
    <section id="home">
    <LampContainer>
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 w-full max-w-7xl bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
        <FlipWordsDemo  />
        
      </motion.div>

      <div className="md:mt-9 sm:mt-7 ">
                <Link href="#about"><MagicButton title="View my work" icon={<MdArrowOutward />} /></Link>
      </div>
      
    </LampContainer>
    </section>
  );
};
