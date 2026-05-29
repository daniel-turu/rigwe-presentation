import { 
  ShieldCheck, VolumeX, Mic2, MessageCircleHeart, 
  Tags, ThumbsUp, ThumbsDown, Award, Sparkles, AlertOctagon
} from 'lucide-react'

export default function Slide8DataStandards({ s }) {
  const standards = [
    { label: 'Quiet environment', icon: VolumeX },
    { label: 'Clear pronunciation', icon: Mic2 },
    { label: 'Natural speech', icon: MessageCircleHeart },
    { label: 'Correct labeling', icon: Tags },
  ]

  return (
    <div className="flex flex-col h-full py-4 text-left gap-6 overflow-y-auto pr-2 scrollbar-thin">
      
      {/* Header Section */}
      <div className="flex flex-col gap-2">
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider w-fit ${s.badge}`}>
          <ShieldCheck size={12} />
          Data Collection Standards
        </span>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight leading-tight">
          Quality <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-300">Guidelines</span>
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 h-full items-stretch pb-4">
        
        {/* Left Column: Requirements */}
        <div className="flex-1 flex flex-col gap-5">
          
          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-950/40 to-emerald-950/20 border-l-4 border-emerald-500 shadow-lg relative overflow-hidden group">
            <Sparkles className="absolute top-4 right-4 text-emerald-500/20 w-24 h-24 transform rotate-12" />
            <h3 className="font-display font-bold text-2xl text-slate-100 mb-2 relative z-10">
              To build strong AI:
            </h3>
            <p className="text-emerald-300 text-xl font-bold italic relative z-10">
              "We need high-quality data."
            </p>
          </div>

          <div className={`p-6 rounded-2xl ${s.glass} flex-grow border border-white/10 relative overflow-hidden`}>
            <div className="flex items-center gap-2 mb-6">
              <Award className="text-yellow-400" size={24} />
              <h3 className="font-bold text-lg text-slate-200">Recording Standards:</h3>
            </div>
            
            <div className="flex flex-col gap-4">
              {standards.map((std, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-black/20 p-4 rounded-xl border border-white/5 hover:bg-emerald-950/30 transition-colors group">
                  <div className="p-2 rounded-lg bg-slate-800 text-slate-300 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors shadow-inner">
                    <std.icon size={20} />
                  </div>
                  <span className="font-medium text-slate-200 text-lg">{std.label}</span>
                </div>
              ))}
            </div>
          </div>
          
        </div>

        {/* Right Column: The Comparison */}
        <div className="flex-1 flex flex-col gap-6 justify-center">
          
          {/* Important Tag */}
          <div className="text-center w-full">
            <span className="px-4 py-1.5 bg-slate-800 text-slate-300 rounded-full text-sm font-bold tracking-widest uppercase shadow-md border border-white/5 inline-flex items-center gap-2">
              <AlertOctagon size={16} className="text-amber-400" />
              Critical Principle
            </span>
          </div>

          {/* Good Data = Strong AI */}
          <div className="p-8 rounded-3xl bg-gradient-to-r from-emerald-950/80 to-emerald-900/40 border-2 border-emerald-500 shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)] transform transition-transform hover:scale-[1.02] relative overflow-hidden flex items-center justify-center gap-6">
            <div className="absolute left-0 inset-y-0 w-2 bg-emerald-400"></div>
            <div className="p-4 bg-emerald-500/20 rounded-full text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.5)]">
              <ThumbsUp size={36} />
            </div>
            <div>
              <p className="text-emerald-400 font-bold tracking-wider uppercase text-sm mb-1">Result</p>
              <h3 className="font-display font-black text-3xl sm:text-4xl text-slate-100">
                Good data = <br/><span className="text-emerald-300">Strong AI</span>
              </h3>
            </div>
          </div>

          {/* Bad Data = Weak AI */}
          <div className="p-8 rounded-3xl bg-gradient-to-r from-red-950/80 to-red-900/40 border-2 border-red-500/50 shadow-[0_0_30px_-5px_rgba(239,68,68,0.2)] transform transition-transform hover:scale-[1.02] relative overflow-hidden flex items-center justify-center gap-6 mt-2">
            <div className="absolute left-0 inset-y-0 w-2 bg-red-500/80"></div>
            <div className="p-4 bg-red-500/10 rounded-full text-red-400">
              <ThumbsDown size={36} />
            </div>
            <div>
              <p className="text-red-400/80 font-bold tracking-wider uppercase text-sm mb-1">Result</p>
              <h3 className="font-display font-black text-3xl sm:text-4xl text-slate-300">
                Bad data = <br/><span className="text-red-400">Weak AI</span>
              </h3>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}
