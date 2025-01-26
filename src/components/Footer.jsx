import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LiaTelegramPlane } from "react-icons/lia";

const socialLinks = [
  { href: "https://pentaai.gitbook.io/pentaai", icon: <FaGithub /> },
  {
    href: "https://www.x.com/Pentaai",
    icon: <FaXTwitter />,
  },
  { href: "https://t.me/pentaai", icon: <LiaTelegramPlane /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#264653] py-4 text-white">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm md:text-left">
          &copy;{" "}
          <a
            href="https://www.pentaai.io/"
            target="_blank"
            className="hover:text-red-500 hover:underline"
            rel="noopener noreferrer"
          >
            PentaAI
          </a>{" "}
          2025. All rights reserved
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

      </div>
    </footer>
  );
};

export default Footer;
