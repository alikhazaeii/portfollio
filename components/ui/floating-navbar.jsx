"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/components/lib/utils";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    (<AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit  fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-[#000319] bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4",
          className
        )}>
        {navItems && navItems.map((navItem, idx) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-orange-400 items-center flex space-x-1 text-neutral-600 dark:hover:text-orange-500 hover:text-orange-400"
            )}>
            <span className="block sm:hidden ">{navItem.icon}</span>
            <span className="hidden sm:block text-lg">{navItem.name}</span>
          </Link>
        ))}
        <div className="w-[80px] h-[40px] relative rounded-full overflow-hidden *:absolute">
        <img className=" object-cover w-full h-full dark:opacity-0 dark:-z-10" src="/navlogo2.png" alt="" />
        <img className=" object-cover w-full h-full dark:opacity-100 opacity-0" src="/nvlogo.jpg" alt="" />
        </div>
       
      </motion.div>
    </AnimatePresence>)
  );
};
