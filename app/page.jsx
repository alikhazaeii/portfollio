'use client'
import React from 'react'
import Hero from '@/components/Hero'

import { Spotlight } from '@/components/ui/Spotlight'
import { FloatingNav } from '@/components/ui/floating-navbar'



export default function Home() {
  return (
    <main className='flex relative justify-center items-center overflow-hidden mx-auto sm:px-10 px-5 bg-[#000319]'>
      <FloatingNav/>
      <div className='w-full max-w-7xl'>
      <Hero/>
      
      </div>
    </main>
    
  )
}
