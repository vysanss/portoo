import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Server, Database, TestTube, Gauge, GitBranch,
  LayoutTemplate, Wind, Cpu, FileCode, CheckSquare
} from 'lucide-react';
import { useThemeContext } from '../context/ThemeContext';

const GITHUB_USER = 'vysanss';

// GitHub Stats image URLs (github-readme-stats)
const statsImages = [
  {
    label: 'Top Languages',
    url: `https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USER}&layout=compact&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=a855f7&text_color=94a3b8`,
    urlLight: `https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USER}&layout=compact&theme=default&hide_border=true&bg_color=f8fafc&title_color=7c3aed&text_color=475569`,
  },
  {
    label: 'GitHub Streak',
    url: `https://streak-stats.demolab.com?user=${GITHUB_USER}&theme=tokyonight&hide_border=true&background=0d1117&ring=7c3aed&fire=22d3ee&currStreakLabel=a855f7`,
    urlLight: `https://streak-stats.demolab.com?user=${GITHUB_USER}&theme=default&hide_border=true&background=f8fafc&ring=7c3aed&fire=0891b2&currStreakLabel=7c3aed`,
  },
];

const skillGroups = [
  {
    category: 'Backend & Architecture',
    icon: Server,
    gradient: 'from-violet-500 to-purple-600',
    bg: 'bg-violet-50 dark:bg-violet-900/20',
    border: 'border-violet-200 dark:border-violet-800',
    size: 'lg:col-span-2',
    skills: [
      { name: 'REST API Design', icon: Server, level: 85 },
      { name: 'MySQL / PostgreSQL', icon: Database, level: 80 },
      { name: 'PHP (Laravel)', icon: FileCode, level: 78 },
      { name: 'Node.js / Express', icon: Cpu, level: 70 },
    ],
  },
  {
    category: 'Testing & Quality',
    icon: TestTube,
    gradient: 'from-cyan-500 to-sky-600',
    bg: 'bg-cyan-50 dark:bg-cyan-900/20',
    border: 'border-cyan-200 dark:border-cyan-800',
    size: '',
    skills: [
      { name: 'Black-box Testing', icon: CheckSquare, level: 82 },
      { name: 'Performance Testing', icon: Gauge, level: 75 },
    ],
  },
  {
    category: 'Methodologies',
    icon: GitBranch,
    gradient: 'from-emerald-500 to-teal-600',
    bg: 'bg-emerald-50 dark:bg-emerald-900/20',
    border: 'border-emerald-200 dark:border-emerald-800',
    size: '',
    skills: [
      { name: 'Waterfall Model', icon: GitBranch, level: 88 },
      { name: 'Git & Version Control', icon: GitBranch, level: 80 },
    ],
  },
  {
    category: 'Frontend',
    icon: LayoutTemplate,
    gradient: 'from-pink-500 to-rose-600',
    bg: 'bg-pink-50 dark:bg-pink-900/20',
    border: 'border-pink-200 dark:border-pink-800',
    size: 'lg:col-span-3',
    skills: [
      { name: 'React.js', icon: Cpu, level: 75 },
      { name: 'Tailwind CSS', icon: Wind, level: 82 },
      { name: 'HTML5 / CSS3', icon: LayoutTemplate, level: 88 },
      { name: 'JavaScript (ES6+)', icon: FileCode, level: 78 },
    ],
  },
];

const SkillBar = ({ name, level }) => (
  <div className="mb-3 last:mb-0">
    <div className="flex justify-between text-xs font-medium text-slate-600 dark:text-slate-400 mb-1.5">
      <span>{name}</span>
      <span>{level}%</span>
    </div>
    <div className="h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
      />
    </div>
  </div>
);

const SkillCard = ({ group, index }) => {
  const { category, icon: Icon, gradient, bg, border, size, skills } = group;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className={`${size} p-6 rounded-2xl border ${border} ${bg} backdrop-blur-sm transition-all duration-300 hover:shadow-lg`}
    >
      <div className="flex items-center gap-3 mb-5">
        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-sm`}>
          <Icon size={18} className="text-white" />
        </div>
        <h3 className="font-bold text-slate-900 dark:text-white text-base">{category}</h3>
      </div>
      {skills.map(skill => <SkillBar key={skill.name} name={skill.name} level={skill.level} />)}
    </motion.div>
  );
};

// GitHub Stats Card component
const GitHubStatCard = ({ stat, index, isDark }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.6, delay: index * 0.15 }}
    whileHover={{ y: -4, scale: 1.02 }}
    className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-300"
  >
    <img
      src={isDark ? stat.url : stat.urlLight}
      alt={stat.label}
      className="w-full h-auto"
      loading="lazy"
      onError={(e) => { e.target.style.display = 'none'; }}
    />
  </motion.div>
);

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const { theme } = useThemeContext() || { theme: 'dark' };
  const isDark = theme === 'dark';

  return (
    <section id="skills" className="py-24 px-4 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-violet-600 dark:text-violet-400 mb-3">
            Keahlian
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Skills & GitHub Stats
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-full mx-auto" />
        </motion.div>

        {/* GitHub Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-5 flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center">
              <GitBranch size={13} className="text-white" />
            </span>
            GitHub Activity
            <a
              href="https://github.com/vysanss"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-normal text-violet-500 hover:underline ml-1"
            >
              @vysanss ↗
            </a>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {statsImages.map((stat, i) => (
              <GitHubStatCard key={stat.label} stat={stat} index={i} isDark={isDark} />
            ))}
          </div>
        </motion.div>

        {/* Skill Cards Bento Grid */}
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-5 flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center">
              <Server size={13} className="text-white" />
            </span>
            Tech Stack
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillGroups.map((group, i) => (
              <SkillCard key={group.category} group={group} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
