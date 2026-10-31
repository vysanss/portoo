import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Layers, BookOpen, Sparkles } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    { icon: Code2, label: 'Full Stack Developer', desc: 'Frontend, backend & web development' },
    { icon: Layers, label: 'System Development', desc: 'API design, database & system architecture' },
    { icon: Coffee, label: 'Barista & Coffee Enthusiast', desc: 'Coffee brewing & customer service' },
    { icon: Sparkles, label: 'Creative & Adaptable', desc: 'Problem solving, teamwork & creativity' },
  ];

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {/* Section Header */}
          <motion.div variants={fadeUp} className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase text-violet-600 dark:text-violet-400 mb-3">
              Tentang Saya
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Who Am I?
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-full mx-auto" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div variants={fadeUp} className="space-y-6">
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Halo! Saya seorang <strong className="text-violet-600 dark:text-violet-400">Full stack Developer</strong> dengan latar belakang pendidikan <strong className="text-slate-900 dark:text-white">S1 Rekayasa Perangkat Lunak</strong> .Saya memiliki ketertarikan pada pengembangan aplikasi web, mulai dari perancangan antarmuka, pengembangan backend, pengelolaan database, hingga membangun sistem yang fungsional dan mudah digunakan.
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Saya terbiasa mengembangkan aplikasi menggunakan berbagai teknologi seperti JavaScript, PHP, Python, Laravel, dan berbagai teknologi web lainnya. Saya menikmati proses membangun solusi digital, memecahkan masalah teknis, serta mengembangkan sistem yang <em className="text-cyan-600 dark:text-cyan-400">efisien, terukur, dan mudah dipelihara</em>.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Di luar dunia teknologi, saya juga memiliki pengalaman bekerja sebagai <strong className="text-slate-900 dark:text-white">Barista</strong> dan Kasir di industri coffee shop. Saya terbiasa menangani pelayanan pelanggan, mengoperasikan kasir, melakukan pembukuan transaksi pada akhir shift, serta membuat konten kreatif untuk kebutuhan media sosial. Pengalaman ini membentuk kemampuan komunikasi, kerja sama tim, ketelitian, dan adaptasi saya dalam lingkungan kerja.
              </p>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-violet-50 to-cyan-50 dark:from-violet-900/20 dark:to-cyan-900/20 border border-violet-200 dark:border-violet-800"
              >
                <Sparkles size={18} className="text-violet-600 dark:text-violet-400" />
                <span className="text-sm font-medium text-violet-700 dark:text-violet-300">
                  Open to internship & collaborative projects
                </span>
              </motion.div>
            </motion.div>

            {/* Highlight Cards */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, label, desc }, i) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.04, y: -4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-violet-100 dark:hover:shadow-violet-900/30 hover:border-violet-300 dark:hover:border-violet-700 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-violet-100 dark:bg-violet-900/40 flex items-center justify-center mb-3">
                    <Icon size={20} className="text-violet-600 dark:text-violet-400" />
                  </div>
                  <p className="font-semibold text-slate-900 dark:text-white text-sm">{label}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{desc}</p>
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
