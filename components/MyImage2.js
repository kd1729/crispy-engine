import Image from "next/image";

export default function MyImage2() {
  return (
    <div className="photo">
        <h1>Kaustubh Dwivedi</h1>
        <Image className="img" src="/myself.png" alt="Kaustubh Dwivedi" height={300} width={300} />
        <div className="glow-wrap">
          <i className="glow"></i>
        </div>
      </div>
  );
}
