import { useState, useEffect, useRef } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  Play,
  Pause,
  Maximize,
  Minimize,
  Menu,
  X,
  LayoutGrid,
  Sparkles
} from 'lucide-react'

// Import Slide Components
import Slide1Cover from './components/Slide1Cover'
import Slide2Presenter from './components/Slide2Presenter'
import Slide3Welcome from './components/Slide3Welcome'
import Slide4Vision from './components/Slide4Vision'
import Slide5Progress from './components/Slide5Progress'
import Slide6AILearning from './components/Slide6AILearning'
import Slide7DataPhases from './components/Slide7DataPhases'
import Slide8DataStandards from './components/Slide8DataStandards'
import Slide9Roadmap from './components/Slide9Roadmap'
import Slide10Future from './components/Slide10Future'
import Slide11ThankYou from './components/Slide11ThankYou'

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState('next')
  const [isPlaying, setIsPlaying] = useState(false)
  const [autoplaySpeed, setAutoplaySpeed] = useState(10000) // 10s default
  const [theme, setTheme] = useState('traditional') // 'dark' | 'light' | 'traditional'
  const [showPatterns, setShowPatterns] = useState(true)
  const [isOverview, setIsOverview] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const autoplayTimerRef = useRef(null)

  const slidesCount = 11

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      switch (e.key) {
        case 'ArrowRight':
        case ' ': // Space
          nextSlide()
          break
        case 'ArrowLeft':
        case 'Backspace':
          prevSlide()
          break
        case 'Home':
          goToSlide(0)
          break
        case 'End':
          goToSlide(slidesCount - 1)
          break
        case 'f':
        case 'F':
          toggleFullscreen()
          break
        case 'o':
        case 'O':
          setIsOverview(prev => !prev)
          break
        case 'm':
        case 'M':
          setIsMenuOpen(prev => !prev)
          break
        default:
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentSlide, isOverview])

  // Autoplay setup
  useEffect(() => {
    if (isPlaying) {
      autoplayTimerRef.current = setInterval(() => {
        nextSlide()
      }, autoplaySpeed)
    } else {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current)
    }
    return () => {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current)
    }
  }, [isPlaying, currentSlide, autoplaySpeed])

  // Fullscreen tracking
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }
    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
  }, [])

  const nextSlide = () => {
    if (currentSlide < slidesCount - 1) {
      setDirection('next')
      setCurrentSlide(prev => prev + 1)
    } else {
      // Loop back to beginning
      setDirection('next')
      setCurrentSlide(0)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection('prev')
      setCurrentSlide(prev => prev - 1)
    } else {
      // Loop to end
      setDirection('prev')
      setCurrentSlide(slidesCount - 1)
    }
  }

  const goToSlide = (idx) => {
    setDirection(idx > currentSlide ? 'next' : 'prev')
    setCurrentSlide(idx)
    setIsOverview(false)
    setIsMenuOpen(false)
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`)
      })
    } else {
      document.exitFullscreen()
    }
  }

  // Internal states moved to components

  // Determine current theme styles
  const getThemeClasses = () => {
    switch (theme) {
      case 'light':
        return {
          bg: 'bg-[#fcfaf5]',
          text: 'text-slate-900',
          textMuted: 'text-slate-600',
          card: 'bg-white border border-slate-200/80 shadow-md',
          glass: 'bg-white/80 border border-slate-200/60 backdrop-blur-md',
          primary: 'text-emerald-700',
          accent: 'bg-emerald-600 hover:bg-emerald-700 text-white',
          accentSecondary: 'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200',
          highlight: 'text-emerald-600',
          glowOrb1: 'bg-emerald-500/10',
          glowOrb2: 'bg-blue-500/10',
          border: 'border-slate-200',
          badge: 'bg-emerald-50 text-emerald-800 border-emerald-200 border',
          traditionalBorder: 'border-emerald-700'
        }
      case 'traditional':
        return {
          bg: 'bg-[#0a1812]', // Very dark green-black traditional background
          text: 'text-[#fbfaf0]',
          textMuted: 'text-emerald-200/70',
          card: 'bg-[#0e271c] border border-emerald-900/60 shadow-lg shadow-black/20',
          glass: 'bg-[#0e271c]/90 border border-emerald-800/30 backdrop-blur-md',
          primary: 'text-[#84cc16]', // Bright lime green
          accent: 'bg-[#84cc16] hover:bg-lime-500 text-slate-950 font-semibold',
          accentSecondary: 'bg-emerald-950/80 hover:bg-emerald-900 text-emerald-100 border border-emerald-800',
          highlight: 'text-[#facc15]', // Yellow beads accent
          glowOrb1: 'bg-emerald-700/20',
          glowOrb2: 'bg-yellow-600/10',
          border: 'border-emerald-950',
          badge: 'bg-emerald-950/50 text-[#84cc16] border-emerald-800 border',
          traditionalBorder: 'border-lime-500'
        }
      case 'dark':
      default:
        return {
          bg: 'bg-[#090b11]', // Midnight dark navy
          text: 'text-slate-100',
          textMuted: 'text-slate-400',
          card: 'bg-[#0f131f] border border-slate-800/80 shadow-2xl shadow-black/40',
          glass: 'bg-[#0f131f]/85 border border-slate-800/60 backdrop-blur-md',
          primary: 'text-emerald-400',
          accent: 'bg-emerald-500 hover:bg-emerald-600 text-white font-medium shadow-lg shadow-emerald-500/10',
          accentSecondary: 'bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700/50',
          highlight: 'text-emerald-400',
          glowOrb1: 'bg-emerald-500/10',
          glowOrb2: 'bg-indigo-500/10',
          border: 'border-slate-800',
          badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 border',
          traditionalBorder: 'border-emerald-500'
        }
    }
  }

  const s = getThemeClasses()

  return (
    <div className={`min-h-screen relative flex flex-col justify-between transition-colors duration-500 ${s.bg} ${s.text} font-sans`}>
      {/* Interactive Mesh/Radial Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className={`absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full filter blur-[120px] animate-pulse transition-colors duration-500 ${s.glowOrb1}`}></div>
        <div className={`absolute bottom-[-10%] right-[-10%] w-[55vw] h-[55vw] rounded-full filter blur-[120px] transition-colors duration-500 ${s.glowOrb2}`}></div>

        {/* Traditional Geometric Pattern Overlay (SVG lines representing Plateau weavers/beads layout) */}
        {showPatterns && (
          <div className="absolute inset-0 opacity-[0.03] transition-opacity duration-300">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                  <path d="M 0 0 L 40 40 Z" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,2" />
                  <circle cx="20" cy="20" r="2" fill="currentColor" />
                </pattern>
                <pattern id="diamonds" width="80" height="80" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 80 40 L 40 80 L 0 40 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M 40 10 L 70 40 L 40 70 L 10 40 Z" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3,3" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#diamonds)" />
            </svg>
          </div>
        )}
      </div>

      {/* Presentation Header */}
      <header className="relative z-10 px-6 py-4 flex items-center justify-between border-b border-white/5 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          {/* TechBoost Custom SVG Logo */}
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
            <svg viewBox="0 0 100 100" className="w-6 h-6 fill-none stroke-[10] stroke-emerald-500" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="30" cy="30" r="12" className="stroke-emerald-400 fill-emerald-400/20" />
              <path d="M 30 42 L 30 70 A 15 15 0 0 0 60 70 L 60 50 A 10 10 0 0 1 80 50" />
              <circle cx="80" cy="50" r="8" className="stroke-emerald-300 fill-emerald-300" />
              <line x1="30" y1="70" x2="60" y2="70" />
            </svg>
          </div>
          <div>
            <span className="font-display font-bold tracking-tight text-sm md:text-base">
              TechBoost NG <span className="text-emerald-500 font-extrabold">HUB</span>
            </span>
            <span className={`block text-[10px] uppercase tracking-wider ${s.textMuted} font-semibold`}>
              Digitalizing Plateau State Languages
            </span>
          </div>
        </div>

        {/* Quick Toolbar */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Mode Switcher Badges */}
          <div className="hidden sm:flex bg-black/10 border border-white/5 rounded-lg p-1">
            <button
              onClick={() => setTheme('dark')}
              className={`px-2.5 py-1 text-xs rounded-md transition-all ${theme === 'dark' ? 'bg-slate-800 text-white font-medium' : 'text-slate-400 hover:text-white'}`}
            >
              Dark
            </button>
            <button
              onClick={() => setTheme('light')}
              className={`px-2.5 py-1 text-xs rounded-md transition-all ${theme === 'light' ? 'bg-white text-slate-800 shadow-sm font-medium' : 'text-slate-400 hover:text-slate-900'}`}
            >
              Light
            </button>
            <button
              onClick={() => setTheme('traditional')}
              className={`px-2.5 py-1 text-xs rounded-md transition-all ${theme === 'traditional' ? 'bg-emerald-950 text-lime-400 border border-emerald-800 font-medium' : 'text-emerald-500/80 hover:text-emerald-300'}`}
            >
              Culture
            </button>
          </div>

          {/* Toggle pattern overlay */}
          <button
            onClick={() => setShowPatterns(!showPatterns)}
            className={`p-2 rounded-lg transition-all border ${showPatterns ? 'border-emerald-500/30 text-emerald-400 bg-emerald-500/5' : 'border-white/5 text-slate-400 hover:text-white'}`}
            title="Toggle traditional background geometric weave pattern"
          >
            <Sparkles size={16} />
          </button>

          {/* Slide Overview Grid Trigger */}
          <button
            onClick={() => setIsOverview(!isOverview)}
            className={`p-2 rounded-lg transition-all border ${isOverview ? 'border-emerald-500/30 text-emerald-400 bg-emerald-500/5' : 'border-white/5 text-slate-400 hover:text-white'}`}
            title="Overview Grid (Press O)"
          >
            <LayoutGrid size={16} />
          </button>

          {/* Hamburger Menu Navigation */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg border border-white/5 text-slate-400 hover:text-white bg-white/5 transition-all"
            title="Slide Menu (Press M)"
          >
            {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>

          {/* Fullscreen Button */}
          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-lg border border-white/5 text-slate-400 hover:text-white bg-white/5 transition-all"
            title="Fullscreen (Press F)"
          >
            {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
          </button>
        </div>
      </header>

      {/* Main Slide Presentation Window */}
      <main className="relative flex-grow flex items-center justify-center p-4 md:p-8 z-10 overflow-hidden">
        {isOverview ? (
          /* SLIDE SORTER / OVERVIEW GRID */
          <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-4 animate-fade-in">
            <div className="col-span-1 md:col-span-2 mb-2 flex items-center justify-between border-b border-white/10 pb-3">
              <h2 className="text-xl md:text-2xl font-display font-bold">Slide Overview (Sorter)</h2>
              <button
                onClick={() => setIsOverview(false)}
                className="text-xs bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-1.5 rounded-lg transition"
              >
                Close Overview
              </button>
            </div>

            {/* Slide 1 Card */}
            <div
              onClick={() => goToSlide(0)}
              className={`cursor-pointer rounded-xl p-5 border-2 text-left transition-all hover:scale-[1.02] ${currentSlide === 0 ? 'border-emerald-500 bg-emerald-950/20' : 'border-white/10 bg-black/20 hover:border-white/20'}`}
            >
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block mb-1">Slide 1 — Cover</span>
              <h3 className="font-display font-bold text-lg leading-tight mb-2">DIGITALIZING THE RIGWE LANGUAGE</h3>
              <p className="text-xs text-slate-400 line-clamp-2">Preserving our identity through technology and artificial intelligence.</p>
              <div className="mt-4 text-[10px] text-slate-500 font-mono">Presented by: Daniel Turu</div>
            </div>

            {/* Slide 2 Card */}
            <div
              onClick={() => goToSlide(1)}
              className={`cursor-pointer rounded-xl p-5 border-2 text-left transition-all hover:scale-[1.02] ${currentSlide === 1 ? 'border-emerald-500 bg-emerald-950/20' : 'border-white/10 bg-black/20 hover:border-white/20'}`}
            >
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block mb-1">Slide 2 — Presenter</span>
              <h3 className="font-display font-bold text-lg leading-tight mb-2">About Daniel Turu</h3>
              <p className="text-xs text-slate-400 line-clamp-2">CEO, Software Programmer, Tutor, and Student.</p>
              <div className="mt-4 flex gap-1.5">
                <span className="text-[9px] bg-emerald-950 text-emerald-300 px-1.5 py-0.5 rounded">Profile</span>
              </div>
            </div>

            {/* Slide 3 Card */}
            <div
              onClick={() => goToSlide(2)}
              className={`cursor-pointer rounded-xl p-5 border-2 text-left transition-all hover:scale-[1.02] ${currentSlide === 2 ? 'border-emerald-500 bg-emerald-950/20' : 'border-white/10 bg-black/20 hover:border-white/20'}`}
            >
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block mb-1">Slide 3 — Importance</span>
              <h3 className="font-display font-bold text-lg leading-tight mb-2">Why This Project Matters</h3>
              <p className="text-xs text-slate-400 line-clamp-2">Language is more than communication; it carries our identity and heritage.</p>
              <div className="mt-4 flex gap-1.5">
                <span className="text-[9px] bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded">Culture</span>
                <span className="text-[9px] bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded">Pillars</span>
              </div>
            </div>

            {/* Slide 4 Card */}
            <div
              onClick={() => goToSlide(3)}
              className={`cursor-pointer rounded-xl p-5 border-2 text-left transition-all hover:scale-[1.02] ${currentSlide === 3 ? 'border-emerald-500 bg-emerald-950/20' : 'border-white/10 bg-black/20 hover:border-white/20'}`}
            >
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block mb-1">Slide 4 — Vision</span>
              <h3 className="font-display font-bold text-lg leading-tight mb-2">The Big Vision</h3>
              <p className="text-xs text-slate-400 line-clamp-2">Building the Digital Brain of the Rigwe Language.</p>
              <div className="mt-4 flex gap-1.5">
                <span className="text-[9px] bg-emerald-950 text-emerald-300 px-1.5 py-0.5 rounded">Future</span>
              </div>
            </div>

            {/* Slide 5 Card */}
            <div
              onClick={() => goToSlide(4)}
              className={`cursor-pointer rounded-xl p-5 border-2 text-left transition-all hover:scale-[1.02] ${currentSlide === 4 ? 'border-emerald-500 bg-emerald-950/20' : 'border-white/10 bg-black/20 hover:border-white/20'}`}
            >
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block mb-1">Slide 5 — Progress</span>
              <h3 className="font-display font-bold text-lg leading-tight mb-2">What Has Been Built So Far</h3>
              <p className="text-xs text-slate-400 line-clamp-2">Overview of achievements, phoneme systems, and AI preprocessing.</p>
              <div className="mt-4 flex gap-1.5">
                <span className="text-[9px] bg-blue-950 text-blue-300 px-1.5 py-0.5 rounded">Dashboard</span>
              </div>
            </div>

            {/* Slide 6 Card */}
            <div
              onClick={() => goToSlide(5)}
              className={`cursor-pointer rounded-xl p-5 border-2 text-left transition-all hover:scale-[1.02] ${currentSlide === 5 ? 'border-emerald-500 bg-emerald-950/20' : 'border-white/10 bg-black/20 hover:border-white/20'}`}
            >
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block mb-1">Slide 6 — AI Learning</span>
              <h3 className="font-display font-bold text-lg leading-tight mb-2">How AI Learns Language</h3>
              <p className="text-xs text-slate-400 line-clamp-2">Understanding the data required to build strong Rigwe AI systems.</p>
              <div className="mt-4 flex gap-1.5">
                <span className="text-[9px] bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded">Data</span>
              </div>
            </div>

            {/* Slide 7 Card */}
            <div
              onClick={() => goToSlide(6)}
              className={`cursor-pointer rounded-xl p-5 border-2 text-left transition-all hover:scale-[1.02] ${currentSlide === 6 ? 'border-emerald-500 bg-emerald-950/20' : 'border-white/10 bg-black/20 hover:border-white/20'}`}
            >
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block mb-1">Slide 7 — Data Phases</span>
              <h3 className="font-display font-bold text-lg leading-tight mb-2">Data Collection Phases</h3>
              <p className="text-xs text-slate-400 line-clamp-2">Phonemes, Words, Sentences, and Stories.</p>
              <div className="mt-4 flex gap-1.5">
                <span className="text-[9px] bg-purple-950 text-purple-300 px-1.5 py-0.5 rounded">Collection</span>
              </div>
            </div>

            {/* Slide 8 Card */}
            <div
              onClick={() => goToSlide(7)}
              className={`cursor-pointer rounded-xl p-5 border-2 text-left transition-all hover:scale-[1.02] ${currentSlide === 7 ? 'border-emerald-500 bg-emerald-950/20' : 'border-white/10 bg-black/20 hover:border-white/20'}`}
            >
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block mb-1">Slide 8 — Data Standards</span>
              <h3 className="font-display font-bold text-lg leading-tight mb-2">Quality Guidelines</h3>
              <p className="text-xs text-slate-400 line-clamp-2">Good data equals strong AI. Bad data equals weak AI.</p>
              <div className="mt-4 flex gap-1.5">
                <span className="text-[9px] bg-red-950 text-red-300 px-1.5 py-0.5 rounded">Quality</span>
              </div>
            </div>

            {/* Slide 9 Card */}
            <div
              onClick={() => goToSlide(8)}
              className={`cursor-pointer rounded-xl p-5 border-2 text-left transition-all hover:scale-[1.02] ${currentSlide === 8 ? 'border-emerald-500 bg-emerald-950/20' : 'border-white/10 bg-black/20 hover:border-white/20'}`}
            >
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block mb-1">Slide 9 — Roadmap</span>
              <h3 className="font-display font-bold text-lg leading-tight mb-2">Development Roadmap</h3>
              <p className="text-xs text-slate-400 line-clamp-2">The 4-month plan for Foundation, Data, AI, and Public release.</p>
              <div className="mt-4 flex gap-1.5">
                <span className="text-[9px] bg-emerald-950 text-emerald-300 px-1.5 py-0.5 rounded">Timeline</span>
              </div>
            </div>

            {/* Slide 10 Card */}
            <div
              onClick={() => goToSlide(9)}
              className={`cursor-pointer rounded-xl p-5 border-2 text-left transition-all hover:scale-[1.02] ${currentSlide === 9 ? 'border-emerald-500 bg-emerald-950/20' : 'border-white/10 bg-black/20 hover:border-white/20'}`}
            >
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block mb-1">Slide 10 — Future</span>
              <h3 className="font-display font-bold text-lg leading-tight mb-2">Future Opportunities</h3>
              <p className="text-xs text-slate-400 line-clamp-2">Placing the Rigwe language on the global digital map.</p>
              <div className="mt-4 flex gap-1.5">
                <span className="text-[9px] bg-blue-950 text-blue-300 px-1.5 py-0.5 rounded">Global</span>
              </div>
            </div>

            {/* Slide 11 Card */}
            <div 
              onClick={() => goToSlide(10)}
              className={`cursor-pointer rounded-xl p-5 border-2 text-left transition-all hover:scale-[1.02] ${currentSlide === 10 ? 'border-emerald-500 bg-emerald-950/20' : 'border-white/10 bg-black/20 hover:border-white/20'}`}
            >
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block mb-1">Slide 11 — Conclusion</span>
              <h3 className="font-display font-bold text-lg leading-tight mb-2">Thank You</h3>
              <p className="text-xs text-slate-400 line-clamp-2">Appreciation and presenter information.</p>
              <div className="mt-4 flex gap-1.5">
                <span className="text-[9px] bg-emerald-950 text-emerald-300 px-1.5 py-0.5 rounded">Ending</span>
              </div>
            </div>
          </div>
        ) : (
          /* ACTIVE SLIDE CONTAINER */
          <div
            key={currentSlide}
            className={`w-full max-w-6xl mx-auto min-h-[60vh] flex flex-col justify-center relative ${direction === 'next' ? 'animate-slide-next' : 'animate-slide-prev'
              }`}
          >
            {/* SLIDE 1: COVER PAGE */}
            {currentSlide === 0 && <Slide1Cover s={s} />}

            {/* SLIDE 2: ABOUT THE PRESENTER */}
            {currentSlide === 1 && <Slide2Presenter s={s} />}

            {/* SLIDE 3: OPENING / WELCOME */}
            {currentSlide === 2 && <Slide3Welcome s={s} />}

            {/* SLIDE 4: THE BIG VISION */}
            {currentSlide === 3 && <Slide4Vision s={s} />}

            {/* SLIDE 5: CURRENT PROGRESS */}
            {currentSlide === 4 && <Slide5Progress s={s} />}

            {/* SLIDE 6: HOW AI LEARNS */}
            {currentSlide === 5 && <Slide6AILearning s={s} />}

            {/* SLIDE 7: DATA PHASES */}
            {currentSlide === 6 && <Slide7DataPhases s={s} />}

            {/* SLIDE 8: DATA STANDARDS */}
            {currentSlide === 7 && <Slide8DataStandards s={s} />}

            {/* SLIDE 9: PROJECT ROADMAP */}
            {currentSlide === 8 && <Slide9Roadmap s={s} />}

            {/* SLIDE 10: FUTURE POSSIBILITIES */}
            {currentSlide === 9 && <Slide10Future s={s} />}

            {/* SLIDE 11: THANK YOU */}
            {currentSlide === 10 && <Slide11ThankYou s={s} />}

          </div>
        )}
      </main>

      {/* Slide Navigation Menu Sidebar Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-y-0 right-0 w-80 bg-[#0b0e17] border-l border-white/10 z-50 p-6 shadow-2xl flex flex-col justify-between animate-slide-in-right">
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <h3 className="font-display font-bold text-lg text-slate-100 flex items-center gap-2">
                <LayoutGrid size={18} className="text-emerald-400" />
                Select Slide
              </h3>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition"
              >
                <X size={16} />
              </button>
            </div>

            <div className="flex flex-col gap-2">
              {[
                { label: 'Slide 1: Cover Page', desc: 'Digitalizing the Rigwe Language' },
                { label: 'Slide 2: About Presenter', desc: 'Daniel Turu, CEO & Dev' },
                { label: 'Slide 3: Why It Matters', desc: 'Identity, Culture & Digital Survival' },
                { label: 'Slide 4: The Big Vision', desc: 'The Digital Brain of Rigwe' },
                { label: 'Slide 5: Current Progress', desc: 'Phoneme Dashboard & Achievements' },
                { label: 'Slide 6: How AI Learns', desc: 'Data Requirements for Intelligence' },
                { label: 'Slide 7: Data Phases', desc: 'Phonemes to Culture' },
                { label: 'Slide 8: Data Standards', desc: 'Quality Guidelines' },
                { label: 'Slide 9: Project Roadmap', desc: '4-Month Development Plan' },
                { label: 'Slide 10: Future', desc: 'Opportunities & Global Impact' },
                { label: 'Slide 11: Thank You', desc: 'Appreciation & Presenter Info' }
              ].map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`w-full p-3.5 rounded-xl text-left border transition-all flex items-start gap-3 hover-lift ${currentSlide === idx
                    ? 'border-emerald-500 bg-emerald-950/20 text-emerald-300'
                    : 'border-white/5 bg-white/5 text-slate-300 hover:bg-white/10'
                    }`}
                >
                  <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold ${currentSlide === idx ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                    }`}>
                    {idx + 1}
                  </span>
                  <div>
                    <span className="block text-xs font-bold">{item.label}</span>
                    <span className="block text-[10px] text-slate-400 font-medium mt-0.5">{item.desc}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-white/10 pt-4 text-left">
            <span className="text-[10px] text-slate-500 block uppercase tracking-wider font-bold">Project Lead:</span>
            <span className="text-xs text-slate-300 font-medium block">Daniel Turu (CEO, TechBoost NG HUB)</span>
            <span className="text-[10px] text-emerald-500/80 font-bold block mt-1">TechBoost Plateau Language Team</span>
          </div>
        </div>
      )}

      {/* Presentation Footer controls */}
      <footer className="relative z-10 px-6 py-4 border-t border-white/5 bg-black/15 backdrop-blur-sm flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Navigation buttons and progress */}
        <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-start">
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className={`p-2.5 rounded-xl border border-white/5 transition bg-white/5 ${currentSlide === 0 ? 'text-slate-600 cursor-not-allowed' : 'text-slate-300 hover:text-white hover:bg-white/10'}`}
              disabled={currentSlide === 0}
              title="Previous Slide (Left Arrow)"
            >
              <ArrowLeft size={16} />
            </button>

            <span className="text-xs font-mono font-bold text-slate-300 min-w-[70px] text-center">
              Slide {String(currentSlide + 1).padStart(2, '0')} / {String(slidesCount).padStart(2, '0')}
            </span>

            <button
              onClick={nextSlide}
              className={`p-2.5 rounded-xl border border-white/5 transition bg-white/5 ${currentSlide === slidesCount - 1 ? 'text-slate-600 cursor-not-allowed' : 'text-slate-300 hover:text-white hover:bg-white/10'}`}
              disabled={currentSlide === slidesCount - 1}
              title="Next Slide (Right Arrow / Space)"
            >
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Progress bar wrapper */}
          <div className="flex-grow md:w-48 bg-white/10 h-1.5 rounded-full overflow-hidden mx-4 max-w-xs hidden sm:block">
            <div
              className="bg-gradient-to-r from-emerald-500 to-lime-400 h-full rounded-full transition-all duration-300"
              style={{ width: `${((currentSlide + 1) / slidesCount) * 100}%` }}
            />
          </div>
        </div>

        {/* Play/Autoplay controls and help triggers */}
        <div className="flex flex-wrap items-center gap-3 text-xs w-full md:w-auto justify-between md:justify-end">

          {/* Autoplay togglers */}
          <div className="flex items-center gap-2 bg-black/10 border border-white/5 rounded-xl p-1">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`p-1.5 rounded-lg transition-all flex items-center gap-1.5 ${isPlaying ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold' : 'text-slate-400 hover:text-white'}`}
              title="Toggle Slide Auto-Advance"
            >
              {isPlaying ? <Pause size={14} /> : <Play size={14} />}
              <span>{isPlaying ? 'Autoplay On' : 'Autoplay'}</span>
            </button>

            {isPlaying && (
              <select
                value={autoplaySpeed}
                onChange={(e) => setAutoplaySpeed(Number(e.target.value))}
                className="bg-transparent text-slate-300 text-[11px] focus:outline-none border-l border-white/10 pl-1.5 pr-1 font-semibold"
              >
                <option value="5000" className="bg-[#0b0e17] text-white">5s</option>
                <option value="10000" className="bg-[#0b0e17] text-white">10s</option>
                <option value="15000" className="bg-[#0b0e17] text-white">15s</option>
                <option value="20000" className="bg-[#0b0e17] text-white">20s</option>
              </select>
            )}
          </div>

          {/* Divider */}
          <span className="h-4 w-px bg-white/10 hidden sm:block"></span>

          {/* Quick instructions indicator */}
          <div className="hidden lg:flex items-center gap-1.5 text-slate-400 font-medium">
            <span className="px-1.5 py-0.5 bg-white/5 border border-white/10 rounded font-mono text-[10px]">Space</span>
            <span>/</span>
            <span className="px-1.5 py-0.5 bg-white/5 border border-white/10 rounded font-mono text-[10px]">⇄ Arrows</span>
            <span className="text-[11px] ml-1">to navigate</span>
          </div>
        </div>

      </footer>
    </div>
  )
}

export default App
