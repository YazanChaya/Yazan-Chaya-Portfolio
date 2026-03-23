import { useMemo } from "react";
import {
  FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaNodeJs, FaPython,
} from "react-icons/fa6";
import { RiTailwindCssFill, RiJavascriptFill } from "react-icons/ri";
import { SiTypescript, SiNextdotjs, SiRedux, SiFigma } from "react-icons/si";

const skillsData = [
  { icon: FaReact,           label: "React",      color: "#61DAFB" },
  { icon: RiJavascriptFill,  label: "JavaScript", color: "#F7DF1E" },
  { icon: SiTypescript,      label: "TypeScript", color: "#3178C6" },
  { icon: FaHtml5,           label: "HTML5",      color: "#E34F26" },
  { icon: FaCss3Alt,         label: "CSS3",       color: "#1572B6" },
  { icon: RiTailwindCssFill, label: "Tailwind",   color: "#38BDF8" },
  { icon: SiNextdotjs,       label: "Next.js",    color: "#ffffff" },
  { icon: SiRedux,           label: "Redux",      color: "#764ABC" },
  { icon: FaNodeJs,          label: "Node.js",    color: "#68A063" },
  { icon: FaPython,          label: "Python",     color: "#3776AB" },
  { icon: FaGitAlt,          label: "Git",        color: "#F05032" },
  { icon: FaGithub,          label: "GitHub",     color: "#e2e8f0" },
  { icon: SiFigma,           label: "Figma",      color: "#F24E1E" },
];

const R = 200; // sphere radius

const Skills = () => {
  const skills = useMemo(() => {
    const phi = (1 + Math.sqrt(5)) / 2;
    return skillsData.map((skill, i) => {
      const t = i / skillsData.length;
      const inc = Math.acos(1 - 2 * t);
      const az  = Math.PI * 2 * phi * i;
      return {
        ...skill,
        x: R * Math.sin(inc) * Math.cos(az),
        y: R * Math.sin(inc) * Math.sin(az),
        z: R * Math.cos(inc),
      };
    });
  }, []);

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* bg glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-secondary-foreground text-sm font-medium tracking-widest uppercase">Tech Stack</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            My <span className="font-serif italic font-normal text-primary glow-text">Skills</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm">
            Hover over the icons to explore the technologies I work with
          </p>
        </div>

        {/* Scene */}
        <div className="relative mx-auto flex items-center justify-center" style={{ height: "600px", maxWidth: "900px" }}>

          {/* ── Orbital rings (pure CSS, no preserve-3d needed) ── */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {[
              { w: R*2+60,  h: R*2+60,  rx: 72, rz: 0,   opacity: 0.35, dur: "3s"  },
              { w: R*2+100, h: R*2+100, rx: 55, rz: 40,  opacity: 0.25, dur: "4s"  },
              { w: R*2+140, h: R*2+140, rx: 20, rz: -20, opacity: 0.18, dur: "5s"  },
              { w: R*2+180, h: R*2+180, rx: 80, rz: 60,  opacity: 0.12, dur: "6s"  },
            ].map((ring, i) => (
              <div
                key={i}
                className="absolute rounded-full"
                style={{
                  width:  ring.w,
                  height: ring.h,
                  border: `1px solid rgba(32,178,166,${ring.opacity})`,
                  transform: `rotateX(${ring.rx}deg) rotateZ(${ring.rz}deg)`,
                  boxShadow: `0 0 12px rgba(32,178,166,${ring.opacity * 0.5})`,
                  animation: `ring-pulse ${ring.dur} ease-in-out infinite`,
                  animationDelay: `${i * 0.4}s`,
                }}
              />
            ))}
          </div>

          {/* ── 3D rotating sphere ── */}
          <div
            style={{
              position: "absolute",
              width:  R * 2,
              height: R * 2,
              transformStyle: "preserve-3d",
              animation: "sphere-rotate 35s linear infinite",
            }}
          >
            {skills.map((skill, i) => {
              const depth   = (skill.z + R) / (R * 2);          // 0 = back, 1 = front
              const scale   = 0.65 + depth * 0.55;
              const opacity = 0.25 + depth * 0.75;
              const blur    = (1 - depth) * 2.5;

              return (
                <div
                  key={i}
                  className="absolute group"
                  style={{
                    left: "50%",
                    top:  "50%",
                    transform: `translate3d(calc(-50% + ${skill.x}px), calc(-50% + ${skill.y}px), ${skill.z}px)`,
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* counter-spin keeps icon upright */}
                  <div style={{ animation: "sphere-rotate 35s linear infinite reverse" }}>
                    <div style={{ scale, opacity, filter: `blur(${blur}px)`, transition: "all 0.3s" }}
                      className="flex flex-col items-center gap-1.5">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center relative overflow-hidden
                          hover:scale-125 transition-all duration-300 cursor-default"
                        style={{
                          background: "linear-gradient(135deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02))",
                          border: `1px solid rgba(255,255,255,0.1)`,
                          backdropFilter: "blur(12px)",
                          boxShadow: `0 ${6*depth}px ${18*depth}px rgba(0,0,0,0.4), 0 0 ${20*depth}px ${skill.color}25, inset 0 1px 0 rgba(255,255,255,0.12)`,
                        }}
                      >
                        <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <skill.icon style={{ color: skill.color, width: 26, height: 26 }} />
                      </div>
                      {depth > 0.45 && (
                        <span className="text-[11px] font-medium text-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap px-2 py-0.5 rounded-md"
                          style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)" }}>
                          {skill.label}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── Center circle ── */}
          <div className="absolute pointer-events-none flex flex-col items-center" style={{ zIndex: 20 }}>
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center flex-col gap-1"
              style={{
                background: "radial-gradient(circle, rgba(32,178,166,0.15), rgba(32,178,166,0.03))",
                border: "1px solid rgba(32,178,166,0.4)",
                boxShadow: "0 0 30px rgba(32,178,166,0.2), inset 0 0 20px rgba(32,178,166,0.05)",
              }}
            >
              <FaReact className="w-10 h-10 text-primary animate-[spin_8s_linear_infinite]" />
            </div>
            <span className="text-xs text-muted-foreground mt-2 font-medium tracking-wider">Frontend</span>
          </div>

          {/* ── Floating particles ── */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(14)].map((_, i) => {
              const a = (i / 14) * 360;
              const r = 160 + (i % 3) * 60;
              return (
                <div key={i} className="absolute rounded-full"
                  style={{
                    width: i % 3 === 0 ? 3 : 2,
                    height: i % 3 === 0 ? 3 : 2,
                    background: "rgba(32,178,166,0.5)",
                    left: `calc(50% + ${Math.cos((a * Math.PI) / 180) * r}px)`,
                    top:  `calc(50% + ${Math.sin((a * Math.PI) / 180) * r}px)`,
                    boxShadow: "0 0 6px rgba(32,178,166,0.8)",
                    animation: `float ${3 + (i % 4)}s ease-in-out infinite`,
                    animationDelay: `${(i * 0.3) % 3}s`,
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
