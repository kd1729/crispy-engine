import MainNavbar from "../../components/MainNavbar.js";
import InnerNavbar from "../../components/InnerNavbar.js";
import Image from "next/image";

export default function About() {
  return (
    <div>
      <MainNavbar activeSection="About" />

      <div className="sm:px-40 px-10">
        <InnerNavbar activeSection="About Me" />

        <div className="flex gap-40 justify-between">
          <div>
            <h1 className="text-white pt-10 sm:text-5xl text-3xl font-semibold text-center">
              All About Me
            </h1>

            <div className="sm:text-2xl text-xl text-justify text-[#c5f6fe] pt-12">
              <p>
                Hi there! I am a software developer based in Kanpur, India. I graduated with Bachelors degree in CSE
                from my college VIT Vellore in May 2023. 
              </p>
              <br />
              <p>
                I am a passionate developer who loves to code and develop new
                projects. I have previously done projects based on Data Science
                and Natural Language Processing. My passion for coding and
                development is the very reason why I have done so many
                FrontEnd Projects (ReactJS) . I love participating in
                competitive coding competitions, C++ being the language I am
                most fluent in.
              </p>
              <br />
              <p>
                In the forthcoming days I plan to learn Backend, NodeJS being
                the primary environment and probably basics of Linux and DevOps
                as well. My immediate goals include becoming a full-stack
                developer by the end of my final year.
              </p>
              <br />
              <p>
                Apart from academics, If you are a person who loves to discuss
                about Football, Chess, F.R.I.E.N.D.S. or Marvel or any random
                space mystery feel free to hit me up!
              </p>
            </div>
          </div>

          <div className="flex-row justify-center items-center w-[80rem] mt-[10%] sm:block hidden">
            <Image
              className="rounded-full"
              src="/myimg2.png"
              alt="Kaustubh Dwivedi"
              width={400}
              height={0}
            />
          </div>
        </div>
      </div>

      <hr className="mx-auto border-2 border-white sm:my-20 my-10 w-[80%]" />
    </div>
  );
}
