import {BsLinkedin} from 'react-icons/bs';

export default function LinkedinButton() {
    return (
      <div
        className="flex flex-row justify-center mt-20 ml-20 w-max text-lg bg-white px-5 py-3 rounded-lg text-[#0072b1] font-bold
                   hover:shadow-[0_10px_20px_-15px_#ffffffff] shadow-[0_10px_20px_-15px_#000000ff]">
        <a
          href="https://www.linkedin.com/in/kaustubhdwivedi1729/"
          target="_blank"
          rel="noreferrer"
        >
          Connect <BsLinkedin className="inline-block ml-1 text-2xl" />
        </a>
      </div>
    );
  }
  