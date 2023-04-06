import React from 'react'
import { motion as m } from 'framer-motion'

type Props = {
    directionleft?: boolean;
}

export default function Skill({ directionleft }: Props) {
    return (
        <div className='group relative flex cursor-pointer'>
            <m.img
                initial={{
                    x: directionleft ? -200 : 200,
                    opacity: 0
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}

                src='https://firebase.google.com/static/images/brand-guidelines/logo-vertical.png'
                className='rounded-full border border-gray-500 object-cover w-24 h-24 lg:w-32 lg:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
            />
        </div>
    )
}