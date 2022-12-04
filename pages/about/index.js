import Image from "next/image";
import NavBar from "../../components/NavBar";

export default function About() {
  return (
    <div>
      <NavBar />
      <div class="photo">
        <h1>Kaustubh Dwivedi</h1>
        <Image className="img" src="/pfp.jpg" alt="Kaustubh Dwivedi" height={300} width={300} />
        <div class="glow-wrap">
          <i class="glow"></i>
        </div>
      </div>
    </div>
  );
}
