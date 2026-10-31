import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Layers, Coffee, Sparkles } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const highlights = [
    {
      icon: Code2,
      label: 'Full Stack Developer',
      desc: 'Frontend, backend & web development',
    },
    {
      icon: Layers,
      label: 'System Development',
      desc: 'API design, database & system architecture',
    },
    {
      icon: Coffee,
      label: 'Barista & Coffee Enthusiast',
      desc: 'Coffee brewing, barista & startup venture',
    },
    {
      icon: Sparkles,
      label: 'Creative & Adaptable',
      desc: 'Problem solving, teamwork & business administration',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {/* Section Header */}
          <motion.div variants={fadeUp} className="text-center mb-12 sm:mb-16">
            <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-violet-600 dark:text-violet-400 mb-2 sm:mb-3">
              Tentang Saya
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
              Who Am I?
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-full mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Text Content */}
            <motion.div variants={fadeUp} className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Halo! Saya seorang <strong className="text-violet-600 dark:text-violet-400">Full stack Developer</strong> dengan latar belakang pendidikan <strong className="text-slate-900 dark:text-white">S1 Rekayasa Perangkat Lunak</strong> di Telkom University. Saya memiliki ketertarikan mendalam pada pengembangan aplikasi web, mulai dari perancangan antarmuka, pengembangan backend, pengelolaan database, hingga membangun sistem yang fungsional dan mudah digunakan.
              </p>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Saya terbiasa mengembangkan aplikasi menggunakan berbagai teknologi seperti JavaScript, PHP, Python, Laravel, dan berbagai teknologi web lainnya. Saya menikmati proses membangun solusi digital, memecahkan masalah teknis, serta mengembangkan sistem yang <em className="text-cyan-600 dark:text-cyan-400">efisien, terukur, dan mudah dipelihara</em>.
              </p>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Di luar dunia teknologi, saya juga memiliki pengalaman di industri kopi sebagai <strong className="text-slate-900 dark:text-white">Barista</strong> dan Kasir. Ketertarikan ini juga mengantarkan saya dan tim meraih pendanaan nasional melalui program <strong className="text-amber-600 dark:text-amber-400">P2MW 2024 Kemendikbudristek</strong> untuk brand <em>Kopi Cemplung</em>, di mana saya dipercaya memegang peran strategis sebagai Bendahara sekaligus Sekretaris.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 pt-2">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="inline-flex items-center gap-2.5 sm:gap-3 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl bg-gradient-to-r from-violet-50 to-cyan-50 dark:from-violet-900/20 dark:to-cyan-900/20 border border-violet-200 dark:border-violet-800"
                >
                  <Sparkles size={18} className="text-violet-600 dark:text-violet-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-violet-700 dark:text-violet-300">
                    Open to internship & collaborative projects
                  </span>
                </motion.div>


              </div>
            </motion.div>

            {/* Highlight Cards */}
            <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {highlights.map(({ icon: Icon, label, desc }) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.03, y: -3 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-violet-100 dark:hover:shadow-violet-900/30 hover:border-violet-300 dark:hover:border-violet-700 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-violet-100 dark:bg-violet-900/40 flex items-center justify-center mb-3">
                    <Icon size={20} className="text-violet-600 dark:text-violet-400" />
                  </div>
                  <p className="font-semibold text-slate-900 dark:text-white text-sm">{label}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;