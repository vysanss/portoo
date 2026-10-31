import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import {
  Server, Database, TestTube, Gauge, GitBranch,
  LayoutTemplate, Wind, Cpu, FileCode, CheckSquare,
  GitCommit, FolderGit2, Users, Flame, Activity,
  Code2, ExternalLink, Calendar
} from 'lucide-react';
import { useThemeContext } from '../context/ThemeContext';

const GITHUB_USER = 'vysanss';

const fallbackLanguages = [
  { name: 'Python', count: 2, percent: 25, color: '#3776AB', dot: 'bg-blue-500' },
  { name: 'JavaScript', count: 2, percent: 22, color: '#F7DF1E', dot: 'bg-yellow-400' },
  { name: 'PHP / Blade', count: 2, percent: 20, color: '#4F5D95', dot: 'bg-indigo-500' },
  { name: 'C#', count: 1, percent: 11, color: '#239120', dot: 'bg-green-600' },
  { name: 'Dart / Flutter', count: 1, percent: 11, color: '#0175C2', dot: 'bg-cyan-500' },
  { name: 'C++', count: 1, percent: 11, color: '#F34B7D', dot: 'bg-pink-500' },
];

const fallbackEvents = [
  {
    id: 'e1',
    type: 'PushEvent',
    repo: 'vysanss/portoo',
    action: 'Pushed commits to main',
    date: '12 Okt 2026',
  },
  {
    id: 'e2',
    type: 'CreateEvent',
    repo: 'vysanss/portoo',
    action: 'Created branch main in portfolio',
    date: '12 Okt 2026',
  },
  {
    id: 'e3',
    type: 'PushEvent',
    repo: 'vysanss/project-kp-satpol-pp',
    action: 'Committed to repository',
    date: 'Aktivitas Terbaru',
  },
];

const skillGroups = [
  {
    category: 'Backend & Architecture',
    icon: Server,
    gradient: 'from-violet-500 to-purple-600',
    bg: 'bg-violet-50/70 dark:bg-violet-900/20',
    border: 'border-violet-200 dark:border-violet-800',
    size: 'col-span-1 md:col-span-2 lg:col-span-2',
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
    bg: 'bg-cyan-50/70 dark:bg-cyan-900/20',
    border: 'border-cyan-200 dark:border-cyan-800',
    size: 'col-span-1 md:col-span-1 lg:col-span-1',
    skills: [
      { name: 'Black-box Testing', icon: CheckSquare, level: 82 },
      { name: 'Performance Testing', icon: Gauge, level: 75 },
    ],
  },
  {
    category: 'Methodologies',
    icon: GitBranch,
    gradient: 'from-emerald-500 to-teal-600',
    bg: 'bg-emerald-50/70 dark:bg-emerald-900/20',
    border: 'border-emerald-200 dark:border-emerald-800',
    size: 'col-span-1 md:col-span-1 lg:col-span-1',
    skills: [
      { name: 'Waterfall & Agile Model', icon: GitBranch, level: 88 },
      { name: 'Git & Version Control', icon: GitBranch, level: 80 },
    ],
  },
  {
    category: 'Frontend & UI',
    icon: LayoutTemplate,
    gradient: 'from-pink-500 to-rose-600',
    bg: 'bg-pink-50/70 dark:bg-pink-900/20',
    border: 'border-pink-200 dark:border-pink-800',
    size: 'col-span-1 md:col-span-2 lg:col-span-2',
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
      className={`${size} p-5 sm:p-6 rounded-3xl border ${border} ${bg} backdrop-blur-sm transition-all duration-300 hover:shadow-lg`}
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

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { theme } = useThemeContext() || { theme: 'dark' };
  const isDark = theme === 'dark';

  // GitHub Live States
  const [profile, setProfile] = useState({
    name: 'Luthfi HM',
    login: GITHUB_USER,
    avatar: 'https://avatars.githubusercontent.com/u/123862774?v=4',
    repos: 11,
    followers: 20,
    following: 21,
    company: 'Telkom University Purwokerto',
  });
  const [languages, setLanguages] = useState(fallbackLanguages);
  const [events, setEvents] = useState(fallbackEvents);
  const [streakError, setStreakError] = useState(false);

  // Fetch real GitHub data
  useEffect(() => {
    let isMounted = true;
    const fetchGitHubData = async () => {
      try {
        // 1. Profile Data
        const userRes = await fetch(`https://api.github.com/users/${GITHUB_USER}`);
        if (userRes.ok) {
          const userData = await userRes.json();
          if (isMounted) {
            setProfile({
              name: userData.name || 'Luthfi HM',
              login: userData.login,
              avatar: userData.avatar_url,
              repos: userData.public_repos || 11,
              followers: userData.followers || 20,
              following: userData.following || 21,
              company: userData.company || 'Telkom University Purwokerto',
            });
          }
        }

        // 2. Repositories Data to compute real languages
        const reposRes = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100`);
        if (reposRes.ok) {
          const reposData = await reposRes.json();
          const counts = {};
          let total = 0;
          reposData.forEach(r => {
            if (r.language) {
              counts[r.language] = (counts[r.language] || 0) + 1;
              total++;
            }
          });

          if (total > 0 && isMounted) {
            const colorMap = {
              'Python': { color: '#3776AB', dot: 'bg-blue-500' },
              'JavaScript': { color: '#F7DF1E', dot: 'bg-yellow-400' },
              'Blade': { color: '#f7523f', dot: 'bg-red-500' },
              'PHP': { color: '#4F5D95', dot: 'bg-indigo-500' },
              'C#': { color: '#239120', dot: 'bg-green-600' },
              'C++': { color: '#F34B7D', dot: 'bg-pink-500' },
              'Dart': { color: '#0175C2', dot: 'bg-cyan-500' },
              'HTML': { color: '#e34c26', dot: 'bg-orange-500' },
              'CSS': { color: '#563d7c', dot: 'bg-purple-600' },
            };

            const computedLangs = Object.entries(counts)
              .map(([lang, count]) => ({
                name: lang === 'Blade' ? 'Blade (Laravel)' : lang,
                count,
                percent: Math.round((count / total) * 100),
                color: colorMap[lang]?.color || '#a855f7',
                dot: colorMap[lang]?.dot || 'bg-violet-500',
              }))
              .sort((a, b) => b.count - a.count);

            setLanguages(computedLangs);
          }
        }

        // 3. Events / Recent Activity
        const eventsRes = await fetch(`https://api.github.com/users/${GITHUB_USER}/events?per_page=6`);
        if (eventsRes.ok) {
          const eventsData = await eventsRes.json();
          if (Array.isArray(eventsData) && eventsData.length > 0 && isMounted) {
            const formatted = eventsData.slice(0, 4).map(e => {
              const dateObj = new Date(e.created_at);
              const formattedDate = dateObj.toLocaleDateString('id-ID', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              });
              let actionDesc = 'Aktivitas di repository';
              if (e.type === 'PushEvent') actionDesc = 'Push commit terbaru';
              else if (e.type === 'CreateEvent') actionDesc = `Membuat ${e.payload?.ref_type || 'cabang/repo'}`;
              else if (e.type === 'WatchEvent') actionDesc = 'Starred repository';

              return {
                id: e.id,
                type: e.type,
                repo: e.repo?.name || 'vysanss/repository',
                action: actionDesc,
                date: formattedDate,
              };
            });
            setEvents(formatted);
          }
        }
      } catch {
        // In case of rate-limiting or network block, fallbacks gracefully remain
      }
    };

    fetchGitHubData();
    return () => { isMounted = false; };
  }, []);

  const streakUrl = isDark
    ? `https://streak-stats.demolab.com?user=${GITHUB_USER}&theme=tokyonight&hide_border=true&background=0d1117&ring=7c3aed&fire=22d3ee&currStreakLabel=a855f7`
    : `https://streak-stats.demolab.com?user=${GITHUB_USER}&theme=default&hide_border=true&background=ffffff&ring=7c3aed&fire=0891b2&currStreakLabel=7c3aed`;

  const chartUrl = `https://ghchart.rshah.org/8b5cf6/${GITHUB_USER}`;

  return (
    <section id="skills" className="py-20 sm:py-24 px-4 bg-slate-50/60 dark:bg-slate-900/50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-violet-600 dark:text-violet-400 mb-2 sm:mb-3">
            Aktivitas & Keahlian
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
            GitHub Activity & Tech Stack
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-full mx-auto" />
        </motion.div>

        {/* ── GITHUB ACTIVITY DASHBOARD ─────────────────────────────── */}
        <div className="mb-16 sm:mb-20">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-sm">
                <GitBranch size={15} className="text-white" />
              </span>
              <span>Live GitHub Activity</span>
            </h3>

            <a
              href={`https://github.com/${GITHUB_USER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-violet-100 dark:bg-slate-800 dark:hover:bg-violet-900/40 text-slate-700 hover:text-violet-600 dark:text-slate-300 dark:hover:text-violet-300 text-xs font-semibold transition-all duration-200"
            >
              <Code2 size={13} />
              @{GITHUB_USER} di GitHub
              <ExternalLink size={11} />
            </a>
          </div>

          {/* GitHub Header Profile & Stat Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            {/* User Profile Card */}
            <div className="flex items-center gap-4 min-w-0">
              <div className="relative">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl object-cover border-2 border-violet-500/40 shadow-md"
                  onError={(e) => {
                    e.target.src = 'https://avatars.githubusercontent.com/u/123862774?v=4';
                  }}
                />
                <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white truncate">
                    {profile.name}
                  </h4>
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300">
                    Pro
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">@{profile.login}</p>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5 truncate">{profile.company}</p>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 w-full md:w-auto pt-4 md:pt-0 border-t md:border-t-0 border-slate-100 dark:border-slate-800">
              <div className="text-center px-3 py-2 rounded-2xl bg-slate-50 dark:bg-slate-800/50">
                <div className="flex items-center justify-center gap-1 text-violet-600 dark:text-violet-400 mb-0.5">
                  <FolderGit2 size={13} />
                  <span className="text-xs font-semibold">Repos</span>
                </div>
                <p className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">{profile.repos}</p>
              </div>

              <div className="text-center px-3 py-2 rounded-2xl bg-slate-50 dark:bg-slate-800/50">
                <div className="flex items-center justify-center gap-1 text-cyan-600 dark:text-cyan-400 mb-0.5">
                  <Users size={13} />
                  <span className="text-xs font-semibold">Followers</span>
                </div>
                <p className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">{profile.followers}</p>
              </div>

              <div className="text-center px-3 py-2 rounded-2xl bg-slate-50 dark:bg-slate-800/50">
                <div className="flex items-center justify-center gap-1 text-emerald-600 dark:text-emerald-400 mb-0.5">
                  <Activity size={13} />
                  <span className="text-xs font-semibold">Following</span>
                </div>
                <p className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">{profile.following}</p>
              </div>
            </div>
          </motion.div>

          {/* ── Middle Row: Top Languages & Streak Stats ─────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
            {/* Top Languages (Real calculated native card, 100% reliable) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-6 p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Code2 size={16} className="text-violet-500" />
                    Bahasa Pemrograman Terbanyak
                  </h4>
                  <span className="text-[11px] font-mono text-slate-400">Top Languages</span>
                </div>

                {/* Multi-color language distribution progress bar */}
                <div className="h-2.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden flex mb-5 shadow-inner">
                  {languages.map((lang) => (
                    <div
                      key={lang.name}
                      style={{ width: `${lang.percent}%`, backgroundColor: lang.color }}
                      title={`${lang.name}: ${lang.percent}%`}
                      className="h-full transition-all duration-500 hover:opacity-80"
                    />
                  ))}
                </div>

                {/* Languages List */}
                <div className="grid grid-cols-2 gap-3">
                  {languages.map((lang) => (
                    <div key={lang.name} className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: lang.color }} />
                        <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 truncate">
                          {lang.name}
                        </span>
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 ml-1">
                        {lang.percent}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/60">
                * Dihitung secara otomatis berdasarkan seluruh public repository aktif.
              </p>
            </motion.div>

            {/* GitHub Streak / Recent Commits Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-6 p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Flame size={16} className="text-amber-500" />
                    GitHub Streak & Komitmen
                  </h4>
                  <span className="text-[11px] font-mono text-emerald-500 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Active
                  </span>
                </div>

                {/* Streak card image if available, else fallback */}
                {!streakError ? (
                  <div className="rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex items-center justify-center p-2 mb-4">
                    <img
                      src={streakUrl}
                      alt="GitHub Streak vysanss"
                      className="w-full h-auto max-h-[170px] object-contain"
                      loading="lazy"
                      onError={() => setStreakError(true)}
                    />
                  </div>
                ) : (
                  <div className="p-4 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 text-center mb-4">
                    <Flame size={24} className="text-amber-500 mx-auto mb-1" />
                    <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">Konsisten Dalam Coding & Software Design</p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Mempertahankan alur belajar dan push berkala di GitHub.</p>
                  </div>
                )}

                {/* Recent Commit Activity List */}
                <div className="space-y-2">
                  <p className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-1.5">
                    <GitCommit size={13} className="text-violet-500" />
                    Riwayat Event Terkini:
                  </p>
                  {events.map((ev) => (
                    <div
                      key={ev.id}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 text-xs"
                    >
                      <div className="flex items-center gap-2 min-w-0 pr-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-500 flex-shrink-0" />
                        <span className="font-semibold text-slate-800 dark:text-slate-200 truncate">
                          {ev.repo}
                        </span>
                        <span className="text-[11px] text-slate-400 hidden sm:inline truncate">
                          ({ev.action})
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 flex-shrink-0">
                        {ev.date}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── Bottom Row: Contribution Graph Heatmap ─────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-violet-500" />
                <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                  Kalender Kontribusi GitHub (Heatmap)
                </h4>
              </div>
              <span className="text-xs text-slate-400">
                1 Tahun Terakhir
              </span>
            </div>

            {/* Heatmap Container */}
            <div className="w-full overflow-x-auto pb-2 scrollbar-thin">
              <div className="min-w-[660px] p-4 rounded-2xl bg-slate-50/70 dark:bg-slate-950/80 border border-slate-200/80 dark:border-slate-800/80 flex items-center justify-center">
                <img
                  src={chartUrl}
                  alt="GitHub Contribution Calendar for vysanss"
                  className="w-full max-w-full h-auto filter contrast-125 dark:brightness-110"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 mt-1 text-[11px] text-slate-400 dark:text-slate-500">
              <span>Kurang aktif</span>
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-sm bg-slate-200 dark:bg-slate-800" />
                <span className="w-2.5 h-2.5 rounded-sm bg-violet-300 dark:bg-violet-900" />
                <span className="w-2.5 h-2.5 rounded-sm bg-violet-400 dark:bg-violet-700" />
                <span className="w-2.5 h-2.5 rounded-sm bg-violet-500 dark:bg-violet-500" />
                <span className="w-2.5 h-2.5 rounded-sm bg-violet-600 dark:bg-violet-400" />
              </div>
              <span>Sangat aktif</span>
            </div>
          </motion.div>
        </div>

        {/* ── TECH STACK (SKILL CARDS BENTO GRID) ──────────────────── */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2.5">
            <span className="w-7 h-7 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-sm">
              <Server size={15} className="text-white" />
            </span>
            Keahlian Teknis & Tech Stack
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