import React, { useState, useEffect } from "react";
import {
  Code,
  Database,
  Globe,
  Server,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  ChevronDown,
  Menu,
  X,
  Award,
  GraduationCap,
  Briefcase,
} from "lucide-react";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "experience",
        "education",
        "certifications",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const skills = {
    languages: ["Python", "Java", "C", "JavaScript"],
    frontend: ["HTML", "CSS3", "Bootstrap"],
    backend: ["FastAPI (Python)", "Node.js", "REST API Development"],
    databases: ["MySQL", "MongoDB", "PostgreSQL"],
    orm: ["SQLAlchemy"],
    tools: ["Git", "GitHub", "Postman", "GitLab"],
    ai_ml: ["Machine Learning", "Deep Learning", "AI System Design", "Chatbot Development"],
  };

  const certifications = [
    "J.P. Morgan – Software Engineering Job Simulation",
    "Accenture UK – Developer and Technology Job Simulation",
    "Fundamentals of Digital Marketing (Google)",
    "ChatGPT Prompt Engineering – Examples & Use Cases",
    "Data & Analytics – Certificate Workshop",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-[93%] left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-lg border-b border-white/20 z-50 rounded-lg mt-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-white">
              <img
                src="/images/logo.png"
                alt="logo "
                height="50px"
                width="50px"
              />
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                "Home",
                "About",
                "Skills",
                "Experience",
                "Education",
                "Certifications",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-white hover:text-purple-300 transition-colors duration-200 ${
                    activeSection === item.toLowerCase() ? "text-purple-300" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          {isMenuOpen && (
            <div className="md:hidden bg-white/10 backdrop-blur-lg border-t border-white/20">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {[
                  "Home",
                  "About",
                  "Skills",
                  "Experience",
                  "Education",
                  "Certifications",
                  "Contact",
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block px-3 py-2 text-white hover:text-purple-300 transition-colors duration-200 w-full text-left"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-12">
          <div className="text-center md:text-left md:flex-1">
            <div className="animate-fadeInUp">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Akash <span className="text-purple-400">Khatale</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-purple-300 mb-6">
                AI Software Developer | Backend Developer | Tech Enthusiast
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-8 italic">
                "Turning ideas into intelligent and scalable applications."
              </p>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="md:flex-1 animate-fadeInUp">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 bg-purple-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <img
                src="/images/profile.JPG"
                alt="Akash Khatale"
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-purple-500/50 shadow-2xl"
              />
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-white mx-auto" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            About Me
          </h2>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <p className="text-gray-300 leading-relaxed text-lg">
              Akash is an AI/ML Software Developer with strong expertise in Python, FastAPI, Java, and JavaScript, combined with hands-on experience in machine learning and intelligent application development. He has built and deployed backend systems including E-commerce Inventory Management APIs, Reminder Applications, and Real-time Communication Apps, integrating AI-driven insights for smarter solutions.
              <br /><br />
              Passionate about building smart systems that scale, Akash focuses on AI development, deep learning, and practical ML applications. He thrives in collaborative environments and enjoys turning complex ideas into efficient, user-friendly software.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Languages */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Code className="text-purple-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Globe className="text-purple-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Frontend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Server className="text-purple-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Backend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Database className="text-purple-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Databases</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.databases.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* ORM */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Database className="text-purple-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">ORM</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.orm.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Code className="text-purple-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* AI / ML */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Code className="text-purple-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">AI / ML</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.ai_ml.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Experience
          </h2>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="flex items-start">
              <div className="bg-purple-600 rounded-full p-3 mr-6">
                <Briefcase className="text-white" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  AI Software Engineer – The Baap Company
                </h3>
                <p className="text-purple-300 mb-4">
                  Aug 2022 – Present | Sangamner, Maharashtra, India
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>
                    • Designed and developed backend solutions using Python
                    (FastAPI), Node.js, and AI/ML integration
                  </li>
                  <li>
                    • Built and deployed APIs with MySQL, MongoDB, and SQLAlchemy
                  </li>
                  <li>
                    • Developed intelligent systems like E-commerce Inventory Management, Reminder App, and Real-time Communication Chatbots
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Education
          </h2>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="flex items-start">
              <div className="bg-purple-600 rounded-full p-3 mr-6">
                <GraduationCap className="text-white" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Bachelor of Computer Application (BCA)
                </h3>
                <p className="text-purple-300 mb-2">Information Technology</p>
                <p className="text-gray-300">University of Mysore | Jul 2022</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300"
              >
                <div className="flex items-start">
                  <Award
                    className="text-purple-400 mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <p className="text-gray-300">{cert}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Contact
          </h2>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 flex flex-col md:flex-row gap-8">
            {/* Contact Info */}
            <div className="md:w-1/2 space-y-4">
              <div className="flex items-center">
                <MapPin className="text-purple-400 mr-3" size={20} />
                <span className="text-gray-300">Sangamner, Maharashtra, India</span>
              </div>
              <div className="flex items-center">
                <Mail className="text-purple-400 mr-3" size={20} />
                <span className="text-gray-300">akashkhatale@example.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-purple-400 mr-3" size={20} />
                <span className="text-gray-300">+91 9021503115</span>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <a
                  href="https://www.linkedin.com/in/akash-khatale-2a306a261/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-white transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com/akashkhatale"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-white transition-colors"
                >
                  <Github size={24} />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:w-1/2">
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:border-purple-400 transition-all duration-300"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:border-purple-400 transition-all duration-300"
                />
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:border-purple-400 transition-all duration-300"
                ></textarea>
                <button
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Akash Khatale | AI Software Developer. All rights reserved.
      </footer>
    </div>
  );
};

export default Portfolio;
