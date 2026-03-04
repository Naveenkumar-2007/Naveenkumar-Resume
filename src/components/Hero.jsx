import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { HiOutlineArrowDown, HiOutlineDocumentDownload, HiOutlineMail } from 'react-icons/hi'
import ScrollReveal from './ScrollReveal'
import { useTheme } from '../ThemeContext'

const stats = [
  { value: '10+', label: 'AI/ML Projects' },
  { value: '3+', label: 'Certifications' },
  { value: '2+', label: 'Hackathons' },
  { value: '2028', label: 'Graduate' },
]

export default function Hero() {
  const { theme } = useTheme()
  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center',
      position: 'relative', padding: '100px 24px 60px',
    }}>
      <div style={{
        position: 'absolute', top: '15%', left: '50%', transform: 'translate(-50%, -50%)',
        width: 700, height: 700,
        background: theme === 'dark'
          ? 'radial-gradient(circle, rgba(0,212,170,0.07) 0%, rgba(0,184,212,0.03) 40%, transparent 70%)'
          : 'radial-gradient(circle, rgba(0,158,126,0.06) 0%, rgba(0,152,176,0.03) 40%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
        <ScrollReveal>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.88rem', color: 'var(--accent-1)', marginBottom: 16, letterSpacing: 2 }}>
            The Future Belongs to Those Who Build It
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: 16, color: 'var(--text-primary)' }}>
            Hi, I'm{' '}
            <span style={{
              background: 'var(--gradient-primary)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>
              Chapala Naveen Kumar
            </span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <h2 style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 28 }}>
            AI & Machine Learning Engineer
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p style={{ fontSize: '1.08rem', color: 'var(--text-secondary)', maxWidth: 600, lineHeight: 1.8, marginBottom: 28 }}>
            I build intelligent machine learning and generative AI applications with real-world deployment experience.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.35}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 40, flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--text-muted)' }}>{'>'}</span>
            <TypeAnimation
              sequence={['Machine Learning', 2000, 'Deep Learning', 2000, 'NLP & Generative AI', 2000, 'Model Deployment', 2000]}
              repeat={Infinity} speed={40}
              style={{
                fontFamily: 'var(--font-mono)', fontSize: 'clamp(1rem, 2vw, 1.3rem)', fontWeight: 700,
                background: 'var(--gradient-primary)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}
            />
            <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
              style={{ color: 'var(--accent-1)', fontFamily: 'var(--font-mono)', fontSize: '1.3rem' }}>|</motion.span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 50 }}>
            <a href="#projects" className="btn-primary"><HiOutlineArrowDown /> View Projects</a>
            <a href="/resume/Naveen_Kumar_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline"><HiOutlineDocumentDownload /> Download Resume</a>
            <a href="mailto:naveenkumarchapala123@gmail.com" className="btn-outline"><HiOutlineMail /> Contact Me</a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.5}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, maxWidth: 640 }}>
            {stats.map((stat) => (
              <motion.div key={stat.label}
                whileHover={{ scale: 1.08, borderColor: 'rgba(0,212,170,0.3)' }}
                style={{
                  padding: '22px 16px', background: 'var(--bg-card)', border: '1px solid var(--border-card)',
                  borderRadius: 14, backdropFilter: 'blur(10px)', textAlign: 'center', cursor: 'default',
                  transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)', boxShadow: 'var(--shadow-card)',
                }}>
                <div style={{
                  fontSize: '1.6rem', fontWeight: 800,
                  background: 'var(--gradient-primary)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: 6,
                }}>{stat.value}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 500, letterSpacing: '0.5px' }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}
        style={{
          position: 'absolute', bottom: 30, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
          color: 'var(--text-muted)', fontSize: '0.75rem', letterSpacing: 2,
        }}>
        <span>SCROLL</span>
        <HiOutlineArrowDown />
      </motion.div>
    </section>
  )
}
