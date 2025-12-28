"use client";

/* eslint-disable @next/next/no-img-element */

const techCategories = [
  {
    title: "AI/ML",
    icon: "🤖",
    techs: [
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "Scikit-learn", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
      { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
      { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
      { name: "Keras", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg" },
    ],
  },
  {
    title: "GenAI & RAG",
    icon: "🧠",
    techs: [
      { name: "LangChain", logo: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4" },
      { name: "LangGraph", logo: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4" },
      { name: "Groq", logo: "https://groq.com/wp-content/uploads/2024/03/PBG-mark-color.svg" },
      { name: "Pinecone", logo: "https://avatars.githubusercontent.com/u/54333248?s=200&v=4" },
      { name: "FAISS", logo: "https://avatars.githubusercontent.com/u/69631?s=200&v=4" },
      { name: "HuggingFace", logo: "https://huggingface.co/front/assets/huggingface_logo.svg" },
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    techs: [
      { name: "FastAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
      { name: "Streamlit", logo: "https://streamlit.io/images/brand/streamlit-mark-color.svg" },
      { name: "REST APIs", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    ],
  },
  {
    title: "Cloud & MLOps",
    icon: "☁️",
    techs: [
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
      { name: "GitHub Actions", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    ],
  },
  {
    title: "Databases",
    icon: "🗄️",
    techs: [
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "SQLite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ],
  },
  {
    title: "Frontend & Tools",
    icon: "🎨",
    techs: [
      { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="techstack" className="py-20 bg-black/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider">Technologies</span>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mt-2">
            Tech Stack
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Modern technologies and frameworks I use to build intelligent, scalable solutions
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category) => (
            <div key={category.title} className="glass-card p-6">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-lg font-bold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.techs.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-all"
                  >
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-5 h-5 object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                    <span className="text-sm text-gray-300">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            ⚡ Continuously learning and adopting new technologies to stay at the cutting edge
          </p>
        </div>
      </div>
    </section>
  );
}
