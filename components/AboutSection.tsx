import React from "react"
import Image from "next/image"

const skills = [
  { skill: "iOS Development-Swift-SwiftUI" },
  { skill: "HTML" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React" },
  { skill: "Node.js" },
  { skill: "Next.js" },
  { skill: "Tailwincss" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "C#" },
  { skill: "SQL Server"},
  { skill: "Postgres" },
  { skill: "MySQL" },
  { skill: "MongoDB" },
  { skill: "SQL Server Integration Services"},
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-5 pb-0 md:pt-6 md:pb-0">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-6 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Donovan and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software engineer
              based in Salem, OH.
            </p>
            <br />
            <p>
            +10 years of experience as a software developer,  I graduated from Mariano Gálvez University, 
            Guatemala with a Systems Engineering degree and have been working in the field since then.
            </p>
{/*             <p>
            I have a wide range of hobbies and passions that keep me busy. From reading, 
            outdoors activities, I am always seeking new experiences and love to keep 
            myself engaged and learning new things.
            </p> */}
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for technology 
              and a desire to always push the limits of what is possible and 
              I am always open to new opportunities.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/avatar developer.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
