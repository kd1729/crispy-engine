import Link from "next/link";
import Image from "next/image";
import NavBar from "../../components/NavBar";

const MyProjects = [
  {
    title: "TMDB Movie App",
    description: "This is my first project",
    image: "/TMDB.jpg",
    link: "",
  },
  {
    title: "MultiUser Todo App",
    description: "This is my second project",
    image: "/todo_app.png",
    link: "",
  },
  {
    title: "Excuser API",
    description: "This is my third project",
    image: "/EXCUSER.jpg",
    link: "",
  },
  {
    title: "FaceMask Detection",
    description: "This is my fourth project",
    image: "/facemask.jpg",
    link: "",
  },
  {
    title: "Project 5",
    description: "This is my fifth project",
    image: "/frontendmentor.png",
    link: "",
  },
  {
    title: "Project 6",
    description: "This is my sixth project",
    image: "/ipadresstracker.jpg",
    link: "",
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
              className="bg-[#D6E4E5] p-4 my-8 flex rounded-xl"
            >
              <div>
                <Image
                  src={project.image}
                  alt={project.title}
                  height={300}
                  width={300}
                />
              </div>
              <div className="flex flex-col pl-4">
                <h3 className="font-semibold text-2xl text-[#EB6440]">
                  {project.title}
                </h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
