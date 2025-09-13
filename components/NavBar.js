
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import DarkModeToggle from './DarkModeToggle'
import { motion } from 'framer-motion'

export default function NavBar(){
  const [sticky, setSticky] = useState(false)
  useEffect(()=>{
    const onScroll = ()=> setSticky(window.scrollY>20)
    window.addEventListener('scroll', onScroll)
    return ()=> window.removeEventListener('scroll', onScroll)
  },[])

  return (
    <motion.header initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
      className={`fixed w-full z-40 transition-shadow ${sticky? 'shadow-md backdrop-blur-md glass' : 'bg-transparent'}`}>
      <div className="container flex items-center justify-between h-16">
        <Link href="/"><a className="flex items-center gap-3">
          <div className="relative w-10 h-10">
            <Image src="/assets/logo for hftprime marketing.svg" alt="HFT Prime Logo" fill sizes="40px" style={{objectFit:'contain'}}/>
          </div>
          <div className="hidden md:block">
            <div className="font-semibold">HFT Prime Marketing</div>
            <div className="text-xs text-slate-400">Technical Marketing & Dev</div>
          </div>
        </a></Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/portfolio"><a className="hover:underline">Work</a></Link>
          <Link href="/about"><a className="hover:underline">About</a></Link>
          <Link href="/contact"><a className="hover:underline">Contact</a></Link>
          <a href="#" className="btn-primary hidden md:inline-block">Book a Free Call</a>
          <DarkModeToggle />
        </nav>

        <div className="md:hidden flex items-center gap-3">
          <DarkModeToggle />
        </div>
      </div>
    </motion.header>
  )
}
