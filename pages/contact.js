
import { useState } from 'react'

export default function Contact(){
  const [form, setForm] = useState({name:'',email:'',message:''})
  const [status, setStatus] = useState('')

  const handle = e => setForm(prev=>({...prev,[e.target.name]: e.target.value}))

  const submit = async (e) =>{
    e.preventDefault(); setStatus('sending')
    try{
      const res = await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(form)})
      if(res.ok) setStatus('sent')
      else setStatus('error')
    }catch(err){
      setStatus('error')
    }
  }

  return (
    <section className="py-24">
      <div className="container">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="text-slate-400 mt-2">Get in touch — we usually respond within 48 hours.</p>

        <form onSubmit={submit} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
          <input name="name" value={form.name} onChange={handle} placeholder="Your name" className="p-3 rounded-md" />
          <input name="email" value={form.email} onChange={handle} placeholder="Email" className="p-3 rounded-md" />
          <textarea name="message" value={form.message} onChange={handle} placeholder="Message" className="p-3 rounded-md md:col-span-2 h-40" />
          <button type="submit" className="p-3 rounded-md bg-slate-900 text-white">Send message</button>
        </form>

        <div className="mt-4 text-sm">{status==='sending' ? 'Sending...' : status==='sent' ? 'Thanks — we will reply soon.' : status==='error' ? 'There was an error.' : ''}</div>
      </div>
    </section>
  )
}
