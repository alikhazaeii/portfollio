'use client'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import Magicbutton from './ui/Magicbutton'
import { FloatingNav } from './ui/floating-navbar'

export default function Hero() {
  return (  
    <div className='pb-20 pt-36' id='home'>
        

      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen ' fill='white' />
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='#fb923c' />
        <Spotlight className='top-28 left-80 h-[80vh] w[50vw] ' fill='#fb923c' />
      </div>
      <div className="h-screen w-full dark:bg-[#000319] bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#000319] bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className='relative flex justify-center my-20 z-10 -top-24 '>
          <div className='max-w-[90vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col justify-center items-center '>
            <h1 className='uppercase tracking-widest text-3xl  text-blue-100 max-w-80'>
              hi my name is ali
            </h1>
            <TextGenerateEffect className='text-center text-[40px] md:text-5xl lg:text-2xl capitalize text-black opacity-0"' words='iam frontend developer from IR , Tehran' filter={false}/>
            
            <p className='text-center md:tracking-wider sm:text-sm md:text-lg lg:text-2xl my-5'>hi , I&apos;m ali , a <strong className='text-2xl text-orange-400'>next.js developer</strong></p>

            <Magicbutton />
          </div>
        </div>
    </div>
    </div>
  )
}
