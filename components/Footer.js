import Image from 'next/image'
import { useTheme } from 'next-themes'

export default function Footer() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <footer className="py-10 border-t border-slate-200/5">
      <div className="container flex flex-col md:flex-row items-start justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-40 h-12 relative">
            <Image
              src={isDark ? "/assets/logo-white.svg" : "/assets/logo.svg"}
              alt="logo"
              fill
              className="object-contain"
            />
          </div>
          <div>
            <div className="font-semibold">HFT Prime Marketing</div>
            <div className="text-sm text-slate-400">
              We build product-grade apps and clean code that scales.
            </div>
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

