import React from 'react'
import { motion as m } from 'framer-motion'

type Props = {
    directionleft?: boolean;
}

export default function Skill({ directionleft }: Props) {
    return (
        <div className='group relative flex cursor-pointer'>
            <m.img
                initial={{ x: directionleft ? -200 : 200 }}
            />

        </div>
    )
}