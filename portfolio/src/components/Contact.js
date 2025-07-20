import React from 'react';

const contactDetails = [
    {
        label: 'Phone',
        value: '+91-7321893703',
        icon: (
            <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm12-12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zm0 12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
        ),
        href: 'tel:+917321893703',
    },
    {
        label: 'Email',
        value: 'ambrsumn@gmail.com',
        icon: (
            <svg className="w-7 h-7 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8 0a4 4 0 10-8 0 4 4 0 008 0zm-8 0V8a4 4 0 018 0v4" /></svg>
        ),
        href: 'mailto:ambrsumn@gmail.com',
    },
    {
        label: 'LinkedIn',
        value: 'linkedin/ambrsumn',
        icon: (
            <svg className="w-7 h-7 text-blue-700" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.594v5.602z" /></svg>
        ),
        href: 'https://linkedin.com/in/ambrsumn',
    },
];

const Contact = () => (
    <div className="flex flex-col items-center animate-fade-in-up">
        <div className="bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-2xl p-8 w-full max-w-lg backdrop-blur-md">
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-8 text-center">Contact Me</h3>
            <div className="flex flex-col gap-8">
                {contactDetails.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        target={item.label === 'LinkedIn' ? '_blank' : undefined}
                        rel={item.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-5 p-4 rounded-xl bg-gray-100 dark:bg-gray-900 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-200 shadow group"
                    >
                        <span>{item.icon}</span>
                        <span className="text-lg font-semibold text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                            {item.value}
                        </span>
                    </a>
                ))}
            </div>
        </div>
    </div>
);

export default Contact; 