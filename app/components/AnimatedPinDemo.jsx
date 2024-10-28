"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { Lists } from "./data";
import Image from "next/image";
export function AnimatedPinDemo() {
    return (
        <section id="service">
            <h1  className="text-center text-cyan-500 mt-10 xl:text-3xl sm:text-base">My Recent Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 mt-10 gap-20 w-full">
            {
                Lists.map(({ id, title, desc, img, link }) => {
                    return <div key={id} className="h-[4rem] min-h-[20rem] flex items-center justify-center w-full">
                        <PinContainer title={title} href={link} className=" h-[20rem] w-[250px] xl:w-[200px] ">


                            <div className="">
                                
                                <div className="flex flex-1 w-full rounded-lg mt-4">
                                    <Image src={img}  className="h-44 object-cover w-full" />
                                </div>
                                <div className="text-base !m-0 !p-0 font-normal">
                                    <span className="text-slate-600 lg:text-xl lg:font-normal font-light text-sm line-clamp-2 ">
                                        {desc}
                                    </span>
                                </div>
                            </div>
                        </PinContainer>
                    </div>
                })
            }

        </div>
        </section>
    );
}
