import { projects } from '../utils/projects'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Portfolio() {
  return (
    <section className="py-24">
      <div className="container">
        <h2 className="text-3xl font-bold">Portfolio</h2>
        <p className="text-slate-400 mt-2">
          Selected projects across apps, web and audits.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {projects.map((p) => (
            <motion.div
              whileHover={{ y: -6 }}
              key={p.id}
              className="rounded-xl overflow-hidden glass"
            >
              <Link
                href={`/case-studies/${p.slug}`}
                className="block" // ✅ Link can directly have className
              >
                <div className="relative h-56 w-full">
                  <Image
                    src={p.heroImage}
                    alt={p.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-4">
                  <div className="font-semibold">{p.title}</div>
                  <div className="text-sm text-slate-400">{p.summary}</div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
