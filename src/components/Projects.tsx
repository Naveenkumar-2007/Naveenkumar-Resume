"use client";

import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Diabetes Risk Prediction",
    description: "AI-powered medical diagnosis system that predicts diabetes risk using machine learning algorithms with an interactive healthcare interface.",
    liveUrl: "https://naveen-2007-diabetes.hf.space/",
    color: "#ec4899",
  },
  {
    id: 2,
    title: "AI Stock Price Predictor",
    description: "Advanced stock market forecasting using LSTM deep learning networks with real-time candlestick visualization and trend analysis.",
    liveUrl: "https://naveen-2007-ai-stock-predictor.hf.space/",
    color: "#10b981",
  },
  {
    id: 3,
    title: "Perplexity AI Clone",
    description: "Intelligent search engine with AI-powered answers, multiple search modes, and real-time web search capabilities using RAG architecture.",
    liveUrl: "https://naveen-2007-perplexity-clone.hf.space/",
    color: "#06b6d4",
  },
  {
    id: 4,
    title: "GenAI Intelligence Studio",
    description: "Comprehensive Agentic RAG system with multi-model support, document processing, and intelligent workflow automation for enterprises.",
    liveUrl: "https://naveenkumar-2007--genai-intelligence-studi-streamlit-app-qreybr.streamlit.app/",
    color: "#8b5cf6",
  },
  {
    id: 5,
    title: "Fake News Detection API",
    description: "FastAPI-powered NLP system for detecting misinformation using advanced text classification and sentiment analysis with REST endpoints.",
    liveUrl: "https://news-qzod.onrender.com/docs",
    color: "#f97316",
  },
  {
    id: 6,
    title: "Network Security Predictor",
    description: "Cyber security analysis tool for predicting and identifying network threats using machine learning classification and threat detection.",
    liveUrl: "https://security-clou.onrender.com/",
    color: "#3b82f6",
  },
  {
    id: 7,
    title: "CIFAR-10 Image Classifier",
    description: "Deep learning CNN model for image classification across 10 categories including planes, cars, birds, cats, and more with high accuracy.",
    liveUrl: "https://naveenkumar-2007-image-cnn-0tfygw.streamlit.app/",
    color: "#14b8a6",
  },
  {
    id: 8,
    title: "Weather Prediction System",
    description: "ML-powered weather forecasting application using historical data analysis and predictive modeling for accurate rainfall predictions.",
    liveUrl: "https://weather-gxiw.onrender.com/last",
    color: "#60a5fa",
  },
  {
    id: 9,
    title: "Article Analyzer",
    description: "NLP-powered text analysis tool for extracting insights, summaries, sentiment analysis, and key information from articles and documents.",
    liveUrl: "https://naveenkumar-2007-artical-analyzer-app-aa8n5m.streamlit.app/",
    color: "#a855f7",
  },
];

// Thumbnail SVGs for each project
const getThumbnail = (id: number) => {
  switch (id) {
    case 1: // Diabetes
      return (
        <svg viewBox="0 0 200 150" className="w-full h-full">
          <rect x="40" y="20" width="120" height="80" rx="10" fill="#1a1a2e" stroke="#ec4899" strokeWidth="2" />
          <rect x="50" y="28" width="100" height="60" rx="6" fill="#0f0f1a" />
          <path d="M55 60 L75 60 L80 40 L90 80 L100 50 L105 65 L120 65 L145 65" stroke="#ec4899" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <text x="140" y="42" fill="#ec4899" fontSize="10" fontWeight="bold">♥ 72</text>
          <path d="M100 105 C100 105 80 92 80 80 C80 72 88 66 96 68 C99 69 100 71 100 71 C100 71 101 69 104 68 C112 66 120 72 120 80 C120 92 100 105 100 105Z" fill="#ec4899" />
          <circle cx="70" cy="125" r="4" fill="#06b6d4" />
          <circle cx="90" cy="125" r="4" fill="#ec4899" />
          <circle cx="110" cy="125" r="4" fill="#06b6d4" />
          <circle cx="130" cy="125" r="4" fill="#ec4899" />
        </svg>
      );
    case 2: // Stock
      return (
        <svg viewBox="0 0 200 150" className="w-full h-full">
          {[40, 60, 80, 100].map((y, i) => (
            <line key={i} x1="30" y1={y} x2="170" y2={y} stroke="#1a1a2e" strokeWidth="1" />
          ))}
          <path d="M35 110 L60 95 L90 100 L120 70 L150 80 L170 50 L170 120 L35 120 Z" fill="#10b98130" />
          {[
            { x: 45, o: 100, c: 90, h: 85, l: 105, up: true },
            { x: 70, o: 85, c: 95, h: 80, l: 100, up: false },
            { x: 95, o: 90, c: 75, h: 70, l: 95, up: true },
            { x: 120, o: 70, c: 60, h: 55, l: 75, up: true },
            { x: 145, o: 65, c: 75, h: 60, l: 80, up: false },
            { x: 170, o: 55, c: 45, h: 40, l: 60, up: true },
          ].map((c, i) => (
            <g key={i}>
              <line x1={c.x} y1={c.h} x2={c.x} y2={c.l} stroke={c.up ? "#10b981" : "#ef4444"} strokeWidth="2" />
              <rect x={c.x - 5} y={Math.min(c.o, c.c)} width="10" height={Math.abs(c.o - c.c) + 2} fill={c.up ? "#10b981" : "#ef4444"} rx="1" />
            </g>
          ))}
          <rect x="140" y="20" width="45" height="20" rx="4" fill="#10b981" />
          <text x="162" y="34" fill="white" fontSize="9" fontWeight="bold" textAnchor="middle">+24.7%</text>
        </svg>
      );
    case 3: // Perplexity
      return (
        <svg viewBox="0 0 200 150" className="w-full h-full">
          <rect x="20" y="15" width="160" height="120" rx="12" fill="#0f172a" stroke="#1e293b" strokeWidth="2" />
          <rect x="30" y="28" width="140" height="32" rx="8" fill="#1e293b" />
          <circle cx="48" cy="44" r="8" stroke="#06b6d4" strokeWidth="2" fill="none" />
          <line x1="54" y1="50" x2="60" y2="56" stroke="#06b6d4" strokeWidth="2" />
          <rect x="68" y="40" width="80" height="8" rx="4" fill="#334155" />
          <rect x="30" y="68" width="40" height="20" rx="5" fill="#06b6d4" />
          <text x="50" y="82" fill="white" fontSize="8" fontWeight="bold" textAnchor="middle">All</text>
          <rect x="78" y="68" width="40" height="20" rx="5" fill="#1e293b" stroke="#334155" />
          <text x="98" y="82" fill="#94a3b8" fontSize="8" textAnchor="middle">Focus</text>
          <rect x="126" y="68" width="40" height="20" rx="5" fill="#1e293b" stroke="#334155" />
          <text x="146" y="82" fill="#94a3b8" fontSize="8" textAnchor="middle">Pro</text>
          <rect x="30" y="96" width="110" height="6" rx="3" fill="#334155" />
          <rect x="30" y="108" width="80" height="6" rx="3" fill="#334155" />
          <rect x="30" y="120" width="95" height="6" rx="3" fill="#334155" />
        </svg>
      );
    case 4: // GenAI Studio
      return (
        <svg viewBox="0 0 200 150" className="w-full h-full">
          <circle cx="100" cy="65" r="28" fill="#1e1b4b" stroke="#8b5cf6" strokeWidth="3" />
          <text x="100" y="73" fontSize="24" textAnchor="middle">🤖</text>
          {[
            { x: 40, y: 35, icon: "📄" },
            { x: 160, y: 35, icon: "🔍" },
            { x: 40, y: 110, icon: "💬" },
            { x: 160, y: 110, icon: "⚡" },
          ].map((n, i) => (
            <g key={i}>
              <line x1="100" y1="65" x2={n.x} y2={n.y} stroke="#8b5cf6" strokeWidth="2" strokeDasharray="4,4" opacity="0.5" />
              <circle cx={n.x} cy={n.y} r="20" fill="#1e293b" stroke="#8b5cf6" strokeWidth="2" />
              <text x={n.x} y={n.y + 5} fontSize="14" textAnchor="middle">{n.icon}</text>
            </g>
          ))}
          <rect x="60" y="125" width="80" height="18" rx="9" fill="#8b5cf640" />
          <text x="100" y="138" fill="#c4b5fd" fontSize="8" textAnchor="middle" fontWeight="bold">AGENTIC RAG</text>
        </svg>
      );
    case 5: // Fake News
      return (
        <svg viewBox="0 0 200 150" className="w-full h-full">
          <rect x="15" y="15" width="75" height="85" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="2" />
          <rect x="22" y="22" width="61" height="35" rx="4" fill="#0f172a" />
          <rect x="22" y="62" width="45" height="6" rx="3" fill="#475569" />
          <rect x="22" y="73" width="61" height="4" rx="2" fill="#334155" />
          <rect x="22" y="82" width="50" height="4" rx="2" fill="#334155" />
          <rect x="22" y="91" width="55" height="4" rx="2" fill="#334155" />

          <rect x="110" y="15" width="75" height="85" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="2" />
          <rect x="117" y="22" width="61" height="35" rx="4" fill="#0f172a" />
          <rect x="117" y="62" width="45" height="6" rx="3" fill="#475569" />
          <rect x="117" y="73" width="61" height="4" rx="2" fill="#334155" />
          <rect x="117" y="82" width="50" height="4" rx="2" fill="#334155" />
          <rect x="117" y="91" width="55" height="4" rx="2" fill="#334155" />

          <circle cx="52" cy="40" r="12" fill="#dc2626" />
          <path d="M46 34 L58 46 M58 34 L46 46" stroke="white" strokeWidth="2.5" strokeLinecap="round" />

          <circle cx="147" cy="40" r="12" fill="#22c55e" />
          <path d="M141 40 L145 44 L153 36" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />

          <rect x="20" y="110" width="65" height="28" rx="6" fill="#dc2626" />
          <text x="52" y="128" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">FAKE</text>

          <rect x="115" y="110" width="65" height="28" rx="6" fill="#22c55e" />
          <text x="147" y="128" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">REAL</text>
        </svg>
      );
    case 6: // Security
      return (
        <svg viewBox="0 0 200 150" className="w-full h-full">
          <path d="M100 10 L155 28 L155 70 Q155 115 100 140 Q45 115 45 70 L45 28 Z" fill="#3b82f6" />
          <path d="M100 22 L145 38 L145 68 Q145 105 100 125 Q55 105 55 68 L55 38 Z" fill="#0f172a" />
          <rect x="82" y="60" width="36" height="30" rx="5" fill="#3b82f6" />
          <path d="M88 60 L88 50 Q88 38 100 38 Q112 38 112 50 L112 60" stroke="#3b82f6" strokeWidth="5" fill="none" />
          <circle cx="100" cy="73" r="5" fill="#0f172a" />
          <rect x="97" y="73" width="6" height="10" fill="#0f172a" />
          <circle cx="100" cy="105" r="10" fill="#22c55e" />
          <path d="M94 105 L98 109 L106 101" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      );
    case 7: // CIFAR-10
      return (
        <svg viewBox="0 0 200 150" className="w-full h-full">
          {[
            { x: 20, y: 15, icon: "✈️" },
            { x: 75, y: 15, icon: "🚗" },
            { x: 130, y: 15, icon: "🐦" },
            { x: 20, y: 60, icon: "🐱" },
            { x: 75, y: 60, icon: "🦌" },
            { x: 130, y: 60, icon: "🐕" },
          ].map((item, i) => (
            <g key={i}>
              <rect x={item.x} y={item.y} width="45" height="40" rx="8" fill="#1e293b" stroke="#14b8a6" strokeWidth="1.5" />
              <text x={item.x + 22} y={item.y + 28} fontSize="18" textAnchor="middle">{item.icon}</text>
            </g>
          ))}
          <rect x="30" y="110" width="140" height="30" rx="8" fill="#1e293b" stroke="#14b8a6" strokeWidth="2" />
          <text x="100" y="130" fill="#14b8a6" fontSize="11" fontWeight="bold" textAnchor="middle">🎯 Prediction: CAT 98.7%</text>
        </svg>
      );
    case 8: // Weather
      return (
        <svg viewBox="0 0 200 150" className="w-full h-full">
          <circle cx="55" cy="45" r="25" fill="#fbbf24" />
          <circle cx="55" cy="45" r="32" fill="#fbbf2440" />
          <ellipse cx="120" cy="45" rx="38" ry="22" fill="#94a3b8" />
          <ellipse cx="95" cy="52" rx="22" ry="16" fill="#94a3b8" />
          <ellipse cx="145" cy="52" rx="24" ry="18" fill="#94a3b8" />
          {[95, 115, 135, 155].map((x, i) => (
            <line key={i} x1={x} y1={75 + i * 4} x2={x - 6} y2={92 + i * 4} stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round" />
          ))}
          <rect x="25" y="110" width="65" height="30" rx="6" fill="#1e293b" stroke="#60a5fa" strokeWidth="1" />
          <text x="57" y="130" fill="#60a5fa" fontSize="12" fontWeight="bold" textAnchor="middle">🌡️ 24°C</text>
          <rect x="110" y="110" width="65" height="30" rx="6" fill="#1e293b" stroke="#60a5fa" strokeWidth="1" />
          <text x="142" y="130" fill="#60a5fa" fontSize="12" fontWeight="bold" textAnchor="middle">💧 72%</text>
        </svg>
      );
    case 9: // Article Analyzer
      return (
        <svg viewBox="0 0 200 150" className="w-full h-full">
          <rect x="20" y="10" width="85" height="110" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="2" />
          <rect x="20" y="10" width="85" height="25" rx="8" fill="#a855f740" />
          <rect x="30" y="45" width="65" height="5" rx="2.5" fill="#475569" />
          <rect x="30" y="56" width="50" height="5" rx="2.5" fill="#475569" />
          <rect x="30" y="67" width="60" height="5" rx="2.5" fill="#475569" />
          <rect x="30" y="78" width="45" height="5" rx="2.5" fill="#475569" />
          <rect x="30" y="89" width="65" height="5" rx="2.5" fill="#475569" />
          <rect x="30" y="100" width="50" height="5" rx="2.5" fill="#475569" />

          <rect x="115" y="20" width="70" height="100" rx="8" fill="#1e293b" stroke="#a855f7" strokeWidth="2" />
          <text x="150" y="42" fill="#a855f7" fontSize="9" fontWeight="bold" textAnchor="middle">ANALYSIS</text>
          <rect x="125" y="52" width="50" height="18" rx="4" fill="#22c55e" />
          <text x="150" y="65" fill="white" fontSize="8" fontWeight="bold" textAnchor="middle">Positive</text>
          <rect x="125" y="78" width="30" height="12" rx="3" fill="#a855f780" />
          <rect x="125" y="95" width="40" height="12" rx="3" fill="#06b6d480" />

          <circle cx="150" cy="135" r="18" fill="#a855f730" stroke="#a855f7" strokeWidth="2" />
          <text x="150" y="141" fontSize="16" textAnchor="middle">🧠</text>
        </svg>
      );
    default:
      return null;
  }
};

export default function Projects() {
  return (
    <section id="projects" className="bg-black py-28">
      <div className="container">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-white/60 text-sm uppercase tracking-widest">Portfolio</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Production-ready AI applications showcasing expertise in Generative AI, Machine Learning, and Full-Stack Development
          </p>
        </div>

        {/* Projects Grid - 3 columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#0a0a0f] rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Thumbnail */}
              <div className="h-40 bg-[#050508] p-4 flex items-center justify-center">
                {getThumbnail(project.id)}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-5 line-clamp-3">
                  {project.description}
                </p>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-sm font-semibold transition-all hover:opacity-90"
                  style={{ backgroundColor: project.color }}
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
