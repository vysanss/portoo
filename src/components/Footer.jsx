import { Heart, Code2 } from 'lucide-react';

const Footer = () => (
  <footer className="py-8 px-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors duration-300">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500 dark:text-slate-400">
      <p className="flex items-center gap-1.5">
        Dibuat dengan <Heart size={14} className="text-rose-500 fill-rose-500" /> menggunakan React & Tailwind CSS
      </p>
      <p>© {new Date().getFullYear()} Portofolio. All rights reserved.</p>
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
      >
        <Code2 size={14} />
        Source Code
      </a>
    </div>
  </footer>
);

export default Footer;
