import Button from "../components/Button";
import HeroImage from "../../public/hero-bg.jpg";
import {
  FaArrowRight,
  FaChevronDown,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import AnimatedBorderButton from "../components/AnimatedBorderButton";
import { Link } from "react-router-dom";
import ProfileImage from "../../public/Profile-Image/photo_2026-02-10_16-24-08-removebg-preview.png";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "GraphQL",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "AWS",
  "Vercel",
  "Tailwind CSS",
  "Prisma",
  "Jest",
  "Cypress",
  "Figma",
  "Git",
  "GitHub Actions",
  "Material UI",
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={HeroImage}
          alt="Hero"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div>
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div data-aos="fade-down" data-aos-delay="100">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Frontend Developer - React Specialist
              </span>
            </div>

            <div className="space-y-4">
              <h1
                data-aos="fade-right"
                data-aos-delay="200"
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              >
                Crafting <span className="text-primary glow-text">digital</span>
                <br />
                experience with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision.
                </span>
              </h1>
              <p
                data-aos="fade-right"
                data-aos-delay="350"
                className="text-lg text-muted-foreground max-w-lg"
              >
                Hi, I'm Yazan Chaya - a Frontend Developer specializing in
                React, Next.js, and TypeScript. I build scalable, performant web
                applications that users love.
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="450"
              className="flex flex-wrap gap-4"
            >
              <a href="#contact">
                <Button size="lg">
                  Contact Me <FaArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <a href="/Yazan%20Chaya%20CV.pdf" download="Yazan-Chaya-CV.pdf">
                <AnimatedBorderButton>
                  <FiDownload className="w-5 h-5" />
                  Download CV
                </AnimatedBorderButton>
              </a>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="550"
              className="flex items-center gap-4"
            >
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
                { icon: FaGithub, href: "https://github.com/YazanChaya" },
                {
                  icon: FaLinkedin,
                  href: "https://www.linkedin.com/in/yazan-chaya-012b421a5/",
                },
                { icon: FaInstagram, href: "#" },
              ].map((social, idx) => (
                <Link
                  key={idx}
                  to={social.href}
                  target="_blank"
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div data-aos="zoom-in" data-aos-delay="300" className="relative">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src={ProfileImage}
                  alt="Yazan Chaya"
                  className="w-full aspect-4/5 object-cover rounded-2xl"
                />
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-xs text-muted-foreground">
                    Years Exp.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills marquee */}
        <div data-aos="fade-up" data-aos-delay="600" className="mt-20">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        data-aos="fade-up"
        data-aos-delay="700"
      >
        <Link
          to={"#about"}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <FaChevronDown className="w-6 h-6 animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
