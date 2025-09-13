
import { motion } from 'framer-motion'

const services = [
  { title: 'Web Development', desc: 'React/Next.js, scalable frontends.' },
  { title: 'App Development', desc: 'Mobile-first apps with great UX.' },
  { title: 'Code Review', desc: 'Audits, CI gating & performance.' },
  { title: 'DevOps / Maintenance', desc: 'CI/CD, monitoring & hosting.' }
]

export default function Services(){
  return (
    <section className="py-16">
      <div className="container">
        <h3 className="text-2xl font-semibold">Services</h3>
        <p className="text-slate-400 mt-2">Full-stack engineering services for growth-focused teams.</p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
          {services.map((s,i)=> (
            <motion.div key={s.title} whileHover={{ y:-6 }} className="p-6 rounded-2xl glass"> 
              <div className="font-semibold">{s.title}</div>
              <div className="text-sm text-slate-400 mt-2">{s.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
