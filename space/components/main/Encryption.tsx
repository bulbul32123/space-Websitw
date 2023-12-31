'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromTop } from '@/utils/motion'
import Image from 'next/image'


export default function Encryption() {
  return (
    <div className='flex flex-row relative items-center justify-center w-full h-full min-h-screen'>
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div className="text-[40px] font-medium text-center text-gray-200" variants={slideInFromTop}>
                        Performance
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> & </span>
                        Security
        </motion.div>
        </div>
        <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
            <div className="flex flex-col items-center w-auto h-auto cursor-pointer group">
                <Image src='/LockTop.png'
                alt='LockTop' width={50} height={50} className='translate-y-5 transition-all duration-200 group-hover:translate-y-11 ' />
                <Image src='/LockMain.png'
                alt='LockMain' width={70} height={70} className='z-[10]' />

        </div>
      </div>
      <div className="w-full flex items-start justify-center absolute">
        <video src='/encryption.webm' loop muted autoPlay playsInline preload='false ' className='w-full h-auto'/>
      </div>
    </div>
  )
}
