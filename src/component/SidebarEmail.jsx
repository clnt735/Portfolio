const SidebarEmail = () => {
  return (

    <div className="fixed left-5 top-1/3 -translate-y-1/2 z-40 hidden lg:flex items-center">
      <div className="flex items-center gap-4 -rotate-270 origin-left">
        <a 
          href="mailto:clint.dev.contact@gmail.com" 
          className="text-teal-400 font-black tracking-widest text-m hover:text-white hover:-translate-y-1 transition-all duration-300"
        >
          clint.dev.contact@gmail.com
        </a>
        
      </div>
    </div>
  );
};

export default SidebarEmail;