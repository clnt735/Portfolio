import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [message, setMessage] = useState('');
    const MAX_CHARS = 500; // From your reference image

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
            .then(() => {
                alert("Message sent!");
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
    <div id="contact" className="min-h-screen bg-[#111111] text-[#EBE4E4] flex flex-col items-center py-20 px-5 mt-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1.5fr_1fr] gap-16 w-full py-10">
            
            {/* LEFT SIDE: FORM */}
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-8">
                <h2 className="text-xl font-bold uppercase tracking-widest">Start a Conversation</h2>
                
                <div className="flex flex-col gap-10">
                    <input name="email" type="email" placeholder="Email" required 
                        className="bg-transparent border-b border-gray-700 py-2 focus:outline-none focus:border-blue-500 transition-colors" />
                    
                    <div className="grid grid-cols-2 gap-8">
                        <input name="first_name" placeholder="First Name" 
                            className="bg-transparent border-b border-gray-700 py-2 focus:outline-none" />
                        <input name="last_name" placeholder="Last Name" 
                            className="bg-transparent border-b border-gray-700 py-2 focus:outline-none" />
                    </div>

                    <input name="company_name" placeholder="Company name" 
                        className="bg-transparent border-b border-gray-700 py-2 focus:outline-none" />
                    
                    <input name="interest" placeholder="Please indicate your interest" 
                        className="bg-transparent border-b border-gray-700 py-2 focus:outline-none" />

                    <div className="relative">
                        <textarea 
                            name="message"
                            placeholder="Tell me about your project..."
                            maxLength={MAX_CHARS}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg p-4 h-40 focus:outline-none resize-none"
                        />
                        <div className="absolute bottom-4 right-4 text-xs text-gray-500">
                            {message.length}/{MAX_CHARS}
                        </div>
                    </div>
                </div>

                <button type="submit" 
                        className="w-40 py-3 rounded-lg bg-[#2a2a2a] border border-gray-600 hover:bg-white hover:text-black transition-all font-bold uppercase text-xs cursor-pointer">
                    Contact Me
                </button>
            </form>

            {/* RIGHT SIDE: INFO */}
            <div className="space-y-10">
                <div>
                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Contact</h3>
                    <a href="mailto:clintjohnmaslog6@gmail.com" className="text-gray-300 hover:text-gray-400">clintjohnmaslog6@gmail.com</a>
                    <p className="text-gray-300">+63 935 911 5503</p>
                </div>
                
                <div className="flex flex-col gap-2">
                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Follow</h3>
                    <a href="https://www.linkedin.com/in/clint-john-maslog-5040ba366/" target="_blank" rel="noopener noreferrer" 
                    className="hover:text-gray-400 cursor-pointer">LinkedIn</a>
                    <a href="https://github.com/clnt735" target="_blank" rel="noopener noreferrer" 
                    className="hover:text-gray-400 cursor-pointer">GitHub</a>
                </div>

                <div>
                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Address</h3>
                    <p className="text-gray-300">Bautista, Pangasinan<br/>Ilocos Region, PH</p>
                </div>
            </div>
        </div>

        <div className="w-full mt-15 py-5 items-center text-center">
            <a href="mailto:clint.dev.contact@gmail.com" className="text-gray-300 text-2xl md:text-7xl font-black hover:text-gray-400">clint.dev.contact@gmail.com</a>
        </div>

        <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/clint-john-maslog-5040ba366/" 
                target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-blue-500 text-3xl md:text-5xl font-bold">
                
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
                    className="w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:scale-110" 
                    alt="LinkedIn" />
            </a>

            <a href="https://github.com/clnt735" 
                target="_blank" rel="noopener noreferrer" 
                className=" text-3xl md:text-5xl font-bold -mt-1">
                
            <i class="devicon-github-original"></i>
            </a>
        </div>

    </div>
    );
};

export default Contact;