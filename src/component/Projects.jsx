import { motion } from 'framer-motion';
import worksadImg from '../assets/worksad.png';
import virtualkeyboardImg from '../assets/virtualkeyboard.png';
import studentcardImg from '../assets/studentcard.png';

const Projects = () => {
    return (
        <div id="projects" className="max-w-7xl mx-auto py-10 md:py-20 px-6 flex flex-col items-center min-h-screen text-[#EBE4E4]">
            <h1 className="text-4xl md:text-4xl uppercase font-black">Projects</h1>
            <p className="italic mt-3 text-xl md:text-xl">Some of the things I've built</p>

            <motion.div 
            initial={{ opacity: 0, y: 80 }}
            whileInView={{opacity: 1, y: 0}}
            viewport={{amount: 0.2}}
            transition={{duration: 0.7, ease: "easeOut"}}
            className="md:col-span-5 flex justify-center"
            >
            
            {/* CONTAINER OF PROJECT CARDS */} 
            <div className="grid md:grid-cols-2 gap-10 max-w-9xl mx-auto w-full mt-10">

                {/* PROJECT CARD 1 */}
                <div className="w-full  bg-white text-black rounded-2xl overflow-hidden 
                transform hover:scale-[1.01]   transition-all duration-300 md:mt-1 ">
                    
                    <div> <img src={worksadImg} alt="Project 1" className="w-full h-64 object-cover" /> </div>            
                    <div className="p-6">
                        <h3 className="text-2xl font-bold mb-2">WorkMuna</h3>
                        <p className="text-gray-700 mb-4">
                            WorkMuna is a digital job-matching platform that connects job seekers and employers through smart matching, 
                            making hiring and job searching faster, simpler, and more accessible especially for local and short-term work opportunities.
                        </p>

                        {/* Tech Badges with visible Icons */}
                        <div className="flex flex-wrap gap-3 mb-4">
                            <span className="flex items-center gap-2 bg-blue-100 text-black px-3 py-1 rounded-full text-xs font-bold"> 
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" className="w-4 h-4" alt="PHP" />
                                PHP
                            </span>
                            <span className="flex items-center gap-2 bg-orange-100 text-black px-3 py-1 rounded-full text-xs font-bold"> 
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" className="w-4 h-4" alt="MySQL" />
                                MySQL
                            </span>
                            <span className="flex items-center gap-2 bg-orange-100 text-black px-3 py-1 rounded-full text-xs font-bold"> 
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" className="w-4 h-4" alt="HTML" />
                                HTML
                            </span>
                            <span className="flex items-center gap-2 bg-orange-100 text-black px-3 py-1 rounded-full text-xs font-bold"> 
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" className="w-4 h-4" alt="CSS" />
                                CSS
                            </span>
                            <span className="flex items-center gap-2 bg-orange-100 text-black px-3 py-1 rounded-full text-xs font-bold"> 
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className="w-4 h-4" alt="JavaScript" />
                                JavaScript
                            </span>
                        </div>

                        <div className="flex gap-4">
                            <a href="https://github.com/clnt735/WORKSAD" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-4 py-2 rounded-xl hover:bg-gray-700 transition-all text-sm">GitHub</a>
                        </div>
                    </div>
                </div>


                {/* PROJECT CARD 2 */}
                <div className="w-full  bg-white text-black rounded-2xl overflow-hidden 
                transform hover:scale-[1.01]   transition-all duration-300 md:mt-1 ">
                    
                    <div> <img src={virtualkeyboardImg} alt="Project 2" className="w-full h-64 object-cover" /> </div>            
                    <div className="p-6">
                        <h3 className="text-2xl font-bold mb-2">Virtual Keyboard</h3>
                        <p className="text-gray-700 mb-4">
                            This is a simple virtual keyboard school activity made using HTML and CSS
                        </p>

                        {/* Tech Badges with visible Icons */}
                        <div className="flex flex-wrap gap-3 mb-4">
                            <span className="flex items-center gap-2 bg-orange-100 text-black px-3 py-1 rounded-full text-xs font-bold"> 
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" className="w-4 h-4" alt="HTML" />
                                HTML
                            </span>
                            <span className="flex items-center gap-2 bg-orange-100 text-black px-3 py-1 rounded-full text-xs font-bold"> 
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" className="w-4 h-4" alt="CSS" />
                                CSS
                            </span>
                        </div>

                        <div className="flex gap-4">
                            <a href="https://github.com/clnt735/Virtual-Keyboard" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-4 py-2 rounded-xl hover:bg-gray-700 transition-all text-sm">GitHub</a>
                        </div>
                    </div>
                </div>


                {/* PROJECT CARD 3 */}
                <div className="w-full bg-white text-black rounded-2xl overflow-hidden 
                transform hover:scale-[1.01]  transition-all duration-300 md:mt-1 ">
                    
                    <div> <img src={studentcardImg} alt="Project 3" className="w-full h-64 object-contain" /> </div>            
                    <div className="p-6">
                        <h3 className="text-2xl font-bold mb-2">Student Card</h3>
                        <p className="text-gray-700 mb-4">
                            This is a simple student card school activity made using HTML, CSS, and Javascript.
                        </p>

                        {/* Tech Badges with visible Icons */}
                        <div className="flex flex-wrap gap-3 mb-4">
                            <span className="flex items-center gap-2 bg-orange-100 text-black px-3 py-1 rounded-full text-xs font-bold"> 
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" className="w-4 h-4" alt="HTML" />
                                HTML
                            </span>
                            <span className="flex items-center gap-2 bg-orange-100 text-black px-3 py-1 rounded-full text-xs font-bold"> 
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" className="w-4 h-4" alt="CSS" />
                                CSS
                            </span>
                            <span className="flex items-center gap-2 bg-orange-100 text-black px-3 py-1 rounded-full text-xs font-bold"> 
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className="w-4 h-4" alt="JavaScript" />
                                JavaScript
                            </span>
                        </div>

                        <div className="flex gap-4">
                            <a href="https://github.com/clnt735/Student-Card" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-4 py-2 rounded-xl hover:bg-gray-700 transition-all text-sm">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>

            
            </motion.div>
        </div>
    );
};

export default Projects;