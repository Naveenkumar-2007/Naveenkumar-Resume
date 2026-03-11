import { motion } from 'framer-motion'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { FaRobot, FaChartLine, FaHeartbeat, FaSearch, FaBrain, FaNewspaper, FaShieldAlt, FaImage, FaCloudSun, FaFileAlt, FaCalculator } from 'react-icons/fa'
import ScrollReveal from './ScrollReveal'

// Real image thumbnails for all projects
const imageThumbnails = {
  datavision: '/images/projects/datavision.png',
  stock: '/images/projects/stock.png',
  diabetes: '/images/projects/diabetes.png',
  perplexity: '/images/projects/perplexity.png',
  genai: '/images/projects/genai.png',
  fakenews: '/images/projects/Facknews.png',
  network: '/images/projects/networksecurty.png',
  cifar: '/images/projects/cifar-10.png',
  weather: '/images/projects/weather.png',
  article: '/images/projects/Article.png',
  mathprediction: '/images/projects/mathprediction.png',
}

const projects = [
  {
    title: 'DataVision AI',
    subtitle: 'AutoML & Business Intelligence Platform',
    desc: 'Autonomous business intelligence platform with 50+ ML algorithms, automated EDA, hyperparameter tuning, LLM-powered AI analyst chatbot using RAG, real-time prediction APIs, and interactive dashboard generation.',
    tech: ['Python', 'FastAPI', 'Scikit-learn', 'TensorFlow', 'FAISS', 'HuggingFace', 'React', 'Docker'],
    featured: true,
    icon: <FaRobot />,
    thumbnail: imageThumbnails.datavision,
    liveUrl: 'https://datavision-ai-datavision.hf.space/',
    gradient: 'linear-gradient(135deg, #0a3d2e 0%, #0d4a3a 100%)',
  },
  {
    title: 'AI Stock Price Predictor',
    subtitle: 'Deep Learning Time-Series Forecasting',
    desc: 'LSTM-based deep learning model for stock price prediction using technical indicators like RSI, MACD, SMA, and EMA. Achieved 84% directional accuracy with real-time data visualization, MLflow experiment tracking, and DVC pipeline versioning.',
    tech: ['Python', 'TensorFlow', 'LSTM', 'MLflow', 'DVC', 'Pandas'],
    featured: true,
    icon: <FaChartLine />,
    thumbnail: imageThumbnails.stock,
    liveUrl: 'https://naveen-2007-ai-stock-predictor.hf.space/',
    gradient: 'linear-gradient(135deg, #1a1a3e 0%, #0d2847 100%)',
  },
  {
    title: 'Diabetes Risk Prediction',
    subtitle: 'End-to-End ML Pipeline',
    desc: 'End-to-end machine learning pipeline for diabetes risk assessment using RandomForest, achieving 87% accuracy. Features automated data preprocessing, model evaluation, and a production-ready Flask REST API for real-time predictions.',
    tech: ['Python', 'Scikit-learn', 'Flask', 'Pandas', 'NumPy'],
    featured: true,
    icon: <FaHeartbeat />,
    thumbnail: imageThumbnails.diabetes,
    liveUrl: 'https://naveen-2007-diabetes.hf.space/',
    gradient: 'linear-gradient(135deg, #2d1426 0%, #1a2840 100%)',
  },
  {
    title: 'Perplexity AI Clone',
    subtitle: 'RAG-Based Intelligent Search',
    desc: 'AI-powered search engine clone built with RAG architecture, combining real-time web retrieval with vector database search and LLM-powered response generation for accurate, context-aware answers with source citations.',
    tech: ['Python', 'LangChain', 'FAISS', 'HuggingFace', 'FastAPI'],
    icon: <FaSearch />,
    thumbnail: imageThumbnails.perplexity,
    liveUrl: 'https://naveen-2007-perplexity-clone.hf.space/',
    gradient: 'linear-gradient(135deg, #0d2847 0%, #1a3a2e 100%)',
  },
  {
    title: 'GenAI Intelligence Studio',
    subtitle: 'Multi-Model RAG System',
    desc: 'Enterprise-grade multi-model RAG system integrating LLaMA, Mistral, Gemini, and ChatGPT with agentic AI workflows using LangChain and LangGraph for complex reasoning, document processing, and automated insight generation.',
    tech: ['Python', 'LangChain', 'LangGraph', 'RAG', 'Streamlit'],
    icon: <FaBrain />,
    thumbnail: imageThumbnails.genai,
    liveUrl: 'https://naveenkumar-2007--genai-intelligence-studi-streamlit-app-qreybr.streamlit.app/',
    gradient: 'linear-gradient(135deg, #1e1a3a 0%, #0d3042 100%)',
  },
  {
    title: 'Fake News Detection API',
    subtitle: 'NLP Classification Model',
    desc: 'NLP-based fake news classification system using TF-IDF vectorization and machine learning. Provides FastAPI REST endpoints with interactive Swagger docs for real-time news article authenticity verification.',
    tech: ['Python', 'NLP', 'TF-IDF', 'FastAPI', 'Scikit-learn'],
    icon: <FaNewspaper />,
    thumbnail: imageThumbnails.fakenews,
    liveUrl: 'https://news-qzod.onrender.com/docs',
    gradient: 'linear-gradient(135deg, #2a1a0d 0%, #1a2840 100%)',
  },
  {
    title: 'Network Security Predictor',
    subtitle: 'ML-Based Cyber Threat Detection',
    desc: 'Machine learning-powered network security system that detects and classifies cyber threats, intrusion attempts, and network anomalies in real-time using trained classification models deployed as a cloud API.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'ML'],
    icon: <FaShieldAlt />,
    thumbnail: imageThumbnails.network,
    liveUrl: 'https://security-clou.onrender.com/',
    gradient: 'linear-gradient(135deg, #1a0d2a 0%, #0d2830 100%)',
  },
  {
    title: 'CIFAR-10 Image Classifier',
    subtitle: 'CNN Deep Learning Model',
    desc: 'Deep learning image classifier built with Convolutional Neural Networks trained on the CIFAR-10 dataset. Classifies images across 10 categories with data augmentation, batch normalization, and an interactive Streamlit interface.',
    tech: ['Python', 'TensorFlow', 'Keras', 'CNN', 'Streamlit'],
    icon: <FaImage />,
    thumbnail: imageThumbnails.cifar,
    liveUrl: 'https://naveenkumar-2007-image-cnn-0tfygw.streamlit.app/',
    gradient: 'linear-gradient(135deg, #1a2840 0%, #2a1a30 100%)',
  },
  {
    title: 'Weather Prediction System',
    subtitle: 'ML-Based Forecasting',
    desc: 'Machine learning weather forecasting system that predicts weather conditions using historical meteorological data. Features data visualization, trend analysis, and a deployed REST API for real-time weather predictions.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
    icon: <FaCloudSun />,
    thumbnail: imageThumbnails.weather,
    liveUrl: 'https://weather-gxiw.onrender.com/last',
    gradient: 'linear-gradient(135deg, #0d2847 0%, #0d3a28 100%)',
  },
  {
    title: 'Article Analyzer',
    subtitle: 'NLP Summarization & Sentiment',
    desc: 'NLP-powered article analysis tool that performs automatic text summarization and sentiment analysis using HuggingFace transformers. Features an intuitive Streamlit interface for uploading and analyzing articles in real-time.',
    tech: ['Python', 'NLP', 'HuggingFace', 'Streamlit'],
    icon: <FaFileAlt />,
    thumbnail: imageThumbnails.article,
    liveUrl: 'https://naveenkumar-2007-artical-analyzer-app-aa8n5m.streamlit.app/',
    gradient: 'linear-gradient(135deg, #1a3028 0%, #1a2040 100%)',
  },
  {
    title: 'Student Math Performance Prediction',
    subtitle: 'ML Random Forest Model — 84% Accuracy',
    desc: 'Random Forest machine learning model trained on educational dataset features to predict student math scores. Uses inputs like gender, parental education, lunch type, test preparation, reading score, and writing score with an interactive web interface for real-time predictions.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Flask', 'Matplotlib', 'Seaborn'],
    icon: <FaCalculator />,
    thumbnail: imageThumbnails.mathprediction,
    liveUrl: 'https://mlprojectmath-score.onrender.com/predictdata',
    gradient: 'linear-gradient(135deg, #0d1b3e 0%, #1a2a47 100%)',
  },
]

function ProjectCard({ project, index }) {
  const isFeatured = project.featured

  return (
    <ScrollReveal delay={index * 0.07} style={{ gridColumn: isFeatured ? 'span 1' : 'span 1' }}>
      <motion.div
        whileHover={{
          borderColor: 'rgba(0,212,170,0.25)',
          boxShadow: '0 0 50px rgba(0,212,170,0.08), 0 0 100px rgba(0,184,212,0.03)',
          y: -8,
        }}
        transition={{ duration: 0.35 }}
        style={{
          height: '100%', background: 'var(--bg-card)',
          border: `1px solid ${isFeatured ? 'rgba(0,212,170,0.12)' : 'var(--border-card)'}`,
          borderRadius: 20, backdropFilter: 'blur(20px)', display: 'flex', flexDirection: 'column',
          cursor: 'default', overflow: 'hidden', transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
          boxShadow: 'var(--shadow-card)',
        }}
      >
        {/* Thumbnail area */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          style={{
            height: isFeatured ? 260 : 240, position: 'relative', overflow: 'hidden',
            background: project.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          {project.thumbnail ? (
            <motion.img src={project.thumbnail} alt={project.title}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.6 }}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', opacity: 0.92 }}
            />
          ) : (
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative', inset: 0, fontSize: '3rem', color: 'rgba(0,212,170,0.2)',
            }}>
              {project.icon}
            </div>
          )}
          {/* Gradient overlay */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: 80,
            background: 'linear-gradient(transparent, rgba(8,20,28,0.95))',
          }} />
          {/* Top gradient */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 40,
            background: 'linear-gradient(rgba(8,20,28,0.3), transparent)',
          }} />
          {isFeatured && (
            <motion.div
              animate={{ boxShadow: ['0 0 12px rgba(0,255,204,0.2)', '0 0 20px rgba(0,255,204,0.4)', '0 0 12px rgba(0,255,204,0.2)'] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                position: 'absolute', top: 14, right: 14,
                padding: '5px 12px', background: 'rgba(0,20,15,0.7)',
                border: '1px solid rgba(0,255,204,0.4)', borderRadius: 6,
                fontSize: '0.65rem', fontWeight: 700, color: '#00ffcc',
                letterSpacing: 2, textTransform: 'uppercase',
                backdropFilter: 'blur(10px)',
              }}
            >★ FEATURED</motion.div>
          )}
        </motion.div>

        {/* Content */}
        <div style={{ padding: '20px 24px 24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
          <h3 style={{ fontSize: '1.12rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4 }}>{project.title}</h3>
          <p style={{ fontSize: '0.8rem', color: 'var(--accent-1)', fontWeight: 500, marginBottom: 12 }}>{project.subtitle}</p>
          <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.7, flex: 1, marginBottom: 18 }}>{project.desc}</p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
            {project.tech.map(t => (
              <span key={t} style={{
                padding: '3px 10px', background: 'var(--bg-glass)',
                border: '1px solid var(--border-card)', borderRadius: 6,
                fontSize: '0.7rem', fontWeight: 500, color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)',
              }}>{t}</span>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 10 }}>
            {project.liveUrl && (
              <motion.a href={project.liveUrl} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 22px',
                  background: 'rgba(0,212,170,0.1)', border: '1px solid rgba(0,212,170,0.25)',
                  borderRadius: 8, fontSize: '0.8rem', fontWeight: 600, color: '#00d4aa',
                  cursor: 'pointer', textDecoration: 'none',
                }}>
                <HiOutlineExternalLink size={14} /> Live Demo
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  )
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '100px 24px', position: 'relative' }}>
      <div style={{
        position: 'absolute', top: '30%', right: '-10%', width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(0,212,170,0.04) 0%, transparent 70%)', pointerEvents: 'none',
      }} />
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <ScrollReveal>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 500, color: 'var(--accent-1)', textTransform: 'uppercase', letterSpacing: 3, display: 'block', marginBottom: 12 }}>Portfolio</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: 12 }}>
            Featured AI & ML Projects
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: 550, marginBottom: 48 }}>
            Real-world machine learning and generative AI applications built with production-grade tools.
          </p>
        </ScrollReveal>

        <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: 22 }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
