import React, { useState } from 'react';

const techIcons = {
    'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'Express.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    'Spring Boot': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
    'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'React.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
    'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    'Socket.io': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg',
    'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', // fallback, not official
    'ExcelJS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/file-type-excel.svg', // fallback, not official
    'Excel': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/file-type-excel.svg', // fallback, not official
};

const projects = [
    {
        name: 'InfraTrack',
        tech: [
            'Node.js', 'Express.js', 'Spring Boot', 'React', 'TypeScript', 'MySQL', 'Git'
        ],
        // Construction/blueprint icon
        logo: 'https://cdn.jsdelivr.net/gh/feathericons/feather/icons/briefcase.svg',
        live: 'https://infratrack-frontend-v2.vercel.app/Store',
        github: [
            { label: 'Express.js + React', url: 'https://github.com/ambrsumn/InfraTrack-nodejs' },
            { label: 'Springboot + React', url: 'https://github.com/ambrsumn/Infra-Track' }
        ],
        desc: [
            'Designed and developed InfraTrack, a full-stack project management platform for civil engineering teams to handle order placement, negotiation, and delivery tracking.',
            'Implemented RESTful APIs, JWT authentication, and role-based access with Spring Boot, ensuring secure workflows across multiple user roles.',
            'Adopted by 20+ engineers and staff at EHDJV, improving process visibility and reducing manual coordination through real-time status updates.',
            'Integrated real-time notifications and activity logs for seamless team collaboration.'
        ]
    },
    {
        name: 'ConvoHub',
        tech: [
            'React.js', 'Express.js', 'Socket.io', 'MySQL', 'Node.js', 'Git'
        ],
        // Chat/message icon
        logo: 'https://cdn.jsdelivr.net/gh/feathericons/feather/icons/message-circle.svg',
        github: [
            { label: 'Frontend', url: 'https://github.com/ambrsumn/ConvoHub-frontend' },
            { label: 'Backend', url: 'https://github.com/ambrsumn/ConvoHub-backend' }
        ],
        desc: [
            'A full-stack chat application with real-time personal messaging enabled through Socket.io, providing a seamless and responsive user experience.',
            'Implemented a secure, custom email-based authentication system (no third-party services), with privacy-focused features such as invite-only group additions and controlled one-on-one communication.',
            'Supports group and private chats, with message history and notifications.',
            'Built with a modular architecture for easy feature expansion and maintenance.'
        ]
    },
    {
        name: 'SQLBuilder',
        tech: [
            'TypeScript', 'Excel', 'Node.js',
        ],
        // Database/SQL icon
        logo: 'https://cdn.jsdelivr.net/gh/feathericons/feather/icons/database.svg',
        github: [
            { label: 'GitHub', url: 'https://github.com/ambrsumn/SQLBuilder' }
        ],
        desc: [
            'Created a tool that generates SQL queries from uploaded Excel data, streamlining database population and migration tasks.',
            'Supports multiple SQL dialects and provides instant preview and download of generated queries.',
            'Features a user-friendly interface for mapping Excel columns to database fields.',
            'Ideal for developers and DBAs looking to automate repetitive SQL writing from spreadsheet data.'
        ]
    }
];

const linkIcons = {
    live: (
        <svg className="inline w-4 h-4 ml-1 mb-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 3h7v7m0-7L10 14m-7 7h7v-7" /></svg>
    ),
    github: (
        <svg className="inline w-4 h-4 ml-1 mb-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
    )
};

const Projects = () => {
    const [openTech, setOpenTech] = useState(Array(projects.length).fill(false));

    const handleToggleTech = idx => {
        setOpenTech(prev => prev.map((open, i) => (i === idx ? !open : open)));
    };

    return (
        <div className="relative py-12">
            {/* Subtle animated background gradient */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-gray-900/60 blur-2xl opacity-80" />
            {/* Animated vertical timeline line */}
            <div className="absolute left-10 top-8 bottom-8 w-1 bg-gradient-to-b from-purple-700 via-blue-500 to-blue-700 rounded-full animate-grow-timeline" style={{ minHeight: 'calc(100% - 4rem)' }} />
            <div className="space-y-16 ml-24">
                {projects.map((project, idx) => (
                    <div key={idx} className="relative flex items-start group animate-fade-in-up" style={{ animationDelay: `${idx * 0.15 + 0.1}s` }}>
                        {/* Animated glowing logo node */}
                        <div className="absolute -left-16 flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-700 via-blue-700 to-blue-900 shadow-2xl border-4 border-gray-900 flex items-center justify-center mb-2 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-pink-400/60 animate-pulse-slow">
                                <img src={project.logo} alt={project.name + ' logo'} className="w-10 h-10 object-contain rounded-full bg-white p-1 border border-gray-700 shadow" />
                            </div>
                            {idx !== projects.length - 1 && <span className="w-1 h-16 bg-gradient-to-b from-purple-700 via-blue-500 to-blue-700 opacity-60" />}
                        </div>
                        {/* Glassmorphism card with fade/slide-in */}
                        <div className="bg-gray-900/80 border border-purple-900 rounded-2xl shadow-2xl p-8 w-full backdrop-blur-md transition-all duration-300 group-hover:border-pink-400 group-hover:shadow-pink-400/30 animate-fade-in-up" style={{ animationDelay: `${idx * 0.15 + 0.2}s` }}>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mb-2">
                                <h3 className="text-xl font-bold text-purple-200 flex items-center">{project.name}</h3>
                                <button
                                    onClick={() => handleToggleTech(idx)}
                                    className={`ml-2 px-3 py-1 text-xs rounded-full border font-semibold transition-all duration-200 focus:outline-none ${openTech[idx] ? 'bg-pink-500 text-white border-pink-600' : 'bg-gray-800 text-blue-200 border-blue-700 hover:bg-blue-900 hover:text-white'}`}
                                >
                                    {openTech[idx] ? 'Hide Tech Stack' : 'View Tech Stack'}
                                </button>
                            </div>
                            {/* Tech stack animated dropdown as icons */}
                            <div className={`overflow-hidden transition-all duration-500 ${openTech[idx] ? 'max-h-40 opacity-100 mt-2 mb-2' : 'max-h-0 opacity-0'}`}>
                                <div className="flex flex-wrap gap-4 justify-start">
                                    {project.tech.map(tech => (
                                        <div key={tech} className="flex flex-col items-center animate-fade-in-up">
                                            <img
                                                src={techIcons[tech] || 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/code/code-original.svg'}
                                                alt={tech}
                                                className="w-9 h-9 rounded shadow border border-gray-700 bg-white p-1 mb-1"
                                                title={tech}
                                            />
                                            <span className="text-xs text-gray-400 mt-1">{tech}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Links */}
                            <div className="flex flex-wrap gap-4 mb-3 mt-2">
                                {project.live && (
                                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue-700 text-white rounded-full text-xs font-semibold border border-blue-800 hover:bg-blue-800 transition-colors duration-200">
                                        Live {linkIcons.live}
                                    </a>
                                )}
                                {project.github && project.github.map(link => (
                                    <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-gray-800 text-blue-300 rounded-full text-xs font-semibold border border-blue-700 hover:bg-blue-900 transition-colors duration-200">
                                        {link.label} {linkIcons.github}
                                    </a>
                                ))}
                            </div>
                            <ul className="list-disc list-inside text-gray-200 text-base space-y-1 pl-2">
                                {project.desc.map((item, i) => (
                                    <li key={i} className="transition-all duration-300 group-hover:text-pink-200">{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
            {/* Custom keyframes for grow-timeline and pulse-slow */}
            <style>{`
        @keyframes grow-timeline { from { height: 0; } to { height: 100%; } }
        .animate-grow-timeline { animation: grow-timeline 1.2s cubic-bezier(0.4,0,0.2,1) both; }
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-up { animation: fade-in-up 0.8s cubic-bezier(0.4,0,0.2,1) both; }
        @keyframes pulse-slow { 0%, 100% { box-shadow: 0 0 0 0 rgba(168,85,247,0.4); } 50% { box-shadow: 0 0 24px 8px rgba(236,72,153,0.25); } }
        .animate-pulse-slow { animation: pulse-slow 2.5s infinite; }
      `}</style>
        </div>
    );
};

export default Projects; 