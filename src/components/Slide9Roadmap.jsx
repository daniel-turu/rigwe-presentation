import { 
  Map, Milestone, Pickaxe, Database, 
  Cpu, Rocket, CheckCircle2 
} from 'lucide-react'

export default function Slide9Roadmap({ s }) {
  const roadmap = [
    {
      month: 'Month 1',
      title: 'FOUNDATION',
      icon: Pickaxe,
      color: 'text-amber-400',
      bg: 'bg-amber-500/20',
      border: 'border-amber-500/50',
      line: 'bg-amber-500/50',
      tasks: [
        'Phoneme documentation',
        'Recording standards',
        'Volunteer onboarding',
        'Dataset structure'
      ]
    },
    {
      month: 'Month 2',
      title: 'DATA COLLECTION',
      icon: Database,
      color: 'text-blue-400',
      bg: 'bg-blue-500/20',
      border: 'border-blue-500/50',
      line: 'bg-blue-500/50',
      tasks: [
        'Word collection',
        'Sentence translations',
        'Speech recordings',
        'Metadata organization'
      ]
    },
    {
      month: 'Month 3',
      title: 'AI DEVELOPMENT',
      icon: Cpu,
      color: 'text-purple-400',
      bg: 'bg-purple-500/20',
      border: 'border-purple-500/50',
      line: 'bg-purple-500/50',
      tasks: [
        'Phoneme recognition model',
        'Translation prototype',
        'Pronunciation systems'
      ]
    },
    {
      month: 'Month 4',
      title: 'PUBLIC SYSTEMS',
      icon: Rocket,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/20',
      border: 'border-emerald-500/50',
      line: 'bg-transparent',
      tasks: [
        'Learning platform',
        'Translator prototype',
        'Pronunciation tools',
        'Educational demos'
      ]
    }
  ]

  return (
    <div className="flex flex-col h-full py-4 text-left gap-6 overflow-y-auto pr-2 scrollbar-thin">
      
      {/* Header Section */}
      <div className="flex flex-col gap-2">
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider w-fit ${s.badge}`}>
          <Map size={12} />
          Project Roadmap
        </span>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight leading-tight">
          Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-300">Roadmap</span>
        </h2>
      </div>

      <div className="flex-grow flex flex-col justify-center py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-4 relative">
          
          {roadmap.map((phase, idx) => (
            <div key={idx} className="flex flex-col relative group">
              
              {/* Connecting Line (Hidden on mobile, visible on desktop) */}
              {idx < roadmap.length - 1 && (
                <div className={`hidden xl:block absolute top-[28px] left-[60%] w-[80%] h-0.5 ${phase.line} z-0`}></div>
              )}

              {/* Node Icon */}
              <div className="flex items-center gap-4 xl:flex-col xl:items-start mb-4 relative z-10">
                <div className={`p-4 rounded-2xl ${phase.bg} ${phase.border} border shadow-lg group-hover:scale-110 transition-transform`}>
                  <phase.icon size={24} className={phase.color} />
                </div>
                <div className="xl:mt-2">
                  <span className={`text-xs font-bold uppercase tracking-widest ${phase.color}`}>
                    {phase.month}
                  </span>
                  <h3 className="font-display font-bold text-xl text-slate-100 mt-1">
                    {phase.title}
                  </h3>
                </div>
              </div>

              {/* Tasks List */}
              <div className={`p-5 rounded-xl ${s.glass} flex-grow border border-white/5`}>
                <ul className="flex flex-col gap-3">
                  {phase.tasks.map((task, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm font-medium text-slate-300 group-hover:text-slate-200 transition-colors">
                      <CheckCircle2 size={16} className={`${phase.color} shrink-0 mt-0.5 opacity-80`} />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}

        </div>
      </div>

    </div>
  )
}
