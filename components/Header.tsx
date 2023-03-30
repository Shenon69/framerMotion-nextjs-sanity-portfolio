import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

type Props = {}

export default function ({ }: Props) {
    return (
        <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
            <motion.div className='flex flex-row items-center'
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}

                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}

                transition={{
                    duration: 1.5
                }}
            >


                {/* social Icons */}
                <SocialIcon
                    url='https://www.youtube.com/channel/UCEyvg8kRo8Umi4B8CLH9JeA'
                    fgColor='gray'
                    bgColor='transparent' />

                <SocialIcon
                    url='https://www.youtube.com/channel/UCEyvg8kRo8Umi4B8CLH9JeA'
                    fgColor='gray'
                    bgColor='transparent' />

                <SocialIcon
                    url='https://www.youtube.com/channel/UCEyvg8kRo8Umi4B8CLH9JeA'
                    fgColor='gray'
                    bgColor='transparent' />
            </motion.div>
            <div className='flex flex-row items-center text-gray-300 cursor-pointer'>
                <SocialIcon className='cursor-pointer' network='email' fgColor='gray' bgColor='transparent' />
                <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>get in touch</p>
            </div>
        </header>
    )
}