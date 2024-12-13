
import { inconsolata } from '@/app/fonts/font';
import React from 'react'
import Typewriter from 'typewriter-effect';


export default function Txtdesign() {
  return (
    <h2 className={`${inconsolata.className} text-xl md:text-3xl text-orange-400 font-bold backdrop-blur-sm md:backdrop-blur-none p-2`}>
      <Typewriter
        options={{
          strings: ["Hi , Iam Ali a Frontend Developer"],
          autoStart: true,
          loop: true,
        }}
      />
    </h2>

  )
}


