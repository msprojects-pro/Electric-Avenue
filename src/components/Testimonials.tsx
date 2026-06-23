import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Thompson',
    location: 'Newport',
    rating: 5,
    text: 'Chris did a fantastic job with our full rewire. Exceptionally clean work, and he took the time to explain everything. Highly recommended!',
  },
  {
    name: 'Mark Henderson',
    location: 'Cowes',
    rating: 5,
    text: 'Rapid response when our fuse board failed. Professional, knowledgeable, and very reasonably priced. The best electrician on the IOW.',
  },
  {
    name: 'David Wilson',
    location: 'Ryde',
    rating: 5,
    text: 'Installed a series of smart home lights and outdoor spotlights. The result is stunning. A true professional with an eye for design.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-slate-950 border-b border-slate-900">
      <div className="container mx-auto px-4 md:px-10">
        <div className="text-center max-w-3xl mx-auto mb-20 px-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-500 font-mono font-bold tracking-[0.2em] uppercase text-[10px] mb-4 block">
              Testimonials
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white tracking-tighter">
              CLIENT <span className="text-gradient underline decoration-blue-500/20 underline-offset-8">CONSENSUS</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-800 border border-slate-800 rounded-sm overflow-hidden">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-12 bg-slate-950 relative group flex flex-col justify-between h-full"
            >
              <div className="relative">
                <Quote className="absolute -top-6 -left-6 text-slate-900 group-hover:text-blue-500/10 transition-colors" size={80} />
                <div className="flex gap-1 mb-8 relative z-10">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={14} className="text-blue-500 fill-blue-500" />
                  ))}
                </div>

                <p className="text-slate-400 text-lg leading-relaxed mb-12 relative z-10 font-medium">
                  "{t.text}"
                </p>
              </div>

              <div className="pt-8 border-t border-slate-900 mt-auto">
                <h4 className="text-white font-bold text-sm uppercase tracking-tight">{t.name}</h4>
                <span className="text-slate-500 font-mono text-[9px] font-bold uppercase tracking-[0.2em]">
                  {t.location}, Isle of Wight
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
