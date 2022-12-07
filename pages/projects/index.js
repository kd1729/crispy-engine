import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import NavBar from "../../components/navbar";

const Width = 8;

const MyProjects = [
  {
    title: "TMDB Movie App",
    description: "This is my first project",
    tech: "React, Auth0, TailwindCSS",
    image: "/TMDB.jpg",
    link: "https://github.com/onlykingKD/movie_db_react_app",
    date: "Dec-2021",
    width: Width * 22,
  },
  {
    title: "MultiUser Todo App",
    description: "This is my second project",
    tech: "React, Firestore, Firebase Auth",
    image: "/todo_app.png",
    link: "https://github.com/onlykingKD/multiuser_todoApp_from_scratch",
    date: "Nov-2021",
    width: Width * 30,
  },
  {
    title: "Excuser API",
    description: "This is my third project",
    tech: "Node.js, Express.js",
    image: "/EXCUSER.jpg",
    link: "https://github.com/primeTanM/Excuser/",
    date: "Jan-2022",
    width: Width * 33,
  },
  {
    title: "FaceMask Detector",
    description: "This is my fourth project",
    tech: "Transfer Learning, Keras, Tensorflow",
    image: "/facemask.jpg",
    link: "https://github.com/onlykingKD/Face-Mask-Detector",
    date: "Dec-2020",
    width: Width * 23,
  },
  {
    title: "Frontend Mentor ",
    description: "This is my fifth project",
    tech: "HTML5, CSS3, JavaScript",
    image: "/frontendmentor.png",
    link: "https://github.com/onlykingKD/FRONTEND-MENTOR-CHALLENGES",
    date: "July-2021",
    width: Width * 28,
  },
  {
    title: "IP Address Tracker",
    description: "This is my sixth project",
    tech: "HTML5, CSS3, JavaScript",
    image: "/ipadresstracker.jpg",
    link: "https://github.com/onlykingKD/IP-Adress-Tracker",
    date: "Aug-2021",
    width: Width * 37,
  },
  {
    title: "DOS Attack Detection",
    description: "This is my seventh project",
    tech: "Machine Learning",
    image: "/DOS.jpg",
    link: "https://github.com/onlykingKD/DOS-detection-using-ML",
    date: "March-2022",
    width: Width * 33,
  },
  {
    title: "Lottery Smart Contract",
    description: "This is my eigth project",
    tech: "Solidity, Mocha, Ganache, Truffle",
    image: "/lottery.jpg",
    link: "https://github.com/onlykingKD/Lottery-Contract",
    date: "Oct-2022",
    width: Width * 37,
  },
  {
    title: "Number Guessing Game",
    description: "This is my ninth project",
    tech: "ReactNative, Expo",
    image: "/numberGuess.png",
    link: "https://github.com/onlykingKD/NumberGuessing-ReactNative",
    date: "Sept-2022",
    width: Width * 37,
  },
  {
    title: "Calculator App",
    description: "This is my tenth project",
    tech: "HTML5, CSS3, JavaScript",
    image: "/calculator.PNG",
    link: "https://github.com/onlykingKD/Simple-Calculator",
    date: "Aug-2021",
    width: Width * 33,
  },
];

export default function Projects() {
  return (
    <div>
      <NavBar activeSection="Projects"/>
      <div className=" flex flex-col justify-center items-center pt-20">
        <h1 className="text-5xl text-[#F7F7F7] my-8 font-semibold">
          My Projects
        </h1>
        <div className="grid grid-cols-2 grid-rows-3 gap-x-8 justify-center items-center">
          {MyProjects.map((project) => (
            <div
              key={project.name}
              className="bg-[#d1fbf5] p-4 my-8 flex rounded-xl shadow-[0_20px_40px_-15px_#04022fff] hover:shadow-[0_15px_60px_-15px_#4b4b7dff]"
            >
              <div>
                <Image
                  src={project.image}
                  alt={project.title}
                  height={0}
                  width={project.width}
                />
              </div>
              <div className="flex flex-col pl-4 justify-center items-center flex-1">
                <h3 className="font-semibold text-2xl text-[#EB6440]">
                  {project.title}
                </h3>
                <h3 className="font-semibold text-lg text-[#4054eb]">
                  {project.tech}
                </h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-lg text-[#8925a8] decoration-solid hover:underline"
                >
                  <div className="flex justify-center items-center">
                    <span> Github Link</span> <AiFillGithub color="#171515" className="text-2xl ml-1" />
                  </div>
                </a>
                <h4 className="font-semibold text-lg text-[#4054eb]">
                  {project.date}
                </h4>
                {/* <div className="font-bold">{project.description}</div> */}
              </div>
            </div>
          ))}
        </div>
        <div className="text-white text-3xl my-12 flex justify-center items-center">
          <div>Check out my Github for more projects.</div>
          <a
            href="github.com/onlykingKD"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-lg text-[#8925a8] decoration-solid hover:underline"
          >
            <AiFillGithub
              color="#171515"
              className="ml-4 text-5xl bg-white rounded-lg"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
