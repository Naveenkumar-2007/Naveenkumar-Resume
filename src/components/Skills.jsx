import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'
import {
  SiPython, SiC, SiScikitlearn, SiPandas, SiNumpy, SiTensorflow, SiKeras,
  SiFastapi, SiFlask, SiStreamlit, SiDocker, SiMlflow, SiGithubactions,
  SiSqlite, SiGit, SiGithub, SiMysql, SiMongodb, SiPostgresql,
  SiLinux, SiJupyter, SiHuggingface, SiLangchain, SiOpencv, SiPlotly,
  SiScipy, SiDvc, SiAnaconda, SiGooglecolab, SiOpenai, SiRender,
  SiGnubash, SiGooglecloud, SiApacheairflow, SiApachespark, SiApachekafka,
  SiWeightsandbiases
} from 'react-icons/si'
import { FaDatabase, FaBrain, FaProjectDiagram, FaNetworkWired, FaCloud, FaCode, FaChartBar, FaChartLine, FaRobot, FaMicrosoft, FaAws } from 'react-icons/fa'
import { TbApi, TbVectorTriangle, TbTransform, TbMathFunction, TbMathSymbols } from 'react-icons/tb'
import { BiStats } from 'react-icons/bi'

const skillCategories = [
  {
    title: 'Programming',
    color: '#00d4aa',
    skills: [
      { name: 'Python', icon: <SiPython />, iconColor: '#3776AB' },
      { name: 'C', icon: <SiC />, iconColor: '#A8B9CC' },
      { name: 'SQL', icon: <FaDatabase />, iconColor: '#336791' },
    ],
  },
  {
    title: 'Machine Learning',
    color: '#00b8d4',
    skills: [
      { name: 'Scikit-learn', icon: <SiScikitlearn />, iconColor: '#F7931E' },
      { name: 'Pandas', icon: <SiPandas />, iconColor: '#150458' },
      { name: 'NumPy', icon: <SiNumpy />, iconColor: '#4DABCF' },
      { name: 'Matplotlib', icon: <FaChartBar />, iconColor: '#11557C' },
      { name: 'Seaborn', icon: <FaChartLine />, iconColor: '#444876' },
      { name: 'Plotly', icon: <SiPlotly />, iconColor: '#3F4F75' },
    ],
  },
  {
    title: 'Deep Learning',
    color: '#f0a500',
    skills: [
      { name: 'TensorFlow', icon: <SiTensorflow />, iconColor: '#FF6F00' },
      { name: 'Keras', icon: <SiKeras />, iconColor: '#D00000' },
      { name: 'CNN', icon: <FaBrain />, iconColor: '#FF6F00' },
      { name: 'LSTM', icon: <FaNetworkWired />, iconColor: '#FF9800' },
      { name: 'RNN', icon: <FaNetworkWired />, iconColor: '#FFA726' },
      { name: 'GRU', icon: <FaNetworkWired />, iconColor: '#FFB74D' },
      { name: 'Transformers', icon: <TbTransform />, iconColor: '#FFD21E' },
      { name: 'ANN', icon: <FaNetworkWired />, iconColor: '#E65100' },
    ],
  },
  {
    title: 'NLP & Generative AI',
    color: '#00d4aa',
    skills: [
      { name: 'HuggingFace', icon: <SiHuggingface />, iconColor: '#FFD21E' },
      { name: 'OpenAI', icon: <SiOpenai />, iconColor: '#10A37F' },
      { name: 'LangChain', icon: <SiLangchain />, iconColor: '#1C3C3C' },
      { name: 'LangGraph', icon: <SiLangchain />, iconColor: '#2D6A4F' },
      { name: 'RAG', icon: <FaRobot />, iconColor: '#00BFA5' },
      { name: 'FAISS', icon: <TbVectorTriangle />, iconColor: '#4285F4' },
      { name: 'Vector DBs', icon: <FaDatabase />, iconColor: '#7C4DFF' },
      { name: 'TF-IDF', icon: <FaBrain />, iconColor: '#26A69A' },
      { name: 'Embeddings', icon: <TbVectorTriangle />, iconColor: '#AB47BC' },
      { name: 'Prompt Engineering', icon: <FaRobot />, iconColor: '#00E676' },
      { name: 'NLTK', icon: <FaBrain />, iconColor: '#0277BD' },
      { name: 'LangSmith', icon: <SiLangchain />, iconColor: '#48BB78' },
    ],
  },
  {
    title: 'Backend & APIs',
    color: '#00b8d4',
    skills: [
      { name: 'FastAPI', icon: <SiFastapi />, iconColor: '#009688' },
      { name: 'Flask', icon: <SiFlask />, iconColor: '#FFFFFF' },
      { name: 'REST APIs', icon: <TbApi />, iconColor: '#00BCD4' },
      { name: 'Streamlit', icon: <SiStreamlit />, iconColor: '#FF4B4B' },
    ],
  },
  {
    title: 'MLOps & Deployment',
    color: '#f0a500',
    skills: [
      { name: 'Docker', icon: <SiDocker />, iconColor: '#2496ED' },
      { name: 'MLflow', icon: <SiMlflow />, iconColor: '#0194E2' },
      { name: 'DVC', icon: <SiDvc />, iconColor: '#945DD6' },
      { name: 'GitHub Actions', icon: <SiGithubactions />, iconColor: '#2088FF' },
      { name: 'CI/CD', icon: <FaProjectDiagram />, iconColor: '#FF7043' },
      { name: 'DagsHub', icon: <FaDatabase />, iconColor: '#6C63FF' },
      { name: 'Render', icon: <SiRender />, iconColor: '#46E3B7' },
    ],
  },
  {
    title: 'Cloud & Databases',
    color: '#00d4aa',
    skills: [
      { name: 'Azure', icon: <FaMicrosoft />, iconColor: '#0078D4' },
      { name: 'MongoDB', icon: <SiMongodb />, iconColor: '#47A248' },
      { name: 'SQLite', icon: <SiSqlite />, iconColor: '#003B57' },
    ],
  },
  {
    title: 'Mathematics',
    color: '#f0a500',
    skills: [
      { name: 'Statistics', icon: <BiStats />, iconColor: '#E91E63' },
      { name: 'Probability', icon: <TbMathSymbols />, iconColor: '#9C27B0' },
      { name: 'Linear Algebra', icon: <TbMathFunction />, iconColor: '#3F51B5' },
    ],
  },
  {
    title: 'Dev Tools',
    color: '#00b8d4',
    skills: [
      { name: 'Git', icon: <SiGit />, iconColor: '#F05032' },
      { name: 'GitHub', icon: <SiGithub />, iconColor: '#FFFFFF' },
      { name: 'VS Code', icon: <FaCode />, iconColor: '#007ACC' },
      { name: 'Jupyter', icon: <SiJupyter />, iconColor: '#F37626' },
      { name: 'Google Colab', icon: <SiGooglecolab />, iconColor: '#F9AB00' },
      { name: 'Anaconda', icon: <SiAnaconda />, iconColor: '#44A833' },
      { name: 'Linux', icon: <SiLinux />, iconColor: '#FCC624' },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '100px 24px', position: 'relative' }}>
      <div style={{
        position: 'absolute', top: '50%', left: '-5%', width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(0,212,170,0.05) 0%, transparent 70%)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <ScrollReveal>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 500, color: 'var(--accent-1)', textTransform: 'uppercase', letterSpacing: 3, display: 'block', marginBottom: 12 }}>Expertise</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: 12 }}>
            Skills & Technologies
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: 500, marginBottom: 48 }}>
            Technologies I work with to build intelligent systems.
          </p>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 18 }}>
          {skillCategories.map((cat, i) => (
            <ScrollReveal key={cat.title} delay={i * 0.06}>
              <motion.div
                whileHover={{
                  borderColor: `${cat.color}40`,
                  boxShadow: `0 0 35px ${cat.color}12`,
                  y: -5,
                }}
                transition={{ duration: 0.3 }}
                style={{
                  padding: 24, background: 'var(--bg-card)',
                  border: '1px solid var(--border-card)', borderRadius: 18,
                  backdropFilter: 'blur(20px)', cursor: 'default',
                  transition: 'all 0.4s ease', height: '100%',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
                  <div style={{
                    width: 10, height: 10, borderRadius: '50%', background: cat.color,
                    boxShadow: `0 0 12px ${cat.color}50`,
                  }} />
                  <span style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>{cat.title}</span>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {cat.skills.map(skill => (
                    <motion.div
                      key={skill.name}
                      whileHover={{
                        background: `${cat.color}15`,
                        borderColor: `${cat.color}45`,
                        color: cat.color,
                        scale: 1.05,
                      }}
                      style={{
                        display: 'flex', alignItems: 'center', gap: 7,
                        padding: '6px 14px', background: 'var(--bg-glass)',
                        border: '1px solid var(--border-card)', borderRadius: 10,
                        fontSize: '0.82rem', fontWeight: 500, color: 'var(--text-secondary)',
                        cursor: 'default', transition: 'all 0.3s ease',
                      }}
                    >
                      <span style={{ fontSize: '1.05rem', display: 'flex', alignItems: 'center', color: skill.iconColor || 'inherit' }}>
                        {skill.icon}
                      </span>
                      {skill.name}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
