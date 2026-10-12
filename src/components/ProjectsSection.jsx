import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ExternalLink, Code2, Star, GitFork, BookOpen, RefreshCw } from 'lucide-react';

// Language colors
const langColors = {
  'Blade': { bg: 'bg-red-100 dark:bg-red-900/40', text: 'text-red-700 dark:text-red-300', dot: 'bg-red-500' },
  'PHP': { bg: 'bg-indigo-100 dark:bg-indigo-900/40', text: 'text-indigo-700 dark:text-indigo-300', dot: 'bg-indigo-500' },
  'Python': { bg: 'bg-yellow-100 dark:bg-yellow-900/40', text: 'text-yellow-700 dark:text-yellow-300', dot: 'bg-yellow-500' },
  'JavaScript': { bg: 'bg-yellow-100 dark:bg-yellow-900/40', text: 'text-yellow-700 dark:text-yellow-300', dot: 'bg-yellow-400' },
  'TypeScript': { bg: 'bg-blue-100 dark:bg-blue-900/40', text: 'text-blue-700 dark:text-blue-300', dot: 'bg-blue-500' },
  'C#': { bg: 'bg-purple-100 dark:bg-purple-900/40', text: 'text-purple-700 dark:text-purple-300', dot: 'bg-purple-500' },
  'C++': { bg: 'bg-pink-100 dark:bg-pink-900/40', text: 'text-pink-700 dark:text-pink-300', dot: 'bg-pink-500' },
  'Dart': { bg: 'bg-cyan-100 dark:bg-cyan-900/40', text: 'text-cyan-700 dark:text-cyan-300', dot: 'bg-cyan-500' },
  'HTML': { bg: 'bg-orange-100 dark:bg-orange-900/40', text: 'text-orange-700 dark:text-orange-300', dot: 'bg-orange-500' },
  'CSS': { bg: 'bg-blue-100 dark:bg-blue-900/40', text: 'text-blue-700 dark:text-blue-300', dot: 'bg-blue-400' },
  'default': { bg: 'bg-slate-100 dark:bg-slate-700/60', text: 'text-slate-600 dark:text-slate-300', dot: 'bg-slate-400' },
};

// Friendly repo name formatter
const formatRepoName = (name) =>
  name.replace(/_/g, ' ').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()).slice(0, 50);

// Friendly description fallbacks
const descriptionFallback = {
  'portoo': 'Website portofolio personal dengan React, Tailwind CSS, dan Framer Motion.',
  'project-kp-satpol-pp': 'Sistem manajemen kegiatan Satuan Polisi Pamong Praja berbasis web dengan Laravel.',
  'ecoscope_wonosobo': 'Aplikasi monitoring ekosistem lingkungan untuk wilayah Wonosobo berbasis Python.',
  'KPL_Muhamad-Luthfi-Hamdani_2211104020_SE0601': 'Tugas besar Konstruksi Perangkat Lunak — implementasi software engineering C#.',
  'COTS_2211104020_Muhamad-Luthfi-Hamdani': 'Pengembangan sistem berbasis C++ untuk mata kuliah Componen Off-The-Shelf.',
  'PPB_MUHAMAD_LUTHFI_HAMDANI_2211104020_S1SE-06-01': 'Aplikasi mobile cross-platform dengan Flutter/Dart untuk tugas besar PPB.',
  'TUBES-DPW-1': 'Tugas Besar Desain Pemrograman Web — proyek web development semester awal.',
  'MKEPL-BigTask-TeamSponTan': 'Proyek kolaborasi tim untuk mata kuliah Manajemen Kualitas Perangkat Lunak.',
  'vysanss': 'GitHub Profile README — menampilkan informasi dan stats developer.',
};

const RepoCard = ({ repo, index, featured = false }) => {
  const langColor = langColors[repo.language] || langColors['default'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      whileHover={{ y: -5 }}
      className={`group flex flex-col rounded-2xl border overflow-hidden transition-all duration-300
        ${featured
          ? 'bg-gradient-to-br from-violet-50 via-white to-cyan-50 dark:from-violet-900/20 dark:via-slate-800/80 dark:to-cyan-900/20 border-violet-300 dark:border-violet-700 shadow-lg shadow-violet-100 dark:shadow-violet-900/20'
          : 'bg-white dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 hover:border-violet-300 dark:hover:border-violet-700 hover:shadow-lg'
        }`}
    >
      <div className={`h-1 w-full ${featured ? 'bg-gradient-to-r from-violet-500 to-cyan-500' : 'bg-slate-200 dark:bg-slate-700 group-hover:bg-gradient-to-r group-hover:from-violet-500 group-hover:to-cyan-500'} transition-all duration-500`} />

      <div className="flex flex-col flex-1 p-5">
        {/* Header */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex items-center gap-2 min-w-0">
            <BookOpen size={15} className="text-violet-500 flex-shrink-0" />
            <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-snug group-hover:text-violet-700 dark:group-hover:text-violet-300 transition-colors truncate">
              {formatRepoName(repo.name)}
            </h3>
          </div>
          {featured && (
            <span className="flex-shrink-0 flex items-center gap-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 text-white text-xs font-bold">
              <Star size={9} fill="currentColor" /> Featured
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed flex-1 mb-4 line-clamp-2">
          {repo.description || descriptionFallback[repo.name] || 'Repository GitHub.'}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
            {repo.language && (
              <span className="flex items-center gap-1">
                <span className={`w-2.5 h-2.5 rounded-full ${langColor.dot}`} />
                {repo.language}
              </span>
            )}
            {repo.stargazers_count > 0 && (
              <span className="flex items-center gap-1">
                <Star size={11} /> {repo.stargazers_count}
              </span>
            )}
            {repo.forks_count > 0 && (
              <span className="flex items-center gap-1">
                <GitFork size={11} /> {repo.forks_count}
              </span>
            )}
          </div>
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-semibold text-violet-600 dark:text-violet-400 hover:text-violet-800 dark:hover:text-violet-300 transition-colors"
          >
            <Code2 size={13} /> Code
            <ExternalLink size={11} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const FEATURED = 'project-kp-satpol-pp';

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchRepos = async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch('https://api.github.com/users/vysanss/repos?sort=updated&per_page=20');
      if (!res.ok) throw new Error();
      const data = await res.json();
      // Filter out profile README repo
      setRepos(data.filter(r => r.name !== 'vysanss'));
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchRepos(); }, []);

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-violet-600 dark:text-violet-400 mb-3">
            Portfolio
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            GitHub Repositories
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-full mx-auto mb-4" />
          <a
            href="https://github.com/vysanss"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
          >
            <Code2 size={14} />
            github.com/vysanss
            <ExternalLink size={12} />
          </a>
        </motion.div>

        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 rounded-full border-4 border-violet-200 dark:border-violet-900 border-t-violet-600 animate-spin" />
              <p className="text-sm text-slate-400">Memuat repository...</p>
            </div>
          </div>
        )}

        {error && (
          <div className="flex justify-center py-16">
            <div className="text-center">
              <p className="text-slate-500 dark:text-slate-400 mb-4">Gagal memuat repository.</p>
              <button onClick={fetchRepos} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-sm font-medium hover:bg-violet-200 transition-colors">
                <RefreshCw size={14} /> Coba lagi
              </button>
            </div>
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {repos.map((repo, i) => (
              <RepoCard
                key={repo.id}
                repo={repo}
                index={i}
                featured={repo.name === FEATURED}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
