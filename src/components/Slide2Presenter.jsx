import { User } from 'lucide-react'
import avatarImg from '../assets/avatar.jpeg'
import techboostLogoImg from '../assets/techboost_logo.png'
import schoolLogoImg from '../assets/school_logo.png'

export default function Slide2Presenter({ s }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-6">
      
      {/* Left Side: Photo */}
      <div className="col-span-1 lg:col-span-5 flex justify-center">
        <div className="relative group max-w-sm w-full">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500 via-lime-500 to-emerald-600 rounded-2xl blur opacity-30 group-hover:opacity-45 transition duration-700"></div>
          <div className="relative bg-[#0d121f] rounded-2xl overflow-hidden shadow-2xl border border-white/10 p-2">
            <img 
              src={avatarImg} 
              alt="Daniel Turu portrait" 
              className="w-full aspect-square object-cover rounded-xl"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        </div>
      </div>

      {/* Right Side: Bio & Qualifications */}
      <div className="col-span-1 lg:col-span-7 text-left flex flex-col gap-6">
        <div>
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 ${s.badge}`}>
            <User size={12} />
            About The Presenter
          </span>
          
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight mb-2">
            Daniel Turu
          </h2>
          
          <p className={`font-serif text-lg sm:text-xl italic text-emerald-300`}>
            "Software Programmer, Tutor, Final-Year Student, and Proudly Regwe by Tribe."
          </p>
        </div>

        {/* Qualifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
          <div className={`p-4 rounded-xl ${s.glass} flex items-start gap-3 border border-white/10 hover-lift`}>
            <img src={techboostLogoImg} alt="TechBoost Logo" className="w-10 h-10 rounded object-contain shrink-0 bg-white p-1" />
            <div>
              <span className="font-bold block text-slate-200">CEO, TechBoost NG HUB</span>
              <span className="text-xs text-slate-400">Leading the digital transformation of Plateau State languages.</span>
            </div>
          </div>
          
          <div className={`p-4 rounded-xl ${s.glass} flex items-start gap-3 border border-white/10 hover-lift`}>
            <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=150&auto=format&fit=crop" alt="Programmer" className="w-10 h-10 rounded-lg object-cover shrink-0 border border-emerald-500/30" />
            <div>
              <span className="font-bold block text-slate-200">Software Programmer</span>
              <span className="text-xs text-slate-400">Building solutions like this presentation application.</span>
            </div>
          </div>
          
          <div className={`p-4 rounded-xl ${s.glass} flex items-start gap-3 border border-white/10 hover-lift`}>
            <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=150&auto=format&fit=crop" alt="Tutor" className="w-10 h-10 rounded-lg object-cover shrink-0 border border-emerald-500/30" />
            <div>
              <span className="font-bold block text-slate-200">Tutor & Educator</span>
              <span className="text-xs text-slate-400">Passionate about teaching and empowering the next generation.</span>
            </div>
          </div>
          
          <div className={`p-4 rounded-xl ${s.glass} flex items-start gap-3 border border-white/10 relative overflow-hidden hover-lift`}>
            <div className="absolute top-0 right-0 bg-yellow-500 text-slate-950 text-[9px] font-bold px-2 py-0.5 rounded-bl-lg">NOW</div>
            <img src={schoolLogoImg} alt="Student" className="w-10 h-10 rounded-lg object-contain shrink-0 border border-yellow-500/30 bg-white p-1" />
            <div>
              <span className="font-bold block text-slate-200">Final-Year Student</span>
              <span className="text-xs text-slate-400">Currently taking my finals while driving this vision forward!</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
