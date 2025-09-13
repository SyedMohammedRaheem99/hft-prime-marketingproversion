import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="animated-gradient absolute inset-0 opacity-20" aria-hidden></div>
      <div className="container py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          {/* Left side - Text */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              We build product-grade apps and clean code that scales.
            </h1>
            <p className="mt-4 text-slate-400 max-w-xl">
              HFT Prime Marketing — technical marketing agency specialising in product engineering, design and audits for fast-growing teams.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="/contact" className="px-5 py-3 rounded-md glass font-medium">Book a Free Call</a>
              <a href="/portfolio" className="px-5 py-3 rounded-md bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-medium">View Our Work</a>
            </div>
            <div className="mt-6 text-sm text-slate-500">
              Trusted by startups and SMBs — design, build, and scale.
            </div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full max-w-md relative">
              <Image
                src="/assets/laptopmockups.png"
                alt="hero mockup"
                width={720}
                height={480}
                className="object-contain drop-shadow-xl"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
