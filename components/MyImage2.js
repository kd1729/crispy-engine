import Image from "next/image";

export default function MyImage2() {
  return (
    <div class="photo">
        <h1>Kaustubh Dwivedi</h1>
        <Image className="img" src="/pfp.jpg" alt="Kaustubh Dwivedi" height={300} width={300} />
        <div class="glow-wrap">
          <i class="glow"></i>
        </div>
      </div>
  );
}
