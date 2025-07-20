import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Overview from './components/Overview';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

const TABS = [
  { name: 'Overview', key: 'overview' },
  { name: 'Experience', key: 'experience' },
  { name: 'Projects', key: 'projects' },
  { name: 'Education', key: 'education' },
  { name: 'Contact', key: 'contact' },
];

function App() {
  // Default theme is dark
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem('theme');
    return stored ? stored : 'dark';
  });
  const [activeTab, setActiveTab] = useState('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mainRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Amber_Sumn_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSendMail = () => {
    window.location.href = 'mailto:ambrsumn@gmail.com';
  };

  const handleTabClick = (key) => {
    setActiveTab(key);
    setMobileMenuOpen(false);
  };

  // Scroll to section handler
  const handleScrollTo = (section) => {
    if (section === 'projects' || section === 'experience') {
      setActiveTab(section === 'projects' ? 'projects' : 'experience');
      setTimeout(() => {
        if (mainRef.current) mainRef.current.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else if (section === 'contact') {
      setActiveTab('contact');
      setTimeout(() => {
        if (mainRef.current) mainRef.current.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const renderTab = () => {
    switch (activeTab) {
      case 'overview':
        return <Overview onScrollTo={handleScrollTo} />;
      case 'projects':
        return <Projects />;
      case 'experience':
        return <Experience theme={theme} />;
      case 'education':
        return <Education />;
      case 'contact':
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div className={
      `min-h-screen transition-colors duration-500 relative overflow-x-hidden font-sans ` +
      (theme === 'dark'
        ? 'bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800'
        : 'bg-gradient-to-br from-blue-50 via-pink-50 to-purple-100')
    }>
      {/* Decorative blurred background shapes (subtle) */}
      <div className={
        `absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl -z-10 ` +
        (theme === 'dark'
          ? 'bg-blue-900 opacity-20'
          : 'bg-blue-300 opacity-30')
      } style={{ filter: 'blur(120px)' }} />
      <div className={
        `absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl -z-10 ` +
        (theme === 'dark'
          ? 'bg-purple-900 opacity-20'
          : 'bg-pink-300 opacity-30')
      } style={{ filter: 'blur(120px)' }} />
      <header className={
        `flex flex-col sm:flex-row items-center justify-between px-6 py-4 shadow-md rounded-b-2xl backdrop-blur-md border-b ` +
        (theme === 'dark'
          ? 'bg-gray-900/90 border-gray-800'
          : 'bg-white/80 border-gray-200')
      }>
        <h1 className={
          `text-3xl font-extrabold tracking-tight mb-2 sm:mb-0 animate-fade-in ` +
          (theme === 'dark' ? 'text-gray-100' : 'text-gray-900')
        }>
          {/* Software Engineer Portfolio */}
        </h1>
        <div className="flex items-center gap-4">
          <button
            onClick={handleThemeToggle}
            className={
              `p-2 rounded-full transition-colors duration-300 focus:outline-none shadow hover:scale-105 border ` +
              (theme === 'dark'
                ? 'bg-gray-800 text-gray-200 border-gray-700'
                : 'bg-gray-200 text-gray-800 border-gray-300')
            }
            aria-label="Toggle dark mode"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <button
            onClick={handleDownloadResume}
            className={
              `px-4 py-2 rounded-md font-semibold shadow transition-colors duration-200 border ` +
              (theme === 'dark'
                ? 'bg-blue-800 text-white hover:bg-blue-700 border-blue-900'
                : 'bg-blue-500 text-white hover:bg-blue-600 border-blue-600')
            }
          >
            Download Resume
          </button>
          <button
            onClick={handleSendMail}
            className={
              `px-4 py-2 rounded-md font-semibold shadow transition-colors duration-200 border ` +
              (theme === 'dark'
                ? 'bg-gray-700 text-white hover:bg-gray-600 border-gray-800'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300 border-gray-300')
            }
          >
            Send Mail
          </button>
        </div>
      </header>
      {/* Mobile nav */}
      <nav className="sm:hidden flex justify-center mt-6 z-20 relative">
        <button
          className={
            `flex items-center gap-2 px-4 py-2 rounded-md font-medium shadow-md border focus:outline-none transition-all duration-300 ` +
            (theme === 'dark'
              ? 'bg-gray-900 text-blue-400 border-blue-500'
              : 'bg-white text-blue-600 border-blue-500')
          }
          onClick={() => setMobileMenuOpen(open => !open)}
          aria-label="Open tab menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
          {TABS.find(t => t.key === activeTab)?.name}
        </button>
        {mobileMenuOpen && (
          <div className={
            `absolute left-1/2 top-14 -translate-x-1/2 w-11/12 max-w-xs bg-white dark:bg-gray-900 rounded-xl shadow-2xl border mt-2 flex flex-col z-30 animate-fade-in-up ` +
            (theme === 'dark' ? 'border-gray-700' : 'border-gray-200')
          }>
            {TABS.map(tab => (
              <button
                key={tab.key}
                onClick={() => handleTabClick(tab.key)}
                className={
                  `w-full text-left px-6 py-3 font-semibold border-b last:border-b-0 transition-all duration-200 ` +
                  (activeTab === tab.key
                    ? (theme === 'dark' ? 'bg-blue-900 text-white' : 'bg-blue-100 text-blue-700')
                    : (theme === 'dark' ? 'text-gray-200 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'))
                }
              >
                {tab.name}
              </button>
            ))}
          </div>
        )}
      </nav>
      {/* Desktop nav */}
      <nav className="hidden sm:flex justify-center mt-6 space-x-4 z-10 relative">
        {TABS.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={
              `px-7 py-3 rounded-xl font-semibold text-lg transition-all duration-300 focus:outline-none shadow-lg border-b-4 ` +
              (activeTab === tab.key
                ? (theme === 'dark'
                  ? 'bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 text-white border-blue-500 scale-105'
                  : 'bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 text-blue-900 border-blue-500 scale-105')
                : (theme === 'dark'
                  ? 'bg-gray-800 text-gray-300 border-transparent hover:text-blue-400 hover:border-blue-500 hover:bg-gray-900'
                  : 'bg-gray-100 text-gray-700 border-transparent hover:text-blue-600 hover:border-blue-500 hover:bg-white'))
            }
            aria-selected={activeTab === tab.key}
            aria-controls={`tab-panel-${tab.key}`}
            role="tab"
            style={{ minWidth: 140 }}
          >
            {tab.name}
          </button>
        ))}
      </nav>
      <main
        ref={mainRef}
        className={
          `w-full mx-auto mt-8 p-6 rounded-2xl shadow-2xl animate-fade-in-up min-h-[350px] backdrop-blur-md z-10 relative border ` +
          (theme === 'dark'
            ? 'bg-gray-900/90 border-gray-800'
            : 'bg-white/80 border-gray-200') +
          ' max-w-5xl 2xl:max-w-6xl xl:max-w-6xl lg:max-w-4xl'
        }
      >
        <section
          id={`tab-panel-${activeTab}`}
          role="tabpanel"
          tabIndex={0}
          className="transition-opacity duration-500 ease-in-out opacity-100"
        >
          {activeTab === 'overview' && <Overview onScrollTo={handleScrollTo} />}
          {activeTab === 'projects' && <Projects />}
          {activeTab === 'experience' && <Experience theme={theme} />}
          {activeTab === 'education' && <Education />}
          {activeTab === 'contact' && <Contact />}
        </section>
      </main>
      <footer className={
        `mt-12 py-4 text-center z-10 relative ` +
        (theme === 'dark' ? 'text-gray-500' : 'text-gray-400')
      }>
        &copy; Amber Suman
      </footer>
    </div>
  );
}

export default App;
