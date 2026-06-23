import { motion } from 'motion/react';
import { Shield, Award, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-950 border-b border-slate-900">
      <div className="container mx-auto px-4 md:px-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 flex flex-col gap-8"
          >
            <span className="text-blue-500 font-mono font-bold tracking-[0.2em] uppercase text-[10px]">
              Our Heritage
            </span>
            <h2 className="font-display font-bold text-5xl md:text-6xl text-white tracking-tighter leading-[0.9]">
              THE ISLE OF WIGHT'S <br />
              <span className="text-gradient">PREMIER CONTRACTOR</span>
            </h2>
            <div className="space-y-6 max-w-2xl">
              <p className="text-slate-400 text-lg leading-relaxed">
                Based in Newport, Electric Avenue IOW represents the intersection of traditional electrical craftsmanship and modern smart technologies. We serve the entire Island with a commitment to excellence that has become our trademark.
              </p>
              <p className="text-slate-500 text-lg leading-relaxed">
                Our operations are governed by a singular philosophy: <span className="text-white font-semibold italic">Precision in every connection.</span> We don't just wire buildings; we power the lifestyles and businesses of our local community with absolute integrity.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-4">
              {[
                { icon: Shield, title: 'Compliance', text: 'Strictest adherence to UK 18th Edition wiring standards.' },
                { icon: Award, title: 'Craftsmanship', text: 'Surgical precision in component selection and installation.' },
                { icon: Users, title: 'Local Heritage', text: 'Deeply rooted Newport family business serving the IOW.' },
                { icon: Award, title: 'Integrity', text: 'Transparent pricing and guaranteed completion timelines.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2 uppercase tracking-tight text-sm">{item.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[4/5] rounded bg-slate-900 border border-slate-800 overflow-hidden relative group">
              <img
                src="/images/fuse_board_upgrade_1782157029054.jpg"
                alt="Electrical Engineering"
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-1000 brightness-75 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-blue-600/5 mix-blend-overlay"></div>
            </div>
            {/* Design accents */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] -z-10"></div>
            <div className="absolute -top-6 -left-6 bg-slate-950 border border-slate-800 p-8 shadow-2xl hidden xl:block">
              <div className="text-center">
                <span className="text-4xl font-display font-extrabold text-blue-500">100%</span>
                <p className="text-[10px] font-mono font-bold tracking-[0.2em] text-white uppercase mt-2">
                  Safety Record
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
