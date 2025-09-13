import { useRouter } from 'next/router'
import { projects } from '../../utils/projects'
import ImageCarousel from '../../components/ImageCarousel'
import { motion } from 'framer-motion'

export default function CaseStudy() {
  const router = useRouter()
  const { slug } = router.query
  const project = projects.find(p => p.slug === slug)

  if (!project) return null

  return (
    <div className="py-20">
      <div className="container">
        <motion.h1 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="text-3xl font-bold"
        >
          {project.title}
        </motion.h1>
        <p className="text-slate-400 mt-2">{project.summary}</p>

        <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold">Problem</h3>
            <p className="text-slate-400 mt-2">{project.problem}</p>

            <h3 className="font-semibold mt-4">Solution</h3>
            <p className="text-slate-400 mt-2">{project.solution}</p>

            <h3 className="font-semibold mt-4">Features</h3>
            <ul className="list-disc pl-6 text-slate-400 mt-2">
              {project.features.map((f, idx) => (
                <li key={idx}>{f}</li>
              ))}
            </ul>

            <h3 className="font-semibold mt-4">Results</h3>
            <p className="text-slate-400 mt-2">{project.results}</p>
          </div>

          <ImageCarousel images={project.images} />
        </section>
      </div>
    </div>
  )
}
