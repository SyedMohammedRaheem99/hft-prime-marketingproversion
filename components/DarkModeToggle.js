
import { useEffect, useState } from 'react'

export default function DarkModeToggle(){
  const [mode, setMode] = useState('light')
  useEffect(()=>{
    const root = window.document.documentElement
    const preferred = localStorage.getItem('theme') || 'light'
    setMode(preferred)
    root.classList.toggle('dark', preferred==='dark')
  },[])

  const toggle = ()=>{
    const root = window.document.documentElement
    const next = mode==='light' ? 'dark' : 'light'
    root.classList.toggle('dark', next==='dark')
    localStorage.setItem('theme', next)
    setMode(next)
  }

  return (
    <button aria-label="Toggle dark mode" onClick={toggle} className="p-2 rounded-md hover:bg-slate-100/5">
      {mode==='light' ? '🌙' : '☀️'}
    </button>
  )
}
