
import React from 'react'
import Typewriter from 'typewriter-effect';


export default function Txtdesign() {
  return (
    <h2 className='text-xl md:text-2xl text-orange-400 font-bold '>
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


