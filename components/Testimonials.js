
export default function Testimonials(){
  return (
    <section className="py-16 bg-slate-50 dark:bg-transparent">
      <div className="container">
        <h3 className="text-2xl font-semibold">Testimonials</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="p-6 glass rounded-xl">“HFT Prime transformed our product.” — Founder</div>
          <div className="p-6 glass rounded-xl">“Great code reviews and clear guidance.” — CTO</div>
          <div className="p-6 glass rounded-xl">“Design and execution top-notch.” — Product Lead</div>
        </div>
      </div>
    </section>
  )
}
