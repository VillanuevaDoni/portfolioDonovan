import React from "react";
import Image from "next/image";

const skills = [
  { skill: "iOS Development" },
  { skill: "HTML" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React" },
  { skill: "Node.js" },
  { skill: "Next.js" },
  { skill: "Tailwind" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "C#" },
  { skill: "SQL Server" },
  { skill: "Postgres" },
  { skill: "MySQL" },
  { skill: "MongoDB" },
  { skill: "SQL Server Integration Services" },
];

const LaboralExperienceSection = () => {
  return (
    <section id="laboralExperience">
      <div className="my-12 pb-0 md:pt-16 md:pb-10">
        <h1 className="text-center font-bold text-4xl">
          Experience
          <hr className="w-20 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
          <br />
        </h1>
         <div className="flex flex-col space-y-0 items-stretch justify-center align-top md:space-x-0 md:space-y-0 md:p-4 md:flex-col md:text-left bg-cyan-300/10 opacity-50 rounded-2xl md:pt-3 pb-0">
          <div>
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Freelance Software Developer
              <p className="flex  flex-row space-x-5">
                <span className="font-semibold text-xl">
                  {"Full-Stack Developer"}
                </span>
                <span className="font-light text-lg text-align-right hover: underline decoration-teal-500">
                  {"2018-present"}
                </span>
              </p>
              <p>
                <span className="font-extralight text-lg">
                  Development and design of iOS and web applications,
                  consulting, support and tutoring.
                </span>
                
              </p>
            </h1>
          </div>
          <div>
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Bank GyT Continental
              <p className="flex  flex-row space-x-5">
                <span className="font-semibold text-xl">{"Sofware Engineer"}</span>
                <span className="font-light text-lg text-align-right hover: underline decoration-teal-500">
                  {"2014-2017"}
                </span>
              </p>
              <p>
                <span className="font-extralight text-lg">
                  Full-Stack developer, SQL Server Integration Services (SSIS),
                  support and documentation.
                </span>
              </p>
            </h1>
          </div>
          <div>
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              INFOM
              <p className="flex  flex-row space-x-5">
                <span className="font-semibold text-xl">
                  {"Full-Stack Developer"}
                </span>
                <span className="font-light text-lg text-align-right hover: underline decoration-teal-500">
                  {"2012-2014"}
                </span>
              </p>
              <p>
                <span className="font-extralight text-lg">
                  Project planning and development, testing and support,
                  requeriments analysis, team management.
                </span>
              </p>
            </h1>
          </div>
          <div>
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              DIGEF
              <p className="flex  flex-row space-x-5">
                <span className="font-semibold text-lg">
                  {"Full-Stack Developer"}
                </span>
                <span className="font-light text-lg text-align-right hover: underline decoration-teal-500">
                  {"2010-2012"}
                </span>
              </p>
              <p>
                <span className="font-extralight text-xl">
                  Website Development, support, testing.
                </span>
              </p>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaboralExperienceSection;
