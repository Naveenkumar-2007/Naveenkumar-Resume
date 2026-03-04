import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'
import { HiOutlineSearchCircle, HiOutlineDatabase, HiOutlineAdjustments, HiOutlineCog, HiOutlineChartBar, HiOutlineCloudUpload, HiOutlineRefresh } from 'react-icons/hi'

const steps = [
  { num: '01', title: 'Problem Understanding & Scoping', desc: 'Define business objectives, identify data requirements, establish success metrics, and map out the complete ML pipeline architecture.', icon: <HiOutlineSearchCircle size={20} />, color: '#00d4aa' },
  { num: '02', title: 'Data Collection & Preprocessing', desc: 'Gather structured/unstructured data, handle missing values, remove outliers, perform normalization, and ensure data quality through automated profiling.', icon: <HiOutlineDatabase size={20} />, color: '#00b8d4' },
  { num: '03', title: 'Feature Engineering & EDA', desc: 'Extract meaningful features, perform exploratory data analysis with statistical insights, apply dimensionality reduction, and create data visualizations.', icon: <HiOutlineAdjustments size={20} />, color: '#f0a500' },
  { num: '04', title: 'Model Training & Experimentation', desc: 'Train multiple algorithms (LSTM, CNN, RandomForest, XGBoost), experiment with architectures, and track all runs using MLflow and DVC for reproducibility.', icon: <HiOutlineCog size={20} />, color: '#00d4aa' },
  { num: '05', title: 'Evaluation & Hyperparameter Tuning', desc: 'Validate with cross-validation, optimize hyperparameters using Grid/Random/Bayesian search, analyze confusion matrices, and benchmark model performance.', icon: <HiOutlineChartBar size={20} />, color: '#00b8d4' },
  { num: '06', title: 'Deployment & API Integration', desc: 'Package models with Docker, deploy as REST APIs using FastAPI/Flask, set up CI/CD with GitHub Actions, and host on cloud platforms (Render, HuggingFace Spaces, Streamlit Cloud).', icon: <HiOutlineCloudUpload size={20} />, color: '#f0a500' },
  { num: '07', title: 'Monitoring & Continuous Improvement', desc: 'Track model drift and performance degradation, collect user feedback, retrain on new data, and iterate for continuous accuracy improvement.', icon: <HiOutlineRefresh size={20} />, color: '#00d4aa' },
]

export default function Process() {
  return (
    <section id="process" style={{ padding: '100px 24px', position: 'relative' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <ScrollReveal>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 500, color: 'var(--accent-1)', textTransform: 'uppercase', letterSpacing: 3, display: 'block', marginBottom: 12 }}>Workflow</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: 12 }}>
            AI Development Process
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: 500, marginBottom: 56 }}>
            My systematic approach to building production-ready ML & AI solutions from data to deployment.
          </p>
        </ScrollReveal>

        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute', left: 28, top: 0, bottom: 0, width: 2,
            background: 'linear-gradient(180deg, rgba(0,212,170,0.3) 0%, rgba(0,184,212,0.2) 50%, rgba(240,165,0,0.15) 100%)',
          }} />

          {steps.map((step, i) => (
            <ScrollReveal key={step.num} delay={i * 0.08}>
              <motion.div whileHover={{ x: 8 }}
                style={{ display: 'flex', gap: 24, alignItems: 'flex-start', marginBottom: 32, position: 'relative', cursor: 'default' }}>
                <motion.div
                  whileHover={{ scale: 1.15, boxShadow: `0 0 25px ${step.color}40` }}
                  style={{
                    minWidth: 56, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'var(--bg-card-solid)', border: `2px solid ${step.color}50`,
                    borderRadius: 16, color: step.color, zIndex: 1, transition: 'all 0.3s',
                  }}>
                  {step.icon}
                </motion.div>

                <motion.div
                  whileHover={{ borderColor: `${step.color}30`, boxShadow: `0 0 20px ${step.color}08` }}
                  style={{
                    flex: 1, padding: 22, background: 'var(--bg-card)',
                    border: '1px solid var(--border-card)', borderRadius: 14,
                    backdropFilter: 'blur(10px)', transition: 'all 0.3s', boxShadow: 'var(--shadow-card)',
                  }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: step.color, fontWeight: 700 }}>{step.num}</span>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)' }}>{step.title}</h3>
                  </div>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{step.desc}</p>
                </motion.div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
