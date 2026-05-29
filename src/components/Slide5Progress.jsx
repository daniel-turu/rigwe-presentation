import { useState, useEffect } from 'react'
import { CheckCircle2, Hammer, Component, Laptop, ChevronLeft, ChevronRight } from 'lucide-react'

import exp1 from '../assets/explorer_1.png'
import exp2 from '../assets/explorer_2.png'
import exp3 from '../assets/explorer_3.png'
import exp4 from '../assets/explorer_4.png'

export default function Slide5Progress({ s }) {
  const [currentImg, setCurrentImg] = useState(0)
  const images = [exp1, exp2, exp3, exp4]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg(prev => (prev + 1) % images.length)
    }, 4000) // Auto rotate every 4 seconds
    return () => clearInterval(timer)
  }, [images.length])

  const nextImg = () => setCurrentImg((prev) => (prev + 1) % images.length)
  const prevImg = () => setCurrentImg((prev) => (prev - 1 + images.length) % images.length)

  const achievements = [
    'Interactive phoneme explorer',
    'Audio phoneme system',
    'IPA mapping system',
    'Consonant and vowel categorization',
    'Special phonetic documentation',
    'Over 569 audio samples documented',
    'Structured phoneme dataset',
    'Early AI preprocessing pipeline'
  ]

  const sections = [
    'Consonants',
    'Vowels',
    'Phonemic systems',
    'Special features',
    'IPA tools',
    'Audio samples',
    'Phonetic exploration system'
  ]

  return (
    <div className="flex flex-col h-full py-4 text-left gap-6 overflow-y-auto pr-2 scrollbar-thin">
      
      {/* Header Section */}
      <div className="flex flex-col gap-2">
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider w-fit ${s.badge}`}>
          <Hammer size={12} />
          What Has Been Built So Far
        </span>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight leading-tight">
          Current <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-300">Progress</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column (Lists & Text) */}
        <div className="col-span-1 lg:col-span-5 flex flex-col gap-6">
          
          <div className={`p-5 rounded-2xl ${s.glass} relative overflow-hidden group hover-lift border border-emerald-500/20`}>
            <h3 className="text-emerald-300 font-bold mb-4 flex items-center gap-2">
              <CheckCircle2 size={18} />
              Current Achievements
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-slate-300">
              {achievements.map((ach, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
                  <span className="font-medium">{ach}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`p-5 rounded-2xl ${s.glass} relative overflow-hidden group hover-lift border border-blue-500/20`}>
            <h3 className="text-blue-300 font-bold mb-4 flex items-center gap-2">
              <Component size={18} />
              Current Platform Sections
            </h3>
            <div className="flex flex-wrap gap-2 text-xs">
              {sections.map((sec, idx) => (
                <span key={idx} className="px-3 py-1.5 bg-blue-950/30 border border-blue-500/20 text-blue-200 rounded-lg font-semibold shadow-sm">
                  {sec}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column (Screenshots Carousel) */}
        <div className="col-span-1 lg:col-span-7 flex flex-col items-center justify-center pt-2 relative">
          
          <div className="relative group w-full max-w-2xl mx-auto perspective-[1000px]">
            {/* Glowing Backdrop */}
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/30 to-blue-500/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
            
            {/* 3D Tilted Glass Container */}
            <div className="relative bg-white border border-white/20 p-2 rounded-2xl shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
              {/* Fake Browser Toolbar */}
              <div className="flex items-center gap-2 px-3 py-2 bg-slate-100 rounded-t-xl border-b border-slate-200">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <div className="mx-auto flex items-center gap-2 text-[10px] text-slate-600 font-mono bg-white px-3 py-1 rounded-md shadow-sm">
                  <Laptop size={10} /> rigwe-phoneme-explorer.local
                </div>
              </div>
              
              {/* App Screenshot Image Carousel */}
              <div className="relative overflow-hidden rounded-b-xl border border-slate-200 aspect-[16/9] bg-white flex items-center justify-center">
                <img 
                  src={images[currentImg]} 
                  alt={`Phoneme Explorer Screenshot ${currentImg + 1}`} 
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
                
                {/* Manual Navigation Arrows overlay on hover */}
                <button 
                  onClick={prevImg}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={nextImg}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ChevronRight size={20} />
                </button>

                {/* Progress Indicators */}
                <div className="absolute bottom-3 inset-x-0 flex justify-center gap-2 z-10">
                  {images.map((_, idx) => (
                    <button 
                      key={idx} 
                      onClick={() => setCurrentImg(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${currentImg === idx ? 'bg-emerald-500 scale-125' : 'bg-slate-400/50 hover:bg-slate-300'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <p className="mt-6 text-sm text-slate-400 italic font-medium flex items-center gap-2">
            <span className="w-8 h-px bg-emerald-500/50"></span>
            Live platform screenshot preview (Auto-rotating)
            <span className="w-8 h-px bg-emerald-500/50"></span>
          </p>
        </div>

      </div>

    </div>
  )
}
