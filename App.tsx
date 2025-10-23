
import React from 'react';
import type { ExperienceItem, Project, EducationItem, Certification } from './types';
import { PROFILE_DATA } from './constants';
import { Icon } from './components/Icons';
import { Section } from './components/Section';

const Nav: React.FC<{ activeSection: string }> = ({ activeSection }) => {
  const navLinks = [
    { id: 'about', title: 'About' },
    { id: 'experience', title: 'Experience' },
    { id: 'projects', title: 'Projects' },
    { id: 'education', title: 'Education' },
    { id: 'certifications', title: 'Certifications' },
  ];

  return (
    <nav className="hidden lg:block" aria-label="In-page navigation">
      <ul className="mt-16 w-max">
        {navLinks.map(link => (
          <li key={link.id}>
            <a className="group flex items-center py-3" href={`#${link.id}`}>
              <span className={`nav-indicator mr-4 h-px w-8 bg-gray-700 transition-all group-hover:w-16 group-hover:bg-emerald-400 ${activeSection === link.id ? 'w-16 bg-emerald-400' : ''}`}></span>
              <span className={`nav-text text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-gray-100 ${activeSection === link.id ? 'text-gray-100' : ''}`}>
                {link.title}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const About: React.FC<{ about: string }> = ({ about }) => (
    <p className="text-gray-400 leading-relaxed">{about}</p>
);

const Skills: React.FC<{ skills: string[] }> = ({ skills }) => (
  <div className="flex flex-wrap gap-2">
    {skills.map(skill => (
      <span key={skill} className="bg-gray-800 text-emerald-300 text-sm font-medium px-3 py-1.5 rounded-md">{skill}</span>
    ))}
  </div>
);

const Experience: React.FC<{ experience: ExperienceItem[] }> = ({ experience }) => (
  <div className="space-y-8">
    {experience.map((item, index) => (
      <div key={index} className="group grid sm:grid-cols-8 gap-4 lg:hover:!opacity-100 lg:opacity-60 transition-all p-4 rounded-md lg:hover:bg-gray-900/50">
        <div className="sm:col-span-2 text-xs font-semibold uppercase tracking-wide text-gray-500 mt-1">{item.date}</div>
        <div className="sm:col-span-6">
          <h3 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors">{item.title} · {item.company}</h3>
          <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
            <Icon name="location-dot" className="w-4 h-4" />
            <span>{item.location}</span>
            <span>·</span>
            <span>{item.employmentType}</span>
          </div>
          <p className="mt-2 text-gray-400 leading-relaxed">{item.description}</p>
        </div>
      </div>
    ))}
  </div>
);

const Projects: React.FC<{ projects: Project[] }> = ({ projects }) => (
  <div className="space-y-8">
    {projects.map((project, index) => (
      <a href={project.linkUrl} key={index} target="_blank" rel="noopener noreferrer" className="block p-4 bg-gray-900/50 rounded-lg lg:hover:!opacity-100 lg:opacity-60 transition-all lg:hover:bg-gray-800 group">
        <h3 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors">{project.title}</h3>
        <p className="mt-2 text-gray-400">{project.description}</p>
        <div className="mt-3 flex items-center gap-4 text-sm text-gray-400">
          <span className="flex items-center gap-1">
            <Icon name="star" className="w-4 h-4 text-emerald-400" />
            {project.stars}
          </span>
          <span className="flex items-center gap-1">
            <Icon name="code-fork" className="w-4 h-4 text-emerald-400" />
            {project.forks}
          </span>
        </div>
        <div className="mt-4 text-emerald-400 font-semibold flex items-center gap-2 group-hover:underline">
          <Icon name="link" className="w-4 h-4"/>
          {project.linkText}
        </div>
      </a>
    ))}
  </div>
);

const Education: React.FC<{ education: EducationItem[] }> = ({ education }) => (
  <div className="space-y-8">
    {education.map((item, index) => (
      <div key={index} className="group grid sm:grid-cols-8 gap-4 lg:hover:!opacity-100 lg:opacity-60 transition-all p-4 rounded-md lg:hover:bg-gray-900/50">
        <div className="sm:col-span-2 text-xs font-semibold uppercase tracking-wide text-gray-500 mt-1">{item.date}</div>
        <div className="sm:col-span-6">
            <h3 className="text-lg font-semibold text-white">{item.degree}</h3>
            <p className="text-gray-400 group-hover:text-emerald-400 transition-colors">{item.university}</p>
            {item.details.map((detail, i) => (
              <p key={i} className="mt-2 text-gray-400 leading-relaxed">{detail}</p>
            ))}
        </div>
      </div>
    ))}
  </div>
);

const Certifications: React.FC<{ certifications: Certification[] }> = ({ certifications }) => {
  // FIX: The error on `certs.map` was due to `certs` being inferred as `unknown`.
  // This is corrected by using `reduce` with an explicit type assertion on the initial accumulator,
  // ensuring `groupedCerts` is correctly typed as `Record<string, Certification[]>`.
  const groupedCerts = React.useMemo(() => {
    return certifications.reduce((acc, cert) => {
      const issuer = cert.issuer;
      if (!acc[issuer]) {
        acc[issuer] = [];
      }
      acc[issuer].push(cert);
      return acc;
    }, {} as Record<string, Certification[]>);
  }, [certifications]);

  return (
    <div className="space-y-8">
      {Object.entries(groupedCerts).map(([issuer, certs]) => (
        <div key={issuer} className="group p-4 bg-gray-900/50 rounded-lg lg:hover:!opacity-100 lg:opacity-60 transition-all lg:hover:bg-gray-800">
          <h3 className="text-xl font-semibold text-emerald-400 mb-4">{issuer}</h3>
          <div className="space-y-4">
            {certs.map((cert, index) => (
              <div key={index} className="p-4 bg-gray-800 rounded-lg flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                <div>
                  <h4 className="font-semibold text-white group-hover:text-emerald-400 transition-colors">{cert.name}</h4>
                </div>
                <div className="text-sm text-gray-500 text-left sm:text-right shrink-0">
                  <p>{cert.date}</p>
                  <p>ID: {cert.id}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const Contact: React.FC<{ contact: { email: string; linkedin: string; github: string; } }> = ({ contact }) => {
  // Contact form state and logic remains the same
  const [formData, setFormData] = React.useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    const formspreeEndpoint = 'https://formspree.io/f/mzzjodll';
    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        const data = await response.json();
        alert(`Error: ${data.errors ? data.errors.map((e: { message: string }) => e.message).join(', ') : 'An unexpected error occurred.'}`);
      }
    } catch (error) {
      alert('Could not send message. Please check your network connection.');
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <>
      <div className="bg-gray-900/50 p-6 md:p-8 rounded-lg">
        <p className="text-gray-400 mb-6 text-center">
          Have a question or want to work together? Fill out the form below.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
            <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} placeholder="Your Name" className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-gray-100 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} placeholder="your@email.com" className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-gray-100 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition" />
            </div>
            <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Phone <span className="text-gray-500">(Optional)</span></label>
                <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} placeholder="Your Phone Number" className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-gray-100 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition" />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
            <textarea name="message" id="message" rows={4} required value={formData.message} onChange={handleChange} placeholder="Your message..." className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-gray-100 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"></textarea>
          </div>
          <div>
            <button type="submit" disabled={isSubmitting} className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-800/50 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30">
              {isSubmitting && <Icon name="spinner" className="w-5 h-5 animate-spin" />}
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
      {isSubmitted && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" aria-modal="true" role="dialog">
          <div className="bg-gray-900 rounded-lg shadow-xl p-6 md:p-8 max-w-sm w-full text-center border border-gray-700">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-900/50 border border-green-700">
              <Icon name="check-circle" className="h-7 w-7 text-green-400" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-white">Message Sent!</h3>
            <p className="mt-2 text-gray-400">Thank you for getting in touch. I will get back to you shortly.</p>
            <div className="mt-6">
              <button onClick={() => setIsSubmitted(false)} className="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-emerald-500">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Footer: React.FC<{ name: string }> = ({ name }) => (
  <footer className="text-center py-8 mt-16 border-t border-gray-800">
    <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} {name}. All rights reserved.</p>
  </footer>
);

const App: React.FC = () => {
  const [activeSection, setActiveSection] = React.useState('about');
  
  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      document.documentElement.style.setProperty('--cursor-x', `${clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${clientY}px`);
    };
    
    window.addEventListener('mousemove', handleMouseMove);

    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'education', 'certifications', 'contact'];
      let currentSection = 'about';

      sections.forEach(id => {
        const sectionEl = document.getElementById(id);
        if (sectionEl) {
          const rect = sectionEl.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = id;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute" style={{ background: `radial-gradient(600px at var(--cursor-x, 50%) var(--cursor-y, 50%), rgba(16, 185, 129, 0.15), transparent 80%)`}}></div>
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-8">
        <div className="lg:flex lg:justify-between lg:gap-16">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-5/12 lg:flex-col lg:justify-between lg:py-24 py-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">{PROFILE_DATA.name}</h1>
              <h2 className="mt-3 text-lg md:text-xl text-emerald-400">{PROFILE_DATA.title}</h2>
              <p className="mt-4 max-w-xs leading-normal text-gray-400">I build secure, accessible, and user-friendly applications for the web.</p>
              <Nav activeSection={activeSection} />
            </div>
            <div className="mt-8 flex items-center gap-4">
              <a href={PROFILE_DATA.contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Icon name="github" className="w-6 h-6 text-gray-400 hover:text-white transition-colors"/>
              </a>
              <a href={PROFILE_DATA.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Icon name="linkedin" className="w-6 h-6 text-gray-400 hover:text-white transition-colors"/>
              </a>
              <a href={PROFILE_DATA.contact.email} aria-label="Email">
                <Icon name="envelope" className="w-6 h-6 text-gray-400 hover:text-white transition-colors"/>
              </a>
            </div>
          </header>

          <main className="lg:w-7/12 lg:py-24">
            <Section id="about" title="About">
              <About about={PROFILE_DATA.about} />
            </Section>
            <Section id="skills" title="Skills">
               <Skills skills={PROFILE_DATA.skills} />
            </Section>
            <Section id="experience" title="Experience">
              <Experience experience={PROFILE_DATA.experience} />
            </Section>
            <Section id="projects" title="Projects">
              <Projects projects={PROFILE_DATA.projects} />
            </Section>
            <Section id="education" title="Education">
              <Education education={PROFILE_DATA.education} />
            </Section>
            <Section id="certifications" title="Certifications">
              <Certifications certifications={PROFILE_DATA.certifications} />
            </Section>
            <Section id="contact" title="Get In Touch">
              <Contact contact={PROFILE_DATA.contact} />
            </Section>
            <Footer name={PROFILE_DATA.name} />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
