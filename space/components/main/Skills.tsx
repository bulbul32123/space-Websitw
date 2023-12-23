import React from 'react'
import { Backend_skill, Frontend_skill, Full_stack, Other_skill, Skill_data } from '@/constants'
import SkillDataProvider from '../sub/SkillDataProvider'
import SkillText from '../sub/SkillText'

export default function Skills() {
  return (
    <section className='flex flex-col justify-center items-center gap-3 h-full relative overflow-hidden pb-80 py-20' id='skills' style={{ transform: 'scale(0.9)' }}>
      <SkillText />
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {
          Skill_data?.map((image, index) => {
            return <SkillDataProvider src={image?.Image} index={index} key={index} width={image?.width} height={image?.height} />
          })
        }
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {
          Frontend_skill?.map((image, index) => {
            return <SkillDataProvider src={image?.Image} index={index} key={index} width={image?.width} height={image?.height} />
          })
        }
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {
          Backend_skill?.map((image, index) => {
            return <SkillDataProvider src={image?.Image} index={index} key={index} width={image?.width} height={image?.height} />
          })
        }
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {
          Full_stack?.map((image, index) => {
            return <SkillDataProvider src={image?.Image} index={index} key={index} width={image?.width} height={image?.height} />
          })
        }
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {
          Other_skill?.map((image, index) => {
            return <SkillDataProvider src={image?.Image} index={index} key={index} width={image?.width} height={image?.height} />
          })
        }
      </div>
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video src="/cards-video.webm" className='w-full h-auto' preload='false'
            playsInline
            loop
            muted
            autoPlay
          />
        </div>
      </div>
    </section>
  )
}
