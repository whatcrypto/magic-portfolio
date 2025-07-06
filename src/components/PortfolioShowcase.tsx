import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { about } from "@/resources/content"; // Use your content.js data
// Import your design system components as needed

const TABS = [
  { label: "Projects", key: "projects" },
  { label: "Certificates", key: "certs" },
  { label: "Tech Stack", key: "tech" },
];

export const PortfolioShowcase: React.FC = () => {
  const [tab, setTab] = useState("projects");

  // Example data (replace with your real data)
  const projects = about.work.experiences.map((exp) => ({
    title: exp.company,
    description: exp.role,
    image: exp.images?.[0]?.src,
    link:
      exp.company === "SweepChain" ? "https://sui-drab.vercel.app" : undefined,
  }));

  const certs = [
    {
      title: "Certified Blockchain Developer",
      issuer: "Sui Foundation",
      year: "2024",
    },
    // Add more as needed
  ];

  const techStack = [
    { name: "TypeScript", icon: "/typescript.png" },
    { name: "React", icon: "/reactjs.svg" },
    { name: "Node.js", icon: "/nodejs.svg" },
    { name: "Docker", icon: "/docker.png" },
    { name: "MongoDB", icon: "/mongodb.png" },
    { name: "PostgreSQL", icon: "/postgresql.png" },
    // ...add more from your stack
  ];

  // Animation variants
  const tabVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <section
      className="w-full px-[5%] md:px-[10%] mt-12 sm:mt-0 overflow-hidden"
      id="Portfolio"
    >
      {/* Gradient Headline */}
      <div className="text-center pb-10">
        <h2 className="inline-block text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          Portfolio Showcase
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Explore my journey through projects, certifications, and technical
          expertise. Each section represents a milestone in my continuous
          learning path.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-8">
        {TABS.map((t) => (
          <button
            key={t.key}
            className={`px-4 py-2 rounded-full font-semibold transition ${
              tab === t.key
                ? "bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
            onClick={() => setTab(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {tab === "projects" && (
          <motion.div
            key="projects"
            variants={tabVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((proj, idx) => (
              <motion.a
                key={proj.title}
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 8px 32px #a855f7aa" }}
                className="group p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-700/50 transition-all flex flex-col items-center gap-3 cursor-pointer shadow-lg"
              >
                {proj.image && (
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="h-20 w-20 object-cover rounded-full mb-2"
                  />
                )}
                <span className="text-slate-300 font-semibold text-lg group-hover:text-white">
                  {proj.title}
                </span>
                <span className="text-slate-400 text-sm">
                  {proj.description}
                </span>
              </motion.a>
            ))}
          </motion.div>
        )}

        {tab === "certs" && (
          <motion.div
            key="certs"
            variants={tabVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {certs.map((cert, idx) => (
              <motion.div
                key={cert.title}
                whileHover={{ scale: 1.05, boxShadow: "0 8px 32px #6366f1aa" }}
                className="group p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-700/50 transition-all flex flex-col items-center gap-3 cursor-pointer shadow-lg"
              >
                <span className="text-slate-300 font-semibold text-lg group-hover:text-white">
                  {cert.title}
                </span>
                <span className="text-slate-400 text-sm">{cert.issuer}</span>
                <span className="text-slate-400 text-xs">{cert.year}</span>
              </motion.div>
            ))}
          </motion.div>
        )}

        {tab === "tech" && (
          <motion.div
            key="tech"
            variants={tabVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5"
          >
            {techStack.map((tech) => (
              <motion.div
                key={tech.name}
                whileHover={{ scale: 1.08, boxShadow: "0 8px 32px #6366f1aa" }}
                className="group p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-700/50 transition-all flex flex-col items-center gap-3 cursor-pointer shadow-lg"
              >
                <img
                  src={tech.icon}
                  alt={`${tech.name} icon`}
                  className="h-16 w-16 md:h-20 md:w-20"
                />
                <span className="text-slate-300 font-semibold text-sm md:text-base group-hover:text-white">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
