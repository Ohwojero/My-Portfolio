"use client"


import React from 'react'
import about1 from "@/app/components/Asset/about1.jpeg"
import Image from 'next/image'
import "@/app/styles/about.css"
import { motion } from "framer-motion"
const About = () => {
    return ( 

        <section id='about'>
        <div className=" max-w-7xl mx-auto lg:mt-20 sm:mt-12 sm:py-10 gap-0 flex flex-col items-center justify-center">

            <h1 className='lg:text-center py-10 text-3xl semi-bold'>About Me </h1>

            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-7xl mx-auto items-center justify-center gap-0'>
                <motion.div className='md:shrink-0' initial={{opacity:0, y:100}} whileInView={{opacity:1, y:0}} transition={{duration:1}}>
                    <Image src={about1} className='object-cover rounded-lg opacity-50  w-full md:w-60 lg:w-96 sm:w-96 sm:h-96' />
                </motion.div>
                <motion.div className='w-[450px] flex flex-col items-center justify-center gap-5 py-4' initial={{opacity:0, x:100}} whileInView={{opacity:1, x:0}} transition={{duration:1}}>
                    <p>I am an experienced Frontend Developer with over 3 years of professional expertise in the field. Throughout my Career, I have had the privilege of collaborating with prestigious organization, contributing to their success and growth. </p>
                    <p>My Passion for frontend development is not only in my extensive experience but also in the enthusiasm and dedication i bring to each project</p>

                    <div className='flex flex-col gap-3 w-[480px] mt-5'>
                        <div className='skill flex items-center gap-3 translate-x-3'><p className='min-w-44'>HTML & CSS</p><hr style={{ width: "50%"}} className=''/></div>
                        <div className='skill flex items-center gap-3 translate-x-3'><p className='min-w-44'>BOOTSTRAP & TAILWIND</p><hr style={{ width: "55%" }} /></div>
                        <div className='skill flex items-center gap-3 translate-x-3'><p className='min-w-44'>REACT & NEXT JS</p><hr style={{ width: "55%" }} /></div>
                        <div className='skill flex items-center gap-3 translate-x-3'><p className='min-w-44'>MY SQL</p><hr style={{ width: "50%" }} /></div>
                    </div>
                </motion.div>
            </div>

            <div className='flex flex-wrap items-center justify-center p-4 mt-10 gap-12 text-center '>
                <div className='text'>
                    <h1>3+</h1>
                    <p>Years of Experience</p>
                </div>
                <hr />
                <div className='text'>
                    <h1>20+</h1>
                    <p>Projects completed</p>
                </div>
                <hr />
                <div className='text'>
                    <h1>50+</h1>
                    <p className='md:text-lg lg:text-xl'>Clients we have work with.</p>
                </div>
            </div>
        </div>

        </section>
    )
}

export default About