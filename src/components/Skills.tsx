"use client";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
      { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
    ],
  },
  {
    title: "Machine Learning & AI",
    skills: [
      { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
      { name: "Scikit-Learn", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" },
      { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" },
      { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
      { name: "Matplotlib", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg" },
      { name: "Seaborn", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/plotly/plotly-original.svg" },
      { name: "NLTK", emoji: "📚" },
      { name: "Transformers", emoji: "🤖" },
    ],
  },
  {
    title: "GenAI & LLMs",
    skills: [
      { name: "LangChain", logo: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4" },
      { name: "LangGraph", logo: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4" },
      { name: "LangSmith", logo: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4" },
      { name: "RAG", emoji: "📄" },
      { name: "LLM Agents", emoji: "🤖" },
      { name: "Generative AI", emoji: "✨" },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "FastAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
      { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg", invert: true },
      { name: "REST APIs", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg" },
      { name: "Streamlit", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg" },
    ],
  },
  {
    title: "Cloud & MLOps",
    skills: [
      { name: "Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" },
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
      { name: "GitHub Actions", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg" },
      { name: "MLflow", emoji: "📊" },
      { name: "BentoML", emoji: "🍱" },
      { name: "Gunicorn", emoji: "🦄" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" },
      { name: "SQLite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" },
      { name: "Pinecone", emoji: "🌲" },
      { name: "FAISS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/facebook/facebook-original.svg" },
      { name: "ChromaDB", emoji: "🎨" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
      { name: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
      { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
      { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
      { name: "Hugging Face", emoji: "🤗" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#050505] py-28">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-white/60 text-sm uppercase tracking-widest">Tech Stack</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            The tools and technologies I use to bring AI applications to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all"
            >
              <h3 className="text-xl font-bold text-white mb-6">
                {category.title}
              </h3>

              <div className="grid grid-cols-4 gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center gap-2 p-2 rounded-lg hover:bg-white/5 transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center p-1.5">
                      {skill.emoji ? (
                        <span className="text-2xl">{skill.emoji}</span>
                      ) : (
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          className={`w-7 h-7 object-contain ${skill.invert ? 'invert' : ''}`}
                          loading="lazy"
                        />
                      )}
                    </div>
                    <span className="text-white/70 text-xs text-center leading-tight">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
