import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Send, Mail, CheckCircle, AlertCircle, ExternalLink } from 'lucide-react';

// ── Social link data ───────────────────────────────────────────────
const socialLinks = [
  {
    label: 'GitHub',
    value: '@vysanss',
    href: 'https://github.com/vysanss',
    color: 'hover:text-slate-900 dark:hover:text-white',
    bg: 'hover:bg-slate-100 dark:hover:bg-slate-700',
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'Muhamad Luthfi Hamdani',
    href: 'https://www.linkedin.com/in/luthfiihm/',
    color: 'hover:text-sky-600 dark:hover:text-sky-400',
    bg: 'hover:bg-sky-50 dark:hover:bg-sky-900/30',
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    value: '@luthfiihm_',
    href: 'https://www.instagram.com/luthfiihm_/',
    color: 'hover:text-pink-600 dark:hover:text-pink-400',
    bg: 'hover:bg-pink-50 dark:hover:bg-pink-900/30',
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    value: '+62 821 1877 8954',
    href: 'https://wa.me/6282118778954',
    color: 'hover:text-emerald-600 dark:hover:text-emerald-400',
    bg: 'hover:bg-emerald-50 dark:hover:bg-emerald-900/30',
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'hmluthfihm@gmail.com',
    href: 'mailto:hmluthfihm@gmail.com',
    color: 'hover:text-violet-600 dark:hover:text-violet-400',
    bg: 'hover:bg-violet-50 dark:hover:bg-violet-900/30',
    icon: () => <Mail className="w-5 h-5" />,
  },
];

// ── Form helpers ───────────────────────────────────────────────────
const inputClass = `w-full px-4 py-3 rounded-xl border text-base sm:text-sm font-medium
  bg-white dark:bg-slate-800/60 text-slate-900 dark:text-white
  placeholder:text-slate-400 dark:placeholder:text-slate-500
  border-slate-200 dark:border-slate-700
  focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent
  transition-all duration-200`;

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | success

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Nama wajib diisi.';
    if (!form.email.trim()) e.email = 'Email wajib diisi.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Format email tidak valid.';
    if (!form.message.trim()) e.message = 'Pesan wajib diisi.';
    else if (form.message.trim().length < 10) e.message = 'Pesan minimal 10 karakter.';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    const subject = `[Portfolio] Pesan dari ${form.name}`;
    const body = `Halo Luthfi,\n\nNama: ${form.name}\nEmail Pengirim: ${form.email}\n\nPesan:\n${form.message}\n\n---\nDikirim melalui formulir portofolio`;

    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=hmluthfihm@gmail.com&su=${encodedSubject}&body=${encodedBody}`;
    const mailtoUrl = `mailto:hmluthfihm@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;

    setStatus('success');

    // On mobile devices, mailto directly invokes the Gmail / Mail native app
    const isMobile = typeof navigator !== 'undefined' && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = mailtoUrl;
    } else {
      // Desktop: Open Gmail web compose in a new tab
      const win = window.open(gmailUrl, '_blank');
      if (!win) {
        window.location.href = mailtoUrl;
      }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="contact" className="py-20 sm:py-24 px-4 bg-slate-50/60 dark:bg-slate-900/50 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="text-center mb-12 sm:mb-16">
            <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-violet-600 dark:text-violet-400 mb-2 sm:mb-3">
              Hubungi Saya
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
              Let's Work Together
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-full mx-auto mb-4" />
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-lg mx-auto">
              Ada proyek menarik, kolaborasi startup, atau peluang kerja sama? Jangan ragu untuk menghubungi saya.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
            {/* Social Links */}
            <motion.div variants={fadeUp} className="lg:col-span-2 flex flex-col gap-3">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1">Find me on</h3>
              {socialLinks.map(({ icon: Icon, label, value, href, color, bg }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className={`flex items-center gap-3 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 ${color} ${bg} transition-all duration-200 group`}
                >
                  <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-700 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">{label}</p>
                    <p className="text-xs sm:text-sm font-semibold truncate">{value}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={fadeUp} className="lg:col-span-3">
              <div className="p-5 sm:p-8 rounded-3xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 shadow-sm">
                <p className="text-xs text-slate-400 dark:text-slate-500 mb-4 flex items-center gap-1.5">
                  <Mail size={12} className="flex-shrink-0" />
                  <span>Pesan langsung diteruskan ke Gmail: <span className="font-semibold text-violet-500">hmluthfihm@gmail.com</span></span>
                </p>

                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center gap-4 py-8 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                      <CheckCircle size={32} className="text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">Mengarahkan ke Gmail!</h3>
                      <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm max-w-sm mx-auto leading-relaxed">
                        Halaman compose Gmail telah dibuka dengan subjek, email pengirim ({form.email}), dan pesan Anda yang sudah terisi otomatis.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-2 pt-2 w-full sm:w-auto">
                      <a
                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=hmluthfihm@gmail.com&su=${encodeURIComponent(`[Portfolio] Pesan dari ${form.name}`)}&body=${encodeURIComponent(`Halo Luthfi,\n\nNama: ${form.name}\nEmail Pengirim: ${form.email}\n\nPesan:\n${form.message}\n\n---\nDikirim melalui formulir portofolio`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-xs font-semibold shadow-md shadow-violet-500/20 transition-all"
                      >
                        <Mail size={14} />
                        Buka di Gmail Web
                        <ExternalLink size={12} />
                      </a>
                      <a
                        href={`mailto:hmluthfihm@gmail.com?subject=${encodeURIComponent(`[Portfolio] Pesan dari ${form.name}`)}&body=${encodeURIComponent(`Halo Luthfi,\n\nNama: ${form.name}\nEmail Pengirim: ${form.email}\n\nPesan:\n${form.message}\n\n---\nDikirim melalui formulir portofolio`)}`}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold transition-colors"
                      >
                        Buka Aplikasi Email
                      </a>
                    </div>

                    <button
                      onClick={() => {
                        setStatus('idle');
                        setForm({ name: '', email: '', message: '' });
                      }}
                      className="mt-2 text-xs font-medium text-violet-600 dark:text-violet-400 hover:underline"
                    >
                      Kirim pesan lain
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Nama</label>
                      <input type="text" name="name" value={form.name} onChange={handleChange}
                        placeholder="John Doe"
                        className={`${inputClass} ${errors.name ? 'border-red-400 focus:ring-red-400' : ''}`} />
                      {errors.name && <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1"><AlertCircle size={12} />{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Email Anda</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange}
                        placeholder="john@example.com"
                        className={`${inputClass} ${errors.email ? 'border-red-400 focus:ring-red-400' : ''}`} />
                      {errors.email && <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1"><AlertCircle size={12} />{errors.email}</p>}
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Pesan</label>
                      <textarea name="message" value={form.message} onChange={handleChange} rows={5}
                        placeholder="Halo! Saya tertarik untuk berkolaborasi..."
                        className={`${inputClass} resize-none ${errors.message ? 'border-red-400 focus:ring-red-400' : ''}`} />
                      {errors.message && <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1"><AlertCircle size={12} />{errors.message}</p>}
                    </div>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold text-sm shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all duration-300 cursor-pointer"
                    >
                      <Send size={16} /> Kirim Pesan ke Gmail
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;