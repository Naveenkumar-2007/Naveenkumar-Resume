import { motion } from 'framer-motion'
import { HiOutlineBadgeCheck, HiOutlineAcademicCap, HiOutlineLightningBolt, HiOutlineExternalLink } from 'react-icons/hi'
import ScrollReveal from './ScrollReveal'

const certifications = [
  { icon: <HiOutlineBadgeCheck size={22} />, title: 'Oracle OCI Generative AI Professional', year: '2025', type: 'cert', pdf: '/certificates/oracle-oci-genai.pdf' },
  { icon: <HiOutlineAcademicCap size={22} />, title: 'ML, DL & NLP Bootcamp', year: '', type: 'cert', pdf: '/certificates/ml-dl-nlp-bootcamp.pdf' },
  { icon: <HiOutlineAcademicCap size={22} />, title: 'RAG with LLM Certification', year: '', type: 'cert', pdf: '/certificates/rag-llm-certification.pdf' },
  { icon: <HiOutlineAcademicCap size={22} />, title: 'NxtWave GenAI Buildathon - Generative AI Mastery Workshop', year: '2025', type: 'cert', pdf: '/certificates/nxtwave-genai-buildathon.pdf' },
  { icon: <HiOutlineLightningBolt size={22} />, title: 'Best Student Award 2025', year: '2025', type: 'award', pdf: '/certificates/best-student-award.pdf' },
  { icon: <HiOutlineLightningBolt size={22} />, title: 'Smart India Hackathon Participant', year: '', type: 'award' },
]

export default function Certifications() {
  return (
    <section id="certifications" style={{ padding: '100px 24px', position: 'relative' }}>
      <div style={{
        position: 'absolute', bottom: '20%', right: '-10%', width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(240,165,0,0.04) 0%, transparent 70%)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <ScrollReveal>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 500, color: 'var(--accent-1)', textTransform: 'uppercase', letterSpacing: 3, display: 'block', marginBottom: 12 }}>Recognition</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: 12 }}>
            Certifications & Achievements
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: 500, marginBottom: 48 }}>
            Professional certifications and notable achievements.
          </p>
        </ScrollReveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {certifications.map((cert, i) => (
            <ScrollReveal key={cert.title} delay={i * 0.08}>
              <motion.div
                whileHover={{
                  borderColor: cert.type === 'award' ? 'rgba(240,165,0,0.3)' : 'rgba(0,212,170,0.3)',
                  boxShadow: cert.type === 'award' ? '0 0 30px rgba(240,165,0,0.08)' : '0 0 30px rgba(0,212,170,0.08)',
                  x: 6,
                }}
                style={{
                  display: 'flex', alignItems: 'center', gap: 18, padding: '20px 24px',
                  background: 'var(--bg-card)', border: '1px solid var(--border-card)',
                  borderRadius: 14, backdropFilter: 'blur(10px)', cursor: 'default', transition: 'all 0.3s',
                  boxShadow: 'var(--shadow-card)',
                }}>
                <div style={{
                  minWidth: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: cert.type === 'award' ? 'rgba(240,165,0,0.1)' : 'rgba(0,212,170,0.1)',
                  borderRadius: 14, color: cert.type === 'award' ? '#f0a500' : '#00d4aa',
                }}>
                  {cert.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: '0.98rem', color: 'var(--text-primary)' }}>{cert.title}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  {cert.year && (
                    <span style={{
                      padding: '4px 12px', background: 'rgba(0,212,170,0.1)',
                      border: '1px solid rgba(0,212,170,0.25)', borderRadius: 8,
                      fontSize: '0.75rem', fontWeight: 600, color: '#00d4aa', fontFamily: 'var(--font-mono)',
                    }}>{cert.year}</span>
                  )}
                  {cert.pdf && (
                    <motion.a
                    href={cert.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 6,
                      padding: '6px 16px',
                      background: cert.type === 'award'
                        ? 'linear-gradient(135deg, rgba(240,165,0,0.15), rgba(240,165,0,0.05))'
                        : 'linear-gradient(135deg, rgba(0,212,170,0.15), rgba(0,212,170,0.05))',
                      border: cert.type === 'award'
                        ? '1px solid rgba(240,165,0,0.3)'
                        : '1px solid rgba(0,212,170,0.3)',
                      borderRadius: 8,
                      fontSize: '0.78rem', fontWeight: 600,
                      color: cert.type === 'award' ? '#f0a500' : '#00d4aa',
                      textDecoration: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                    }}
                  >
                    View <HiOutlineExternalLink size={14} />
                  </motion.a>
                  )}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
