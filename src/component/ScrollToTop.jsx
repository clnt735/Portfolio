import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 400);
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          transition ={{
            y: { type: "spring", stiffness: 300, damping: 20 },
            opacity: { duration: 0.2 }
          }}
          className="fixed bottom-10 right-10 z-50 flex items-center bg-[#111] border border-teal-500/30 text-white p-3 rounded-full shadow-2xl cursor-pointer"
          style={{ borderRadius: "20px" }}
        >
          {/* The Icon */}
          <div className="flex items-center justify-center">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </div>

          {/* This wrapper handles the smooth width expansion */}
          <motion.div
            initial={false}
            animate={{ 
                width: isHovered ? "auto" : 0,
                opacity: isHovered ? 1 : 0
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden whitespace-nowrap"
          >
            <span className="px-2 font-bold text-sm uppercase tracking-wider">
              Back to Top
            </span>
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;