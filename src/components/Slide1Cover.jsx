import { Sparkles, CheckCircle, Cpu, Calendar } from 'lucide-react'
import childrenCoverImg from '../assets/children_cover.jpg'

export default function Slide1Cover({ s }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-6">
      {/* Text and branding info */}
      <div className="col-span-1 lg:col-span-7 text-left flex flex-col gap-6 order-2 lg:order-1">
        <div>
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 ${s.badge}`}>
            <Sparkles size={12} />
            Language Innovation & AI
          </span>
          
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-4">
            DIGITALIZING THE <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-emerald-400 to-lime-400">
              RIGWE LANGUAGE
            </span>
          </h1>
          
          <p className={`font-serif text-lg sm:text-xl md:text-2xl leading-relaxed italic opacity-90 border-l-4 ${s.traditionalBorder} pl-4 my-6`}>
            "Preserving Our Identity Through Technology & Artificial Intelligence"
          </p>
        </div>

        {/* Project Tagline banner */}
        <div className="flex flex-col gap-2 mt-2">
          <div className="flex flex-wrap gap-4 items-center text-xs opacity-80">
            <span className="flex items-center gap-1">
              <CheckCircle size={14} className="text-emerald-500" /> Rigwe Focus
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-slate-600"></span>
            <span className="flex items-center gap-1">
              <Cpu size={14} className="text-emerald-500" /> Plateau State Focus
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-emerald-400/90 font-medium bg-emerald-950/30 w-fit px-2.5 py-1 rounded-md border border-emerald-900/50 mt-1">
            <Calendar size={12} />
            <span>Presented on: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          </div>
        </div>
      </div>

      {/* Right side Visual (Flyer image cropped with custom frame overlay) */}
      <div className="col-span-1 lg:col-span-5 flex justify-center order-1 lg:order-2">
        <div className="relative group max-w-md w-full">
          {/* Glowing outer rings */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500 to-lime-500 rounded-2xl blur opacity-30 group-hover:opacity-45 transition duration-1000"></div>
          
          <div className="relative bg-[#0d121f] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <img 
              src={childrenCoverImg} 
              alt="Rigwe children in traditional attire" 
              className="w-full h-[320px] md:h-[420px] object-cover opacity-85 hover:scale-[1.03] transition duration-700"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?q=80&w=600&auto=format&fit=crop";
              }}
            />
            
            {/* Image Bottom Overlay Badge */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-5 text-left text-white">
              <span className="text-[10px] bg-emerald-500 uppercase tracking-widest px-2 py-0.5 rounded font-bold">Featured Initiative</span>
              <h4 className="font-display font-semibold text-base mt-1.5 text-slate-100">
                
              </h4>
              <p className="text-[11px] text-emerald-300 mt-0.5">Let's keep Rigwe digiralized, strong and proud!</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
