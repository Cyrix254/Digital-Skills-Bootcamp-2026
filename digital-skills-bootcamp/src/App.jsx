import React, { useState, useEffect } from 'react';
import myPhoto from './reagan.jpg';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  // Handle scroll to hide indicator
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const registrationLink = "https://forms.gle/your-form-link";

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Curriculum', href: '#curriculum' },
    { name: 'Instructor', href: '#instructor' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <div className="font-sans text-gray-900 bg-gray-50 scroll-smooth">
      
      {/* --- NAVIGATION --- */}
      <nav className="fixed w-full z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-800">Cyrix<span className="text-yellow-500">Bootcamp 2026</span></span>
            </div>
            
            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-gray-600 hover:text-blue-800 font-medium transition">
                  {link.name}
                </a>
              ))}
              <a href={registrationLink} target="_blank" rel="noreferrer" 
                 className="bg-blue-800 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-900 transition shadow-lg">
                Register Now
              </a>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-blue-800 focus:outline-none">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16m-7 6h7" />}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 p-4 space-y-4 shadow-xl">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="block text-gray-700 font-medium">
                {link.name}
              </a>
            ))}
            <a href={registrationLink} className="block bg-blue-800 text-white text-center py-3 rounded-lg font-bold">Register Now</a>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen pt-32 pb-20 md:pt-48 md:pb-32 bg-gradient-to-br from-blue-900 to-blue-800 text-white overflow-hidden flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 text-center md:text-left">
              
              <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/50 px-4 py-2 rounded-full mb-6">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
                </span>
                <span className="text-yellow-400 font-bold tracking-wide uppercase text-sm">
                  Enrollment Open: January — April 2026
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                Modern Digital Skills <span className="text-yellow-400">Bootcamp 2026</span>
              </h1>
              <p className="mt-6 text-xl text-blue-100 max-w-xl">
                Learn Frontend Web Development, Digital Marketing & Artificial Intelligence — 100% Online. Start your career today.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                <a href={registrationLink} className="w-full sm:w-auto px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold rounded-xl transition-all transform hover:scale-105 shadow-2xl text-center">
                  Register Now — KSh 1,500/month
                </a>
              </div>
              <p className="text-blue-100 text-2xl font-medium mt-6">
                Training Duration: 2 months (May–July)
              </p>
            </div>

            <div className="md:w-1/2 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl">
                <img src={myPhoto} alt="Reagan Tzisaga" className="w-full h-auto object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-blue-900/80 backdrop-blur-md p-4 text-center">
                  <p className="text-yellow-400 font-bold text-lg">Cyrix Ray</p>
                  <p className="text-xs uppercase tracking-widest text-blue-100">Lead Instructor</p>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl -z-1"></div>
            </div>
          </div>
        </div>

        {/* --- ANIMATED SCROLL INDICATOR --- */}
        <div 
          className={`fixed bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-500 z-40 ${showScrollIndicator ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          <span className="text-yellow-400 font-bold text-2xl tracking-widest uppercase animate-pulse">
            Scroll to Explore
          </span>
          
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">Master the Skills of the Future</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Zero experience? No problem. This bootcamp is your fast track to the digital workforce. We’ve bridged the gap between theory and industry reality, combining <strong>Web Development, Digital Marketing,</strong> and <strong>AI</strong> into one powerhouse curriculum. Stop wondering 'how' and start building 'now' with real-world projects designed to turn beginners into digital professionals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { title: "No Experience Required", icon: "🚀" },
              { title: "Build Real Projects", icon: "🛠️" },
              { title: "Kenya Focused", icon: "🇰🇪" }
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-blue-800">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CURRICULUM SECTION --- */}
      <section id="curriculum" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-16">The Training Roadmap</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-3xl shadow-sm border-t-8 border-blue-800 relative overflow-hidden">
              <span className="absolute top-4 right-4 text-6xl font-black text-gray-100">01</span>
              <h3 className="text-2xl font-bold text-blue-800 mb-6 underline decoration-yellow-500 underline-offset-8">Frontend Web Development</h3>
              <ul className="space-y-4">
                {['HTML5 Fundamentals', 'CSS3 & Responsive Design', 'Bootstrap 5 Framework', 'JavaScript Basics', 'Building & Deploying Live Sites'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="text-green-500 font-bold">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border-t-8 border-yellow-500 relative overflow-hidden">
              <span className="absolute top-4 right-4 text-6xl font-black text-gray-100">02</span>
              <h3 className="text-2xl font-bold text-blue-800 mb-6 underline decoration-blue-800 underline-offset-8">Digital Marketing & AI</h3>
              <ul className="space-y-4">
                {['Digital Marketing Basics', 'Social Media Branding', 'Freelancing & Client Search', 'AI Productivity Tools', 'Ethical & Smart AI Usage'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="text-green-500 font-bold">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- INSTRUCTOR SECTION --- */}
      <section id="instructor" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-900 rounded-3xl overflow-hidden flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/3 h-full min-h-[400px]">
              <img src={myPhoto} alt="Reagan Tzisaga" className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500" />
            </div>
            <div className="lg:w-2/3 p-8 lg:p-16 text-white">
              <h4 className="text-yellow-400 font-bold tracking-widest uppercase mb-2">Lead Mentor</h4>
              <h2 className="text-4xl font-bold mb-6">Cyrix Ray</h2>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
               As the Founder of <strong>Cyrix Digital Solutions</strong>, Cyrix Ray is driven by a mission to make digital skills accessible, practical, and empowering.
                His teaching approach goes beyond coding—combining real-world projects, mentorship, and modern digital strategies to help beginners grow from uncertainty into confident creators ready for the digital economy.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Web Development', 'Graphic Design', 'Digital Marketing', 'AI Tools'].map(skill => (
                  <span key={skill} className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium border border-white/20">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PRICING SECTION --- */}
      <section id="pricing" className="py-20 bg-gray-50 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Affordable Pricing</h2>
          <p className="text-gray-600 mb-12">Invest in yourself for the price of a dinner out.</p>
          <div className="bg-white rounded-3xl p-10 shadow-2xl border-2 border-yellow-500 transform scale-105">
            <h3 className="text-2xl font-bold">Standard Access</h3>
            <div className="my-6">
              <span className="text-5xl font-black text-blue-900">KSh 1,500</span>
              <span className="text-gray-500"> / month</span>
            </div>
            <ul className="text-left space-y-4 mb-10">
              <li className="flex items-center gap-3"><span className="text-blue-800">●</span> Live Virtual Classes</li>
              <li className="flex items-center gap-3"><span className="text-blue-800">●</span> Class Video Recordings</li>
              <li className="flex items-center gap-3"><span className="text-blue-800">●</span> WhatsApp Support Group</li>

            </ul>
            <a href={registrationLink} className="block w-full bg-blue-800 text-white font-bold py-4 rounded-xl hover:bg-blue-900 transition text-center">
              Get Started Now
            </a>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-20 bg-yellow-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold text-blue-900 mb-6">Don’t Wait for the Future. Build It.</h2>
          <p className="text-xl text-blue-800 mb-10 font-medium">Limited slots available for the May – July 2026 cohort. Registration closes soon!</p>
          <a href={registrationLink} target="_blank" rel="noreferrer" className="inline-block bg-blue-900 text-white text-2xl font-bold px-12 py-5 rounded-2xl shadow-2xl hover:bg-black transition-all transform hover:-translate-y-1">
            Secure My Slot Now
          </a>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-blue-950 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12 mb-12 border-b border-white/10 pb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-yellow-500">Cyrix Digital Solutions</h3>
            <p className="text-blue-200">Empowering professionals with modern digital skills in Kenya and beyond.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-blue-200">
              <li>WhatsApp: 0114998416</li>
              <li>Email: cyrix0915@gmail.com</li>
            </ul>
          </div>
          
        </div>
        <div className="text-center text-blue-400 text-sm">
          &copy; {new Date().getFullYear()} Cyrix Digital Solutions &mdash; All Rights Reserved
        </div>
      </footer>
    </div>
  );
};

export default App;