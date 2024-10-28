import React from "react";
import { LampDemo } from "./LampDemo";

export function GridBackgroundDemo() {
  return (
    (<div
      className="h-screen  w-full  dark:bg-black-100 dark:bg-grid-white/[0.2] bg-grid-black/[0.5] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div
        className="absolute h-screen pointer-events-none w-full inset-0 flex items-center justify-center dark:bg-black-100  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <div className="pt-14 w-full">
          <LampDemo />
          </div>
    </div>)
  );
}
