import React from 'react'
import { motion as m } from 'framer-motion'

type Props = {}

export default function ExperienceCard({ }: Props) {
    return (
        <article className='flex flex-col items-center rounded-lg space-y-7 flex-shrink-0 w-[500px] md:w-[600px] snap-center bg-[#292929] opacity-40 hover:opacity-100 transition-opacity duration-300 overflow-hidden'>
            <m.img
                initial={{
                    y: -100,
                    opacity: 0
                }}

                whileInView={{
                    opacity: 1,
                    y: 0
                }}

                viewport={{ once: true }}

                transition={{
                    duration: 1.2
                }}
                src="https://images.unsplash.com/photo-1633190448983-cfe394645857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8Nzg0NDEyNTh8fGVufDB8fHx8&auto=format&fit=crop&w=420&q=60"
                alt="theexperience"
                className='w-32 h-32 rounded-full object-cover object-center lg:w-[200px] lg:h-[200px] ' />

            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>CEO of eLZif</h4>
                <p className='font-bold text-2xl mt-1 uppercase'>eLZifFam</p>
                <div className='space-x-2 my-2 flex'>
                    <img src="https://wallpapercave.com/wp/wp7046407.jpg"
                        alt="skillsyouhave"
                        className='h-10 w-10 rounded-full' />

                    <img src="https://wallpapercave.com/wp/wp7046407.jpg"
                        alt="skillsyouhave"
                        className='h-10 w-10 rounded-full' />

                    <img src="https://wallpapercave.com/wp/wp7046407.jpg"
                        alt="skillsyouhave"
                        className='h-10 w-10 rounded-full' />
                </div>

                <p>Started Work...-Ended...</p>
                <ul className='list-disc space-y-4 mt-5 text-lg'>
                    <li>Work summary</li>
                    <li>Work summary</li>
                    <li>Work summary</li>
                    <li>Work summary</li>
                </ul>
            </div>
        </article>
    )
}