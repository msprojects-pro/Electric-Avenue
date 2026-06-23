import { motion } from 'motion/react';
import { Mail, Phone, Instagram, MapPin, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simulate API call
    setTimeout(() => {
      const formData = new FormData(e.target as HTMLFormElement);
      console.log('Form Submitted:', Object.fromEntries(formData.entries()));
      setFormStatus('success');
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 bg-slate-950">
      <div className="container mx-auto px-4 md:px-10">
        <div className="grid lg:grid-cols-12 gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <span className="text-blue-500 font-mono font-bold tracking-[0.2em] uppercase text-[10px] mb-6 block">
              Consultation
            </span>
            <h2 className="font-display font-bold text-5xl md:text-6xl text-white tracking-tighter mb-10 leading-[0.9]">
              SECURE YOUR <br />
              <span className="text-gradient italic">ESTIMATE.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-12 max-w-sm">
              We provide comprehensive electrical consultations across the Isle of Wight. Reach out to discuss your residential or commercial project.
            </p>

            <div className="space-y-4">
              {[
                { icon: Phone, label: 'Voice', val: '07584 197802', href: 'tel:+447584197802' },
                { icon: Mail, label: 'Email', val: 'chrismarsh04@gmail.com', href: 'mailto:chrismarsh04@gmail.com' },
                { icon: Instagram, label: 'Digital', val: '@electric_avenue_iow_', href: 'https://www.instagram.com/electric_avenue_iow_/' },
                { icon: MapPin, label: 'HQ', val: 'Newport, Isle of Wight', href: '#' },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="group flex items-center gap-6 p-6 border border-slate-900 hover:border-slate-800 hover:bg-slate-900/50 transition-all rounded"
                >
                  <div className="w-12 h-12 rounded bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <span className="text-slate-600 text-[9px] font-mono uppercase tracking-[0.2em] block mb-1">
                      {item.label}
                    </span>
                    <span className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                      {item.val}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-slate-900/10 border border-slate-900 p-10 md:p-14 rounded overflow-hidden relative"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>
            
            {formStatus === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-8 py-20">
                <div className="w-24 h-24 bg-blue-500/10 border border-blue-500/20 rounded-full flex items-center justify-center text-blue-500 animate-bounce">
                  <Send size={48} />
                </div>
                <div>
                  <h3 className="text-3xl font-display font-bold text-white mb-2 underline decoration-blue-500 underline-offset-8">TRANSMITTED.</h3>
                  <p className="text-slate-500 font-medium">
                    We have received your enquiry. Our team will contact you shortly.
                  </p>
                </div>
                <button
                  onClick={() => setFormStatus('idle')}
                  className="text-blue-500 uppercase tracking-widest font-bold text-xs hover:text-white transition-colors"
                >
                  [ Send Another ]
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.2em]">Principal Name</label>
                    <input
                      required
                      name="name"
                      type="text"
                      className="w-full bg-slate-950 border border-slate-800 rounded-sm px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-800"
                      placeholder="ENTER FULL NAME"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.2em]">Contact Email</label>
                    <input
                      required
                      name="email"
                      type="email"
                      className="w-full bg-slate-950 border border-slate-800 rounded-sm px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-800"
                      placeholder="MAIL@DOMAIN.COM"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.2em]">Phone Number</label>
                    <input
                      required
                      name="phone"
                      type="tel"
                      className="w-full bg-slate-950 border border-slate-800 rounded-sm px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-800"
                      placeholder="+44"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.2em]">Enquiry Type</label>
                    <select
                      name="service"
                      className="w-full bg-slate-950 border border-slate-800 rounded-sm px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option>General Consultancy</option>
                      <option>Full Rewire</option>
                      <option>Fault Finding</option>
                      <option>Smart Home Upgrade</option>
                      <option>EV Charging Point</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.2em]">Brief Description</label>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    className="w-full bg-slate-950 border border-slate-800 rounded-sm px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none placeholder:text-slate-800"
                    placeholder="DESCRIBE YOUR REQUIREMENTS..."
                  ></textarea>
                </div>
                <button
                  disabled={formStatus === 'sending'}
                  className="w-full px-10 py-5 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 text-white font-extrabold tracking-[0.2em] transition-all editorial-glow-button"
                >
                  {formStatus === 'sending' ? 'TRANSMITTING...' : 'INTIATE CONSULTATION'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
