import MainNavbar from "../../components/MainNavbar.js";
import InnerNavbar from "../../components/InnerNavbar.js";

const mySkills = [
  {
    name: "Frontend",
    skills: [
      {
        name: "HTML/CSS/JS",
        level: 90,
      },
      {
        name: "TailwindCSS",
        level: 80,
      },
      {
        name: "ReactJS",
        level: 60,
      },
      {
        name: "NextJS",
        level: 50,
      },
      {
        name: "React Native",
        level: 40,
      },
    ],
  },
  {
    name: "Backend",
    skills: [
      {
        name: "NodeJS",
        level: 70,
      },
      {
        name: "ExpressJS",
        level: 60,
      },
      {
        name: "MySQL",
        level: 60,
      },
      {
        name: "Firebase",
        level: 50,
      },
      {
        name: "MongoDB",
        level: 40,
      },
    ],
  },
  {
    name: "Languages",
    skills: [
      {
        name: "C/C++",
        level: 90,
      },
      {
        name: "Python",
        level: 80,
      },
      {
        name: "JavaScript",
        level: 80,
      },
      {
        name: "Java",
        level: 60,
      },
      {
        name: "Scala",
        level: 40,
      },
    ],
  },
  {
    name: "Tools",
    skills: [
      {
        name: "Git",
        level: 90,
      },
      {
        name: "Microsoft Visual Studio",
        level: 80,
      },
      {
        name: "Jira",
        level: 80,
      },
      {
        name: "Confluence",
        level: 80,
      },
      {
        name: "Tableau",
        level: 60,
      },
    ],
  },
  {
    name: "Miscellaneous",
    skills: [
      {
        name: "Windows Development",
        level: 80,
      },
      {
        name: "DS/ML",
        level: 60,
      },
      {
        name: "Big Data",
        level: 60,
      },
      {
        name: "Linux",
        level: 50,
      },
      {
        name: "AWS",
        level: 50,
      },
    ],
  },
];

export default function Skills() {
  return (
    <div>
      <MainNavbar activeSection="About" />

      <div className="sm:px-40 px-10">
        <InnerNavbar activeSection="Skills" />

        <div className="flex flex-col sm:gap-20 gap-10 justify-center items-center">
          <h1 className="text-[white] pt-10 sm:text-5xl text-3xl font-semibold">My Skills</h1>

          <ol className="grid sm:grid-cols-3 grid-cols-1 sm:gap-x-40 sm:gap-y-20 gap-y-12">
            {mySkills.map((skill) => (
              <div key={skill.name} className="flex flex-col gap-5">
                <li type="A" className="text-[#96ffae] sm:text-3xl text-xl font-semibold">
                  {skill.name}
                </li>
                <ol className="flex flex-col gap-2">
                  {skill.skills.map((skill) => (
                    <div key={skill.name} className="flex gap-5 justify-start items-center">
                      <li type="i" className="text-[#c7ebff] sm:text-xl text-lg font-semibold">
                        {skill.name}
                      </li>
                      <div>
                        <div className="flex gap-1">
                          {[...Array(skill.level / 10)].map((_, i) => (
                            <div key={i} className="w-2 h-2 bg-[#f6f46e]"></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </ol>
              </div>
            ))}
          </ol>
        </div>
      </div>
      <hr className="mx-auto border-2 border-white sm:my-20 my-10 w-[80%]" />
    </div>
  );
}
