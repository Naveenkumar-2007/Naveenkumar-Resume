"use client";

import { Github, Linkedin, Mail, Phone, Download, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="bg-black pt-28 pb-10">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div className="order-2 lg:order-1">

            {/* Status Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-white text-base">Available for Opportunities</span>
            </div>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              Hi, I&apos;m Naveen Kumar
            </h1>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl text-white/80 font-medium mb-10">
              AI/ML Engineer
            </h2>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#projects"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-semibold flex items-center gap-2 transition-all"
              >
                View My Work
                <ChevronRight className="w-5 h-5" />
              </a>
              <a
                href="/Naveenkumar_Resume.pdf"
                download="Naveen_Kumar_Resume.pdf"
                className="px-6 py-3 bg-white/5 border border-white/20 hover:bg-white/10 rounded-xl text-white font-semibold flex items-center gap-2 transition-all"
              >
                <Download className="w-5 h-5" />
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-white/50 text-sm">Connect:</span>
              <div className="flex gap-3">
                <a href="https://github.com/Naveenkumar-2007" target="_blank" rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/chapala-naveen-kumar-69980533b" target="_blank" rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:naveenkumarchapala123@gmail.com"
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="tel:+918897464729"
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all">
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right - Profile Photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-20"></div>
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/10">
                <Image
                  src="/profile.jpg"
                  alt="Chapala Naveen Kumar"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats - Separate section with clear spacing */}
        <div className="mt-20 pt-16 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">9+</div>
              <div className="text-white/50 text-base">Projects Built</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">3+</div>
              <div className="text-white/50 text-base">Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">2+</div>
              <div className="text-white/50 text-base">Hackathons</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">2028</div>
              <div className="text-white/50 text-base">Graduating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
