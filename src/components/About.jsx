import { motion } from 'framer-motion'
import { HiOutlineAcademicCap, HiOutlineLightBulb, HiOutlineCode } from 'react-icons/hi'
import ScrollReveal from './ScrollReveal'

export default function About() {
  return (
    <section id="about" style={{ padding: '100px 24px', position: 'relative' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <ScrollReveal>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 500, color: 'var(--accent-1)', textTransform: 'uppercase', letterSpacing: 3, display: 'block', marginBottom: 12 }}>
            About Me
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: 32 }}>
            Passionate AI/ML Engineer
          </h2>
        </ScrollReveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          {/* All paragraphs in one card */}
          <ScrollReveal delay={0.1}>
            <motion.div
              whileHover={{ borderColor: 'rgba(0,212,170,0.3)', boxShadow: '0 0 30px rgba(0,212,170,0.08)' }}
              style={{ padding: 32, background: 'var(--bg-card)', border: '1px solid var(--border-card)', borderRadius: 16, backdropFilter: 'blur(10px)', transition: 'all 0.4s', boxShadow: 'var(--shadow-card)' }}>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.9, marginBottom: 24 }}>
                I am an AI & Machine Learning Engineer passionate about building intelligent systems that solve real-world problems. Currently pursuing a B.Tech in Computer Science (AI & ML) at SIMATS Engineering College, Chennai, I specialize in machine learning, deep learning, natural language processing, and generative AI systems.
              </p>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.9, marginBottom: 24 }}>
                I have hands-on experience developing end-to-end AI applications, including an AutoML platform (DataVision AI), LSTM-based stock market prediction system, and machine learning healthcare prediction models. My work focuses on production-ready AI systems, combining model development, MLOps, and scalable deployment using tools like FastAPI, Docker, MLflow, and CI/CD pipelines.
              </p>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.9, marginBottom: 20 }}>
                I enjoy building AI products that bridge research and real-world applications, integrating LLMs, RAG systems, and data-driven decision platforms. My goal is to create powerful AI solutions that automate complex analysis and deliver meaningful insights for businesses and society.
              </p>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-1)' }}>— CH.Naveenkumar</span>
            </motion.div>
          </ScrollReveal>

          {/* Education card */}
          <ScrollReveal delay={0.2}>
            <motion.div
              whileHover={{ borderColor: 'rgba(0,212,170,0.3)', boxShadow: '0 0 30px rgba(0,212,170,0.08)' }}
              style={{ padding: 24, background: 'var(--bg-card)', border: '1px solid var(--border-card)', borderRadius: 16, backdropFilter: 'blur(10px)', transition: 'all 0.4s', boxShadow: 'var(--shadow-card)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <HiOutlineAcademicCap size={20} color="var(--accent-1)" />
                <span style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)' }}>Education</span>
              </div>
              <p style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 4 }}>B.Tech in CSE (AI & ML)</p>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: 4 }}>SIMATS Engineering College, Chennai</p>
              <div style={{ display: 'flex', gap: 16, marginTop: 10, flexWrap: 'wrap' }}>
                <span style={{ padding: '5px 14px', background: 'rgba(0,212,170,0.1)', border: '1px solid rgba(0,212,170,0.25)', borderRadius: 8, fontSize: '0.82rem', fontWeight: 600, color: '#00d4aa' }}>CGPA: 8.8/10</span>
                <span style={{ padding: '5px 14px', background: 'rgba(240,165,0,0.1)', border: '1px solid rgba(240,165,0,0.25)', borderRadius: 8, fontSize: '0.82rem', fontWeight: 600, color: '#f0a500' }}>Graduating: 2028</span>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
