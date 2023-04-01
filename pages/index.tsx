import Head from 'next/head'
import Header from '../components/Header'
import Hero from '@/components/Hero'
import styles from '@/styles/Home.module.css'



export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Portfolio</title>
      </Head>

      <Header />

      {/* hero */}
      <section id='hero' className='snap-center'>
        <Hero />
      </section>
      {/* about */}

      {/* experirence */}

      {/* skills */}

      {/* projects */}

      {/* contactme */}

    </div>
  )
}
