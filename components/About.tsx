import React from 'react'
import { motion as m } from 'framer-motion'

type Props = {}

export default function About({ }: Props) {
    return (
        <m.div
            initial={{
                opacity: 0
            }}

            whileInView={{
                opacity: 1
            }}

            transition={{
                duration: 1.2
            }}

            className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                About
            </h3>
            <m.img src="https://avatars.githubusercontent.com/u/105484461?v=4" alt="profile2"
                initial={{
                    x: -200,
                    opacity: 0

                }}

                whileInView={{
                    x: 0,
                    opacity: 1
                }}

                transition={{
                    duration: 1.2
                }}

                className='mb-10 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 h-95 lg:w-[250px] lg:h-[300px]'
            />

            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#F7A80A]/50'>little</span>  background</h4>
                <p text-base>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
                    iusto veniam cumque aliquid. Obcaecati nobis voluptatibus iure velit possimus
                    . Quis perspiciatis culpa corrupti id magni ratione quibusdam ipsam veritatis iste.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
            </div>
        </m.div>
    )
}