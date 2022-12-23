import Head from "next/head"
import ProjectCard from "../components/ProjectCard"
import Heading from "../components/Heading"
import { FiMessageCircle } from "react-icons/fi"
import Navbar from "../layouts/Navbar"
import Footer from "../layouts/Footer"

// data
import projects from "../data/projects"

export default function Home() {
  return (
    <>
      <Head>
        <title>Devocoe - Programmer and High school student</title>
        <meta
          name="description"
          content="a high school student who is also an enthusiastic coder. enjoy discovering new things and creating fun projects."
        />
        <link rel="secondary" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="font-serif container sm:py-12 py-6">
        <header className="sm:py-16 py-10 border-b  border-primary">
          <h1 className="text-4xl  font-bold">Hi, I&apos;m Piyush.</h1>
          <p className="text-lg mt-2 mb-8">
            A high school student who is also an enthusiastic coder. enjoy
            discovering new things and creating fun projects.
          </p>
          <button className="rounded px-8 py-3 border-2 hover:scale-95 transition-transform flex items-center   border-primary">
            <FiMessageCircle size={18} className="mr-2" />
            <a href="mailto:piyushprasad816@gmail.com">Let&apos;s talk</a>
          </button>
        </header>
        <section className="sm:py-16 py-10 border-b border-primary" id="about">
          <Heading title={"My Story"} />

          <p>
            I&apos;m Piyush Kumar, and I&apos;m an Indian. I first learned how
            to write code when I was in the 10th grade, and right now, I&apos;m
            in the 12th grade, giving me around{" "}
            <strong>2 years of programming experience</strong>. I love using my
            coding skills to create fun projects and find solutions for problems
            in the real world.
            <br />
            <br />
            My technical skills includes{" "}
            <strong>
              HTML, CSS, Javascript, Python, Node.js, React.js, Next.js,
              Express.js, and Mongodb
            </strong>
            . I have also worked on mobile development using React Native a
            little bit. My interests outside of coding include reading self-help
            books and travelling.
          </p>
        </section>

        <section className="sm:py-16 py-10" id="projects">
          <Heading title={"Projects"} />
          {projects.map((project, index) => {
            return (
              <ProjectCard
                name={project.name}
                link={project.link}
                desc={project.desc}
                key={index}
              />
            )
          })}
        </section>
      </main>
      <Footer />
    </>
  )
}
