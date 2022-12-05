import Link from "next/link";
import Image from "next/image";
import NavBar from "../../components/NavBar";

const Width = 8;

const MyProjects = [
  {
    title: "TMDB Movie App",
    description: "This is my first project",
    tech: "React, Auth0, TailwindCSS",
    image: "/TMDB.jpg",
    link: "https://github.com/onlykingKD/movie_db_react_app",
    width: Width * 23,
  },
  {
    title: "MultiUser Todo App",
    description: "This is my second project",
    tech: "React, Firestore, Firebase Auth",
    image: "/todo_app.png",
    link: "https://github.com/onlykingKD/multiuser_todoApp_from_scratch",
    width: Width * 30,
  },
  {
    title: "Excuser API",
    description: "This is my third project",
    tech: "Node.js, Express.js",
    image: "/EXCUSER.jpg",
    link: "https://github.com/primeTanM/Excuser/",
    width: Width * 33,
  },
  {
    title: "FaceMask Detector",
    description: "This is my fourth project",
    tech: "Transfer Learning, Keras, Tensorflow",
    image: "/facemask.jpg",
    link: "https://github.com/onlykingKD/Face-Mask-Detector",
    width: Width * 23,
  },
  {
    title: "Frontend Mentor ",
    description: "This is my fifth project",
    tech: "HTML5, CSS3, JavaScript",
    image: "/frontendmentor.png",
    link: "https://github.com/onlykingKD/FRONTEND-MENTOR-CHALLENGES",
    width: Width * 28,
  },
  {
    title: "IP Address Tracker",
    description: "This is my sixth project",
    tech: "HTML5, CSS3, JavaScript",
    image: "/ipadresstracker.jpg",
    link: "https://github.com/onlykingKD/IP-Adress-Tracker",
    width: Width * 37,
  },
];

export default function Projects() {
  return (
    <div>
      <NavBar />
      <div className=" flex flex-col justify-center items-center pt-20">
        <h1 className="text-5xl text-[#F7F7F7] my-8 font-semibold">
          My Projects
        </h1>
        <div className="grid grid-cols-2 grid-rows-3 gap-x-8 justify-center items-center">
          {MyProjects.map((project) => (
            <div
              key={project.name}
              className="bg-[#D6E4E5] p-4 my-8 flex rounded-xl "
            >
              <div>
                <Image
                  src={project.image}
                  alt={project.title}
                  height={0}
                  width={project.width}
                />
              </div>
              <div className="flex flex-col pl-4 justify-center  items-center">
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
                  Github Link
                </a>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
