import { motion, AnimatePresence } from 'motion/react';
import { X, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      console.log('Quote Request:', Object.fromEntries(new FormData(e.target as HTMLFormElement).entries()));
      setFormStatus('success');
      setTimeout(() => {
        onClose();
        setFormStatus('idle');
      }, 2000);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
          ></motion.div>
          
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative w-full max-w-lg bg-slate-950 border border-slate-800 rounded-sm p-10 shadow-2xl overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>
            
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            {formStatus === 'success' ? (
              <div className="py-12 text-center space-y-8">
                <div className="w-20 h-20 bg-blue-500/10 border border-blue-500/20 rounded-full flex items-center justify-center text-blue-500 mx-auto">
                  <Send size={32} />
                </div>
                <h3 className="text-3xl font-display font-bold text-white underline decoration-blue-500 underline-offset-8 uppercase tracking-widest">TRANSMITTED.</h3>
                <p className="text-slate-500 font-mono text-xs uppercase tracking-widest leading-loose">We will review your details and contact you shortly.</p>
              </div>
            ) : (
              <>
                <h3 className="text-4xl font-display font-bold text-white mb-2 leading-none uppercase tracking-tighter">FREE ESTIMATE</h3>
                <p className="text-slate-500 mb-10 font-mono text-[9px] uppercase tracking-[0.3em]">Consultation & Site Visit</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-slate-600 uppercase tracking-[0.2em]">Principal Name</label>
                    <input required name="name" type="text" className="w-full bg-slate-900 border border-slate-800 rounded-sm px-5 py-3 text-white focus:border-blue-500 outline-none transition-colors" placeholder="ENTER NAME" />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono text-slate-600 uppercase tracking-[0.2em]">Voice Contact</label>
                      <input required name="phone" type="tel" className="w-full bg-slate-900 border border-slate-800 rounded-sm px-5 py-3 text-white focus:border-blue-500 outline-none transition-colors" placeholder="+44" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono text-slate-600 uppercase tracking-[0.2em]">IOW Region</label>
                      <input required name="location" type="text" placeholder="e.g. NEWPORT" className="w-full bg-slate-900 border border-slate-800 rounded-sm px-5 py-3 text-white focus:border-blue-500 outline-none transition-colors placeholder:text-slate-800" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-slate-600 uppercase tracking-[0.2em]">Brief Description</label>
                    <textarea required name="message" rows={3} placeholder="DESCRIBE THE REQUIREMENTS..." className="w-full bg-slate-900 border border-slate-800 rounded-sm px-5 py-3 text-white focus:border-blue-500 outline-none resize-none transition-colors placeholder:text-slate-800"></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className="w-full py-5 mt-6 bg-blue-600 hover:bg-blue-500 text-white font-extrabold tracking-[0.2em] rounded-sm editorial-glow-button transition-all"
                  >
                    {formStatus === 'sending' ? 'TRANSMITTING...' : 'REQUEST ESTIMATE'}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
