"use client"

import React from 'react'
import "@/app/styles/contact.css"
import { IoIosCall } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";



export const Contact = () => {


  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "b3dc2657-f2c4-42b7-ad2b-d36c17f59d6a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.mes);
    }
  };


  return (
    <div className='max-w-7xl mx-auto lg:mt-28 contact items-center justify-center' id='contact'>
          <div className='contact-title lg:mt-3 mt-20'>
            <h1 className='text-center text-blue-500 text-2xl font-bold'>Get in touch</h1>
          </div>


      <div className='grid grid-cols-1 lg:grid-cols-2 items-center justify-center contact-section'>
        <div className='contact-left flex flex-col gap-8 '>
              <h1 className=''>Let's talk</h1>
              <p className='w-96'>I'm currently avaliable to talk on new projects, so feel free to chat.</p>

          <div className='contact-details flex flex-col gap-3'>
            <div className='contact-detail'>
              <IoIosCall className='' />
              <p>09020266783</p>
            </div>

            <div className='contact-detail'>
              <CiMail />
              <p>ohwojerogodstime@gmail.com</p>
            </div>

            <div className='contact-detail'>
              <CiLocationOn />
              <p>Ughelli Delta state, Nigeria.</p>
            </div>
          </div>
        </div>



            <form onSubmit={onSubmit} className='contact-right '>
              <label htmlFor="">Your Name</label>
              <input type="text" placeholder='Enter your name' name='name' />

              <label htmlFor="">Your Email</label>
              <input type="email" placeholder='Enter your email' name='email' />

              <label htmlFor="">Write your message here</label>
              <textarea name="message" cols="12" placeholder='Enter your Message'></textarea>

              <button type='submit' className='submit lg:w-full '>Submit now</button>
            </form>


      </div>
    </div>
  )
}
export default Contact