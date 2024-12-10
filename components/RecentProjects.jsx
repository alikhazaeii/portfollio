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
        {MyProjects.map(({ id, tilte, des, img, link ,iconsLists }) => (
          <div key={id} className='lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[90vw]'>
            <PinContainer title={tilte} href={link}>
              <div className='relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10'>
                <figure className='relative w-full h-full overflow-hidden lg:rounded-3xl '>
                  <img className='absolute z-10 bottom-0' src={img} alt="" />
                  </figure>      
              </div>
              <h2 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-orange-400'>
                {tilte}
              </h2>
              <p className='lg:text-xl lg:font-normal font-light line-clamp-2 '>
                {des}
              </p>
              <div className='flex justify-center items-center mt-7 mb-3'>
                <div className='flex items-center'>
                  {iconsLists}
                </div>
              </div>
            </PinContainer>
          </div>
        ))}

      </div>
    </div>

  )
}
