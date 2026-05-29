import {
  Telescope, BrainCircuit, Mic, Volume2,
  BookOpen, Headphones, BookA, Smartphone,
  MessageCircle, Database, Target, ArrowRight
} from 'lucide-react'

export default function Slide4Vision({ s }) {
  const goals = [
    { label: 'Rigwe AI Translator', icon: BookA },
    { label: 'Speech-to-Text Systems', icon: Mic },
    { label: 'Text-to-Speech Systems', icon: Volume2 },
    { label: 'AI Teaching Assistants', icon: BookOpen },
    { label: 'Pronunciation Learning', icon: Headphones },
    { label: 'Digital Dictionaries', icon: BookOpen },
    { label: 'Educational Mobile Apps', icon: Smartphone },
    { label: 'Conversational AI Systems', icon: MessageCircle },
    { label: 'Preservation Databases', icon: Database },
  ]

  return (
    <div className="flex flex-col h-full py-6 text-left gap-8 overflow-y-auto pr-2 scrollbar-thin">

      {/* Header Section */}
      <div className="flex flex-col gap-2">
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider w-fit ${s.badge}`}>
          <Telescope size={12} />
          The Big Vision
        </span>
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl tracking-tight leading-tight">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-300">Vision</span>
        </h2>
      </div>

      <div className="flex flex-col gap-8 flex-grow justify-center">

        {/* Core Statement */}
        <div className="text-center relative">
          <p className="text-slate-300 text-lg md:text-xl font-medium mb-3">
            We are not just building a website.
          </p>
          <div className="flex items-center justify-center gap-4 py-8 relative">
            <div className="absolute inset-0 bg-emerald-500/10 blur-[60px] rounded-full w-full h-full pointer-events-none"></div>
            <BrainCircuit size={48} className="text-emerald-400 shrink-0" />
            <h3 className="font-display font-bold text-2xl md:text-4xl lg:text-5xl leading-tight">
              We are building the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-lime-300 to-emerald-400">
                Digital Brain
              </span> of the Rigwe Language.
            </h3>
          </div>
        </div>

        {/* Long Term Goals Grid */}
        <div className={`p-6 rounded-3xl ${s.glass} border border-emerald-500/20 shadow-2xl relative overflow-hidden`}>
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            <Target size={120} />
          </div>

          <h4 className="font-bold text-emerald-300 mb-6 flex items-center gap-2 text-lg">
            <Target size={20} className="text-lime-400" /> Long-Term Goals Include:
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 relative z-10">
            {goals.map((goal, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-black/20 hover:bg-emerald-950/40 transition-colors border border-white/5 hover:border-emerald-500/30 p-3.5 rounded-xl shadow-sm hover:shadow-lg group cursor-default"
              >
                <div className="p-2 rounded-lg bg-emerald-950/50 text-emerald-400 group-hover:scale-110 group-hover:text-lime-300 transition-transform">
                  <goal.icon size={16} />
                </div>
                <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">{goal.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Footer Conclusion */}
      <div className="flex items-center justify-center gap-3 mt-4">
        <ArrowRight className="text-emerald-500 hidden sm:block" size={20} />
        <p className="font-serif italic text-center text-lg text-emerald-200/90 font-medium">
          "The goal is to ensure that Rigwe exists fully in the future digital world."
        </p>
        <ArrowRight className="text-emerald-500 rotate-180 hidden sm:block" size={20} />
      </div>

    </div>
  )
}
