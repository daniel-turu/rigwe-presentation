import { HeartHandshake, User, Building2, ExternalLink } from 'lucide-react'
import techboostLogo from '../assets/techboost_logo.png'

export default function Slide11ThankYou({ s }) {
  return (
    <div className="flex flex-col items-center justify-center h-full py-8 text-center gap-10 overflow-y-auto pr-2 scrollbar-thin">
      
      {/* Main Thank You Title */}
      <div className="flex flex-col items-center justify-center gap-3 relative w-full">
        <div className="absolute inset-0 bg-emerald-500/10 blur-[80px] rounded-full w-3/4 mx-auto h-full pointer-events-none"></div>
        <HeartHandshake size={56} className="text-emerald-400 mb-2 animate-bounce-slow" />
        <h1 className="font-display font-black text-6xl sm:text-7xl md:text-8xl tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-emerald-300 via-emerald-400 to-blue-500">
          THANK YOU
        </h1>
        <p className="text-xl sm:text-2xl text-slate-300 font-medium max-w-2xl mt-4">
          Thank you all for volunteering and contributing to this movement.
        </p>
      </div>

      {/* Presenter & Organization Block */}
      <div className={`p-8 rounded-3xl ${s.glass} border border-emerald-500/20 max-w-lg w-full flex flex-col items-center gap-6 relative overflow-hidden group hover-lift`}>
        
        {/* Subtle Background Logo */}
        <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
          <img src={techboostLogo} alt="TechBoost Background" className="w-64 h-64 object-contain grayscale" />
        </div>

        <div className="relative z-10 flex flex-col items-center w-full">
          <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-4">Presented by</p>
          
          <div className="flex flex-col items-center gap-2 mb-8">
            <h3 className="font-display font-bold text-3xl text-white">Daniel Turu</h3>
            <p className="text-emerald-400 font-medium flex items-center gap-2 bg-emerald-950/30 px-4 py-1.5 rounded-full border border-emerald-500/20">
              <User size={14} /> CEO, TechBoost NG HUB
            </p>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

          <div className="flex flex-col items-center gap-4">
            <img src={techboostLogo} alt="TechBoost NG HUB Logo" className="h-16 object-contain drop-shadow-lg" />
            <div className="text-center">
              <h4 className="font-bold text-slate-200 text-lg">TechBoost NG Hub</h4>
              <p className="text-sm text-slate-400 flex items-center justify-center gap-1 mt-1">
                <Building2 size={12} /> Digitalizing Plateau State Languages
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Footer Tagline */}
      <div className="mt-auto pt-8">
        <a href="#" className="inline-flex items-center gap-2 text-emerald-500/60 hover:text-emerald-400 transition-colors text-sm font-medium group">
          Join the movement <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </div>

    </div>
  )
}
