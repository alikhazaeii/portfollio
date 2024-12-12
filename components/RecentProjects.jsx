import React from 'react'
import { MyProjects } from '@/data/Myprojects'
import { title } from 'process'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'
export default function Projects() {
  return (
    <div id='projects'>
      <h2 className='w-full text-center text-5xl capitalize md:text-4xl'>
        A small selection of <br />
        <span className='text-orange-400 text-6xl'>recent projects</span>
      </h2>
      <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8  mt-10'>
        {MyProjects.map(({ id, tilte, des, img, link, iconsLists }) => (
          <div key={id} className='sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[90vw]'>
            <PinContainer title={tilte} href={link}>
              <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden h-[20vh] lg:h-[40vh] mb-10'>
                <figure className='relative w-full h-full overflow-hidden flex justify-center items-center lg:rounded-3xl bg-gray-900'>
                  <img className='absolute z-10  lg:w-[90%] lg:h-[90%] lg:top-10 lg:rotate-3' src={img} alt="" />
                </figure>
              </div>
              <h2 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-orange-400 capitalize'>
                {tilte}
              </h2>
              <p className='lg:text-xl lg:font-normal font-light line-clamp-2 '>
                {des}
              </p>
              <div className='flex justify-between items-center mt-7 mb-3 '>
                <div className='flex items-center text-xl md:text-2xl   *:border *:rounded-full *:bg-black *:lg:w-9 *:lg:h-9 *:lg:p-1 '>
                  {iconsLists}
                </div>
                <div className='flex justify-center items-center uppercase '>
                  <p className='flex text-sm lg:text-lg md:text-xs text-orange-400'>check Project</p>
                  <FaLocationArrow color='orange' className='ms-3' />
                </div>
              </div>

            </PinContainer>
          </div>
        ))}

      </div>
    </div>

  )
}
