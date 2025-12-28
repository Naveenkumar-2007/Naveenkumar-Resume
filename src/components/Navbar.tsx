"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? "bg-black/95 backdrop-blur-sm border-b border-white/10" : ""}`}>
      <div className="container flex items-center justify-between h-20">
        <Link href="#home" className="text-2xl font-bold text-white">
          NK<span className="text-cyan-400">.</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-10">
          {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`} className="text-base text-white/70 hover:text-white transition-colors">
              {item}
            </Link>
          ))}
        </div>

        <Link href="#contact" className="btn-primary py-3 px-6">
          Hire Me
        </Link>
      </div>
    </nav>
  );
}
