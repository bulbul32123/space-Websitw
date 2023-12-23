import React from 'react'
import ProjectCards from '../sub/ProjectCards'

export default function Projects() {
  return (
    <div className='flex flex-col items-center justify-center py-20' id='projects'>
            <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
                My Projects
            </h1>
        <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 ">
            <ProjectCards src='/NextWebsite.png' title='Modern Nextjs Portfolio' 
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sint natus harum nostrum sed laboriosam. Provident voluptate rem dicta explicabo voluptatibus facere, tenetur a odit dolorem debitis, laborum eos adipisci.'
            /> 
            <ProjectCards src='/CardImage.png' title='Interactive Website Cards' 
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sint natus harum nostrum sed laboriosam. Provident voluptate rem dicta explicabo voluptatibus facere, tenetur a odit dolorem debitis, laborum eos adipisci.'
            /> 
            <ProjectCards src='/SpaceWebsite.png' title='Space Themed Website' 
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sint natus harum nostrum sed laboriosam. Provident voluptate rem dicta explicabo voluptatibus facere, tenetur a odit dolorem debitis, laborum eos adipisci.'
            /> 
        </div>
    </div>
  )
}
