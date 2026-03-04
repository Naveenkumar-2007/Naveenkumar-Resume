import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../ThemeContext'

/* ────────────────────────────────────────────────────
   NAVBOT CHATBOT
   • Floating button with animated robot icon
   • Opens a panel with spotlight intro that reveals
     portfolio info one item at a time with light beams
   • Then transitions to a simple Q&A chatbot
   ──────────────────────────────────────────────────── */

const portfolioData = [
  { label: 'NAME', value: 'Chapala Naveen Kumar', color: '#00ffcc', icon: '👤' },
  { label: 'ROLE', value: 'AI & Machine Learning Engineer', color: '#00d4ff', icon: '🤖' },
  { label: 'EDUCATION', value: 'B.Tech CSE (AI & ML) — SIMATS, Chennai', color: '#00b8ff', icon: '🎓' },
  { label: 'EXPERTISE', value: 'AutoML · RAG Systems · Deep Learning · NLP', color: '#ffb800', icon: '⚡' },
  { label: 'STACK', value: 'Python · TensorFlow · FastAPI · Docker · LangChain', color: '#ff6b9d', icon: '🛠️' },
  { label: 'PROJECTS', value: '10+ AI/ML Projects · 3+ Certifications', color: '#a855f7', icon: '📊' },
  { label: 'MOTTO', value: '"From raw data to intelligent solutions."', color: '#00ffcc', icon: '💡' },
]

const chatResponses = {
  name: 'My name is Chapala Naveen Kumar — an AI & Machine Learning Engineer passionate about building intelligent systems.',
  skills: 'I specialize in Machine Learning, Deep Learning, NLP, Generative AI, RAG Systems, and MLOps. My stack includes Python, TensorFlow, FastAPI, Docker, LangChain, and more.',
  projects: 'I\'ve built 10+ AI/ML projects including DataVision AI (AutoML platform), AI Stock Predictor (LSTM), Perplexity AI Clone (RAG), GenAI Intelligence Studio, and more. Check the Projects section!',
  education: 'I\'m pursuing B.Tech in CSE (AI & ML) at SIMATS Engineering College, Chennai with a CGPA of 8.8/10, graduating in 2028.',
  contact: 'Email: naveenkumarchapala123@gmail.com | LinkedIn: linkedin.com/in/chapala-naveen-kumar-69980533b | GitHub: github.com/Naveenkumar-2007',
  certifications: 'Oracle OCI Generative AI Professional, ML/DL/NLP Bootcamp, RAG with LLM Certification, Best Student Award 2025, Smart India Hackathon Participant.',
  experience: 'I have hands-on experience in building end-to-end ML pipelines, developing LSTM/CNN models, implementing RAG systems, and deploying models using Flask, FastAPI, Docker, and MLflow.',
  hello: 'Hello! 👋 I\'m NavBot, Naveen\'s AI assistant. Ask me anything about his skills, projects, education, or experience!',
  hi: 'Hi there! 👋 I\'m NavBot. How can I help you learn about Naveen\'s portfolio?',
  default: 'I can tell you about Naveen\'s skills, projects, education, certifications, and experience. Try asking about any of these topics!'
}

function getResponse(input) {
  const lower = input.toLowerCase().trim()
  if (lower.match(/^(hi|hey|hello|howdy)/)) return chatResponses.hello
  if (lower.includes('name') || lower.includes('who')) return chatResponses.name
  if (lower.includes('skill') || lower.includes('tech') || lower.includes('stack') || lower.includes('know')) return chatResponses.skills
  if (lower.includes('project') || lower.includes('work') || lower.includes('built') || lower.includes('portfolio')) return chatResponses.projects
  if (lower.includes('education') || lower.includes('college') || lower.includes('degree') || lower.includes('study')) return chatResponses.education
  if (lower.includes('contact') || lower.includes('email') || lower.includes('reach') || lower.includes('connect')) return chatResponses.contact
  if (lower.includes('cert') || lower.includes('award') || lower.includes('achieve')) return chatResponses.certifications
  if (lower.includes('experience') || lower.includes('expert')) return chatResponses.experience
  return chatResponses.default
}

/* ── Animated CSS Robot ── */
function ChatbotRobot({ isOpen, spotlightPhase }) {
  return (
    <motion.div
      style={{ position: 'relative', width: 120, height: 150, margin: '0 auto' }}
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
    >
      {/* Ambient glow */}
      <motion.div
        animate={{
          opacity: spotlightPhase >= 0 ? [0.2, 0.5, 0.2] : 0,
          scale: spotlightPhase >= 0 ? [1, 1.1, 1] : 0.8,
        }}
        transition={{ duration: 3, repeat: Infinity }}
        style={{
          position: 'absolute', top: -20, left: -30, width: 180, height: 190,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Headphones */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.3, type: 'spring' }}
        style={{
          position: 'absolute', top: 2, left: -8, width: 136, height: 60,
          border: '4px solid #1a3855',
          borderBottom: 'none', borderRadius: '70px 70px 0 0',
          zIndex: 0,
        }}
      />
      {/* Left ear cup */}
      <motion.div
        animate={{ boxShadow: ['0 0 8px rgba(0,212,255,0.3)', '0 0 16px rgba(0,212,255,0.5)', '0 0 8px rgba(0,212,255,0.3)'] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          position: 'absolute', top: 22, left: -14, width: 22, height: 32,
          background: 'linear-gradient(180deg, #1a3855, #0d2240)',
          borderRadius: 6, border: '1px solid rgba(0,212,255,0.3)', zIndex: 2,
        }}
      />
      {/* Right ear cup */}
      <motion.div
        animate={{ boxShadow: ['0 0 8px rgba(0,212,255,0.3)', '0 0 16px rgba(0,212,255,0.5)', '0 0 8px rgba(0,212,255,0.3)'] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        style={{
          position: 'absolute', top: 22, right: -14, width: 22, height: 32,
          background: 'linear-gradient(180deg, #1a3855, #0d2240)',
          borderRadius: 6, border: '1px solid rgba(0,212,255,0.3)', zIndex: 2,
        }}
      />

      {/* Head */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', damping: 12, delay: 0.1 }}
        style={{
          position: 'absolute', top: 8, left: 10, width: 100, height: 78,
          background: 'linear-gradient(160deg, #e8eef2 0%, #c5d3dc 100%)',
          borderRadius: '22px 22px 18px 18px',
          border: '2px solid rgba(0,212,255,0.15)',
          boxShadow: '0 8px 30px rgba(0,0,0,0.2), inset 0 2px 0 rgba(255,255,255,0.4)',
          overflow: 'hidden', zIndex: 1,
        }}
      >
        {/* Face area */}
        <div style={{
          position: 'absolute', top: 8, left: 8, right: 8, bottom: 12,
          background: 'linear-gradient(180deg, rgba(10,30,50,0.85) 0%, rgba(5,20,35,0.95) 100%)',
          borderRadius: 14,
          border: '1px solid rgba(0,212,255,0.1)',
        }}>
          {/* Eyes */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 20, paddingTop: 12 }}>
            {[0, 1].map(idx => (
              <motion.div
                key={idx}
                animate={{
                  boxShadow: ['0 0 10px #00d4ff, 0 0 20px rgba(0,212,255,0.4)', '0 0 18px #00d4ff, 0 0 35px rgba(0,212,255,0.6)', '0 0 10px #00d4ff, 0 0 20px rgba(0,212,255,0.4)'],
                  background: ['#00d4ff', '#00e8ff', '#00d4ff'],
                }}
                transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                style={{
                  width: 20, height: 20, borderRadius: '50%',
                  background: '#00d4ff',
                  border: '2px solid rgba(0,212,255,0.6)',
                }}
              />
            ))}
          </div>
          {/* Smile */}
          <motion.div
            animate={{ width: [20, 35, 20] }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{
              margin: '8px auto 0', height: 4,
              background: 'rgba(0,212,255,0.4)',
              borderRadius: 3,
            }}
          />
        </div>
      </motion.div>

      {/* Chest glow symbol */}
      <motion.div
        animate={{
          boxShadow: ['0 0 12px rgba(0,212,255,0.3)', '0 0 24px rgba(0,212,255,0.6)', '0 0 12px rgba(0,212,255,0.3)'],
        }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          position: 'absolute', top: 92, left: '50%', transform: 'translateX(-50%)',
          width: 18, height: 18, borderRadius: '50%',
          background: 'linear-gradient(135deg, #00d4ff, #00ffcc)',
          border: '2px solid rgba(0,212,255,0.4)',
          zIndex: 2,
        }}
      />

      {/* Body */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.3, type: 'spring' }}
        style={{
          position: 'absolute', top: 84, left: 20, width: 80, height: 55,
          background: 'linear-gradient(180deg, #e0e8ee 0%, #c0ccd5 100%)',
          borderRadius: '10px 10px 16px 16px',
          border: '2px solid rgba(0,212,255,0.12)',
          boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
          transformOrigin: 'top', zIndex: 1,
        }}
      />

      {/* Arms */}
      {[-1, 1].map((side, idx) => (
        <motion.div
          key={idx}
          animate={{ rotate: [side * 3, side * -3, side * 3] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: idx * 0.3 }}
          style={{
            position: 'absolute', top: 92,
            [side === -1 ? 'left' : 'right']: 6,
            width: 14, height: 40,
            background: 'linear-gradient(180deg, #d0dce5, #b0c0cc)',
            borderRadius: 8,
            border: '1px solid rgba(0,212,255,0.08)',
            transformOrigin: 'top center', zIndex: 0,
          }}
        />
      ))}
    </motion.div>
  )
}

/* ── Spotlight Beam ── */
function SpotlightBeam({ active, color, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: active ? 1 : 0, scale: active ? 1 : 0.8 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      style={{
        position: 'relative',
        padding: '16px 20px',
        marginBottom: 6,
        borderRadius: 12,
        overflow: 'hidden',
      }}
    >
      {/* Spotlight cone effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: active ? [0, 0.8, 0.4] : 0,
        }}
        transition={{ duration: 1.2 }}
        style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(135deg, ${color}08 0%, transparent 70%)`,
          borderLeft: `3px solid ${color}`,
          borderRadius: 12,
          pointerEvents: 'none',
        }}
      />
      {/* Moving light sweep */}
      <motion.div
        animate={active ? {
          left: ['-30%', '130%'],
          opacity: [0, 0.6, 0],
        } : {}}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        style={{
          position: 'absolute', top: 0, bottom: 0,
          width: '30%',
          background: `linear-gradient(90deg, transparent, ${color}15, transparent)`,
          pointerEvents: 'none',
          filter: 'blur(8px)',
        }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </motion.div>
  )
}

/* ── Floating Particles inside chatbot ── */
function ChatParticles() {
  const particles = useRef(
    Array.from({ length: 20 }, () => ({
      x: Math.random() * 100, y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      dur: Math.random() * 8 + 6,
      delay: Math.random() * -5,
      color: ['#00d4ff', '#00ffcc', '#ffb800'][Math.floor(Math.random() * 3)],
      opacity: Math.random() * 0.3 + 0.05,
    }))
  ).current

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {particles.map((p, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -15, 0], opacity: [p.opacity, p.opacity * 2, p.opacity] }}
          transition={{ duration: p.dur, repeat: Infinity, delay: p.delay }}
          style={{
            position: 'absolute', left: `${p.x}%`, top: `${p.y}%`,
            width: p.size, height: p.size, borderRadius: '50%',
            background: p.color, boxShadow: `0 0 ${p.size * 4}px ${p.color}`,
          }}
        />
      ))}
    </div>
  )
}

/* ── Chat Bubble ── */
function ChatBubble({ message, isBot, animate: shouldAnimate }) {
  const { theme } = useTheme()
  return (
    <motion.div
      initial={shouldAnimate ? { opacity: 0, y: 15, scale: 0.95 } : false}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      style={{
        display: 'flex',
        justifyContent: isBot ? 'flex-start' : 'flex-end',
        marginBottom: 10,
      }}
    >
      <div style={{
        maxWidth: '82%',
        padding: '10px 16px',
        borderRadius: isBot ? '4px 16px 16px 16px' : '16px 4px 16px 16px',
        background: isBot ? 'var(--chatbot-msg-bot)' : 'var(--chatbot-msg-user)',
        border: `1px solid ${isBot ? 'rgba(0,212,170,0.12)' : 'rgba(0,184,212,0.12)'}`,
        fontSize: '0.85rem',
        lineHeight: 1.6,
        color: 'var(--text-primary)',
        backdropFilter: 'blur(10px)',
      }}>
        {isBot && (
          <span style={{
            display: 'block', fontSize: '0.65rem', fontWeight: 700, color: 'var(--accent-1)',
            fontFamily: 'var(--font-mono)', letterSpacing: 1, marginBottom: 4,
          }}>NAVBOT</span>
        )}
        {message}
      </div>
    </motion.div>
  )
}

/* ── MAIN CHATBOT COMPONENT ── */
export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [introPhase, setIntroPhase] = useState(-1) // -1 = not started, 0..6 = showing items, 7 = done
  const [introComplete, setIntroComplete] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const scrollRef = useRef(null)
  const timerRef = useRef(null)
  const { theme } = useTheme()

  // Run spotlight intro when chat opens
  useEffect(() => {
    if (isOpen && introPhase === -1) {
      setIntroPhase(0)
    }
  }, [isOpen, introPhase])

  // Advance spotlight
  useEffect(() => {
    if (introPhase < 0 || introPhase > portfolioData.length) return

    if (introPhase < portfolioData.length) {
      timerRef.current = setTimeout(() => {
        setIntroPhase(prev => prev + 1)
      }, 1200)
    } else {
      timerRef.current = setTimeout(() => {
        setIntroComplete(true)
        setMessages([{ text: 'Hello! 👋 I\'m NavBot, Naveen\'s AI portfolio assistant. I just scanned his profile for you! Ask me anything about his skills, projects, education, or experience.', isBot: true }])
      }, 800)
    }
    return () => clearTimeout(timerRef.current)
  }, [introPhase])

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, introPhase])

  const sendMessage = useCallback((text) => {
    if (!text.trim()) return
    const userMsg = { text: text.trim(), isBot: false }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setIsTyping(true)

    setTimeout(() => {
      const response = getResponse(text)
      setMessages(prev => [...prev, { text: response, isBot: true }])
      setIsTyping(false)
    }, 600 + Math.random() * 800)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    sendMessage(input)
  }

  const quickQuestions = ['Skills', 'Projects', 'Education', 'Contact']

  return (
    <>
      {/* ── FLOATING BUTTON ── */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          position: 'fixed', bottom: 24, right: 24, zIndex: 1000,
          width: 60, height: 60, borderRadius: '50%',
          background: 'linear-gradient(135deg, #0a2844 0%, #061a2e 100%)',
          border: '2px solid rgba(0,212,255,0.3)',
          cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 30px rgba(0,212,255,0.2), 0 0 60px rgba(0,212,255,0.05)',
          overflow: 'hidden',
        }}
      >
        {/* Button glow ring */}
        <motion.div
          animate={{
            boxShadow: ['0 0 0 0 rgba(0,212,255,0.4)', '0 0 0 12px rgba(0,212,255,0)', '0 0 0 0 rgba(0,212,255,0.4)'],
          }}
          transition={{ duration: 2.5, repeat: Infinity }}
          style={{
            position: 'absolute', inset: -2, borderRadius: '50%',
          }}
        />
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              exit={{ rotate: 90, scale: 0 }}
              style={{ fontSize: '1.5rem', color: '#00d4ff' }}
            >✕</motion.span>
          ) : (
            <motion.div
              key="bot"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              style={{ width: 32, height: 32, position: 'relative' }}
            >
              {/* Mini robot face */}
              <div style={{
                width: 32, height: 24,
                background: 'linear-gradient(180deg, #c0d0dc, #a0b4c4)',
                borderRadius: '10px 10px 8px 8px',
                position: 'relative',
                border: '1px solid rgba(0,212,255,0.2)',
              }}>
                <div style={{
                  position: 'absolute', top: 4, left: 4, right: 4, bottom: 4,
                  background: 'rgba(5,15,30,0.85)', borderRadius: 6,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                }}>
                  <motion.div
                    animate={{ boxShadow: ['0 0 4px #00d4ff', '0 0 10px #00d4ff', '0 0 4px #00d4ff'] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    style={{ width: 6, height: 6, borderRadius: '50%', background: '#00d4ff' }}
                  />
                  <motion.div
                    animate={{ boxShadow: ['0 0 4px #00d4ff', '0 0 10px #00d4ff', '0 0 4px #00d4ff'] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                    style={{ width: 6, height: 6, borderRadius: '50%', background: '#00d4ff' }}
                  />
                </div>
              </div>
              <div style={{
                width: 26, height: 12,
                background: 'linear-gradient(180deg, #c0d0dc, #a0b4c4)',
                borderRadius: '4px 4px 8px 8px',
                margin: '-1px auto 0', border: '1px solid rgba(0,212,255,0.1)',
              }} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* ── CHAT PANEL ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            style={{
              position: 'fixed', bottom: 96, right: 24, zIndex: 999,
              width: 380, maxHeight: '70vh',
              background: 'var(--chatbot-bg)',
              border: '1px solid rgba(0,212,255,0.15)',
              borderRadius: 20,
              backdropFilter: 'blur(30px)',
              boxShadow: '0 8px 60px rgba(0,0,0,0.25), 0 0 100px rgba(0,212,255,0.06)',
              display: 'flex', flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            <ChatParticles />

            {/* Header */}
            <div style={{
              padding: '16px 20px',
              background: 'var(--chatbot-header)',
              borderBottom: '1px solid rgba(0,212,255,0.1)',
              display: 'flex', alignItems: 'center', gap: 12,
              position: 'relative', zIndex: 2,
            }}>
              <motion.div
                animate={{ boxShadow: ['0 0 10px rgba(0,212,255,0.3)', '0 0 20px rgba(0,212,255,0.5)', '0 0 10px rgba(0,212,255,0.3)'] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                  width: 38, height: 38, borderRadius: 12,
                  background: 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(0,255,204,0.1))',
                  border: '1px solid rgba(0,212,255,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.2rem',
                }}
              >
                🤖
              </motion.div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--text-primary)' }}>NavBot</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    style={{ width: 6, height: 6, borderRadius: '50%', background: '#00ffcc' }}
                  />
                  <span style={{ fontSize: '0.7rem', color: 'var(--accent-1)', fontFamily: 'var(--font-mono)', letterSpacing: 1 }}>ONLINE</span>
                </div>
              </div>
            </div>

            {/* Content area */}
            <div
              ref={scrollRef}
              style={{
                flex: 1, overflowY: 'auto', padding: '16px',
                maxHeight: introComplete ? 380 : 420,
                position: 'relative', zIndex: 2,
              }}
            >
              {/* ── SPOTLIGHT INTRO ── */}
              {!introComplete && (
                <div>
                  {/* Robot animation */}
                  <div style={{ marginBottom: 16 }}>
                    <ChatbotRobot isOpen={isOpen} spotlightPhase={introPhase} />
                  </div>

                  {/* Scanning text */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{
                      textAlign: 'center', marginBottom: 16,
                      fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                      color: 'var(--accent-2)', letterSpacing: 3,
                    }}
                  >
                    <motion.span
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      ● SCANNING PORTFOLIO
                    </motion.span>
                  </motion.div>

                  {/* Spotlight items */}
                  {portfolioData.map((item, idx) => (
                    <SpotlightBeam key={idx} active={introPhase >= idx} color={item.color}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <span style={{ fontSize: '1.1rem' }}>{item.icon}</span>
                        <div>
                          <span style={{
                            fontFamily: 'var(--font-mono)', fontSize: '0.6rem', fontWeight: 700,
                            color: item.color, letterSpacing: 2, textTransform: 'uppercase',
                            textShadow: `0 0 10px ${item.color}40`,
                          }}>
                            {item.label}
                          </span>
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={introPhase >= idx ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            style={{
                              fontSize: '0.82rem', color: 'var(--text-primary)',
                              fontWeight: 500, lineHeight: 1.4,
                            }}
                          >
                            {item.value}
                          </motion.div>
                        </div>
                      </div>
                    </SpotlightBeam>
                  ))}

                  {/* Progress bar */}
                  <div style={{
                    margin: '16px 0 8px', height: 3,
                    background: 'rgba(0,212,255,0.1)', borderRadius: 2, overflow: 'hidden',
                  }}>
                    <motion.div
                      animate={{ width: `${((Math.max(introPhase, 0) + 1) / (portfolioData.length + 1)) * 100}%` }}
                      transition={{ duration: 0.4 }}
                      style={{
                        height: '100%',
                        background: 'linear-gradient(90deg, #00ffcc, #00d4ff)',
                        borderRadius: 2,
                        boxShadow: '0 0 10px rgba(0,255,204,0.5)',
                      }}
                    />
                  </div>
                </div>
              )}

              {/* ── CHAT MESSAGES ── */}
              {introComplete && (
                <>
                  {messages.map((msg, idx) => (
                    <ChatBubble key={idx} message={msg.text} isBot={msg.isBot} animate={true} />
                  ))}

                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      style={{
                        display: 'flex', gap: 5, padding: '10px 16px',
                        background: 'var(--chatbot-msg-bot)',
                        borderRadius: '4px 16px 16px 16px',
                        width: 'fit-content',
                        border: '1px solid rgba(0,212,170,0.1)',
                      }}
                    >
                      {[0, 1, 2].map(i => (
                        <motion.div
                          key={i}
                          animate={{ y: [0, -6, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                          style={{
                            width: 6, height: 6, borderRadius: '50%',
                            background: 'var(--accent-1)',
                          }}
                        />
                      ))}
                    </motion.div>
                  )}

                  {/* Quick questions */}
                  {messages.length <= 1 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      style={{
                        display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 12,
                      }}
                    >
                      {quickQuestions.map(q => (
                        <motion.button
                          key={q}
                          whileHover={{ scale: 1.05, borderColor: 'rgba(0,212,255,0.4)' }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => sendMessage(q)}
                          style={{
                            padding: '6px 14px',
                            background: 'var(--chatbot-input-bg)',
                            border: '1px solid rgba(0,212,255,0.15)',
                            borderRadius: 20,
                            color: 'var(--accent-2)',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            fontFamily: 'var(--font-primary)',
                            transition: 'all 0.3s',
                          }}
                        >
                          {q}
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </>
              )}
            </div>

            {/* Input area */}
            {introComplete && (
              <form
                onSubmit={handleSubmit}
                style={{
                  padding: '12px 16px',
                  borderTop: '1px solid rgba(0,212,255,0.08)',
                  display: 'flex', gap: 8,
                  position: 'relative', zIndex: 2,
                }}
              >
                <input
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  placeholder="Ask about skills, projects..."
                  style={{
                    flex: 1, padding: '10px 16px',
                    background: 'var(--chatbot-input-bg)',
                    border: '1px solid rgba(0,212,255,0.12)',
                    borderRadius: 12,
                    color: 'var(--text-primary)',
                    fontSize: '0.85rem',
                    fontFamily: 'var(--font-primary)',
                    outline: 'none',
                    transition: 'border-color 0.3s',
                  }}
                  onFocus={e => e.target.style.borderColor = 'rgba(0,212,255,0.35)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(0,212,255,0.12)'}
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={!input.trim()}
                  style={{
                    padding: '10px 16px',
                    background: input.trim() ? 'linear-gradient(135deg, #00d4ff, #00ffcc)' : 'var(--chatbot-input-bg)',
                    border: 'none',
                    borderRadius: 12,
                    color: input.trim() ? '#030708' : 'var(--text-muted)',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    cursor: input.trim() ? 'pointer' : 'default',
                    transition: 'all 0.3s',
                    fontFamily: 'var(--font-primary)',
                  }}
                >
                  ▸
                </motion.button>
              </form>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Responsive */}
      <style>{`
        @media (max-width: 480px) {
          .chatbot-panel { width: calc(100vw - 32px) !important; right: 16px !important; bottom: 80px !important; }
        }
      `}</style>
    </>
  )
}
