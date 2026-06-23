import { motion } from 'motion/react';
import { 
  Zap, 
  Home, 
  Lightbulb, 
  Wrench, 
  Cpu, 
  Car, 
  ShieldCheck, 
  Utensils, 
  AlertTriangle, 
  Microscope 
} from 'lucide-react';

const services = [
  {
    title: 'Full House Rewires',
    desc: 'Complete strip-out and modern rewire to ensure your home meets current safety standards.',
    icon: Home,
  },
  {
    title: 'Fault Finding & Repairs',
    desc: 'Expert diagnostic tools to identify and fix electrical issues before they become hazards.',
    icon: AlertTriangle,
  },
  {
    title: 'Lighting Design & Install',
    desc: 'Bespoke interior and exterior lighting solutions to transform your living spaces.',
    icon: Lightbulb,
  },
  {
    title: 'Smart Home Systems',
    desc: 'Intelligent control for lighting, heating, and security from your smartphone.',
    icon: Cpu,
  },
  {
    title: 'EV Charger Installation',
    desc: 'Certified installation of home car charging points for all electric vehicles.',
    icon: Car,
  },
  {
    title: 'Fuse Board Upgrades',
    desc: 'Replacing old fuse boxes with modern consumer units featuring RCD protection.',
    icon: ShieldCheck,
  },
  {
    title: 'Kitchen & Bathroom Electrics',
    desc: 'Specialist electrical work for wet zones, fully compliant with Part P regulations.',
    icon: Utensils,
  },
  {
    title: 'PAT Testing',
    desc: 'Comprehensive testing and certification for all portable electrical appliances.',
    icon: Microscope,
  },
  {
    title: 'Electrical Installations',
    desc: 'From extra sockets to complete kitchen fits, no job is too small.',
    icon: Wrench,
  },
  {
    title: 'Emergency Callouts',
    desc: 'Rapid response for urgent electrical failures across the Isle of Wight.',
    icon: Zap,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-950 relative border-b border-slate-900">
      <div className="container mx-auto px-4 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 px-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-blue-500 font-mono font-bold tracking-[0.2em] uppercase text-[10px] mb-4 block">
              Specialist Services
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white tracking-tight">
              PRO-GRADE ELECTRICAL <br />
              <span className="text-gradient underline decoration-blue-500/20 underline-offset-8">SOLUTIONS</span>
            </h2>
          </motion.div>
          <p className="text-slate-500 text-sm max-w-sm leading-relaxed mb-1">
            Comprehensive electrical engineering for residential environments, focused on future-proofing and uncompromising safety.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-2">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group p-8 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-blue-500/50 transition-all hover:bg-slate-900"
            >
              <div className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <service.icon className="w-5 h-5 text-blue-500 group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-sm font-bold text-white mb-2 uppercase tracking-tight group-hover:text-blue-400 transition-colors">
                {service.title}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
