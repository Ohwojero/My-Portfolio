"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { RiImportFill } from "react-icons/ri";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About Me",
      link: "#about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Service",
      link: "#service",
      icon: < MdOutlineLocalLaundryService className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Portfolio",
      link: "#portfolio",
      icon: <RiImportFill className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: (
        <IoIosContact className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    (<div className="relative w-full">
      <FloatingNav navItems={navItems} className="text-3xl font-medium"/>
     
    </div>)
  );
}

