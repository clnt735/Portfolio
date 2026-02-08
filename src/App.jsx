import Navbar from './component/Navbar';
import About from './component/About';
import ScrollIndicator from './component/ScrollIndicator';
import ParticlesBg from './component/ParticlesBg';
import Journey from './component/Journey';
import Skills from './component/Skills';
import ScrollToTop from './component/ScrollToTop';
import Projects from './component/Projects';
import Contact from './component/Contact';
import SidebarEmail from './component/SidebarEmail';



function App() {
  return (
<div className="min-h-screen bg-black text-[#EBE4E4] selection:bg-teal-500/30">
      <ScrollIndicator />
      
  
        <Navbar />
   

      <main className="relative flex flex-col items-center justify-center min-h-screen text-center px-10 overflow-hidden -mt-10 border-b border-gray-700 md:border-b-0">
            
        <ParticlesBg /> 

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-4">
           <p className="text-5xl md:text-6xl font-bold mt-4">Hi, I'm</p>
           <div className="h-27 w-2 bg-teal-500 hidden md:flex"></div>
           <h1 className="text-6xl md:text-9xl font-bold text-transparent leading-none font-['Inter'] whitespace-nowrap" 
               style={{ WebkitTextStroke: '2px #ffffff', 
                        opacity: 0.8,
                        color: 'transparent',
                        paintOrder: 'stroke fill',
                        textShadow: '0 0 2px #000, 0 0 6px #fff, 0 0 2px #fff, 0 0 2px #fff' 
                      }}>
                CLINT JOHN
           </h1>
        </div>

        <p className="relative z-10 text-gray-400 text-2xl font-light mt-7">
          An aspiring Full Stack Developer passionate about building web applications.
        </p>

        <button className="relative z-10 mt-10 px-8 py-3 bg-blue-600 text-white font-bold rounded-lg 
          shadow-[0_0_20px_#2563eb] hover:shadow-[0_0_35px_#3b82f6] hover:scale-105 transition-all duration-300">
          <a href="#projects">VIEW RESUME</a>
        </button>
      </main>

      <About />
      <Journey />
      <Skills />
      <ScrollToTop />
      <Projects />
      <Contact />
      <SidebarEmail />
</div>
  );
}

    
export default App;





















