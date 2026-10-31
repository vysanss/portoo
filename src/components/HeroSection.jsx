import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { ArrowDown, Download, BookOpen, FolderGit2, Coffee } from 'lucide-react';

// ── Spinning ring SVG ──────────────────────────────────────────────
const SpinningRing = () => (
  <svg
    className="absolute inset-0 w-full h-full"
    viewBox="0 0 340 340"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Outer dashed gradient ring – slow spin */}
    <motion.circle
      cx="170" cy="170" r="162"
      stroke="url(#ringGrad1)"
      strokeWidth="2.5"
      strokeDasharray="18 10"
      strokeLinecap="round"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 22, ease: 'linear' }}
      style={{ transformOrigin: 'center' }}
    />
    {/* Inner solid arc – fast counter-spin */}
    <motion.circle
      cx="170" cy="170" r="142"
      stroke="url(#ringGrad2)"
      strokeWidth="3"
      strokeDasharray="60 400"
      strokeLinecap="round"
      animate={{ rotate: -360 }}
      transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
      style={{ transformOrigin: 'center' }}
    />
    {/* Floating dot accent */}
    <motion.circle
      cx="170" cy="8" r="6"
      fill="url(#ringGrad1)"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
      style={{ transformOrigin: 'center' }}
    />
    <defs>
      <linearGradient id="ringGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#7c3aed" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
      <linearGradient id="ringGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
    </defs>
  </svg>
);

// ── Animated counter ───────────────────────────────────────────────
const CountUp = ({ target, duration = 1.5 }) => {
  const ref = useRef(null);
  useEffect(() => {
    let start = 0;
    const step = target / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { start = target; clearInterval(timer); }
      if (ref.current) ref.current.textContent = Math.floor(start);
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [target, duration]);
  return <span ref={ref}>0</span>;
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-4rem)] lg:min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-20 pb-12 sm:pt-24 sm:pb-16"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-violet-500/15 dark:bg-violet-600/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-cyan-500/15 dark:bg-cyan-600/15 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] sm:bg-[size:48px_48px] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* ── LEFT: Text Content ────────────────────────────────── */}
          <div className="flex flex-col items-start text-left order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={0}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-4 sm:mb-6 rounded-full border border-violet-300 dark:border-violet-700 bg-violet-50 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-xs sm:text-sm font-medium"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500" />
              </span>
              Available for opportunities
            </motion.div>

            {/* Quote ornament */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={0.5}
              className="mb-4 sm:mb-5 pl-3 sm:pl-4 border-l-4 border-violet-500 dark:border-violet-400"
            >
              <p className="text-sm sm:text-base italic text-slate-500 dark:text-slate-400 leading-relaxed">
                "Kode yang baik bukan hanya yang berjalan,<br />
                tapi yang <span className="text-violet-600 dark:text-violet-400 not-italic font-semibold">mudah dipahami dan dipelihara</span>."
              </p>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp} initial="hidden" animate="visible" custom={1}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3 sm:mb-4"
            >
              Muhamad Luthfi<br />
              <span className="bg-gradient-to-r from-violet-600 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Hamdani
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp} initial="hidden" animate="visible" custom={2}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-6 sm:mb-8 leading-relaxed"
            >
              Full Stack Developer & Software Engineer •{' '}
              <span className="font-medium text-slate-700 dark:text-slate-300">Telkom University</span>
            </motion.p>

            {/* GitHub repo ornament */}
            <motion.a
              variants={fadeUp} initial="hidden" animate="visible" custom={2.5}
              href="https://github.com/vysanss"
              target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-3 px-4 sm:px-5 py-2.5 sm:py-3 mb-6 sm:mb-8 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:border-violet-400 dark:hover:border-violet-600 transition-all duration-300 group max-w-full"
            >
              <FolderGit2 size={22} className="text-violet-600 dark:text-violet-400 group-hover:scale-110 transition-transform flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">GitHub @vysanss</p>
                <p className="text-base sm:text-lg font-bold text-slate-900 dark:text-white truncate">
                  <CountUp target={14} duration={1.8} /> Repositories
                </p>
              </div>
              <BookOpen size={16} className="ml-2 sm:ml-4 text-slate-400 group-hover:text-violet-500 transition-colors flex-shrink-0" />
            </motion.a>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={3}
              className="flex flex-col gap-3 w-full"
            >
              {/* Row 1: Portofolio Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
                <a
                  href="#p2mw"
                  className="group relative inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-violet-600 text-white font-semibold text-xs sm:text-sm shadow-md shadow-amber-500/20 hover:shadow-lg hover:shadow-amber-500/35 hover:scale-105 transition-all duration-300 text-center"
                >
                  <Coffee size={16} className="text-amber-200 flex-shrink-0" />
                  Lihat Portofolio P2MW
                  <ArrowDown size={15} className="group-hover:translate-y-0.5 transition-transform flex-shrink-0" />
                </a>

                <a
                  href="#projects"
                  className="group relative inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold text-xs sm:text-sm shadow-md shadow-violet-500/20 hover:shadow-lg hover:shadow-violet-500/35 hover:scale-105 transition-all duration-300 text-center"
                >
                  <FolderGit2 size={16} className="flex-shrink-0" />
                  Porto Repository
                  <ArrowDown size={15} className="group-hover:translate-y-0.5 transition-transform flex-shrink-0" />
                </a>
              </div>

              {/* Row 2: CV Downloads */}
              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
                <a
                  href="/cv.pdf"
                  download="CV_Muhamad_Luthfi_Hamdani_Developer.pdf"
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-xs sm:text-sm bg-white/70 dark:bg-slate-800/70 hover:bg-white dark:hover:bg-slate-800 hover:border-violet-400 dark:hover:border-violet-600 hover:scale-105 transition-all duration-300 backdrop-blur-sm text-center"
                >
                  <Download size={15} className="flex-shrink-0" />
                  Unduh CV Developer
                </a>

                <a
                  href="/cv-barista.pdf"
                  download="CV_Muhamad_Luthfi_Hamdani_Barista.pdf"
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 rounded-full border border-amber-300 dark:border-amber-700/80 text-amber-800 dark:text-amber-200 font-semibold text-xs sm:text-sm bg-amber-50/70 dark:bg-amber-950/40 hover:bg-amber-100 dark:hover:bg-amber-900/40 hover:border-amber-400 dark:hover:border-amber-500 hover:scale-105 transition-all duration-300 backdrop-blur-sm text-center"
                >
                  <Coffee size={15} className="text-amber-600 dark:text-amber-400 flex-shrink-0" />
                  Unduh CV Barista
                </a>
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT: Photo with spinning ring (Fully Responsive) ─── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
            className="relative flex items-center justify-center order-1 lg:order-2 py-4"
          >
            {/* Glow behind photo */}
            <div className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] rounded-full bg-gradient-to-br from-violet-500/25 to-cyan-500/25 blur-3xl pointer-events-none" />

            {/* Spinning rings container */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] max-w-full">
              <SpinningRing />

              {/* Photo circle */}
              <div className="absolute inset-4 sm:inset-6 rounded-full overflow-hidden border-4 border-white dark:border-slate-900 shadow-2xl shadow-violet-500/20">
                <img
                  src="/photo.jpg"
                  alt="Muhamad Luthfi Hamdani"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Status badge overlay */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -bottom-2 sm:bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg text-xs font-semibold text-slate-700 dark:text-slate-200 whitespace-nowrap z-10"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                <div className="flex flex-col items-start gap-0.5 leading-none">
                  <span>Software Engineer</span>
                  <span className="text-[10px] font-normal text-slate-400 dark:text-slate-500">
                    Telkom University
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="hidden md:flex absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-slate-400"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;