const Navbar = () => {
    return (
        <nav className="hidden md:flex w-1/2 mx-auto rounded-2xl sticky top-5 z-50 justify-center text-[#EBE4E4]
         text-xl items-center p-6 font-black font-mono bg-black-900/80 backdrop-blur-md border
          border-white/20 shadow-xl">
            <ul className="flex gap-15">
                <li className="hover:text-blue-500 cursor-pointer">
                    <a href="#about">About</a>
                </li>
                <li className="hover:text-blue-500 cursor-pointer">
                    <a href="#skills">Skills</a>
                </li>
                <li className="hover:text-blue-500 cursor-pointer">
                    <a href="#projects">Projects</a>
                </li>
                <li className="hover:text-blue-500 cursor-pointer">
                    <a href="#contact">Contact Me</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar; 