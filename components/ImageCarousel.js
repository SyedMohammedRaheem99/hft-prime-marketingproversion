
import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ImageCarousel({ images = [] }){
  const [i, setI] = useState(0)
  if(!images.length) return null
  return (
    <div>
      <div className="relative h-80 rounded-xl overflow-hidden">
        <motion.div key={i} initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }}>
          <Image src={images[i]} alt={`slide-${i}`} fill style={{objectFit:'cover'}}/>
        </motion.div>
      </div>
      <div className="flex gap-2 mt-3 justify-center">
        {images.map((img, idx)=> (
          <button key={idx} onClick={()=>setI(idx)} className={`w-14 h-10 rounded overflow-hidden ${idx===i? 'ring-2 ring-offset-2 ring-indigo-400':''}`}>
            <Image src={img} alt={`thumb-${idx}`} width={120} height={80} style={{objectFit:'cover'}}/>
          </button>
        ))}
      </div>
    </div>
  )
}
