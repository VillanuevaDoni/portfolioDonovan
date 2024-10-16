import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "jesucristocaminoalcielo.org",
    description:
    "jesucristocaminoalcielo.org is a website that summarizes what the ministry means and its purpose.",
    image: "/jesucristocaminoalcielo-scsh.png",
    github: "",
    link: "https://www.jesucristocaminoalcielo.org/",
  },
  {
    name: "To Do List",
    description:
    "This app for iOS devices allows you to make a to-do list. You can choose the date and time of the task and add a description. To use it you will need to register first with your email and you will be able to start creating tasks. This app uses Firebase for authentication and storage, which allows you to change devices and keep your data.",
    image: "/ToDoList.png",
    github: "",
    link: "",
  },
  {
    name: "Favorite Places",
    description:
    "This app for iOS devices allows you to navigate on the map by marking different places and categorizing them as favorites, so that you can have a list of the places you prefer or potential places you want to go to.",
    image: "/FavoritePlaces.png",
    github: "",
    link: "",
  },
  {
    name: "Hero Finder",
    description:
    "This app for iOS devices is fun and easy to use. The goal is simple: search for superheroes or villains and get information about them. You can see data such as nicknames, statistics of their different attributes and all existing versions. To achieve this, this app consumes a public API that you can find at the following link: https://superheroapi.com/",
    image: "/HeroFinder.png",
    github: "",
    link: "",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Latest Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link} target="_blank">
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={100}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
{/*                       <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link> */}
                      { <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link> }
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
