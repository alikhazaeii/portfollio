'use client'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/texteffect'

export default function Hero() {
  return (  
    <div className='pb-20 pt-36'>
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen ' fill='white' />
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
        <Spotlight className='top-28 left-80 h-[80vh] w[50vw] ' fill='blue' />
      </div>
      <div className="h-screen w-full dark:bg-[#000319] bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#000319] bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className='relative flex justify-center my-20 z-10 -top-24 '>
          <div className='max-w-[90vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col justify-center items-center '>
            <h1 className='uppercase tracking-widest text-3xl  text-blue-100 max-w-80'>
              hi my name is ali
            </h1>
            <TextGenerateEffect className='text-center text-[40px] md:text-5xl lg:text-6xl capitalize' words='iam frontend developer from IR , Tehran'/>
          </div>
        </div>
    </div>
    </div>
  )
}
