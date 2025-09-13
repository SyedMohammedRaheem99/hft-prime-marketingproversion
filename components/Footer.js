
import Image from 'next/image'

export default function Footer(){
  return (
    <footer className="py-10 border-t border-slate-200/5">
      <div className="container flex flex-col md:flex-row items-start justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 relative">
            <Image 
  src="/assets/logo for hftprime marketing.svg" 
  alt="logo" 
  fill 
  style={{ objectFit: 'contain' }} 
/>

          </div>
          <div>
            <div className="font-semibold">HFT Prime Marketing</div>
            <div className="text-sm text-slate-400">We build product-grade apps and clean code that scales.</div>
          </div>
        </div>

        <div className="flex gap-8">
          <div>
            <div className="font-semibold">Company</div>
            <ul className="mt-2 text-sm text-slate-400">
              <li>About</li>
              <li>Work</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Follow</div>
            <ul className="mt-2 text-sm text-slate-400">
              <li>Twitter</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
