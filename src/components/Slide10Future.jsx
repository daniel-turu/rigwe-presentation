import {
  Telescope, Smartphone, Languages, BookA,
  Mic, GraduationCap, LibraryBig, Microscope,
  Globe, Sparkles, MapPin
} from 'lucide-react'

export default function Slide10Future({ s }) {
  const outcomes = [
    { label: 'Rigwe learning app', icon: Smartphone },
    { label: 'AI translator', icon: Languages },
    { label: 'Digital dictionary', icon: BookA },
    { label: 'Speech assistant', icon: Mic },
    { label: 'Educational systems', icon: GraduationCap },
    { label: 'Cultural preservation archive', icon: LibraryBig },
    { label: 'Language research opportunities', icon: Microscope },
    { label: 'Global representation digitally', icon: Globe },
  ]

  return (
    <div className="flex flex-col h-full py-4 text-left gap-6 overflow-y-auto pr-2 scrollbar-thin">

      {/* Header Section */}
      <div className="flex flex-col gap-2">
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider w-fit ${s.badge}`}>
          <Telescope size={12} />
          The Future Possibilities
        </span>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight leading-tight">
          Future <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-300">Opportunities</span>
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 h-full items-stretch pb-4">

        {/* Left Column: Outcomes Grid */}
        <div className="flex-1 flex flex-col gap-4">
          <h3 className="text-emerald-300 font-bold flex items-center gap-2 text-lg mb-2">
            <Sparkles size={18} /> Possible Future Outcomes:
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-grow">
            {outcomes.map((item, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-xl ${s.glass} border border-white/5 hover:border-emerald-500/30 transition-all flex items-center gap-3 group hover-lift`}
              >
                <div className="p-2 rounded-lg bg-black/30 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-900 transition-colors shadow-inner">
                  <item.icon size={18} />
                </div>
                <span className="font-medium text-slate-200 text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Global Vision Statement */}
        <div className="flex-1 flex flex-col items-center justify-center relative p-6">

          {/* Animated Glowing Globe Backdrop */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
            <div className="w-64 h-64 border border-emerald-500 rounded-full animate-[spin_15s_linear_infinite] absolute"></div>
            <div className="w-72 h-72 border border-blue-500/50 rounded-full animate-[spin_20s_linear_infinite_reverse] absolute"></div>
            <div className="w-80 h-80 border border-emerald-500/20 rounded-full absolute"></div>
            <Globe size={300} strokeWidth={0.5} className="text-emerald-500" />
          </div>

          <div className="relative z-10 p-8 rounded-3xl bg-gradient-to-br from-emerald-950/90 to-slate-950/90 border-2 border-emerald-500/50 shadow-[0_0_50px_-10px_rgba(16,185,129,0.4)] text-center max-w-md w-full backdrop-blur-md transform hover:scale-[1.02] transition-transform">

            <div className="mx-auto w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 mb-6 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              <MapPin size={32} />
            </div>

            <p className="font-display font-black text-2xl md:text-3xl leading-snug text-slate-100">
              This project can place the <span className="text-emerald-400">Rigwe language</span> on the global digital map.
            </p>

          </div>

        </div>

      </div>

    </div>
  )
}
