'use client';
import dynamic from 'next/dynamic';

import Navbar from './components/Navbar';
import AnimatedBackground from './components/AnimatedBackground';

// Dynamically import the ScrollReveal component with no SSR
const ScrollReveal = dynamic(
  () => import('./components/ScrollReveal'),
  { ssr: false } // This ensures the component only renders on the client side
);

export default function Home() {
  return (
    <main>
      <Navbar />
      <AnimatedBackground />

      <ScrollReveal>
        {/* Hero Section with section-specific class */}
        <section id="home" className="section-home relative min-h-screen flex items-center justify-center overflow-hidden pt-16 px-4 sm:px-6 border-b-4 border-persona-red">
          {/* Section indicator */}
          <div className="absolute top-20 left-4 md:left-10 z-10">
            <div className="section-indicator">
              <span className="text-persona-red font-bold">01</span>
              <span className="text-white ml-2">HOME</span>
            </div>
          </div>
          
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full bg-gradient-to-br from-phantom-black via-persona-red to-persona-white opacity-30"></div>
          </div>
          
          <div className="container mx-auto px-4 z-10 relative">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              {/* Text Content */}
              <div className="lg:w-1/2 animate-slide-in-left">
                <div className="persona-card p-8 rounded-2xl mb-8 lg:mb-0">
                  <h1 className="font-royal text-5xl lg:text-7xl font-black mb-4 text-white text-shadow-glow">
                    Hi, I'm <span className="text-persona-red">Khang Ngo</span>
                  </h1>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-persona-white">
                    I'm the <span className="text-persona-red"> Developer</span>
                  </h2>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    Crafting digital experiences with the precision of the my style.
                  </p>
                  <button 
                    className="royal-button px-8 py-4 rounded-full text-lg hover-lift relative z-10"
                    onClick={() => document.getElementById('about').scrollIntoView({behavior: 'smooth'})}
                  >
                    <span className="relative z-10">DISCOVER MORE</span>
                  </button>
                </div>
              </div>
              
              {/* Profile Image with explicit dimensions and aspect ratio */}
              <div className="lg:w-1/2 flex justify-center animate-slide-in-right">
                <div className="relative">
                  <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full border-glow animate-pulse-glow overflow-hidden">
                    <img 
                      src="/background/avatar.jpg" 
                      alt="Khang Ngo" 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                      loading="eager"
                      width={384}
                      height={384}
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-persona-red rounded-full flex items-center justify-center animate-float">
                    <i className="fas fa-code text-persona-black text-2xl" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section divider with section-specific class */}
        <div className="section-divider divider-home relative h-20 overflow-hidden">
          <div className="absolute w-full h-10 bg-gradient-to-r from-persona-red to-persona-white opacity-15 transform -skew-y-3"></div>
        </div>

        {/* About Section with section-specific class */}
        <section id="about" className="section-about py-24 md:py-32 relative px-4 sm:px-6 bg-phantom-black bg-opacity-80 border-b-4 border-deep-magenta">
          {/* Section indicator */}
          <div className="absolute top-12 left-4 md:left-10 z-10">
            <div className="section-indicator">
              <span className="text-deep-magenta font-bold">02</span>
              <span className="text-white ml-2">ABOUT</span>
            </div>
          </div>
          
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 section-title">
              <h2 className="font-royal text-5xl font-black text-white mb-4" style={{textShadow: '0 0 10px rgba(194, 24, 91, 0.8), 0 0 20px rgba(194, 24, 91, 0.6)'}}>
                ABOUT ME
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-deep-magenta to-persona-white mx-auto"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center section-content">
              <div className="animate-slide-in-left">
                <div className="persona-card p-8 rounded-2xl hover-lift">
                  <h3 className="text-3xl font-bold text-royal-gold mb-6">Who I Am</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    I'm Khang Ngo, a dedicated computer science student at VN-UK Institute with a passion for web development 
                    and research. My academic journey has led me to contribute to scientific publications and take on leadership 
                    roles in university events including the VNUK Summer Camp and Univent 7.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    With experience in both front-end and back-end technologies, I strive to create digital solutions that 
                    combine technical precision with intuitive design. My goal is to leverage technology to solve real-world 
                    problems and enhance user experiences across different platforms.
                  </p>
                </div>
              </div>
              
              <div className="animate-slide-in-right">
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 sm:gap-6">
                  <div className="persona-card p-6 rounded-xl text-center hover-lift">
                    <i className="fas fa-code text-4xl text-neon-cyan mb-4"></i>
                    <h4 className="text-xl font-bold text-white mb-2">Clean Code</h4>
                    <p className="text-gray-400">Precision in every line</p>
                  </div>
                  <div className="persona-card p-6 rounded-xl text-center hover-lift">
                    <i className="fas fa-mobile-alt text-4xl text-persona-pink mb-4"></i>
                    <h4 className="text-xl font-bold text-white mb-2">Responsive</h4>
                    <p className="text-gray-400">Perfect on all devices</p>
                  </div>
                  <div className="persona-card p-6 rounded-xl text-center hover-lift">
                    <i className="fas fa-rocket text-4xl text-royal-gold mb-4"></i>
                    <h4 className="text-xl font-bold text-white mb-2">Performance</h4>
                    <p className="text-gray-400">Lightning fast loading</p>
                  </div>
                  <div className="persona-card p-6 rounded-xl text-center hover-lift">
                    <i className="fas fa-palette text-4xl text-deep-magenta mb-4"></i>
                    <h4 className="text-xl font-bold text-white mb-2">Design</h4>
                    <p className="text-gray-400">Aesthetic excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section divider with section-specific class */}
        <div className="section-divider divider-about relative h-20 overflow-hidden">
          <div className="absolute w-full h-10 bg-gradient-to-r from-deep-magenta to-phantom-purple opacity-15 transform skew-y-3"></div>
        </div>

        {/* Skills Section with section-specific class */}
        <section id="skills" className="section-skills py-24 md:py-32 relative bg-gradient-to-b from-phantom-black to-[#121212] border-b-4 border-phantom-purple">
          {/* Section indicator */}
          <div className="absolute top-12 left-4 md:left-10 z-10">
            <div className="section-indicator">
              <span className="text-phantom-purple font-bold">03</span>
              <span className="text-white ml-2">SKILLS</span>
            </div>
          </div>
          
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 section-title">
              <h2 className="font-royal text-5xl font-black text-white mb-4" style={{textShadow: '0 0 10px rgba(74, 20, 140, 0.8), 0 0 20px rgba(74, 20, 140, 0.6)'}}>
                SKILLS
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-phantom-purple to-persona-white mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 section-content">
              <div className="persona-card p-6 rounded-xl text-center hover-lift">
                <i className="fab fa-html5 text-5xl text-orange-500 mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-2">Frontend</h3>
                <p className="text-gray-400">HTML5, CSS3, JavaScript, React</p>
              </div>
              <div className="persona-card p-6 rounded-xl text-center hover-lift">
                <i className="fas fa-server text-5xl text-green-500 mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-2">Backend</h3>
                <p className="text-gray-400">Node.js, Python, PHP</p>
              </div>
              <div className="persona-card p-6 rounded-xl text-center hover-lift">
                <i className="fas fa-database text-5xl text-blue-500 mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-2">Database</h3>
                <p className="text-gray-400">MySQL, MongoDB, PostgreSQL</p>
              </div>
              <div className="persona-card p-6 rounded-xl text-center hover-lift">
                <i className="fas fa-microscope text-5xl text-purple-500 mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-2">Academic Research</h3>
                <p className="text-gray-400">Data Analysis, Technical Writing, Research Methods</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section divider with section-specific class */}
        <div className="section-divider divider-skills relative h-20 overflow-hidden">
          <div className="absolute w-full h-10 bg-gradient-to-r from-phantom-purple to-lava-orange opacity-15 transform -skew-y-3"></div>
        </div>

        {/* Projects Section with section-specific class */}
        <section id="projects" className="section-projects py-24 md:py-32 relative px-4 sm:px-6 bg-phantom-black bg-opacity-80 border-b-4 border-lava-orange">
          {/* Section indicator */}
          <div className="absolute top-12 left-4 md:left-10 z-10">
            <div className="section-indicator">
              <span className="text-lava-orange font-bold">04</span>
              <span className="text-white ml-2">PROJECTS</span>
            </div>
          </div>
          
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 section-title">
              <h2 className="font-royal text-5xl font-black text-white mb-4" style={{textShadow: '0 0 10px rgba(255, 87, 34, 0.8), 0 0 20px rgba(255, 87, 34, 0.6)'}}>
                PROJECTS
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-lava-orange to-persona-white mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto section-content">
              <div className="persona-card p-4 sm:p-6 rounded-xl hover-lift">
                <div className="w-full h-36 sm:h-48 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src="/background/attendance.png" 
                    alt="Attendance System Project" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    width={400}
                    height={200}
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Attendance System</h3>
                <p className="text-gray-400 mb-4">IoT security system using ESP32 microcontroller with attendance tracking and authentication for access control</p>
                <div className="flex gap-2">
                  <a 
                    href="https://github.com/khang-ngo4444/fingerprint_esp32" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="royal-button px-4 py-2 rounded-full text-sm"
                  >
                    <i className="fab fa-github mr-2"></i>View Code
                  </a>
                </div>
              </div>
              <div className="persona-card p-4 sm:p-6 rounded-xl hover-lift">
                <div className="w-full h-36 sm:h-48 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src="/background/carapp.PNG" 
                    alt="Car App Web Design Project" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    width={400}
                    height={200}
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Car App Web Design</h3>
                <p className="text-gray-400 mb-4">Modern and responsive web application design for automotive services with sleek UI/UX</p>
                <div className="flex gap-2">
                  <a 
                    href="https://github.com/AkioCkist/CarAppWebDesign" 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="royal-button px-4 py-2 rounded-full text-sm"
                  >
                    <i className="fab fa-github mr-2"></i>View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section divider with section-specific class */}
        <div className="section-divider relative h-20 overflow-hidden">
          <div className="absolute w-full h-12 bg-gradient-to-r from-persona-white to-persona-red opacity-20 transform skew-y-3"></div>
        </div>

        {/* Experience Section */}
        <section id="experience" className="py-24 md:py-32 relative bg-gradient-to-b from-phantom-black to-[#121212] border-b-4 border-persona-red">
          {/* Section indicator */}
          <div className="absolute top-12 left-4 md:left-10 z-10">
            <div className="section-indicator">
              <span className="text-persona-red font-bold">05</span>
              <span className="text-white ml-2">EXPERIENCE</span>
            </div>
          </div
          >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 section-title">
              <h2 className="font-royal text-5xl font-black text-white mb-4 text-shadow-glow">
                EXPERIENCE
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-persona-red to-persona-white mx-auto"></div>
            </div>
            
            <div className="max-w-4xl mx-auto section-content">
              <div className="persona-card p-8 rounded-xl hover-lift mb-6">
                <h3 className="text-2xl font-bold text-royal-gold mb-2">Volunteer & Leadership Roles</h3>
                <p className="text-persona-red mb-2">VN-UK Institute for Research and Executive Education • 2023 - Present</p>
                <ul className="text-gray-300 list-disc list-inside mb-2 text-left">
                  <li>Volunteer for various university events (2023)</li>
                  <li>Lead of Logistics for Univent 7 (2024)</li>
                  <li>Lead of Tech & Logistics for <span className="font-bold">VNUK Summer Camp</span> (2025)</li>
                </ul>
                <p className="text-gray-300">Actively participated in organizing and managing multiple school events, taking on key roles such as tech lead and logistics lead, demonstrating strong leadership and teamwork skills.</p>
              </div>
              <div className="persona-card p-8 rounded-xl hover-lift">
                <h3 className="text-2xl font-bold text-royal-gold mb-2">Scientific Publications</h3>
                <p className="text-persona-red mb-2">Applying new Technology in Green Buildings, The ATiGB 2025</p>
                <ul className="text-gray-300 list-disc list-inside mb-2 text-left">
                  <li>2 scientific papers accepted on 21/05/2025</li>
                  <li>Expected publication date: 25/07/2025</li>
                </ul>
                <p className="text-gray-300">Contributed research papers to an international conference, focusing on innovative technologies in green building applications.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section divider */}
        <div className="section-divider relative h-20 overflow-hidden">
          <div className="absolute w-full h-12 bg-gradient-to-r from-persona-red to-persona-white opacity-20 transform -skew-y-3"></div>
        </div>

        {/* Education Section */}
        <section id="education" className="py-24 md:py-32 relative bg-phantom-black bg-opacity-80 border-b-4 border-persona-red">
          {/* Section indicator */}
          <div className="absolute top-12 left-4 md:left-10 z-10">
            <div className="section-indicator">
              <span className="text-persona-red font-bold">06</span>
              <span className="text-white ml-2">EDUCATION</span>
            </div>
          </div>
          
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 section-title">
              <h2 className="font-royal text-5xl font-black text-white mb-4 text-shadow-glow">
                EDUCATION
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-persona-red to-persona-white mx-auto"></div>
            </div>
            
            <div className="max-w-4xl mx-auto section-content">
              <div className="persona-card p-8 rounded-xl hover-lift">
                <h3 className="text-2xl font-bold text-royal-gold mb-2">Computer Science Degree</h3>
                <p className="text-persona-red mb-2">VN-UK Institute for Research and Executive Education, the University of Danang • 2023 - Present</p>
                <p className="text-gray-300">Pursuing a degree in Computer Science with a focus on modern technologies, research, and active participation in university events and scientific conferences.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section divider */}
        <div className="section-divider relative h-20 overflow-hidden">
          <div className="absolute w-full h-12 bg-gradient-to-r from-persona-white to-persona-red opacity-20 transform skew-y-3"></div>
        </div>

        {/* Contact Section */}
        <section id="contact" className="py-24 md:py-32 relative bg-gradient-to-b from-phantom-black to-[#121212]">
          {/* Section indicator */}
          <div className="absolute top-12 left-4 md:left-10 z-10">
            <div className="section-indicator">
              <span className="text-persona-red font-bold">07</span>
              <span className="text-white ml-2">CONTACT</span>
            </div>
          </div>
          
          <div className="container mx-auto px-4 text-center">
            <div className="section-content">
              <h2 className="font-royal text-5xl font-black text-white mb-4 text-shadow-glow">
                LET'S <span className="text-persona-white">COLLABORATE</span>
              </h2>
              <p className="text-2xl text-white mb-4 font-bold">READY TO START YOUR NEXT HEIST?</p>
              <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
                With my background in Computer Science from VN-UK Institute and experience in research publications, 
                I bring both academic knowledge and practical leadership skills to every project. Let's create something 
                meaningful together, whether for academic research, tech events, or innovative applications.
              </p>
              
              <div className="flex justify-center items-center">
                <div className="flex space-x-6">
                  <a 
                    href="https://github.com/khang-ngo4444" 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="w-16 h-16 bg-persona-black rounded-full flex items-center justify-center hover-lift border-2 border-persona-white transition-all duration-300 hover:bg-persona-red group"
                  >
                    <i className="fab fa-github text-2xl text-persona-white group-hover:text-persona-black transition-colors duration-300"></i>
                  </a>
                  <a 
                    href="https://www.facebook.com/khang.ngo.315000" 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="w-16 h-16 bg-persona-black rounded-full flex items-center justify-center hover-lift border-2 border-persona-red transition-all duration-300 hover:bg-persona-red group"
                  >
                    <i className="fab fa-facebook-f text-2xl text-persona-red group-hover:text-persona-black transition-colors duration-300"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}