import { useEffect, useState } from "react";

const ScrollIndicator = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    let requestRunning = null;

    const handleScroll = () => {
      if (requestRunning === null) {
        requestRunning = window.requestAnimationFrame(() => {
          const winScroll = window.pageYOffset || document.documentElement.scrollTop;
          const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
          
          const scrolled = (winScroll / height) * 100;
          setScrollPercent(scrolled);
          requestRunning = null;
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="hidden md:flex fixed right-4 top-1/4 h-1/2 w-1.5 bg-gray-800/50 rounded-full z-60 overflow-hidden">
      <div
        className="bg-cyan-400 w-full rounded-full shadow-[0_0_15px_#22d3ee] transition-all duration-300 ease-out"
        style={{ height: `${scrollPercent}%` }}
      ></div>
    </div>
  );
};

export default ScrollIndicator;