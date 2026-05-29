import { 
  Database, Layers, MessageCircle, BookOpen, 
  Target, ChevronRight, Mic, BookType, Sparkles, AudioLines
} from 'lucide-react'

export default function Slide7DataPhases({ s }) {
  const phases = [
    {
      num: '01',
      title: 'PHONEMES',
      icon: AudioLines,
      color: 'text-emerald-400',
      bg: 'bg-emerald-950/30',
      border: 'border-emerald-500/30',
      examples: ['kp', 'gb', 'rr', 'ng', 'zh'],
      goal: 'Pronunciation AI & Speech Recognition',
    },
    {
      num: '02',
      title: 'WORDS',
      icon: BookType,
      color: 'text-blue-400',
      bg: 'bg-blue-950/30',
      border: 'border-blue-500/30',
      examples: ['names', 'objects', 'verbs', 'expressions'],
      goal: 'Dictionary & Vocabulary Systems',
    },
    {
      num: '03',
      title: 'SENTENCES',
      icon: MessageCircle,
      color: 'text-purple-400',
      bg: 'bg-purple-950/30',
      border: 'border-purple-500/30',
      examples: ['greetings', 'conversations', 'translations'],
      goal: 'Translation AI & Chatbot Systems',
    },
    {
      num: '04',
      title: 'STORIES & CULTURE',
      icon: BookOpen,
      color: 'text-amber-400',
      bg: 'bg-amber-950/30',
      border: 'border-amber-500/30',
      examples: ['folktales', 'songs', 'proverbs', 'customs'],
      goal: 'Preserve Cultural Intelligence',
    }
  ]

  return (
    <div className="flex flex-col h-full py-4 text-left gap-6 overflow-y-auto pr-2 scrollbar-thin">
      
      {/* Header Section */}
      <div className="flex flex-col gap-2">
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider w-fit ${s.badge}`}>
          <Database size={12} />
          What We Need To Collect
        </span>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight leading-tight">
          Data Collection <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-300">Phases</span>
        </h2>
      </div>

      {/* Phases Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 flex-grow">
        
        {phases.map((phase, idx) => (
          <div 
            key={idx} 
            className={`p-5 lg:p-6 rounded-2xl ${s.glass} border ${phase.border} relative overflow-hidden group hover-lift flex flex-col`}
          >
            {/* Background Phase Number Watermark */}
            <div className="absolute -bottom-4 -right-2 text-[100px] font-black text-white/[0.03] select-none pointer-events-none font-display">
              {phase.num}
            </div>

            {/* Phase Header */}
            <div className="flex items-start justify-between mb-5 relative z-10">
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-xl ${phase.bg} ${phase.color}`}>
                  <phase.icon size={22} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-0.5">Phase {phase.num}</p>
                  <h3 className={`font-display font-bold text-xl ${phase.color}`}>{phase.title}</h3>
                </div>
              </div>
            </div>

            {/* Phase Content */}
            <div className="flex flex-col gap-4 flex-grow relative z-10">
              
              {/* Examples */}
              <div>
                <p className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider flex items-center gap-1">
                  <Layers size={12} /> Examples:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {phase.examples.map((ex, i) => (
                    <span 
                      key={i} 
                      className="px-2.5 py-1 bg-black/20 border border-white/5 rounded-md text-xs font-medium text-slate-300 shadow-sm"
                    >
                      {ex}
                    </span>
                  ))}
                </div>
              </div>

              {/* Goal */}
              <div className={`mt-auto pt-4 border-t border-white/5`}>
                <p className="text-xs font-bold text-slate-400 mb-1.5 uppercase tracking-wider flex items-center gap-1">
                  <Target size={12} className="text-emerald-500" /> Goal:
                </p>
                <p className="text-sm font-bold text-white flex items-center gap-2">
                  <Sparkles size={14} className="text-yellow-400 shrink-0" />
                  {phase.goal}
                </p>
              </div>

            </div>
          </div>
        ))}

      </div>

    </div>
  )
}
