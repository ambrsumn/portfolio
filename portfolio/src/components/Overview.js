import React from 'react';

const techStack = [
    { name: 'Node.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'React.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'JavaScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Java', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Spring Boot', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    { name: 'Angular', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
    { name: 'SQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'MongoDB', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
];

const socialLinks = [
    {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/ambrsumn',
        icon: (
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.594v5.602z" /></svg>
        ),
    },
    {
        name: 'LeetCode',
        url: 'https://leetcode.com/u/czech_pirc/',
        icon: (
            <svg className="w-7 h-7" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <path d="M14.5 34L6 24L24 6L42 24L33.5 34" stroke="#FFA116" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M33.5 34L24 44L14.5 34" stroke="#111" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M24 44V28" stroke="#111" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </g>
            </svg>
        ),
    },
    {
        name: 'GitHub',
        url: 'https://github.com/ambrsumn',
        icon: (
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
        ),
    },
];

const Overview = ({ onScrollTo }) => (
    <div className="flex flex-col items-center text-center gap-8 animate-fade-in-up relative">
        {/* Blurred background accent */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-gray-900/60 blur-2xl opacity-80" />
        {/* Profile Image with animated ring */}
        <div className="relative w-40 h-40 mb-2">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 animate-spin-slow opacity-40" />
            <img src="/amber.png" alt="Amber Sumn" className="w-40 h-40 object-cover rounded-full border-4 border-blue-700 shadow-xl relative z-10 bg-white" />
        </div>
        {/* Social Links */}
        <div className="flex gap-6 justify-center mb-2">
            {socialLinks.map(link => (
                <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center rounded-full bg-gray-900 border-2 border-blue-700 shadow-lg p-2 hover:bg-pink-500 hover:border-pink-400 transition-all duration-300"
                    title={link.name}
                >
                    <span className="text-blue-400 group-hover:text-white transition-colors duration-200">{link.icon}</span>
                </a>
            ))}
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-2 tracking-tight drop-shadow-lg">Amber Sumn</h2>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl font-medium leading-relaxed">
            Full Stack Developer with 1+ years of experience building scalable web applications using <span className="font-semibold text-blue-400">Java</span>, <span className="font-semibold text-green-400">Spring Boot</span>, <span className="font-semibold text-green-300">Node.js</span>, <span className="font-semibold text-gray-200">Express.js</span>, <span className="font-semibold text-blue-300">React.js</span>, <span className="font-semibold text-blue-400">TypeScript</span>, and <span className="font-semibold text-yellow-300">SQL</span>.<br />
            Solved <span className="font-semibold text-pink-400">800+ DSA problems</span> across various coding platforms.<br />
            Proficient in designing RESTful APIs, integrating SQL databases, and deploying secure backend services.<br />
            Skilled at building responsive frontends and strong in System Design.
        </p>
        {/* Tech stack icons */}
        <div className="flex flex-wrap justify-center gap-6 mt-4">
            {techStack.map((tech, idx) => (
                <div key={tech.name} className="group flex flex-col items-center">
                    <div className="w-14 h-14 bg-gray-900 border-2 border-blue-700 rounded-xl shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:border-pink-400 hover:shadow-pink-400/30 animate-fade-in-up" style={{ animationDelay: `${idx * 0.08 + 0.2}s` }}>
                        <img src={tech.img} alt={tech.name} className="w-10 h-10 object-contain" />
                    </div>
                    <span className="mt-2 text-xs text-gray-400 group-hover:text-pink-400 transition-colors duration-200">{tech.name}</span>
                </div>
            ))}
        </div>
        {/* Call to action buttons */}
        <div className="flex gap-4 justify-center mt-8">
            <button
                onClick={() => onScrollTo && onScrollTo('experience')}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-pink-400/40 transition-transform duration-300 text-lg"
            >
                See My Work
            </button>
            <button
                onClick={() => onScrollTo && onScrollTo('contact')}
                className="px-8 py-3 rounded-full bg-gray-900 border border-blue-400 text-blue-400 font-semibold shadow-lg hover:bg-blue-950 hover:text-white transition-colors duration-300 text-lg"
            >
                Contact Me
            </button>
        </div>
        {/* Custom keyframes for slow spin */}
        <style>{`
      @keyframes spin-slow { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
      .animate-spin-slow { animation: spin-slow 8s linear infinite; }
    `}</style>
    </div>
);

export default Overview; 