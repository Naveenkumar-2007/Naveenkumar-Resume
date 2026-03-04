import { motion } from 'framer-motion'
import { HiOutlineMail, HiOutlineDocumentDownload } from 'react-icons/hi'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import ScrollReveal from './ScrollReveal'

const socials = [
  { icon: <HiOutlineMail size={20} />, label: 'Email', href: 'mailto:naveenkumarchapala123@gmail.com', color: '#00d4aa' },
  { icon: <FaLinkedinIn size={18} />, label: 'LinkedIn', href: 'https://linkedin.com/in/chapala-naveen-kumar-69980533b', color: '#0A66C2' },
  { icon: <FaGithub size={18} />, label: 'GitHub', href: 'https://github.com/Naveenkumar-2007', color: '#e8eeef' },
]

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '100px 24px 60px', position: 'relative' }}>
      <div style={{
        position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
        width: 800, height: 400,
        background: 'radial-gradient(ellipse, rgba(0,212,170,0.05) 0%, rgba(0,184,212,0.02) 40%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <ScrollReveal>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 500, color: 'var(--accent-1)', textTransform: 'uppercase', letterSpacing: 3, display: 'block', marginBottom: 12 }}>Get in Touch</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: 16, lineHeight: 1.2 }}>
            Let's Build Intelligent AI Solutions Together.
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: 480, margin: '0 auto 40px', lineHeight: 1.7 }}>
            Open to internships, collaborations, and AI/ML projects. Feel free to reach out.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap', marginBottom: 32 }}>
            {socials.map(s => (
              <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                whileHover={{ borderColor: `${s.color}45`, boxShadow: `0 0 25px ${s.color}12`, y: -4 }}
                style={{
                  display: 'flex', alignItems: 'center', gap: 10, padding: '14px 24px',
                  background: 'var(--bg-card)', border: '1px solid var(--border-card)',
                  borderRadius: 14, backdropFilter: 'blur(10px)', color: s.color,
                  fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer', transition: 'all 0.3s', textDecoration: 'none',
                  boxShadow: 'var(--shadow-card)',
                }}>
                {s.icon}
                <span style={{ color: 'var(--text-primary)' }}>{s.label}</span>
              </motion.a>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <motion.a href="/resume/Naveen_Kumar_Resume.pdf" target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.03, boxShadow: '0 8px 30px rgba(0,212,170,0.25)' }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10, padding: '16px 36px',
              background: 'linear-gradient(135deg, #00d4aa, #00b8d4)', borderRadius: 14,
              color: '#030708', fontWeight: 700, fontSize: '1rem', cursor: 'pointer',
              textDecoration: 'none', border: 'none',
            }}>
            <HiOutlineDocumentDownload size={20} />
            Download Resume
          </motion.a>
        </ScrollReveal>

        <ScrollReveal delay={0.35}>
          <div style={{ marginTop: 80, paddingTop: 30, borderTop: '1px solid var(--border-card)' }}>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', letterSpacing: '0.5px' }}>
              &copy; {new Date().getFullYear()} Chapala Naveen Kumar.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
