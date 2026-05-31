import React, { useState } from "react";

const experiences = [
  {
    company: "Tracxn Technologies",
    location: "Bengaluru, KA",
    role: "Software Engineer",
    duration: "December 2025 – Present",
    logo: "/tracxn.png",
    type: "Full Time",
    timeSpent: "5 months",
    desc: [
      "Designed and built Node.js-based orchestrator systems for Tracxn's core CrawlInfra platform, managing end-to-end crawler lifecycle including workflow execution, dependency resolution, retry strategies, failure recovery, and operational monitoring across distributed backend services.",
      "Developed and onboarded legal case crawlers from scratch — conducted domain research and rate-limit analysis, designed crawl strategies, implemented retry and fault-tolerance mechanisms, and integrated crawlers into the orchestration pipeline for reliable, large-scale data acquisition across diverse legal sources.",
      "Engineered a Node.js on-demand EC2 consumer to execute a 6-million-file data backfill — parallelized gzip decompression, staged and grouped records into an on-disk SQLite store, parsed data into the target schema, and published processed payloads to a downstream Kafka parsing topic owned by a partner team, enabling large-scale historical data backfill without disrupting live systems.",
      "Architected and implemented an automated financial data acquisition pipeline to handle 250+ jobs per day, coordinating across multiple engineering teams to orchestrate crawler execution, data processing workflows, and operational visibility for Tracxn's financial data systems.",
      "Built Kafka-driven asynchronous workflows enabling reliable, high-throughput communication between distributed crawl services, decoupling execution stages and improving pipeline stability for critical data operations.",
      "Provisioned and managed AWS infrastructure — including S3, EC2, IAM roles, autoscaling, and deployment pipelines — to support scalable backend workflows and large-scale data processing for crawl infrastructure systems.",
      "Developed RESTful APIs for internal transaction and workflow management modules, enabling cross-team integrations and standardizing access to crawl execution and monitoring capabilities.",
    ],
  },
  {
    company: "Amazon",
    location: "Bengaluru, KA",
    role: "SDE I",
    duration: "May 2025 – December 2025",
    logo: "/amazon.png",
    type: "Full Time",
    timeSpent: "8 months",
    desc: [
      "Engineered backend APIs for the Refill Reminder system in Amazon Pharmacy using Java and Spring Boot, enabling automated email/SMS/IVR notifications that increased prescription refills by 28%.",
      "Spearheaded modernization of a legacy prescription verification service by migrating the codebase to Java JDK 17, eliminating a year-long critical tech debt.",
      "Co-developed Code Guardian, an AWS-based static analysis and hybrid CI/CD platform integrated across five major business pipelines, reducing team PE risk by 50%.",
    ],
  },
];

const FILTERS = [
  { label: "All", value: "All" },
  { label: "Full Time", value: "Full Time" },
];

const pointColors = ["text-white"];

const Experience = () => {
  const [filter, setFilter] = useState("All");
  const filtered =
    filter === "All"
      ? experiences
      : experiences.filter((e) => e.type === filter);

  return (
    <div className="relative py-12">
      {/* Filter Buttons */}
      <div className="flex gap-4 mb-10 justify-end pr-4">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={`px-4 py-1 rounded-full border text-sm font-medium transition-all duration-200 focus:outline-none
              ${
                filter === f.value
                  ? "bg-blue-700 text-white border-blue-700 shadow-lg"
                  : "bg-gray-800 text-gray-300 border-gray-700 hover:bg-blue-900 hover:text-white"
              }`}
          >
            {f.label}
          </button>
        ))}
      </div>
      {/* Subtle animated background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-gray-900/60 blur-2xl opacity-80" />
      {/* Animated vertical timeline line */}
      <div
        className="absolute left-10 top-8 bottom-8 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-800 rounded-full animate-grow-timeline"
        style={{ minHeight: "calc(100% - 4rem)" }}
      />
      <div className="space-y-16 ml-24">
        {filtered.map((exp, idx) => (
          <div
            key={idx}
            className="relative flex items-start group animate-fade-in-up"
            style={{ animationDelay: `${idx * 0.15 + 0.1}s` }}
          >
            {/* Animated glowing logo node */}
            <div className="absolute -left-16 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-700 via-purple-700 to-blue-900 shadow-2xl border-4 border-gray-900 flex items-center justify-center mb-2 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-blue-400/60 animate-pulse-slow">
                <img
                  src={exp.logo}
                  alt={exp.company + " logo"}
                  className="w-10 h-10 object-contain rounded-full bg-white p-1 border border-gray-700 shadow"
                />
              </div>
              {idx !== filtered.length - 1 && (
                <span className="w-1 h-16 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-800 opacity-60" />
              )}
            </div>
            {/* Glassmorphism card with fade/slide-in */}
            <div
              className="bg-gray-900/80 border border-blue-900 rounded-2xl shadow-2xl p-8 w-full backdrop-blur-md transition-all duration-300 group-hover:border-blue-400 group-hover:shadow-blue-400/30 animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.15 + 0.2}s` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mb-2">
                <h3 className="text-xl font-bold text-blue-200 flex items-center">
                  {exp.company}
                </h3>
                <span className="text-xs text-gray-400">{exp.location}</span>
                <span className="ml-auto px-3 py-1 bg-blue-800/60 text-blue-200 text-xs rounded-full font-semibold tracking-wide border border-blue-700">
                  {exp.duration}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mb-3">
                <span className="text-blue-400 font-medium text-base">
                  {exp.role}
                </span>
                <span className="ml-2 px-2 py-0.5 bg-gray-800 text-xs text-gray-300 rounded-full border border-gray-700">
                  {exp.type}
                </span>
                <span className="ml-2 px-2 py-0.5 bg-blue-900 text-xs text-blue-200 rounded-full border border-blue-800">
                  {exp.timeSpent}
                </span>
              </div>
              <ul className="list-disc list-inside text-base space-y-1 pl-2">
                {exp.desc.map((item, i) => (
                  <li
                    key={i}
                    className={`transition-all duration-300 group-hover:text-blue-200 font-medium ${
                      pointColors[i % pointColors.length]
                    }`}
                  >
                    {item}
                  </li>
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
