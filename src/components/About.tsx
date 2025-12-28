"use client";

import { GraduationCap, Award, Trophy, Calendar, MapPin, Building } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="bg-[#050505] pt-16 pb-24">
      <div className="container">

        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-white text-xl uppercase tracking-[0.3em] font-medium">ABOUT ME</span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mt-6 mb-6">
            Passionate AI/ML Engineer
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Building the future with Artificial Intelligence and Machine Learning
          </p>
        </div>

        {/* Bio Card */}
        <div className="max-w-5xl mx-auto mb-24">
          <div className="bg-white/5 rounded-3xl p-10 sm:p-14 border border-white/10">

            <p className="text-xl sm:text-2xl text-white leading-loose mb-8">
              I&apos;m <span className="font-bold">Chapala Naveen Kumar</span>, an AI/ML Engineer with hands-on experience in building end-to-end Machine Learning and Generative AI applications.
            </p>

            <p className="text-xl sm:text-2xl text-white/80 leading-loose mb-8">
              Skilled in developing LLM-based systems, Retrieval-Augmented Generation (RAG) pipelines, and agentic AI workflows. Proficient in Python, TensorFlow, Scikit-learn, FastAPI, and Flask for model development and deployment.
            </p>

            <p className="text-xl sm:text-2xl text-white/80 leading-loose">
              Experienced in integrating vector databases, APIs, and cloud platforms to deliver production-ready AI solutions.
            </p>

          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* Education Card */}
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all">
            <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-6">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-5">Education</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white/70">
                <Calendar className="w-4 h-4" />
                <span>Jul 2024 - Jul 2028</span>
              </div>
              <h4 className="text-lg font-semibold text-white">B.Tech in CSE (AI & ML)</h4>
              <div className="flex items-center gap-2 text-white/60">
                <Building className="w-4 h-4" />
                <span>SIMATS Engineering College</span>
              </div>
              <div className="flex items-center gap-2 text-white/50">
                <MapPin className="w-4 h-4" />
                <span>Chennai, India</span>
              </div>
              <div className="mt-2 inline-block px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-lg">
                <span className="text-blue-400 font-semibold">CGPA: 8.8/10</span>
              </div>
            </div>
          </div>

          {/* Certifications Card */}
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all">
            <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-6">
              <Award className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-5">Certifications</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-base font-semibold text-white mb-1">OCI Generative AI Professional</h4>
                <p className="text-white/50 text-sm">Oracle • 2025</p>
              </div>
              <div>
                <h4 className="text-base font-semibold text-white mb-1">Best Student Award</h4>
                <p className="text-white/50 text-sm">Wisdom Path Foundation • 2025</p>
              </div>
              <div>
                <h4 className="text-base font-semibold text-white mb-1">ML, DL & NLP Bootcamp</h4>
                <p className="text-white/50 text-sm">Udemy</p>
              </div>
            </div>
          </div>

          {/* Hackathons Card */}
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all">
            <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-6">
              <Trophy className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-5">Hackathons</h3>
            <div className="space-y-5">
              <div>
                <h4 className="text-base font-semibold text-white mb-1">Smart India Hackathon</h4>
                <p className="text-white/50 text-sm">National Level • Participant</p>
              </div>
              <div>
                <h4 className="text-base font-semibold text-white mb-1">GenAI Buildathon</h4>
                <p className="text-white/50 text-sm">India&apos;s Biggest GenAI Competition</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
