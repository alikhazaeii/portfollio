import { Spotlight } from '@/components/ui/Spotlight'
import React from 'react'

export default function Home() {
  return (
    <main className='flex relative justify-center items-center'>
      <div className='w-full h-screen bg-black relative'>
        <Spotlight className='left-96 ' fill='white'/>
        <Spotlight className='left-52'fill='purple'/>
        <Spotlight/>
      </div>
    </main>
    
  )
}
