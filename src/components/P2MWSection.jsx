import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  Award,
  Coffee,
  FileText,
  ExternalLink,
  Coins,
  Building2,
  Users,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  PackageCheck,
  TrendingUp,
} from 'lucide-react';

const galleryItems = [
  {
    id: 'sertif2',
    src: '/p2mw/sertif2.jpg',
    filename: 'sertif2.jpg',
    title: 'Sertifikat P2MW 2024',
    category: 'Sertifikat',
    badge: 'Legalitas & Apresiasi',
    caption:
      'Sertifikat resmi kelolosan dan pendanaan Program Pembinaan Mahasiswa Wirausaha (P2MW) 2024 untuk usaha "Kopi Cemplung" dari Direktorat Pembelajaran dan Kemahasiswaan, Ditjen Diktiristek.',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 'sertif1',
    src: '/p2mw/sertif1.jpg',
    filename: 'sertif1.jpg',
    title: 'Surat Apresiasi & Pengantar Kemendikbudristek',
    category: 'Sertifikat',
    badge: 'Dokumen Resmi',
    caption:
      'Surat pengantar resmi apresiasi atas keterlibatan dalam P2MW 2024 dari Kemendikbudristek Ditjen Pendidikan Tinggi, Riset, dan Teknologi.',
    aspect: 'aspect-[3/4]',
  },
  {
    id: 'desainproduk',
    src: '/p2mw/desainproduk.jpg',
    filename: 'desainproduk.jpg',
    title: 'Desain Kemasan Produk Kopi Cemplung',
    category: 'Desain & Produk',
    badge: 'Packaging & Varian',
    caption:
      'Desain kemasan drip bag praktis: Java Series Temanggung (Robusta), Signature House Blend, dan Sumatra Series Gayo Aceh (Arabika). Inovasi ngopi berkualitas tanpa ampas.',
    aspect: 'aspect-[16/10]',
  },
  {
    id: 'demoproduk1',
    src: '/p2mw/demoproduk1.jpg',
    filename: 'demoproduk1.jpg',
    title: 'Demo Produk Fisik & Packaging',
    category: 'Dokumentasi',
    badge: 'Display Produk',
    caption:
      'Dokumentasi produk fisik Kopi Cemplung yang siap dipasarkan: jar biji kopi nusantara, pouch drip bag higienis, dan kemasan ramah lingkungan.',
    aspect: 'aspect-[9/16]',
  },
  {
    id: 'demoproduk2',
    src: '/p2mw/demoproduk2.jpeg',
    filename: 'demoproduk2.jpeg',
    title: 'Dokumentasi Tim Kopi Cemplung & Expo',
    category: 'Dokumentasi',
    badge: 'Pameran & Validasi',
    caption:
      'Tim Kopi Cemplung saat pameran & demo produk di hadapan pengunjung dan reviewer program P2MW, memperkenalkan metode baru minum kopi tanpa ampas.',
    aspect: 'aspect-[4/5]',
  },
  {
    id: 'logokopicemplung',
    src: '/p2mw/logokopicemplung.png',
    filename: 'logokopicemplung.png',
    title: 'Logo Kopi Cemplung',
    category: 'Branding',
    badge: 'Brand Identity',
    caption:
      'Identitas visual dan logo resmi brand Kopi Cemplung, merepresentasikan kesegaran, kepraktisan, dan kenikmatan kopi nusantara modern.',
    aspect: 'aspect-square',
  },
];

const categories = ['Semua', 'Sertifikat', 'Desain & Produk', 'Dokumentasi', 'Branding'];

const P2MWSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems =
    activeCategory === 'Semua'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const handlePrev = (e) => {
    e.stopPropagation();
    if (!selectedImage) return;
    const currentIndex = galleryItems.findIndex((item) => item.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    setSelectedImage(galleryItems[prevIndex]);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    if (!selectedImage) return;
    const currentIndex = galleryItems.findIndex((item) => item.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % galleryItems.length;
    setSelectedImage(galleryItems[nextIndex]);
  };

  return (
    <section id="p2mw" className="py-20 sm:py-28 px-4 relative overflow-hidden">
      {/* Ambient background decoration */}
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-amber-500/10 dark:bg-amber-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-violet-500/10 dark:bg-violet-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/10 to-violet-500/10 border border-amber-500/20 dark:border-amber-400/20 text-amber-600 dark:text-amber-400 text-xs sm:text-sm font-semibold mb-4">
            <Award size={16} className="text-amber-500" />
            <span>Prestasi Nasional & Kewirausahaan 2024</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            P2MW 2024 —{' '}
            <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-violet-600 bg-clip-text text-transparent">
              Kopi Cemplung
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-violet-600 rounded-full mx-auto mb-5" />
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Pencapaian lolos pendanaan nasional Program Pembinaan Mahasiswa Wirausaha Kemendikbudristek 2024 melalui inovasi produk kopi praktis berkualitas tinggi.
          </p>
        </motion.div>

        {/* ── Highlight Banner / Story Cards ────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Card 1: Peran & Deskripsi Pencapaian (User's Exact Role) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white via-amber-50/20 to-orange-50/30 dark:from-slate-900 dark:via-slate-800/80 dark:to-slate-900 border border-amber-200/60 dark:border-amber-500/20 shadow-xl shadow-amber-500/5 relative overflow-hidden"
          >
            {/* Top decorative badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 dark:bg-amber-400/10 border border-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400 shadow-inner">
                  <Coffee size={24} />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-amber-600 dark:text-amber-400">
                    Tim Kopi Cemplung
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    Penerima Pendanaan Nasional
                  </h3>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800">
                Lolos Seleksi Nasional
              </span>
            </div>

            {/* User Provided Description */}
            <div className="space-y-4 mb-6">
              <blockquote className="text-base sm:text-lg text-slate-700 dark:text-slate-200 font-medium leading-relaxed bg-white/70 dark:bg-slate-800/50 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-700/60 backdrop-blur-sm">
                “Saya lolos pendanaan nasional Program Pembinaan Mahasiswa Wirausaha yang diselenggarakan oleh Kemendikbudristek pada tahun 2024, sebagai anggota tim kopi cemplung. Peran saya di tim sebagai Bendahara sekaligus sekretaris, saya mengelola pemasukkan dan pengeluaran serta mencatat dokumen untuk proposal dan laporan akhir.”
              </blockquote>
            </div>

            {/* Role Breakdown pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-2xl bg-white/60 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 flex items-start gap-3">
                <div className="p-2 rounded-xl bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 flex-shrink-0 mt-0.5">
                  <Coins size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    Bendahara Tim
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                    Mengelola arus kas, pembukuan anggaran dana hibah, alokasi modal produksi, serta pencatatan cash flow.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/60 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 flex items-start gap-3">
                <div className="p-2 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5">
                  <FileText size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    Sekretaris Tim
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                    Menyusun dokumen administrasi, berkas proposal pendanaan, laporan kemajuan (monev), serta laporan akhir.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Tentang Program P2MW & Kemitraan Kemendikbudristek */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-black/20"
          >
            <div>
              {/* Partner / Organization header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-inner">
                  <Building2 size={24} />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    Penyelenggara
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                    Kemendikbudristek / Kemdiktisaintek
                  </h3>
                </div>
              </div>

              {/* Logo P2MW Preview */}
              <div className="mb-5 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 flex items-center justify-center overflow-hidden">
                <img
                  src="/p2mw/logop2mw.jpg"
                  alt="Logo P2MW Kemendikbudristek"
                  className="max-h-16 w-auto object-contain"
                  loading="lazy"
                />
              </div>

              {/* User Provided P2MW Program Description */}
              <div className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                <p>
                  Program Pembinaan Mahasiswa Wirausaha (P2MW) adalah program pengembangan usaha mahasiswa yang diselenggarakan oleh Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi (
                  <a
                    href="https://p2mw.kemdiktisaintek.go.id/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-violet-600 dark:text-violet-400 underline hover:text-violet-800 transition-colors"
                  >
                    Kemdiktisaintek / Kemendikbudristek
                  </a>
                  ).
                </p>
                <p>
                  Program ini dirancang khusus untuk memfasilitasi mahasiswa yang memiliki minat dan komitmen untuk berwirausaha agar dapat mengembangkan usahanya ke tingkat yang lebih tinggi dan kompetitif.
                </p>
              </div>
            </div>

            {/* Quick Stat Tags & Links */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <a
                href="https://p2mw.kemdiktisaintek.go.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-violet-50 text-slate-700 hover:text-violet-600 dark:bg-slate-800 dark:hover:bg-violet-900/30 dark:text-slate-200 dark:hover:text-violet-300 text-xs font-semibold transition-colors duration-200"
              >
                Website Resmi P2MW
                <ExternalLink size={12} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* ── Key Highlights Strip ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-14 sm:mb-16"
        >
          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-center">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 mx-auto flex items-center justify-center mb-2">
              <Award size={18} />
            </div>
            <p className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">P2MW 2024</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Pendanaan Kemendikbudristek</p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-center">
            <div className="w-9 h-9 rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400 mx-auto flex items-center justify-center mb-2">
              <Users size={18} />
            </div>
            <p className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">Dual Role</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Bendahara & Sekretaris</p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-center">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 mx-auto flex items-center justify-center mb-2">
              <PackageCheck size={18} />
            </div>
            <p className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">Kopi Cemplung</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Coffee in a Drip Bag</p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-center">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center mb-2">
              <TrendingUp size={18} />
            </div>
            <p className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">Validated</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Demo & Validasi Pasar</p>
          </div>
        </motion.div>

        {/* ── Interactive Gallery Showcase ─────────────────────────── */}
        <div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles size={22} className="text-amber-500" />
                Galeri Portofolio & Dokumentasi
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Koleksi bukti sertifikat, desain kemasan, demo produk fisik, dan dokumentasi kegiatan.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 overflow-x-auto max-w-full">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 ${activeCategory === cat
                    ? 'bg-white dark:bg-slate-700 text-violet-600 dark:text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="group relative rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-amber-300 dark:hover:border-amber-500/50 transition-all duration-300 flex flex-col"
                >
                  {/* Image container */}
                  <div
                    onClick={() => setSelectedImage(item)}
                    className="relative w-full overflow-hidden bg-slate-100 dark:bg-slate-950/60 cursor-pointer aspect-[4/3] flex items-center justify-center p-3"
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Gradient Overlay & Hover Pill */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-white text-xs font-semibold backdrop-blur-md shadow-lg">
                        <Eye size={13} className="text-violet-600 dark:text-violet-400" />
                        Perbesar Foto
                      </span>
                      <span className="text-[11px] font-mono text-slate-300 bg-slate-900/80 px-2 py-0.5 rounded-md">
                        {item.filename}
                      </span>
                    </div>

                    {/* Top Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 shadow-sm border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm">
                        {item.badge}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex flex-col flex-1 justify-between bg-white dark:bg-slate-900">
                    <div>
                      <div className="flex items-center justify-between text-xs text-amber-600 dark:text-amber-400 font-semibold mb-1">
                        <span>{item.category}</span>
                        <span className="font-mono text-[11px] text-slate-400">{item.filename}</span>
                      </div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white leading-snug mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
                        {item.caption}
                      </p>
                    </div>

                    <button
                      onClick={() => setSelectedImage(item)}
                      className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-semibold text-violet-600 dark:text-violet-400 hover:text-violet-800 dark:hover:text-violet-300 transition-colors w-full"
                    >
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 size={13} className="text-emerald-500" />
                        Detail Gambar
                      </span>
                      <span className="text-[11px] font-mono">Buka Foto ↗</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* ── Lightbox Modal for High-Res View ─────────────────────── */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[92vh] flex flex-col rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-2xl"
            >
              {/* Modal Topbar */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm z-10">
                <div className="flex items-center gap-2.5 min-w-0 pr-3">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 flex-shrink-0">
                    {selectedImage.category}
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white truncate">
                    {selectedImage.title}
                  </h4>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="hidden sm:inline-block text-xs font-mono text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-lg">
                    {selectedImage.filename}
                  </span>
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="p-1.5 rounded-full text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
                    aria-label="Tutup foto"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Modal Image Area with Navigation Buttons */}
              <div className="relative flex-1 min-h-[300px] max-h-[60vh] sm:max-h-[68vh] bg-slate-950 flex items-center justify-center p-2 sm:p-4 overflow-hidden">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="max-h-full max-w-full object-contain rounded-lg shadow-lg select-none"
                />

                {/* Navigation arrows */}
                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white border border-white/10 backdrop-blur-sm transition-all shadow-lg hover:scale-110"
                  aria-label="Foto sebelumnya"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white border border-white/10 backdrop-blur-sm transition-all shadow-lg hover:scale-110"
                  aria-label="Foto selanjutnya"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Modal Caption Area */}
              <div className="p-4 sm:p-5 bg-slate-50 dark:bg-slate-950/70 border-t border-slate-200 dark:border-slate-800">
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {selectedImage.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default P2MWSection;
