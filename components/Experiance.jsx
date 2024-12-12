import React from 'react'
import { Button } from "@/components/ui/moving-border";
import { MyEx } from "@/data/MyExperience";
export default function Experiance() {
  return (
    <div className='py-10'id='experiance'>
      <h2 className='w-full text-center text-5xl capitalize md:text-4xl'>
        My  <span className='text-orange-400 text-6xl'>Technical Skills</span>
      </h2>
      <div className='flex w-full mt-12 flex-wrap gap-10 justify-center  '>
        {MyEx.map(({title,id,dec1,dec2,icons})=>(
          <Button key={id} duration={Math.floor(Math.random()*5000 + 5000)} className='lg:w-[40vw] flex  text-start'>
          <div className='flex flex-wrap lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10'>
            <h2 className='text-orange-400 text-lg md:text-2xl m-5 font-bold'>{title}</h2>
            <h3 className='text-yellow-100 text-sm md:text-xl py-2'>{dec1}</h3>
            <h3 className='text-yellow-100 text-sm md:text-xl py-2'>{dec2}</h3>
              <div className='flex *:mx-2 *:text-3xl  my-5'>
                {icons}
              </div>
          </div>
        </Button>
        )
            
        )}
       
      </div>
    </div>
  )
}
