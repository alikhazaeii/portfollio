
import React from 'react'
import Typewriter from 'typewriter-effect';


export default function Txtdesign() {
  return (
    <h2 className='text-xl md:text-2xl text-orange-400 font-bold backdrop-blur-xl md:backdrop-blur-none p-2'>
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


