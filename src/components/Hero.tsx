import { motion } from 'motion/react';
import { Phone, ArrowRight, Zap, Shield, Clock, Cpu, Car, Instagram } from 'lucide-react';

interface HeroProps {
  onQuoteClick: () => void;
}

export default function Hero({ onQuoteClick }: HeroProps) {
  return (
    <section className="relative min-h-screen pt-24 md:pt-0 grid grid-cols-1 md:grid-cols-12 items-stretch border-b border-slate-800">
      {/* Editorial Content - Left */}
      <div className="col-span-1 md:col-span-5 flex flex-col justify-center p-8 md:p-14 lg:p-20 border-r border-slate-800 relative z-10 pt-32 md:pt-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-8">
            Safety • Reliability • Quality
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[0.9] text-white tracking-tighter mb-8 italic md:not-italic">
            POWERING<br/>
            <span className="text-blue-500 font-display">NEWPORT</span><br/>
            & BEYOND.
          </h1>
          <p className="text-slate-400 text-lg mb-10 max-w-sm leading-relaxed">
            Premium electrical services based on the Isle of Wight. From full home rewires to bespoke luxury lighting design.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={onQuoteClick}
              className="px-8 py-4 bg-white text-slate-950 font-bold rounded-sm hover:bg-blue-50 transition-all hover:scale-105"
            >
              GET A QUOTE
            </button>
            <a
              href="#work"
              className="px-8 py-4 border border-slate-700 font-bold rounded-sm hover:bg-slate-800/50 transition-all text-white"
            >
              VIEW WORK
            </a>
          </div>
          <div className="mt-16 pt-12 border-t border-slate-800 flex gap-10">
            <div>
              <div className="text-3xl font-bold text-white leading-none mb-1">10+</div>
              <div className="text-[10px] uppercase text-slate-500 font-bold tracking-widest leading-none">
                Years Experience
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white leading-none mb-1">100%</div>
              <div className="text-[10px] uppercase text-slate-500 font-bold tracking-widest leading-none">
                Safety Record
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Editorial Content - Right (Visual/Feature Grid) */}
      <div className="col-span-1 md:col-span-7 bg-slate-900/10 p-8 md:p-14 lg:p-20 relative overflow-hidden flex flex-col justify-center">
        {/* Background glow effects from App */}
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-20">
          <div className="absolute top-0 right-0 w-[500px] h-[500px]" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, #3b82f6 0%, transparent 60%)' }}></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px]" style={{ backgroundImage: 'radial-gradient(circle at center, #0ea5e9 0%, transparent 60%)' }}></div>
        </div>

        <div className="relative z-10">
          <div className="flex justify-between items-end mb-10">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500">Specialist Solutions</h3>
            <div className="text-blue-500 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-wider">Available for Emergency Callouts</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Full House Rewires', desc: 'Modern electrical modernization with safety certification.', icon: Zap },
              { title: 'Smart Home Systems', desc: 'App-controlled lighting, security, and climate integration.', icon: Cpu },
              { title: 'EV Charger Installation', desc: 'Certified island installers for Rolec, Zappi & more.', icon: Car },
              { title: 'Fault Finding', desc: 'Precision diagnostics for complex electrical hazards.', icon: Shield },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.5 }}
                className="p-8 bg-slate-900 border border-slate-800 rounded-xl hover:border-blue-500/50 transition-all group"
              >
                <div className="w-10 h-10 mb-5 bg-slate-800 rounded flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h4 className="text-white font-bold mb-3 uppercase tracking-tight group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <div className="flex-1 bg-slate-950 p-5 rounded border border-slate-800 flex items-center gap-4 hover:border-slate-700 transition-colors">
              <div className="w-12 h-12 rounded bg-slate-900 border border-slate-800 overflow-hidden flex-shrink-0">
                <img src="/images/smart_home_lighting_1782157044647.jpg" alt="Work" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-tight">Recent Project</p>
                <p className="text-[10px] text-slate-500 font-mono">Modern Kitchen Lighting, Cowes</p>
              </div>
            </div>
            <div className="flex-1 bg-slate-950 p-5 rounded border border-slate-800 flex items-center gap-4 hover:border-slate-700 transition-colors">
              <div className="w-12 h-12 rounded bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0 text-blue-500">
                <Instagram size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-tight">Follow Us</p>
                <p className="text-[10px] text-slate-500 font-mono">@electric_avenue_iow_</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
