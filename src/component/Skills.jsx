import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"},
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"},
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"},
        { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"},
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"},
      ],
    },

    {
      title: "Backend",
      skills: [
        { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"},
      ],
    },

    {
      title: "Database",
      skills: [{ name:"MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"},
    ],
    },

    {
      title: "Tools",
      skills: [
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"},
        { name: "GitHub", icon: <i class="devicon-github-original"></i>},
        { name: "VSCode", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
      ],
    },
   
  ];

    return (
        <div id="skills" className="max-w-9xl mx-auto px-10 py-10 bg-black min-h-screen scroll-mt-20">
        <h1 className="text-4xl font-black text-[#EBE4E4] mb-16 text-center md:uppercase">
            Skills
        </h1>

        <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{opacity: 1, x: 0}}
            viewport={{amount: 0.2}}
            transition={{duration: 0.7, ease: "easeOut"}}
            className="md:col-span-5 flex justify-center"
        >
        
        <div className="space-y-12">
            {skillCategories.map((category, index) => (
            <div key={index} className="flex flex-col gap-6">
                <h2 className="text-xl font-semibold text-gray-400 uppercase tracking-widest">
                {category.title}
                </h2>
                
                {/* 2. Container for the skill "pills" */}
                <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, i) => (
                    <motion.div 
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 bg-[#1a1a1a] border border-gray-800 px-4 py-2 rounded-lg shrink-0"
                    >

                    {typeof skill.icon === 'string' ? (
                    <img src={skill.icon} 
                         className="h-10 w-10 p-1 object-contain" 
                         alt={skill.name} />
                    ) : (
                    <div className="h-10 w-10 flex items-center justify-center text-3xl">
                      {skill.icon}
                    </div>
                    )}
                    <span className="text-white font-medium">{skill.name}</span>
                    </motion.div>
                ))}
                </div>

            </div>
            ))}
        </div>
        </motion.div>
        </div>
    );
    };

export default Skills;



