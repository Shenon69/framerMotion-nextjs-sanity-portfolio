import React from 'react'
import Skill from './Skill'
import { motion as m } from 'framer-motion'

type Props = {}

export default function
    ({ }: Props) {
    return (
        <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen text-center flex relative flex-col md:text-left lg:flex-row max-w-[200px] lg:px-10 min-h-screen justify-center lg:space-y-0 mx-auto items-center'>
            <h2 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Skills
            </h2>

            <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over a skill for current profieciency</h3>

            <div className='grid grid-cols-4 gap-5'>
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
            </div>
        </m.div>
    )
}