import './App.css'

const projects = [
  {
    number: '01',
    title: 'AI Resume Screening Pro',
    category: 'Recruitment Technology',
    description:
      'An end-to-end recruitment platform that lets recruiters upload resumes, compare candidates against a job description, and review ranked matches.',
    details: [
      'Built FastAPI endpoints for resume upload, matching, and recruiter login.',
      'Implemented candidate scoring with Scikit-learn and Pandas.',
      'Created a React frontend with a PostgreSQL-backed application.',
    ],
    stack: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Scikit-learn'],
    links: [
      { label: 'Live application', href: 'https://ai-resume-screening-pro-7ya1.vercel.app/' },
      { label: 'GitHub', href: 'https://github.com/roniarosariosamk/AI-Resume-Screening-Pro' },
      { label: 'API documentation', href: 'https://ai-resume-screening-pro-11.onrender.com/docs' },
    ],
  },
  {
    number: '02',
    title: 'Speech Emotion Recognition',
    category: 'Deep Learning · Audio AI',
    description:
      'A speech emotion recognition system using MFCC audio features and a CNN-BiLSTM-Attention model trained and evaluated on the RAVDESS dataset.',
    details: [
      'Designed an actor-independent train, validation, and test split.',
      'Achieved a test Macro F1-score of 0.53 and accuracy of 56.7%.',
      'Compared performance against an SVM baseline.',
    ],
    stack: ['Python', 'MFCC', 'Deep Learning', 'Streamlit', 'FastAPI'],
    links: [
      { label: 'Live demo', href: 'https://speech-emotion-recognition-6aesr66q4andw3frbmtwa5.streamlit.app/' },
      { label: 'GitHub', href: 'https://github.com/roniarosariosamk/Speech-Emotion-Recognition' },
      { label: 'API documentation', href: 'https://speech-emotion-recognition-api-ynao.onrender.com/docs' },
    ],
  },
  {
    number: '03',
    title: 'House Price Prediction',
    category: 'Machine Learning · Regression',
    description:
      'A regression project using Washington State property-sale data to estimate house prices from property features.',
    details: [
      'Cleaned 4,460 records from an original dataset of 4,600.',
      'Compared Linear Regression, Random Forest, and KNN models.',
      'Linear Regression achieved an R² score of 0.78 on the held-out test set.',
    ],
    stack: ['Python', 'Pandas', 'Scikit-learn', 'Regression', 'Streamlit'],
    links: [
      { label: 'Live demo', href: 'https://house-price-prediction-7cbjw6rzp3htsqdqgqtrgbc.streamlit.app/' },
      { label: 'GitHub', href: 'https://github.com/roniarosariosamk/House-Price-Prediction' },
    ],
  },
]

const skillGroups = [
  { title: 'Programming', items: ['Python', 'SQL'] },
  { title: 'Machine Learning & Data', items: ['Pandas', 'NumPy', 'Scikit-learn', 'Data preprocessing', 'Feature engineering', 'Model evaluation', 'MFCC'] },
  { title: 'Analytics & Visualisation', items: ['Power BI', 'Excel', 'Matplotlib', 'Seaborn'] },
  { title: 'Development & Tools', items: ['FastAPI', 'Flask', 'React.js', 'HTML', 'CSS', 'PostgreSQL', 'MongoDB basics', 'Git & GitHub', 'Google Colab', 'Jupyter Notebook'] },
]

function App() {
  return (
    <div className="portfolio-shell">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Ronia Rosario home">R<span>.</span></a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#journey">Journey</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="#contact">Let's connect <span>↗</span></a>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> OPEN TO ENTRY-LEVEL OPPORTUNITIES</p>
            <h1>Turning data into <span>meaningful solutions.</span></h1>
            <h2>Hi, I'm Ronia Rosario K.</h2>
            <p className="hero-summary">
              An Artificial Intelligence and Data Science student focused on
              machine learning, data analysis, and building practical
              applications from end to end.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
              Explore my work <span>↗</span>
              </a>

            <a
            className="button button-quiet"
            href="/Ronia_Rosario_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            download
          >
            Download Resume ↓
          </a>

              <a className="button button-quiet" 
            href="mailto:roniarosario1606@gmail.com">
              Email me
             </a>
          </div>
            <div className="hero-meta">
              <span><i className="status-dot" /> Based in Chennai, India</span>
              <span>Machine Learning · Data Analytics</span>
            </div>
          </div>

          <div className="hero-side" aria-label="Profile photo placeholder">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="portrait-placeholder">
              <img src="/profile.jpg" alt="Ronia Rosario K" />
            </div>
            <div className="floating-card">
              <span className="floating-icon">✳</span>
              <div><strong>Curious by nature.</strong><small>Driven by practical learning.</small></div>
            </div>
            <div className="side-caption">AI & DATA SCIENCE <span>／</span> PORTFOLIO 2026</div>
          </div>
        </section>

        <section className="intro-strip">
          <div><strong>8.6/10</strong><span>Current CGPA</span></div>
          <div><strong>03+</strong><span>Featured projects</span></div>
          <div><strong>Python</strong><span>Core programming</span></div>
          <div><strong>2027</strong><span>Expected graduation</span></div>
        </section>

        <section className="content-section section-wrap" id="about">
          <div className="section-heading">
            <p className="eyebrow">01 / ABOUT</p>
            <h2>Curiosity meets <span>execution.</span></h2>
          </div>
          <div className="about-layout">
            <p className="about-lead">
              I enjoy understanding problems, working with data, and turning
              what I learn into useful applications.
            </p>
            <div className="about-body">
              <p>
                I am pursuing a B.Tech in Artificial Intelligence and Data
                Science at Dhaanish Chennai College of Engineering. My hands-on
                work includes machine learning pipelines, data preprocessing,
                model evaluation, and full-stack AI applications.
              </p>
              <p>
                I value continuous learning, clear communication, and
                collaborative problem-solving. I am currently seeking an
                entry-level opportunity in machine learning engineering or
                data-focused roles where I can contribute and grow.
              </p>
              <a className="text-link" href="https://www.linkedin.com/in/ronia-rosario-sam-k-13493a290" target="_blank" rel="noreferrer">Connect on LinkedIn <span>↗</span></a>
            </div>
          </div>
        </section>

        <section className="content-section skills-section" id="skills">
          <div className="section-wrap">
            <div className="section-heading">
              <p className="eyebrow">02 / CAPABILITIES</p>
              <h2>Tools I use to <span>make things work.</span></h2>
              <p className="section-subtitle">A practical toolkit built through coursework, projects, and hands-on experimentation.</p>
            </div>
            <div className="skills-layout">
              {skillGroups.map((group, index) => (
                <article className="skill-group" key={group.title}>
                  <span className="skill-index">0{index + 1}</span>
                  <h3>{group.title}</h3>
                  <div className="skill-tags">
                    {group.items.map(item => <span key={item}>{item}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section section-wrap" id="projects">
          <div className="section-heading project-heading">
            <div>
              <p className="eyebrow">03 / SELECTED WORK</p>
              <h2>Projects with <span>purpose.</span></h2>
            </div>
            <p className="section-subtitle">A selection of projects demonstrating my approach to data, machine learning, and application development.</p>
          </div>
          <div className="project-list">
            {projects.map(project => (
              <article className="project-card" key={project.number}>
                <div className="project-topline"><span>{project.number} / 03</span><span>{project.category}</span></div>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <ul className="project-details">
                  {project.details.map(detail => <li key={detail}>{detail}</li>)}
                </ul>
                <div className="project-bottom">
                  <div className="project-stack">{project.stack.map(item => <span key={item}>{item}</span>)}</div>
                  <div className="project-links">
                    {project.links.map(link => (
                      <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label} ↗</a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section journey-section" id="journey">
          <div className="section-wrap">
            <div className="section-heading">
              <p className="eyebrow">04 / THE JOURNEY</p>
              <h2>Learning, building, <span>growing.</span></h2>
            </div>
            <div className="timeline">
              <article className="timeline-item">
                <span className="timeline-date">EXPECTED 2027</span>
                <div><h3>B.Tech — Artificial Intelligence & Data Science</h3><p>Dhaanish Chennai College of Engineering · CGPA 8.6/10</p></div>
              </article>
              <article className="timeline-item">
                <span className="timeline-date">AUG — NOV 2026</span>
                <div><h3>Machine Learning Intern · Tech Vedhu</h3><p>Completed an individual major project on speech emotion recognition, covering preprocessing, feature engineering, model training, and F1-score evaluation.</p></div>
              </article>
              <article className="timeline-item">
                <span className="timeline-date">JAN 2025</span>
                <div><h3>Internship Training · NSIC Technical Services Centre</h3><p>One-week training in Data Science and Data Analytics, Chennai.</p></div>
              </article>
            </div>
            <div className="recognition">
              <span>RECOGNITION</span>
              <p>Ranked among the top 3 students of the cohort in Semester 3.</p>
            </div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <p className="eyebrow">05 / CONTACT</p>
          <h2>Have an opportunity<br />or an idea? <span>Let's talk.</span></h2>
          <p className="contact-copy">I'm open to entry-level opportunities, collaboration, and conversations about data and intelligent applications.</p>
          <div className="contact-actions">
            <a className="button button-primary" href="mailto:ronirosario1606@gmail.com">roni arosario1606@gmail.com <span>↗</span></a>
            <a className="button button-quiet" href="https://www.linkedin.com/in/ronia-rosario-sam-k-13493a290" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a className="button button-quiet" href="https://github.com/roniarosariosamk" target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
          <p className="resume-note">To add your downloadable resume, place <code>Ronia_Rosario_Resume.pdf</code> inside the project's <code>public</code> folder.</p>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="brand" href="#home">R<span>.</span></a>
        <p>Designed with curiosity and built with purpose.</p>
        <span>© 2026 Ronia Rosario K</span>
      </footer>
    </div>
  )
}

export default App
