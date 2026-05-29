import {
  Bot, Database, TrendingUp, Cpu,
  Mic, Languages, WholeWord, BookType, MessageSquare, BookOpen, Landmark,
  AlertTriangle, ArrowRight
} from 'lucide-react'

export default function Slide6AILearning({ s }) {
  const datasetOutcomes = [
    { label: 'Smarter AI', icon: Cpu },
    { label: 'Better translation', icon: Languages },
    { label: 'Better pronunciation', icon: Mic },
    { label: 'Better teaching systems', icon: BookOpen },
  ]

  const requiredData = [
    { label: 'Speech recordings', icon: Mic },
    { label: 'Translations', icon: Languages },
    { label: 'Words', icon: WholeWord },
    { label: 'Grammar', icon: BookType },
    { label: 'Conversations', icon: MessageSquare },
    { label: 'Stories', icon: BookOpen },
    { label: 'Cultural knowledge', icon: Landmark },
  ]

  return (
    <div className="flex flex-col h-full py-4 text-left gap-6 overflow-y-auto pr-2 scrollbar-thin">

      {/* Header Section */}
      <div className="flex flex-col gap-2">
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider w-fit ${s.badge}`}>
          <Bot size={12} />
          How AI Learns Language
        </span>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight leading-tight">
          How Artificial <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-300">Intelligence</span> Works
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">

        {/* Left Side: Core Concept & Outcomes */}
        <div className="flex-1 flex flex-col gap-5">

          {/* Big Concept Box */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950/80 to-slate-900 border border-emerald-500/30 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent pointer-events-none"></div>
            <Database size={48} className="mx-auto text-emerald-400 mb-4 animate-bounce-slow" />
            <h3 className="font-display font-bold text-2xl text-slate-100">AI learns from <span className="text-emerald-400 uppercase tracking-widest font-black text-3xl ml-2">DATA.</span></h3>
          </div>

          {/* Outcomes list */}
          <div className={`p-5 rounded-2xl ${s.glass} relative overflow-hidden border-l-4 ${s.traditionalBorder} flex-grow`}>
            <p className="text-slate-200 font-bold mb-4 flex items-center gap-2">
              <TrendingUp size={18} className="text-emerald-400" />
              The stronger and more organized the dataset:
            </p>
            <div className="flex flex-col gap-3">
              {datasetOutcomes.map((outcome, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white/5 hover:bg-white/10 transition p-2.5 rounded-lg border border-white/5">
                  <div className="p-1.5 rounded-md bg-emerald-500/20 text-emerald-400">
                    <outcome.icon size={14} />
                  </div>
                  <p className="text-sm font-medium text-slate-300">
                    the <span className="text-white font-bold">{outcome.label}</span> becomes.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Required Data & Warning */}
        <div className="flex-1 flex flex-col gap-5">

          {/* Data Needed Box */}
          <div className={`p-5 rounded-2xl ${s.card} border border-blue-500/20 flex-grow`}>
            <p className="text-slate-200 font-bold mb-4 text-lg">
              To build strong Rigwe AI systems, we need:
            </p>
            <div className="flex flex-wrap gap-2.5">
              {requiredData.map((data, idx) => (
                <span
                  key={idx}
                  className="px-3 py-2 bg-blue-950/40 border border-blue-500/30 rounded-xl text-sm font-medium text-blue-200 flex items-center gap-2 shadow-sm hover:scale-105 transition-transform cursor-default"
                >
                  <data.icon size={14} className="text-blue-400" />
                  {data.label}
                </span>
              ))}
            </div>
          </div>

          {/* Warning Footer Box */}
          <div className="p-5 rounded-xl bg-red-950/40 border border-red-500/30 relative overflow-hidden flex items-center gap-4 group">
            <div className="p-3 bg-red-500/20 rounded-full text-red-400 group-hover:scale-110 transition-transform shrink-0">
              <AlertTriangle size={24} />
            </div>
            <div>
              <p className="text-red-300 font-bold text-lg">Without data:</p>
              <p className="text-red-200 text-sm font-medium">AI cannot learn the language.</p>
            </div>
            <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-red-500/10 to-transparent pointer-events-none"></div>
          </div>

        </div>

      </div>

    </div>
  )
}
