import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';

type Props = {}

export default function ({ }: Props) {

    const [text, count] = useTypewriter({
        words: [
            " CloudEnthusiast ",
            " FrontendDev ",
            " EyeLavkodin ",
        ],
        loop: true,
        delaySpeed: 2000,
    });

    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center overflow-hidden'>
            <BackgroundCircles />
            <img
                className='relative rounded-full h-32 w-32 shadow-lg shadow-yellow-500/50 glow'
                src="https://scontent.fcmb1-2.fna.fbcdn.net/v/t1.6435-9/126618938_173013611135663_878960234911614943_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=oS0xbd7cYqgAX_rJPoc&_nc_ht=scontent.fcmb1-2.fna&oh=00_AfBqSzcgYusIsQ1X60pT6uLuXNm92giFU5DOK54j1RE3Tg&oe=644F0F21"
                alt="profile" />

            <h2 className='uppercase text-md text-gray-500 pb-2 tracking-[15px] animate-pulse text-center'>Software Engineer</h2>
            <h1 className='text-5xl lg:6xl font-semibold px-10'>
                <div>
                    <span className='mr-3'>&lt;{text}<Cursor cursorColor='#F7A80A' />/&gt;</span>
                </div>
            </h1>

            <div className='pt-5 z-20'>
                <Link href="#about">
                    <button className='heroButton'>About</button>
                </Link>
                <Link href="#experience">
                    <button className='heroButton'>Experience</button>
                </Link>
                <Link href="#skills">
                    <button className='heroButton'>Skills</button>
                </Link>
                <Link href="#projects">
                    <button className='heroButton'>Projects</button>
                </Link>




            </div>


        </div>
    )
}