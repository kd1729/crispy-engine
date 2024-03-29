import { BsLinkedin } from "react-icons/bs";

export default function LinkedinButton() {
  return (
    <a
      href="https://www.linkedin.com/in/kaustubhdwivedi1729/"
      target="_blank"
      rel="noreferrer"
    >
      <div
        className="text-lg bg-white px-5 py-3 rounded-lg text-[#0072b1] font-bold
                   hover:shadow-[0_10px_20px_-15px_#ffffffff] shadow-[0_10px_20px_-15px_#000000ff]"
      >
        Connect <BsLinkedin className="inline-block ml-1 text-2xl" />
      </div>
    </a>
  );
}
