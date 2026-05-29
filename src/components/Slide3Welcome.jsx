import { 
  AlertCircle, Globe, ShieldAlert, Zap,
  Fingerprint, BookOpen, MessageSquare, Lightbulb, Flame, Landmark,
  Bot, Languages, Mic, GraduationCap, AudioWaveform, MonitorPlay,
  EyeOff, Unlink, HeartOff
} from 'lucide-react'

import digitalHeritageImg from '../assets/digital_heritage.png'

export default function Slide3Welcome({ s }) {
  return (
    <div className="flex flex-col h-full py-4 text-left gap-6 overflow-y-auto pr-2 scrollbar-thin">
      
      {/* Header Section */}
      <div className="flex flex-col gap-2">
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider w-fit ${s.badge}`}>
          <AlertCircle size={12} />
          Why This Project Matters
        </span>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight leading-tight">
          Why Digitalizing <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-300">Rigwe</span> is Important
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        
        {/* Left Column (Text & Context) */}
        <div className="flex flex-col gap-5">
          {/* Language Carries Box */}
          <div className={`p-5 rounded-2xl ${s.glass} border-l-4 ${s.traditionalBorder} relative overflow-hidden group hover-lift flex-grow`}>
            <p className="font-serif text-lg leading-relaxed text-emerald-300 mb-4 italic">
              "Language is more than communication."
            </p>
            <p className="text-slate-200 font-bold mb-3">Language carries:</p>
            <div className="flex flex-wrap gap-2.5">
              {[
                { name: 'Identity', icon: Fingerprint },
                { name: 'History', icon: BookOpen },
                { name: 'Stories', icon: MessageSquare },
                { name: 'Culture', icon: Globe },
                { name: 'Wisdom', icon: Lightbulb },
                { name: 'Traditions', icon: Flame },
                { name: 'Heritage', icon: Landmark }
              ].map((item) => (
                <span key={item.name} className="px-3 py-1.5 bg-black/20 hover:bg-emerald-950/40 transition-colors border border-white/10 rounded-lg text-xs font-medium text-slate-300 flex items-center gap-1.5 shadow-sm">
                  <item.icon size={12} className="text-emerald-400" />
                  {item.name}
                </span>
              ))}
            </div>
          </div>

          {/* Major Languages Box */}
          <div className={`p-5 rounded-2xl ${s.glass} relative overflow-hidden hover-lift flex-grow`}>
            <p className="text-slate-200 font-bold mb-4 flex items-center gap-2">
              <Globe size={18} className="text-blue-400" />
              Today, major world languages already exist in:
            </p>
            <ul className="grid grid-cols-2 gap-3 text-xs text-slate-300">
              <li className="flex items-center gap-2 bg-white/5 p-2 rounded-lg border border-white/5">
                <Bot size={14} className="text-emerald-500" /> AI systems
              </li>
              <li className="flex items-center gap-2 bg-white/5 p-2 rounded-lg border border-white/5">
                <Languages size={14} className="text-emerald-500" /> Google Translate
              </li>
              <li className="flex items-center gap-2 bg-white/5 p-2 rounded-lg border border-white/5">
                <Mic size={14} className="text-emerald-500" /> Voice assistants
              </li>
              <li className="flex items-center gap-2 bg-white/5 p-2 rounded-lg border border-white/5">
                <GraduationCap size={14} className="text-emerald-500" /> Learning platforms
              </li>
              <li className="flex items-center gap-2 bg-white/5 p-2 rounded-lg border border-white/5">
                <AudioWaveform size={14} className="text-emerald-500" /> Speech technologies
              </li>
              <li className="flex items-center gap-2 bg-white/5 p-2 rounded-lg border border-white/5">
                <MonitorPlay size={14} className="text-emerald-500" /> Digital education
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column (Image & Problem) */}
        <div className="flex flex-col gap-5">
          {/* AI Generated Hero Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 h-48 md:h-56 group">
            <div className="absolute inset-0 bg-emerald-950/20 group-hover:bg-transparent transition duration-500 z-10 pointer-events-none"></div>
            <img 
              src={digitalHeritageImg} 
              alt="Digital Tree of African Heritage" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700" 
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0a0f18] via-[#0a0f18]/80 to-transparent pt-12 pb-3 px-4 z-20">
              <p className="text-red-300 font-bold flex items-start gap-2 text-sm drop-shadow-md">
                <ShieldAlert size={18} className="shrink-0 mt-0.5 text-red-400" />
                But many indigenous African languages are still digitally absent.
              </p>
            </div>
          </div>

          {/* The Warning Box */}
          <div className={`p-5 rounded-2xl ${s.card} relative overflow-hidden flex-grow`}>
            <p className="text-slate-200 font-bold mb-4">If we do not begin now:</p>
            <div className="flex flex-col gap-3 text-sm text-slate-300">
              <div className="flex items-start gap-3 bg-red-950/10 hover:bg-red-950/20 transition p-3 rounded-xl border border-red-500/10">
                <EyeOff size={18} className="text-red-400 shrink-0 mt-0.5" />
                <p>Our language may become <span className="text-red-300 font-semibold">invisible digitally</span>.</p>
              </div>
              <div className="flex items-start gap-3 bg-red-950/10 hover:bg-red-950/20 transition p-3 rounded-xl border border-red-500/10">
                <Unlink size={18} className="text-red-400 shrink-0 mt-0.5" />
                <p>Future generations may <span className="text-red-300 font-semibold">disconnect</span> from it.</p>
              </div>
              <div className="flex items-start gap-3 bg-red-950/10 hover:bg-red-950/20 transition p-3 rounded-xl border border-red-500/10">
                <HeartOff size={18} className="text-red-400 shrink-0 mt-0.5" />
                <p>The language may struggle to <span className="text-red-300 font-semibold">survive</span> in future systems.</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Footer Banner */}
      <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/70 via-emerald-900/50 to-blue-950/70 border border-emerald-500/20 text-center relative overflow-hidden mt-1 shadow-lg shadow-emerald-900/20">
        <p className="font-display font-bold text-sm sm:text-base text-emerald-300 flex items-center justify-center gap-2">
          <Zap size={16} className="text-yellow-400 animate-pulse" />
          This project is about preservation, education, representation, and building the future.
        </p>
      </div>

    </div>
  )
}
