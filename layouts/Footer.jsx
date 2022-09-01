import Link from "next/link";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="mt-16 border-t-2 border-primary">
      <div className="container flex py-6 justify-between items-center">
        <p>
          @2022<Link href="/"> devocoe.in</Link>
        </p>
        <p className="flex items-center">
          <a className="mr-6" href="https://github.com/devocoe">
            <FiGithub size={22} />
          </a>

          <a href="https://www.linkedin.com/in/piyush-kumar-a1b422240/">
            <FiLinkedin size={22} />
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
