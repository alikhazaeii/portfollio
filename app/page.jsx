'use client'
import React from 'react'
import Hero from '@/components/Hero'
import RecentProject from '@/components/RecentProjects'
import  Experiance  from "@/components/Experiance";
import { Footer } from "@/components/footer";
import Scroll from '@/components/ScrollX'
export default function Home() {
  return (
    <main className='scroll-smooth flex relative justify-center items-center overflow-hidden mx-auto sm:px-10 px-5 bg-[#000319]' >
      <div className='w-full max-w-7xl'>
        <Scroll/>
      <Hero />
      <RecentProject/>
      <Experiance/>
      <Footer/>
      </div>
    </main>
    
  )
}
