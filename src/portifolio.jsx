import React from 'react';

// Section 1 - Hero/Introduction
const Section1 = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <nav className="flex justify-between items-center mb-16">
          <h1 className="text-2xl font-bold">ERAN HELVITZ</h1>
          <div className="flex gap-8">
            <a href="#home" className="text-gray-700 hover:text-gray-900">Home</a>
            <a href="#projects" className="text-gray-700 hover:text-gray-900">Projects</a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
          </div>
        </nav>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-cyan-200 rounded-3xl p-12">
            <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Hi, I'm Eran,{<br/>} Software Engineer &{<br/>} AI Solutions Engineer
            </h2>
            <p className="text-gray-700 mb-8 text-lg">
              B.S. Computer Science graduate with expertise in Python, AI integration, and full-stack development. 
              Passionate about building scalable applications and automating data workflows with modern technologies.
            </p>
            <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition">
              Contact me
            </button>
            <div className="flex gap-6 mt-12">
              <a href="https://github.com/eranhelvitz" className="text-gray-700 hover:text-gray-900">GitHub</a>
              <a href="https://linkedin.com/in/eran-helvitz" className="text-gray-700 hover:text-gray-900">LinkedIn</a>
              <a href="mailto:13eran@gmail.com" className="text-gray-700 hover:text-gray-900">Email</a>
            </div>
          </div>
          
          <div className="bg-gray-200 rounded-3xl overflow-hidden h-96">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Section 3 - Services
const Section3 = () => {
  const services = [
    {
      title: "AI & Automation",
      description: "Expert in prompt design, AI integration (ChatGPT, Cursor), QA testing, and data pipeline automation. Experienced in building intelligent systems that enhance productivity and streamline workflows.",
      bgColor: "bg-purple-500",
      iconBg: "bg-white",
      icon: "🤖"
    },
    {
      title: "Backend Development",
      description: "Proficient in Python, FastAPI, RESTful APIs, Node.js, and SQL. Skilled in building scalable backend systems with proper database design, authentication, and real-time features.",
      bgColor: "bg-blue-600",
      iconBg: "bg-white",
      icon: "⚙️"
    },
    {
      title: "Frontend Development",
      description: "Experienced with React, Next.js, TypeScript, and TailwindCSS. Capable of creating responsive, modern user interfaces with excellent user experience and performance optimization.",
      bgColor: "bg-green-500",
      iconBg: "bg-white",
      icon: "💻"
    },
    {
      title: "System Design & Algorithms",
      description: "Strong foundation in algorithms, data structures, OOP, multithreading, and system design. Experienced in building real-time systems and optimizing performance for complex applications.",
      bgColor: "bg-orange-500",
      iconBg: "bg-white",
      icon: "🔧"
    }
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">MY SKILLS</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="rounded-3xl overflow-hidden">
              <div className={`${service.bgColor} h-44 flex items-center justify-center text-7xl`}>
                {service.icon}
              </div>
              <div className="bg-gray-100 p-8">
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 4 - Projects
const Section4 = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">MY PROJECTS</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Artist Hub */}
          <div className="bg-blue-600 rounded-3xl p-8 text-white">
            <div className="mb-6">
              <h3 className="text-3xl font-bold mb-2">Artist Hub</h3>
              <p className="text-sm opacity-90">FULL-STACK PLATFORM</p>
            </div>
            <div className="bg-gray-100 rounded-2xl p-4 text-gray-900">
              <div className="mb-4">
                <h4 className="text-lg font-bold mb-2">Platform for managing artist profiles and bookings</h4>
                <p className="text-sm mb-3">Backend: FastAPI, Python, SQLAlchemy, PostgreSQL</p>
                <p className="text-sm mb-3">Frontend: Next.js, React, TypeScript, Tailwind CSS</p>
                <p className="text-sm mb-3">Features: Google OAuth2, JWT security, RESTful API, calendar integration, real-time chat</p>
                <p className="text-sm">Deployed on Vercel and Fly.io with Neon database</p>
              </div>
              <a href="#" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
                View Project
              </a>
            </div>
          </div>

          {/* Fleet Simulation System */}
          <div className="bg-green-600 rounded-3xl p-8 text-white">
            <div className="mb-6">
              <h3 className="text-3xl font-bold mb-2">Fleet Simulation</h3>
              <p className="text-sm opacity-90">C++ SYSTEM</p>
            </div>
            <div className="bg-gray-100 rounded-2xl p-4 text-gray-900">
              <div className="mb-4">
                <h4 className="text-lg font-bold mb-2">Dynamic vehicle-warehouse interaction simulation</h4>
                <p className="text-sm mb-3">Built with C++ using MVC pattern</p>
                <p className="text-sm mb-3">Features: Real-time vehicle movement, inventory management</p>
                <p className="text-sm mb-3">Demonstrates: OOP principles, custom commands, error handling</p>
                <p className="text-sm">Experience with logistics and optimization algorithms</p>
              </div>
              <a href="#" className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition">
                View on GitHub
              </a>
            </div>
          </div>

          {/* Wine Price Tracker */}
          <div className="bg-purple-600 rounded-3xl p-8 text-white">
            <div className="mb-6">
              <h3 className="text-3xl font-bold mb-2">Wine Price Tracker</h3>
              <p className="text-sm opacity-90">WEB APPLICATION</p>
            </div>
            <div className="bg-gray-100 rounded-2xl p-4 text-gray-900">
              <div className="mb-4">
                <h4 className="text-lg font-bold mb-2">Monitor wine price fluctuations with alerts</h4>
                <p className="text-sm mb-3">Backend: Python (FastAPI), SQL</p>
                <p className="text-sm mb-3">Frontend: React.js</p>
                <p className="text-sm mb-3">Features: Multithreading for real-time scraping, email notifications</p>
                <p className="text-sm">Responsive interface for managing preferences and price alerts</p>
              </div>
              <a href="#" className="inline-block bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition">
                View on GitHub
              </a>
            </div>
          </div>

          {/* Metulla Colony Website */}
          <div className="bg-orange-500 rounded-3xl p-8 text-white">
            <div className="mb-6">
              <h3 className="text-3xl font-bold mb-2">Metulla Colony</h3>
              <p className="text-sm opacity-90">WORDPRESS WEBSITE</p>
            </div>
            <div className="bg-gray-100 rounded-2xl p-4 text-gray-900">
              <div className="mb-4">
                <h4 className="text-lg font-bold mb-2">Volunteer website management</h4>
                <p className="text-sm mb-3">WordPress development and maintenance</p>
                <p className="text-sm mb-3">Content management and user experience optimization</p>
                <p className="text-sm">Community-focused web presence</p>
              </div>
              <a href="#" className="inline-block bg-orange-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-600 transition">
                View Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Section 2 - Education & Experience
const Section2 = () => {
  const experiences = [
    {
      title: "Education",
      content: "B.S. Computer Science (2020-2024)",
      description: "Strong foundation in algorithms, data structures, OOP, multithreading, and system design"
    },
    {
      title: "Work Experience",
      content: "Rossa Wine Truck - Owner (2020-2022)",
      description: "Production operation manager for 'The big brother show' (2017-2020)"
    },
    {
      title: "Military Service",
      content: "Combat warrior and technician (2023-2025)",
      description: "Military reserve service with technical responsibilities"
    },
    {
      title: "Languages",
      content: "Hebrew (Native) • English (Fluent)",
      description: "Bilingual communication skills for international collaboration"
    }
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">BACKGROUND</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {experiences.map((experience, index) => (
            <div key={index} className="bg-gray-100 rounded-3xl p-8">
              <h3 className="text-xl font-bold mb-3 text-gray-900">{experience.title}</h3>
              <p className="text-gray-700 mb-3 font-semibold">{experience.content}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{experience.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-900 text-white rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to collaborate? Let's connect!</h3>
          <p className="text-xl mb-6">Seeking a full-time Software Engineer / AI Solutions Engineer position</p>
          <p className="text-lg mb-4">📧 13eran@gmail.com</p>
          <p className="text-lg mb-8">📱 +972-504977265</p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <a href="mailto:13eran@gmail.com" className="bg-white text-gray-900 px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition">
              Contact me
            </a>
            <a href="https://github.com/eranhelvitz" className="text-white hover:text-gray-300">GitHub</a>
            <a href="https://linkedin.com/in/eran-helvitz" className="text-white hover:text-gray-300">LinkedIn</a>
            <a href="mailto:13eran@gmail.com" className="text-white hover:text-gray-300">Email</a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Portfolio Page
export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      <Section1 />
      <Section3 />
      <Section4 />
      <Section2 />
    </div>
  );
}