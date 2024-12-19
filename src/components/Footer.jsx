import { FaGithub, FaGlobe, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  { href: "https://github.com/LukaTizic", icon: <FaGithub /> },
  {
    href: "https://www.linkedin.com/in/luka-tizi%C4%87-529a1b240/",
    icon: <FaLinkedin />,
  },
  { href: "https://www.semper.blue/", icon: <FaGlobe /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-violet-500 py-4 text-white">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm md:text-left">
          &copy;{" "}
          <a
            href="https://www.semper.blue/"
            target="_blank"
            className="hover:text-red-500 hover:underline"
            rel="noopener noreferrer"
          >
            Semper
          </a>{" "}
          2024. All rights reserved
        </p>
        <div className="flex justify-center gap-4 md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <a
          href="https://en.wikipedia.org/wiki/Privacy_policy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center text-sm hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
