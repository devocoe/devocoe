import Link from "next/link"
import { FiGithub, FiLinkedin } from "react-icons/fi"

const Footer = () => {
  return (
    <footer className="mt-16 border-t-2 border-primary">
      <div className="container flex py-6 justify-between items-center">
        <p className="font-serif">
          <Link href="/"> devocoe.in</Link>
        </p>
        <p className="flex items-center">
          <a className="mr-6" href="https://github.com/devocoe">
            <FiGithub size={22} />
          </a>

          <a href="https://www.linkedin.com/in/devocoe/">
            <FiLinkedin size={22} />
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
