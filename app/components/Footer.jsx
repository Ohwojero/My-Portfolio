import React from 'react'
import { CiTwitter } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { CiFacebook } from "react-icons/ci";
const Footer = () => {
    return (
        <footer className='w-full mt-28'>
            <div className='flex flex-col items-center text-start'>
                <h1 className='text-start md:text-2xl text-base py-1'>Ready to take <span className='text-blue-500'>Your</span> digital presence to the next leve?</h1>
                <p className='text-slate-500 text-start lg:text-base'>Reach out to me today and let's discuss how i can help you achiev your golas.</p>


            </div>
            <div className='flex  items-center justify-center mx-auto py-2 gap-5'>
                <a href=""> <CiTwitter className='text-3xl' /> </a>
                <a href=""> <MdOutlineEmail className='text-3xl' /></a>
                <a href=""><CiFacebook className='text-3xl' /></a>
            </div>
            <div>
                <p className='text-center py-1 pb-0 text-slate-500'>copyright© 2024.</p>
            </div>
        </footer>
    )
}

export default Footer