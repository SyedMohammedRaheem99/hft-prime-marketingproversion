
export default function About(){
  return (
    <section className="py-24">
      <div className="container">
        <h2 className="text-3xl font-bold">About / Process</h2>
        <p className="text-slate-400 mt-2">We are a small team of engineers and designers focused on building high-quality product experiences.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="p-6 glass rounded-xl">
            <h4 className="font-semibold">Discovery</h4>
            <p className="text-slate-400 mt-2">Workshops, discovery and KPIs.</p>
          </div>
          <div className="p-6 glass rounded-xl">
            <h4 className="font-semibold">Design & Build</h4>
            <p className="text-slate-400 mt-2">Design systems, components and engineering.</p>
          </div>
          <div className="p-6 glass rounded-xl">
            <h4 className="font-semibold">Measure & Iterate</h4>
            <p className="text-slate-400 mt-2">Analytics, A/B and monitoring.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
