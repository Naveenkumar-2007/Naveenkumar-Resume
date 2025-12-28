"use client";

import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#020408] border-t border-white/10 py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-black text-white mb-3">
              Naveen<span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Kumar</span>
            </h3>
            <p className="text-white/50 text-lg">AI Engineer</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            <a 
              href="https://github.com/Naveenkumar-2007" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-white/30 hover:scale-110 transition-all duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/chapala-naveen-kumar-69980533b" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-white/30 hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:naveenkumarchapala123@gmail.com"
              className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-white/30 hover:scale-110 transition-all duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-10"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-white/50 text-lg flex items-center justify-center gap-2">
            © {new Date().getFullYear()} Chapala Naveen Kumar. Made with 
            <Heart className="w-5 h-5 text-red-500 fill-red-500" /> 
            in India
          </p>
        </div>
      </div>
    </footer>
  );
}
