'use client'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import  Texdesign  from "./ui/txtdesign";
import { openSans ,   roboto } from "@/app/fonts/font";
export default function Hero() {
  return (
    <div className='pb-20 pt-36 '>


      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen ' fill='white' />
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='#fb923c' />
        <Spotlight className='top-28 left-80 h-[80vh] w[50vw] ' fill='#fb923c' />
      </div>
      <div className="h-screen w-full dark:bg-[#000319] bg-[#dee4e7]   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-wrap md:flex-nowrap items-center justify-center md:justify-start ">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#000319] bg-[#dee4e7] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <figure className='w-[30vw] h-[80vh] md:order-1 absolute -top-[200px] md:right-0 md:top-0'>
          <img className='w-full h-full object-contain' src="/profile.png" alt="" />
        </figure>
        <div className='relative flex justify-center my-20 z-10 -top-24   '>
          <div className='max-w-[90vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col justify-center items-center '>
            <h1 className={`${roboto.className} uppercase tracking-widest text-3xl text-orange-400 max-w-80 backdrop-blur-xl md:backdrop-blur-none p-2`}>
              About Me
            </h1>
            <Texdesign/>
            
            <p className={`${openSans.className}text-start md:tracking-wider sm:text-sm md:text-lg lg:text-2xl my-5 capitalize`}> from <strong className='text-3xl text-orange-400'>Iran, Tehran</strong>   27 years old, I have a deep passion for web development and creating visually appealing, user-friendly interfaces.

              My expertise lies in delivering unique digital experiences using modern tools and technologies. I constantly strive to combine creativity and technical knowledge to produce high-quality projects.

              Feel free to explore my skills and portfolio to learn more about my work. I’m always open to new challenges and collaborations!</p>

          </div>
        </div>
      </div>
    </div>
  )
}
