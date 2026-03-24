import { useState } from "react";
import {
  FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaNodeJs, FaPython,
} from "react-icons/fa6";
import { RiTailwindCssFill, RiJavascriptFill } from "react-icons/ri";
import { SiTypescript, SiNextdotjs, SiRedux, SiFigma, SiMongodb, SiPostgresql } from "react-icons/si";
import { SiZulip } from "react-icons/si";
const categories = [
  {
    label: "Frontend",
    skills: [
      { name: "React",      icon: FaReact,           color: "#61DAFB", level: 95, desc: "Component-based UI development" },
      { name: "JavaScript", icon: RiJavascriptFill,  color: "#F7DF1E", level: 92, desc: "Core language for the web" },
      { name: "TypeScript", icon: SiTypescript,      color: "#3178C6", level: 85, desc: "Typed superset of JavaScript" },
      { name: "Next.js",    icon: SiNextdotjs,       color: "#ffffff", level: 80, desc: "React framework for production" },
      { name: "Tailwind",   icon: RiTailwindCssFill, color: "#38BDF8", level: 90, desc: "Utility-first CSS framework" },
      { name: "HTML5",      icon: FaHtml5,           color: "#E34F26", level: 98, desc: "Markup language of the web" },
      { name: "CSS3",       icon: FaCss3Alt,         color: "#1572B6", level: 90, desc: "Styling and animations" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js",    icon: FaNodeJs,     color: "#68A063", level: 75, desc: "JavaScript runtime for servers" },
      { name: "Python",     icon: FaPython,     color: "#3776AB", level: 65, desc: "Versatile scripting language" },
      { name: "MongoDB",    icon: SiMongodb,    color: "#47A248", level: 70, desc: "NoSQL document database" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791", level: 65, desc: "Relational database system" },
    ],
  },
  {
    label: "Tools",
    skills: [
            { name: "Zustand",  icon: SiZulip,  color: "#cb8300", level: 100, desc: "State management library" },
      { name: "Redux",  icon: SiRedux,  color: "#764ABC", level: 80, desc: "State management library" },
      { name: "Git",    icon: FaGitAlt, color: "#F05032", level: 88, desc: "Version control system" },
      { name: "GitHub", icon: FaGithub, color: "#e2e8f0", level: 90, desc: "Code hosting platform" },
      { name: "Figma",  icon: SiFigma,  color: "#F24E1E", level: 72, desc: "UI/UX design tool" },
    ],
  },
];

const FlipCard = ({ skill }) => (
  <div className="skill-flip-card" style={{ perspective: "1000px" }}>
    <div className="skill-flip-inner">
      {/* Front */}
      <div className="skill-flip-front glass rounded-2xl flex flex-col items-center justify-center gap-3 p-6"
        style={{ border: `1px solid ${skill.color}25` }}>
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center"
          style={{
            background: `${skill.color}15`,
            boxShadow: `0 0 30px ${skill.color}30`,
            border: `1px solid ${skill.color}30`,
          }}>
          <skill.icon style={{ color: skill.color, width: 32, height: 32 }} />
        </div>
        <span className="font-semibold text-foreground">{skill.name}</span>
        <div className="w-full h-1.5 rounded-full overflow-hidden bg-surface">
          <div className="h-full rounded-full"
            style={{
              width: `${skill.level}%`,
              background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})`,
              boxShadow: `0 0 8px ${skill.color}60`,
            }} />
        </div>
        <span className="text-xs text-muted-foreground">{skill.level}% proficiency</span>
      </div>

      {/* Back */}
      <div className="skill-flip-back glass rounded-2xl flex flex-col items-center justify-center gap-4 p-6"
        style={{
          border: `1px solid ${skill.color}50`,
          background: `linear-gradient(135deg, ${skill.color}15, ${skill.color}05)`,
        }}>
        <skill.icon style={{ color: skill.color, width: 40, height: 40 }} />
        <h3 className="font-bold text-lg" style={{ color: skill.color }}>{skill.name}</h3>
        <p className="text-sm text-muted-foreground text-center leading-relaxed">{skill.desc}</p>
        {/* Circular progress */}
        <svg width="60" height="60" viewBox="0 0 60 60">
          <circle cx="30" cy="30" r="24" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="4" />
          <circle cx="30" cy="30" r="24" fill="none" stroke={skill.color} strokeWidth="4"
            strokeDasharray={`${2 * Math.PI * 24}`}
            strokeDashoffset={`${2 * Math.PI * 24 * (1 - skill.level / 100)}`}
            strokeLinecap="round"
            transform="rotate(-90 30 30)"
            style={{ filter: `drop-shadow(0 0 4px ${skill.color})` }} />
          <text x="30" y="35" textAnchor="middle" fill={skill.color} fontSize="12" fontWeight="bold">
            {skill.level}%
          </text>
        </svg>
      </div>
    </div>
  </div>
);

const Skills = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span data-aos="fade-down"
            className="text-secondary-foreground text-sm font-medium tracking-widest uppercase">
            Tech Stack
          </span>
          <h2 data-aos="fade-down" data-aos-delay="100"
            className="text-4xl md:text-5xl font-bold mt-4 text-secondary-foreground">
            My{" "}
            <span className="font-serif italic font-normal text-primary glow-text">Skills</span>
          </h2>
          <p data-aos="fade-down" data-aos-delay="200" className="text-muted-foreground mt-4">
            Hover over a card to see more details.
          </p>
        </div>

        {/* Tabs */}
        <div data-aos="fade-up" className="flex justify-center gap-2 mb-12">
          {categories.map((cat, i) => (
            <button key={i} onClick={() => setActive(i)}
              className="px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300"
              style={{
                background: active === i ? "var(--color-primary)" : "transparent",
                color: active === i ? "#fff" : "var(--color-muted-foreground)",
                border: `1px solid ${active === i ? "var(--color-primary)" : "var(--color-border)"}`,
              }}>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div data-aos="fade-up" data-aos-delay="100"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {categories[active].skills.map((skill, i) => (
            <FlipCard key={`${active}-${i}`} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
