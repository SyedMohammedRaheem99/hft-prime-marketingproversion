
import Hero from '../components/Hero'
import Services from '../components/Services'
import FeaturedProjects from '../components/FeaturedProjects'
import Testimonials from '../components/Testimonials'

export default function Home(){
  return (
    <div>
      <Hero />
      <Services />
      <FeaturedProjects />
      <Testimonials />
      <section className="py-16">
        <div className="container text-center">
          <h3 className="text-2xl font-semibold">Ready to build?</h3>
          <p className="text-slate-400 mt-2">Book a free call to talk about your project.</p>
          <div className="mt-6">
            <a href="/contact" className="px-6 py-3 rounded-md bg-slate-900 text-white">Book a Free Call</a>
          </div>
        </div>
      </section>
    </div>
  )
}
