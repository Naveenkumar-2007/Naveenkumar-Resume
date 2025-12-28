"use client";

import { useState } from "react";
import { Mail, Phone, Linkedin, Github, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section id="contact" className="bg-black py-28">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-white/60 text-sm uppercase tracking-widest">Contact</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s discuss how I can help bring your AI ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          
          {/* Contact Form */}
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-8">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white text-sm mb-2">Your Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-white/30"
                />
              </div>
              <div>
                <label className="block text-white text-sm mb-2">Your Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-white/30"
                />
              </div>
              <div>
                <label className="block text-white text-sm mb-2">Your Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={status !== "idle"}
                className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all ${
                  status === "sent" 
                    ? "bg-green-600 text-white" 
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {status === "sending" && <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
                {status === "idle" && <Send className="w-5 h-5" />}
                {status === "idle" ? "Send Message" : status === "sending" ? "Sending..." : "✓ Message Sent!"}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-5">
                <a href="mailto:naveenkumarchapala123@gmail.com" className="flex items-center gap-4 text-white hover:opacity-80 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm">Email</p>
                    <p className="text-white">naveenkumarchapala123@gmail.com</p>
                  </div>
                </a>

                <a href="tel:+918897464729" className="flex items-center gap-4 text-white hover:opacity-80 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm">Phone</p>
                    <p className="text-white">+91 8897464729</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm">Location</p>
                    <p className="text-white">Chennai, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Connect with me</h3>
              <div className="flex gap-3">
                <a href="https://github.com/Naveenkumar-2007" target="_blank" rel="noopener noreferrer"
                   className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/chapala-naveen-kumar-69980533b" target="_blank" rel="noopener noreferrer"
                   className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:naveenkumarchapala123@gmail.com"
                   className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
