
import type { ProfileData } from './types';

export const PROFILE_DATA: ProfileData = {
  name: "Vishal Kumar",
  title: "Software Developer & Security Engineer",
  availability: ["Remote", "Open to opportunities", "Available Full-time", "Part-time"],
  about: "I'm a Software Developer with a strong focus on cybersecurity and secure application development. My approach combines modern frontend technologies with rigorous security practices to build reliable, scalable solutions. From implementing OWASP Top 10 compliance to deploying containerized applications with Docker, I bring a security-first mindset to every project. With hands-on experience in React.js, Python, cloud computing, data analysis, and encryption protocols, I'm passionate about creating applications that are both user-friendly and secure. I hold multiple certifications in cybersecurity, digital marketing, and full-stack development, maintaining a 7.8 CGPA during my BCA.",
  skills: [
    "Python", "React.js", "Cybersecurity", "OWASP Top 10", "Docker", "Git", "SHA256 Encryption", "HTML5", "CSS", "JavaScript", "Responsive Design", "Front-End Development", "Full-Stack Development", "Cloud Computing", "Data Analysis", "pandas", "Matplotlib", "CLI Development", "MySQL", "PHP", "Java", "C++", "Bootstrap", "WordPress", "Django", "Linux", "Security Analysis", "Ethical Hacking", "SEO", "Digital Marketing"
  ],
  experience: [
    {
      title: "Admin Executive",
      company: "PaperMe",
      location: "India",
      date: "Nov 2024 - Present",
      duration: "1 yr",
      employmentType: 'Remote',
      description: "Working on professional development projects, contributing to secure and scalable web applications with focus on modern frontend technologies and best practices."
    },
    {
      title: "Career Break - Professional Development",
      company: "Self-directed Learning",
      location: "Jaipur, Rajasthan",
      date: "Jan 2023 - Present",
      duration: "2 yrs 10 mos",
      employmentType: 'Remote',
      description: "Took intentional time to upskill and specialize in cybersecurity protocols (OWASP, Nmap, SHA256), frontend mastery with React.js and responsive design, secure deployment using Docker and Git, and Cloud Computing (GCP Certified). Developed and published 5+ real-world projects on GitHub, building a strong technical foundation for a career in secure software development."
    },
    {
      title: "Developer + Security Integrator",
      company: "Independent Project · Self-employed",
      location: "Jaipur, Rajasthan, India",
      date: "Jan 2024 - Mar 2024",
      duration: "3 mos",
      employmentType: 'Remote',
      description: "Problem: Users store passwords in plaintext. Built a custom password vault using Python with SHA256 encryption for storage. Deployed using Docker containers in an offline-first, zero-trust environment. Applied OWASP Top 10 compliance across the entire system. Outcome: Created a lightweight, encrypted password manager rated 4.8/5 by GitHub community on usability and security."
    },
    {
      title: "NAAC College Accreditation Website",
      company: "University Project · Trainee",
      location: "Jaipur, Rajasthan, India",
      date: "Sep 2023 - Nov 2023",
      duration: "3 mos",
      employmentType: 'On-site',
      description: "Problem: College lacked a digital face for accreditation. Built from the ground up using HTML, CSS, JavaScript. Made it mobile-responsive and accessible with optimized load time for sub-1s on 4G. Created interface aligned with NAAC submission goals. Result: Used as the official accreditation portal, traffic tested for 500+ concurrent users."
    },
    {
      title: "Sales Data Analyzer",
      company: "Personal Build · Self-employed",
      location: "Jaipur, Rajasthan, India",
      date: "Aug 2023 - Oct 2023",
      duration: "3 mos",
      employmentType: 'Remote',
      description: "Objective: Decode hidden profit zones from sales logs. Engineered with Python (pandas, matplotlib). Loaded product-wise sales data, applied filters and analysis by category & ROI, rendered charts with interactive insights. Outcome: Business simulation tested with 4 datasets, generated insights like best-seller heatmaps and seasonal trends."
    },
    {
      title: "Terminal Chatbot (CLI Bot)",
      company: "Independent Project · Self-employed",
      location: "Jaipur, Rajasthan, India",
      date: "Jul 2023 - Aug 2023",
      duration: "2 mos",
      employmentType: 'Remote',
      description: "Mission: Simulate intelligent CLI chat for terminal users. Built using Python core with structured I/O and pattern recognition. Added mock personality for realism and extended for custom shell command emulation. Outcome: Used for internal shell practice and Git tutorials. Downloaded 1.2k+ times on GitHub."
    }
  ],
  projects: [
    {
      title: "Python API Integration",
      description: "Developed a Python-based system to integrate third-party APIs for real-time data retrieval and processing. Focused on secure request handling, error logging, and output formatting. Demonstrated RESTful architecture and authentication handling.",
      linkText: "View on GitHub",
      linkUrl: "https://github.com/vishalkumar/python-api-integration",
      stars: 120,
      forks: 35
    },
    {
      title: "TIME-LIGHT",
      description: "Developed a light-based time tracker using Python. Displays real-time status updates with a visual LED-like interface. Ideal for productivity tracking and automation tools. Focused on modular code design, time-based logic, and user interaction.",
      linkText: "View on GitHub",
      linkUrl: "https://github.com/vishalkumar/time-light",
      stars: 85,
      forks: 15
    }
  ],
  education: [
    {
      degree: "BCA, Information Technology",
      university: "Suresh Gyan Vihar University",
      details: [
        "Grade: 7.8 CGPA",
        "Focused on combining strong programming skills with cybersecurity fundamentals. Worked on multiple real-world projects including a Docker-based password manager, data analytics tools, and secure front-end web apps. Maintained a 7.8 CGPA and pursued certifications in cloud computing, digital marketing, and ethical security practices."
      ],
      date: "Sep 2022"
    },
    {
      degree: "Secondary School Certificate (SSCE), Science",
      university: "R.K.B. INTERCOLLEGE, GITANAGAR, NAWADAH, BIHAR",
      details: [
        "Completed senior secondary education with a focus on computer science and mathematics. Developed early interest in programming, problem-solving, and internet security. Participated in state-level computer science competitions and coding challenges."
      ],
      date: "2020 - 2022"
    }
  ],
  certifications: [
    { name: "Tata Group - Cybersecurity Analyst Job Simulation", issuer: "Forage", date: "Feb 2024", id: "WiCxsWjpBmuf9q9JH" },
    { name: "Introduction to Programming Using HTML and CSS", issuer: "LearnTube.ai", date: "Jul 2023", id: "HTM3502023596105S" },
    { name: "Introduction to Programming Using Python", issuer: "LearnTube.ai", date: "May 2023", id: "PYT2932023596105S" },
    { name: "Programming in HTML5 with JavaScript and CSS3", issuer: "EDUCBA", date: "May 2023", id: "BZR4HNQ-V" },
    { name: "Digital Garage Certificate", issuer: "Google", date: "Nov 2022", id: "9UB BVH 6W8" },
    { name: "Email Marketing", issuer: "HubSpot Academy", date: "Mar 2023", id: "51d4362be68645e1babcc5389264d34c" },
    { name: "Social Media Marketing", issuer: "HubSpot Academy", date: "Mar 2023", id: "fd7c920dbd83493f991432ace0d90dbb" },
    { name: "Google Ads Display Certification", issuer: "Google", date: "Apr 2023", id: "147473892" }
  ],
  contact: {
    email: "mailto:vishalkumar@example.com",
    linkedin: "https://www.linkedin.com/in/example",
    github: "https://github.com/vishalkumar"
  }
};