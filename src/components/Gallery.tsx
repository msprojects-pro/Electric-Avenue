import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const gallery = [
  {
    title: 'Modern Fuse Board Upgrade',
    category: 'Installation',
    img: '/images/fuse_board_upgrade_1782157029054.jpg',
  },
  {
    title: 'Smart Lighting System',
    category: 'Design',
    img: '/images/smart_home_lighting_1782157044647.jpg',
  },
  {
    title: 'Architectural Outdoor Lighting',
    category: 'Outdoor',
    img: '/images/outdoor_lighting_1782157063199.jpg',
  },
  {
    title: 'Commercial Retail Install',
    category: 'Commercial',
    img: '/images/hero_electric_avenue_1782157011073.jpg',
  },
];

export default function Gallery() {
  return (
    <section id="work" className="py-24 bg-slate-950 border-b border-slate-900">
      <div className="container mx-auto px-4 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16 px-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-blue-500 font-mono font-bold tracking-[0.2em] uppercase text-[10px] mb-4 block">
              Recent Projects
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white tracking-tight leading-none">
              A PREVIEW OF OUR <br />
              <span className="text-gradient">EXCEPTIONAL CRAFT</span>
            </h2>
          </motion.div>
          
          <a
            href="https://www.instagram.com/electric_avenue_iow_/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 text-slate-500 font-bold tracking-widest uppercase text-[10px] hover:text-white transition-colors group border-b border-slate-800 pb-2 mb-1"
          >
            Visit Instagram
            <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-blue-500" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-800 border border-slate-800 rounded-sm overflow-hidden">
          {gallery.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden bg-slate-950"
            >
              <div className="aspect-[16/10] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-10 w-full translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-blue-500 font-mono text-[9px] font-bold tracking-[0.3em] uppercase mb-3 block">
                  {item.category}
                </span>
                <h4 className="text-2xl font-display font-bold text-white tracking-tight">
                  {item.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
