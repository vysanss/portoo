import { Code2 } from 'lucide-react';

const currentYear = new Date().getFullYear();

const Footer = () => (
  <footer className="py-8 px-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors duration-300">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 text-center sm:text-left">
      <p className="flex items-center gap-1.5">
        Dibuat oleh <span className="font-semibold text-slate-700 dark:text-slate-300">Muhamad Luthfi Hamdani</span>
      </p>
      <p>© {currentYear} Portofolio. All rights reserved.</p>
      <a
        href="https://github.com/vysanss"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 font-medium transition-colors"
      >
        <Code2 size={14} />
        github.com/vysanss
      </a>
    </div>
  </footer>
);

export default Footer;