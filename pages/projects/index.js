import Link from "next/link";
import Image from "next/image";
import NavBar from "../../components/NavBar";

const MyProjects = [
  {
    title: "Project 1",
    description: "This is my first project",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Project 2",
    description: "This is my second project",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Project 3",
    description: "This is my third project",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Project 4",
    description: "This is my fourth project",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Project 5",
    description: "This is my fifth project",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Project 6",
    description: "This is my sixth project",
    image: "https://picsum.photos/200/300",
  },
];

export default function Projects() {
  return (
    <div>
      <NavBar />
      <div className=" flex flex-col justify-center items-center">
        <h1 className="text-5xl text-emerald-600 my-8">My Projects</h1>
        <div className="grid grid-cols-3 grid-rows-2 justify-center items-center gap-x-20 gap-y-12 bg-slate-700">
          {MyProjects.map((project) => (
            <div key={project.name} className="bg-green-200 p-4" >
              <Image src="/pfp.jpg" alt={project.title} 
              height={300} width={300} 
              />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
