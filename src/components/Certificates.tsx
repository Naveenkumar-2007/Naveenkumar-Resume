"use client";

import { Award, Calendar, ExternalLink, Building } from "lucide-react";

const certificates = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle University",
    date: "October 29, 2025",
    description: "Certified in Oracle Cloud Infrastructure Generative AI services, demonstrating expertise in building and deploying AI solutions on Oracle Cloud.",
    gradient: "from-red-600 to-orange-500",
    logo: "ORACLE",
  },
  {
    title: "GenAI Buildathon - Certificate of Participation",
    issuer: "NxtWave - OpenAI Academy Learning Community",
    date: "August 15, 2025",
    description: "Participated in India's Biggest GenAI Buildathon, the Generative AI Mastery Workshop organized by NxtWave in collaboration with OpenAI Academy.",
    gradient: "from-blue-600 to-purple-500",
    logo: "NXT WAVE",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-pink-400 text-sm font-medium uppercase tracking-wider">Achievements</span>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mt-2">
            Certificates
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Professional certifications and achievements in AI & Cloud technologies
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certificates.map((cert) => (
            <div key={cert.title} className="glass-card overflow-hidden group hover:border-white/20 transition-all duration-300">
              {/* Header with gradient */}
              <div className={`bg-gradient-to-r ${cert.gradient} p-6 relative`}>
                <div className="flex items-start justify-between">
                  <div className="px-3 py-1 bg-black/30 rounded text-white text-xs font-bold">
                    {cert.logo}
                  </div>
                  <Award className="w-8 h-8 text-white/50" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-3 leading-tight">
                  {cert.title}
                </h3>
                
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                  <Building className="w-4 h-4" />
                  <span>{cert.issuer}</span>
                </div>
                
                <div className="flex items-center gap-2 text-cyan-400 text-sm mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>{cert.date}</span>
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {cert.description}
                </p>

                <div className="mt-4 pt-4 border-t border-white/10">
                  <span className="inline-flex items-center gap-2 text-green-400 text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    Verified Certificate
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
