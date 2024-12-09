import React from 'react'
import { MyProjects } from '@/data/Myprojects'
import { title } from 'process'
import { PinContainer } from './ui/3d-pin'
export default function Projects() {
  return (
    <div className=''>
      <h2 className='w-full text-center text-5xl capitalize md:text-4xl'>
        A small selection of <br />
        <span className='text-orange-400 text-6xl'>recent projects</span>
      </h2>
      <div className='flex flex-wrap items-center justify-center p-4 gap-16  mt-10'>
        {MyProjects.map(({ id, tilte, des, img, link }) => (
          <div key={id} className='lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]'>
            <PinContainer>
              {tilte}
            </PinContainer>
          </div>
        ))}

      </div>
    </div>

  )
}
