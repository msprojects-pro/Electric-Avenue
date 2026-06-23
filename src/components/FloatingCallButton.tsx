import { Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export default function FloatingCallButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          initial={{ scale: 0, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0, opacity: 0, y: 20 }}
          href="tel:+447584197802"
          className="fixed bottom-6 right-6 z-40 md:hidden w-16 h-16 bg-electric-blue-600 rounded-full flex items-center justify-center text-white glow-blue shadow-2xl active:scale-90 transition-transform"
        >
          <Phone size={30} />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
