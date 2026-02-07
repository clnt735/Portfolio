import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { use, useRef } from "react";

const TimelineItem = ({ item }) => {
  
  const ref = useRef(null);
  
  // Track scroll progress for this specific item's container
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 1", "start 0.6"] // Start animation when bottom enters, end at center
  });

  // Map scroll progress to vertical movement (Going Up/Down)
  // When scroll is at start (0), y is 100px down. When at center (1), y is 0.
  const rawY = useTransform(scrollYProgress, [0, 1], [300, 0]);
  const y = useSpring(rawY, {
    stiffness: 300,
    damping: 30,
    mass: 1,
    restDelta: 0.001
  });

  const rawOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);
  const opacity = useSpring(rawOpacity, {stiffness: 200, damping: 30});

  return (
    <div ref={ref} className={`relative flex flex-col md:flex-row items-center w-full mb-10 md:mb-5 ${
      item.side === "right" ? "md:flex-row-reverse" : ""
    }`}>
      {/* The Animated Box */}
      <motion.div
        style={{ y, opacity }}
        className="w-full md:w-[42%] p-6 bg-[#111] border border-white-800 rounded-xl shadow-2xl"
      >
        <span className="text-gray-500 text-sm">{item.date}</span>
        <h3 className="text-teal-400 font-bold text-xl mt-2">{item.title}</h3>
        <p className="text-gray-300 mt-3 text-sm leading-relaxed">{item.desc}</p>
      </motion.div>

      {/* The Static Center Dot */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-teal-500 rounded-full z-10 border-4 border-black shadow-[0_0_10px_#14b8a6]" />
      
      <div className="hidden md:flex w-[42%]" /> 
    </div>
  );
};

const Journey = () => {
  const timelineData = [
    { date: "2023 - 2024", title: "Started College", desc: "I started my academic journey as an Information Technology student at Pangasinan State University - Bayambang Campus, eager to learn and develop my skills in the IT field.", side: "right" },
    { date: "2024 - 2025",  title: "Created Our First Project", desc: "We as a group in System Analysis and Design (SAD) created our project called 'WorkMuna'. ", side: "left" },
    { date: "2025 - Present", title: "Creating More Project and Learning", desc: "Currently creating my personal portfolio and exploring modern frameworks for better development.", side: "right" }
  ];

  return (
    <section className="relative py-10 md:py-20 bg-black">
      <h1 className="text-center text-4xl font-black text-[#EBE4E4] mb-10 md:mb-32 md:uppercase py-10">
        My Journey
      </h1>
      
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* THE FIXED VERTICAL LINE */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-0.5 bg-teal-500/30 h-full" />
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-0.5 bg-teal-500 h-full" />

        {timelineData.map((item, index) => (
          <TimelineItem key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Journey;