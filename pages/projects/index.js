import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import MainNavbar from "../../components/MainNavbar.js";
import Header from "../../components/Header";

const MyProjects = [
  {
    title: "Expense Tracker App",
    description: "This is my ninth project",
    tech: "ReactNative, Expo, Firebase",
    image: "/projects/ExpenseTracker.jpg",
    link: "https://github.com/kd1729/expense-tracker-react-native",
    date: "Dec-2022",
  },
  {
    title: "TMDB Movie App",
    description: "This is my first project",
    tech: "React, Auth0, TailwindCSS",
    image: "/projects/tmdb.jpg",
    link: "https://github.com/kd1729/movie_tmdb_react_app",
    date: "Dec-2021",
  },
  {
    title: "MultiUser Todo App",
    description: "This is my second project",
    tech: "React, Firestore, Firebase",
    image: "/projects/todoapp.jpg",
    link: "https://github.com/kd1729/multiuser_todoApp_from_scratch",
    date: "Nov-2021",
  },
  {
    title: "Excuser API",
    description: "This is my third project",
    tech: "Node.js, Express.js",
    image: "/projects/excuser.jpg",
    link: "https://github.com/primeTanM/Excuser/",
    date: "Jan-2022",
  },
  {
    title: "FaceMask Detector",
    description: "This is my fourth project",
    tech: "Transfer Learning, Keras",
    image: "/projects/facemask.jpg",
    link: "https://github.com/kd1729/Face-Mask-Detector",
    date: "Dec-2020",
  },
  {
    title: "Frontend Mentor ",
    description: "This is my fifth project",
    tech: "HTML5, CSS3, JavaScript",
    image: "/projects/frontend.jpg",
    link: "https://github.com/kd1729/FRONTEND-MENTOR-CHALLENGES",
    date: "July-2021",
  },
  {
    title: "IP Address Tracker",
    description: "This is my sixth project",
    tech: "HTML5, CSS3, JavaScript",
    image: "/projects/ipaddress.jpg",
    link: "https://github.com/kd1729/IP-Adress-Tracker",
    date: "Aug-2021",
  },
  {
    title: "DOS Attack Detection",
    description: "This is my seventh project",
    tech: "Machine Learning",
    image: "/projects/DOS.png",
    link: "https://github.com/kd1729/DOS-detection-using-ML",
    date: "March-2022",
  },
  {
    title: "Lottery Smart Contract",
    description: "This is my eigth project",
    tech: "Solidity, Mocha, Ganache",
    image: "/projects/lottery.png",
    link: "https://github.com/kd1729/Lottery-Contract",
    date: "Oct-2022",
  },
  {
    title: "Calculator App",
    description: "This is my tenth project",
    tech: "HTML5, CSS3, JavaScript",
    image: "/projects/calculator.jpg",
    link: "https://github.com/kd1729/Simple-Calculator",
    date: "Aug-2021",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen">
      <MainNavbar activeSection="Projects" />
      <div className="flex flex-col justify-center items-center pt-20 px-4">
        <Header name="My Projects" />
        <div className="my-10 grid grid-cols-1 sm:grid-cols-2 sm:gap-24 gap-12 justify-center items-center">
          {MyProjects.map((project) => (
            <div
              key={project.name}
              className="glass-card sm:w-[32rem] sm:h-auto w-[20rem] h-auto justify-center items-center p-4 flex sm:flex-row flex-col rounded-2xl hover:scale-105 transition-all duration-300 group overflow-hidden"
            >
              <div className="sm:w-48 sm:h-32 w-full h-40 flex-shrink-0 overflow-hidden rounded-lg">
                <Image
                  className="cardimg w-full h-full object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300"
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 192px"
                />
              </div>
              <div className="flex flex-col justify-center items-center flex-1 sm:pl-4 pt-4 sm:pt-0 min-w-0">
                <h3 className="cardtitle font-bold text-lg text-white group-hover:text-blue-200 transition-colors duration-300">
                  {project.title}
                </h3>
                <h3 className="font-medium text-blue-200 mt-1 text-center text-sm">
                  {project.tech}
                </h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-purple-200 hover:text-white decoration-solid hover:underline transition-colors duration-300 mt-2"
                >
                  <div className="flex justify-center items-center text-base">
                    <span> Github Link</span>{" "}
                    <AiFillGithub color="#ffffff" className="text-xl ml-1" />
                  </div>
                </a>
                <h4 className="font-medium text-sm text-blue-100 mt-1">
                  {project.date}
                </h4>
                {/* <div className="font-bold">{project.description}</div> */}
              </div>
            </div>
          ))}
        </div>
        <div className="text-white sm:text-2xl text-xl sm:px-0 px-4 my-12 flex justify-center items-center glass-card p-6 rounded-2xl">
          <div className="font-medium">Check out my Github for more projects.</div>
          <a
            href="github.com/kd1729"
            target="_blank"
            rel="noreferrer"
            className="ml-4 hover:scale-110 transition-transform duration-300"
          >
            <AiFillGithub
              color="#ffffff"
              className="text-4xl hover:text-blue-200 transition-colors duration-300"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
