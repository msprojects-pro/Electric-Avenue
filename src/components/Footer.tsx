import { Zap, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-slate-950 border-t border-slate-800 px-4 md:px-10 py-10 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex flex-wrap gap-10">
        <div className="flex items-center gap-3">
          <Mail className="w-4 h-4 text-blue-500" />
          <span className="text-[10px] font-bold text-slate-400 font-mono tracking-widest">CHRISMARSH04@GMAIL.COM</span>
        </div>
        <div className="flex items-center gap-3">
          <MapPin className="w-4 h-4 text-blue-500" />
          <span className="text-[10px] font-bold text-slate-400 font-mono tracking-widest">NEWPORT, ISLE OF WIGHT</span>
        </div>
        <div className="flex items-center gap-3">
          <Instagram className="w-4 h-4 text-blue-500" />
          <span className="text-[10px] font-bold text-slate-400 font-mono tracking-widest">@ELECTRIC_AVENUE_IOW_</span>
        </div>
      </div>
      <div className="text-[10px] text-slate-600 font-bold uppercase tracking-[0.2em] text-center md:text-right">
        &copy; {currentYear} ELECTRIC AVENUE IOW. PROFESSIONAL ELECTRICAL CONTRACTOR.
      </div>
    </footer>
  );
}
