
import Link from 'next/link'
import Image from 'next/image'
import { projects } from '../utils/projects'
import { motion } from 'framer-motion'

export default function FeaturedProjects(){
  return (
    <section className="py-16">
      <div className="container">
        <h3 className="text-2xl font-semibold">Featured Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {projects.slice(0,3).map(p=> (
            <motion.div key={p.id} whileHover={{ scale:1.02 }} className="rounded-xl overflow-hidden bg-gradient-to-br from-white/3 to-transparent glass">
              <Link href={`/case-studies/${p.slug}`}>
                <a className="block">
                  <div className="relative h-48 w-full">
                    <Image src={p.heroImage} alt={p.title} fill style={{objectFit:'cover'}}/>
                  </div>
                  <div className="p-4">
                    <div className="font-semibold">{p.title}</div>
                    <div className="text-sm text-slate-400 mt-1">{p.summary}</div>
                  </div>
                </a>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
