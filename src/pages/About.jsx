import { FaCode, FaLightbulb, FaRocket, FaUsers } from "react-icons/fa6";

const highLights = [
  { icon: FaCode,     title: "Clean Code",     description: "Writing maintainable, scalable code that stands the test of time." },
  { icon: FaRocket,   title: "Performance",    description: "Optimizing for speed and delivering lightning-fast user experiences." },
  { icon: FaUsers,    title: "Collaboration",  description: "Working closely with teams to bring ideas to life." },
  { icon: FaLightbulb,title: "Innovation",     description: "Staying ahead with the latest technologies and best practices." },
];

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div data-aos="fade-right">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 data-aos="fade-right" data-aos-delay="100"
              className="text-4xl md:text-5xl font-bold leading-tight text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white"> one component at a time.</span>
            </h2>

            <div data-aos="fade-right" data-aos-delay="200" className="space-y-4 text-muted-foreground">
              <p>I'm a passionate software engineer with over 5 years of experience crafting digital products that make a difference.</p>
              <p>I specialize in React, Next.js, and TypeScript, building everything from sleek landing pages to complex enterprise applications.</p>
              <p>When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.</p>
            </div>

            <div data-aos="flip-up" data-aos-delay="300" className="glass rounded-2xl p-6 glow-border">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to create digital experiences that are not just functional, but truly delightful."
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highLights.map((item, idx) => (
              <div key={idx} data-aos="zoom-in" data-aos-delay={idx * 100}
                className="glass p-6 rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
