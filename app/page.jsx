'use client'
import React from 'react'
import Hero from '@/components/Hero'
import RecentProject from '@/components/RecentProjects'
import  Experiance  from "@/components/Experiance";
import { Footer } from "@/components/footer";
import Scroll from '@/components/ScrollX'
import { WorldMapDemo } from "@/components/WorldmapDemo";
import { FloatingNavDemo } from "@/components/Floatingnavdemo";
import { ModeToggle } from "@/components/darkmode";
export default function Home() {
  return (
    <main className='scroll-smooth flex relative justify-center items-center overflow-hidden mx-auto sm:px-10 px-5 dark:bg-[#000319] bg-[#dee4e7] font' >
      <div className='w-full max-w-7xl'>
        <div className='fixed right-5 top-5 z-50'>
        <ModeToggle />
        </div>
        <Scroll/>
        <FloatingNavDemo/>
      <Hero />
      <WorldMapDemo/>
      <RecentProject/>
      <Experiance/>
      <Footer/>
      </div>
    </main>
    
  )
}
