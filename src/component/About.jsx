import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check width on mount and on resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  
  return (
    <section id="about" className="bg-black py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          
          
          {/*-- Left Side: The Image Card --*/}
          <motion.div 
            initial={isMobile ? { opacity: 1, x:0} : { opacity: 0, x: -100 }}
            whileInView={{opacity: 1, x: 0}}
            viewport={{ amount: 0.5, once: isMobile }}
            transition={{duration: 0.7, ease: "easeOut"}}
            className="md:col-span-5 flex justify-center"
          >

            <div className="relative group">
              {/* Decorative background glow */}
              <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-70 transition duration-1000"></div>             
              <img 
                src="/pfp.jpg"
                alt="Clint" 
                className="relative w-80 h-86 object-cover rounded-2xl border border-white/10 shadow-2xl transition duration-500"
              />
            </div>
          </motion.div>

          {/*-- Right Side: The Content --*/}
         <motion.div
            initial={isMobile ? {opacity: 1, y: 0} : {opacity: 0, y: 100}}
            whileInView={{opacity: 1, y: 5}}
            viewport={{amount: 0.7, once: isMobile}}
            transition={{duration: 0.7, ease: "easeOut"}}
            className="md:col-span-7 text-center md:text-left"
            >
            <h2 className="text-left text-4xl md:text-5xl font-bold mb-6 text-[#EBE4E4] leading-tight">
              I'm <span className="text-blue-500">Clint</span>, an aspiring Full-Stack Developer 
            </h2>
            
            <p className="text-left text-gray-400 text-lg leading-relaxed mb-6">
              I'm currently a 3rd year BSIT student pursuing my studies with a deep focus on modern web development. 
              I specialize in both frontend and backend technologies, transforming 
              ideas into functional digital experiences.
            </p>

            <p className="text-left text-gray-400 text-lg leading-relaxed mb-8">
              I am passionate about <span className="text-blue-400">Web Development</span>, and <span className="text-blue-400">Software Engineering </span> 
              and would like to learn more about it. Outside of code, I love exploring 
              new technologies and pushing my creative boundaries.
            </p>
          </motion.div>
          

        </div>
      </div>
    </section>
  );
};

export default About;