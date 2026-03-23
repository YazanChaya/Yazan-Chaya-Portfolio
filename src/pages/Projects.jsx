import { FaGithub } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import Project1 from "../assets/images/projects/Project1.png";
import Project2 from "../assets/images/projects/Project2.png";
import Project3 from "../assets/images/projects/Project3.png";
import Project4 from "../assets/images/projects/Project4.png";
import Project5 from "../assets/images/projects/Project5.png";
import Project6 from "../assets/images/projects/Project6.png";

const projects = [
  {
    title: "DriveLine – Luxury Travel Service",
    description: "A premium service platform for booking exotic vehicles, private aviation, and yacht charters. Features a sleek, responsive interface that highlights high-end travel experiences and concierge-level service.",
    image: Project1, tags: ["React", "Tailwind CSS"],
    link: "https://driveline-final-project-gbf8.vercel.app/",
    github: "https://github.com/YazanChaya/Driveline-Final-Project",
  },
  {
    title: "Full React E-Commerce Store",
    description: "A complete online shopping experience with product listings, a shopping cart, and checkout flow. Features client-side routing and state management typical of a modern e-commerce front end.",
    image: Project2, tags: ["React", "Context API", "React Router"],
    link: "https://full-react-ecommerce.vercel.app/", github: "#",
  },
  {
    title: "To-Do List App",
    description: "A clean and intuitive task management application that allows users to add, complete, and delete tasks. Demonstrates core front-end functionality with persistent state management.",
    image: Project3, tags: ["React", "MUI"],
    link: "https://to-do-list-project-react.vercel.app/", github: "#",
  },
  {
    title: "Weather App",
    description: "A functional weather dashboard that fetches real-time weather data based on user input or geolocation. Displays current conditions, temperature, and forecasts with a responsive UI.",
    image: Project4, tags: ["React", "Weather API", "MUI"],
    link: "https://weather-app-project-react.vercel.app/", github: "#",
  },
  {
    title: "Zen Digital – Digital Agency",
    description: "A modern digital agency website showcasing web development, UI/UX design, and digital marketing services. Includes client testimonials, a portfolio section, and a clean, conversion-focused layout.",
    image: Project6, tags: ["HTML", "Tailwind CSS", "JavaScript"],
    link: "https://zen-digital-project.onrender.com/",
    github: "https://github.com/YazanChaya/Zen-Digital-Project",
  },
  {
    title: "EduLearn – Course Platform",
    description: "A modern educational platform showcasing courses, trainers, and student statistics. Features a responsive layout with course cards, pricing, and instructor information.",
    image: Project5, tags: ["React", "Tailwind", "Swiper", "aos", "React Router"],
    link: "https://yazan-chaya-final-task-kiro.vercel.app/",
    github: "https://github.com/YazanChaya/Yazan-Chaya-Final-Task-Kiro",
  },
];

// Alternate AOS animations per card
const aosEffects = ["fade-up", "fade-left", "fade-right", "zoom-in", "flip-left", "fade-up"];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span data-aos="fade-down"
            className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Featured Work
          </span>
          <h2 data-aos="fade-down" data-aos-delay="100"
            className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white"> make an impact.</span>
          </h2>
          <p data-aos="fade-down" data-aos-delay="200" className="text-muted-foreground">
            A selection of my recent work, from complex web applications to innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx}
              data-aos={aosEffects[idx]}
              data-aos-delay={idx * 80}
              className="group glass rounded-2xl overflow-hidden">
              <div className="relative overflow-hidden aspect-video">
                <img src={project.image} alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={project.link} target="_blank" rel="noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                    <GoArrowUpRight className="w-5 h-5" />
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                  <GoArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <p className="text-muted-foreground text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
