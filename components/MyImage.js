import Image from "next/image";

export default function MyImage() {
  return (
    <div className="bg-red-100 w-60 h-60 rounded-full">
      <Image
        src="/myself.png"
        alt="Kaustubh Dwivedi"
        style={{ borderRadius: "50%" }}
        height={300}
        width={300}
      />
    </div>
  );
}
