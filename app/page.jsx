'use client'
import Hero from '@/components/Hero'
import { FloatingNav } from '@/components/ui/floating-navbar'
import { Spotlight } from '@/components/ui/Spotlight'
import React from 'react'

export default function Home() {
  return (
    <main className='flex relative justify-center items-center overflow-hidden mx-auto sm:px-10 px-5 bg-[#000319]'>
      <div className='w-full max-w-7xl'>
      <FloatingNav/>
      <Hero/>
      </div>
    </main>
    
  )
}
