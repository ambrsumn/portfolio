import React from 'react';

const education = [
    {
        institution: 'The National Institute of Engineering',
        location: 'Mysore, Karnataka',
        degree: 'Bachelor of Engineering - Information Science and Engineering',
        score: 'CGPA: 8.00',
        year: '2020 - 2024',
        logo: '/nie.svg',
    },
    {
        institution: 'Open Minds A Birla School',
        location: 'Patna, Bihar',
        degree: 'Class 12 (CBSE Board)',
        score: 'Percentage: 83.4',
        year: '2019',
        logo: '/openminds.jpg',
    },
    {
        institution: 'Open Minds A Birla School',
        location: 'Patna, Bihar',
        degree: 'Class 10 (CBSE Board)',
        score: 'CGPA: 10.00',
        year: '2017',
        logo: '/openminds.jpg',
    },
];

const Education = () => (
    <div className="relative py-12">
        {/* Subtle animated background gradient */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-gray-900/60 blur-2xl opacity-80" />
        {/* Animated vertical timeline line */}
        <div className="absolute left-10 top-8 bottom-8 w-1 bg-gradient-to-b from-blue-700 via-purple-700 to-blue-700 rounded-full animate-grow-timeline" style={{ minHeight: 'calc(100% - 4rem)' }} />
        <div className="space-y-16 ml-24">
            {education.map((edu, idx) => (
                <div key={idx} className="relative flex items-start group animate-fade-in-up" style={{ animationDelay: `${idx * 0.15 + 0.1}s` }}>
                    {/* Animated glowing logo node */}
                    <div className="absolute -left-16 flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-700 via-purple-700 to-blue-900 shadow-2xl border-4 border-gray-900 flex items-center justify-center mb-2 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-blue-400/60 animate-pulse-slow">
                            <img src={edu.logo} alt={edu.institution + ' logo'} className="w-10 h-10 object-contain rounded-full bg-white p-1 border border-gray-700 shadow" />
                        </div>
                        {idx !== education.length - 1 && <span className="w-1 h-16 bg-gradient-to-b from-blue-700 via-purple-700 to-blue-700 opacity-60" />}
                    </div>
                    {/* Glassmorphism card with fade/slide-in */}
                    <div className="bg-gray-900/80 border border-blue-900 rounded-2xl shadow-2xl p-8 w-full backdrop-blur-md transition-all duration-300 group-hover:border-blue-400 group-hover:shadow-blue-400/30 animate-fade-in-up" style={{ animationDelay: `${idx * 0.15 + 0.2}s` }}>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mb-2">
                            <h3 className="text-xl font-bold text-blue-200 flex items-center">{edu.institution}</h3>
                            <span className="text-xs text-gray-400">{edu.location}</span>
                            <span className="ml-auto px-3 py-1 bg-blue-800/60 text-blue-200 text-xs rounded-full font-semibold tracking-wide border border-blue-700">{edu.year}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mb-3">
                            <span className="text-blue-400 font-medium text-base">{edu.degree}</span>
                            <span className="ml-2 px-2 py-0.5 bg-gray-800 text-xs text-gray-300 rounded-full border border-gray-700">{edu.score}</span>
                        </div>
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

export default Education; 