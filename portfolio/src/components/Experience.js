import React, { useState } from 'react';

const experiences = [
    {
        company: 'Entelika Consulting and IT Services',
        location: 'Mysuru, KA',
        role: 'Software Engineer',
        duration: 'June 2024 – Present',
        logo: '/entelika.png',
        type: 'Full Time',
        timeSpent: '1.1 years',
        desc: [
            'Spearheaded full-stack development of TieOpp, an AI-powered internship platform connecting students, enterprises, and colleges; collaborated in Agile sprints to deliver scalable, user-centric solutions.',
            'Developed and maintained backend APIs using Node.js, Express.js, and MySQL, improving data reliability and reducing sync latency by 30%.',
            'Built responsive, accessible UIs using React, TypeScript, and Tailwind CSS, optimizing frontend performance and improving student engagement metrics.',
            'Added security by implementing robust authentication and authorization mechanisms using JWT and OAuth2.'
        ]
    },
    {
        company: 'Fidelity Investments',
        location: 'Bengaluru, KA',
        role: 'Full Stack Engineer Intern (Winter)',
        duration: 'January 2024 – June 2024',
        logo: '/fidelity.jpg',
        type: 'Internship',
        timeSpent: '5 months',
        desc: [
            'Developed an EDI Inspector prototype using React.js and Express.js, enabling enhanced client-side data validation and improving inspection workflows.',
            'Wrote detailed JUnit test suites that increased test coverage from 27% to 92%, significantly improving code reliability and maintainability.'
        ]
    },
    {
        company: 'Fidelity Investments',
        location: 'Bengaluru, KA',
        role: 'Full Stack Engineer Intern (Summer)',
        duration: 'July 2023 – September 2023',
        logo: '/fidelity.jpg',
        type: 'Internship',
        timeSpent: '2 months',
        desc: [
            'Built an internal interactive dashboard for Fidelity clients using React.js, enabling seamless data visualization and improved decision-making for internal stakeholders.',
            'Implemented a feature to export JSON data to Excel with automatic column name mapping using Spring Boot, streamlining reporting workflows.'
        ]
    }
];

const FILTERS = [
    { label: 'All', value: 'All' },
    { label: 'Internships', value: 'Internship' },
    { label: 'Full Time', value: 'Full Time' },
];

const pointColors = [
    'text-white',
];

const Experience = () => {
    const [filter, setFilter] = useState('All');
    const filtered = filter === 'All' ? experiences : experiences.filter(e => e.type === filter);

    return (
        <div className="relative py-12">
            {/* Filter Buttons */}
            <div className="flex gap-4 mb-10 justify-end pr-4">
                {FILTERS.map(f => (
                    <button
                        key={f.value}
                        onClick={() => setFilter(f.value)}
                        className={`px-4 py-1 rounded-full border text-sm font-medium transition-all duration-200 focus:outline-none
              ${filter === f.value
                                ? 'bg-blue-700 text-white border-blue-700 shadow-lg'
                                : 'bg-gray-800 text-gray-300 border-gray-700 hover:bg-blue-900 hover:text-white'}`}
                    >
                        {f.label}
                    </button>
                ))}
            </div>
            {/* Subtle animated background gradient */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-gray-900/60 blur-2xl opacity-80" />
            {/* Animated vertical timeline line */}
            <div className="absolute left-10 top-8 bottom-8 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-800 rounded-full animate-grow-timeline" style={{ minHeight: 'calc(100% - 4rem)' }} />
            <div className="space-y-16 ml-24">
                {filtered.map((exp, idx) => (
                    <div key={idx} className="relative flex items-start group animate-fade-in-up" style={{ animationDelay: `${idx * 0.15 + 0.1}s` }}>
                        {/* Animated glowing logo node */}
                        <div className="absolute -left-16 flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-700 via-purple-700 to-blue-900 shadow-2xl border-4 border-gray-900 flex items-center justify-center mb-2 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-blue-400/60 animate-pulse-slow">
                                <img src={exp.logo} alt={exp.company + ' logo'} className="w-10 h-10 object-contain rounded-full bg-white p-1 border border-gray-700 shadow" />
                            </div>
                            {idx !== filtered.length - 1 && <span className="w-1 h-16 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-800 opacity-60" />}
                        </div>
                        {/* Glassmorphism card with fade/slide-in */}
                        <div className="bg-gray-900/80 border border-blue-900 rounded-2xl shadow-2xl p-8 w-full backdrop-blur-md transition-all duration-300 group-hover:border-blue-400 group-hover:shadow-blue-400/30 animate-fade-in-up" style={{ animationDelay: `${idx * 0.15 + 0.2}s` }}>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mb-2">
                                <h3 className="text-xl font-bold text-blue-200 flex items-center">{exp.company}</h3>
                                <span className="text-xs text-gray-400">{exp.location}</span>
                                <span className="ml-auto px-3 py-1 bg-blue-800/60 text-blue-200 text-xs rounded-full font-semibold tracking-wide border border-blue-700">{exp.duration}</span>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mb-3">
                                <span className="text-blue-400 font-medium text-base">{exp.role}</span>
                                <span className="ml-2 px-2 py-0.5 bg-gray-800 text-xs text-gray-300 rounded-full border border-gray-700">{exp.type}</span>
                                <span className="ml-2 px-2 py-0.5 bg-blue-900 text-xs text-blue-200 rounded-full border border-blue-800">{exp.timeSpent}</span>
                            </div>
                            <ul className="list-disc list-inside text-base space-y-1 pl-2">
                                {exp.desc.map((item, i) => (
                                    <li key={i} className={`transition-all duration-300 group-hover:text-blue-200 font-medium ${pointColors[i % pointColors.length]}`}>{item}</li>
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
        @keyframes pulse-slow { 0%, 100% { box-shadow: 0 0 0 0 rgba(59,130,246,0.4); } 50% { box-shadow: 0 0 24px 8px rgba(139,92,246,0.25); } }
        .animate-pulse-slow { animation: pulse-slow 2.5s infinite; }
      `}</style>
        </div>
    );
};

export default Experience; 