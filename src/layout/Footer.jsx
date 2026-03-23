import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import LogoImage from "../../public/Logo.ico";
import { Link } from "react-router-dom";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/YazanChaya", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/yazan-chaya-012b421a5/",
    label: "LinkedIn",
  },
  { icon: FaTwitter, href: "#", label: "Twitter" },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center place-self-center md:text-left">
            <Link to={"/"} className="flex items-center justify-center">
              <img className="w-10" src={LogoImage} alt="Logo" />
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Yazan Chaya. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
