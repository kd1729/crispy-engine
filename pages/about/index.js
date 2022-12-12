import NavBar from "../../components/navbar";
import Header from "../../components/Header";
import Image from "next/image";
// import MyImage2 from "../../components/MyImage2";

export default function About() {
  return (
    <div>
      <NavBar activeSection="About" />

      <div className="px-40">
        <div className="text-white pt-20 font-semibold">
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>

        <div className="flex gap-40 justify-between">
          <div>
            <h1 className="text-white pt-10 text-4xl font-semibold">
              All About Me
            </h1>

            <div className="text-base text-left text-white pt-12">
              <p>
                Hi there! I am a software developer based in Kanpur, India. I am
                currently a final year student pursuing my Bachelors in the
                field of Computer Science and Engineering from VIT Vellore.
              </p>
              <br />
              <p>
                I am a passionate developer who loves to code and develop new
                projects. I have previously done projects based on Data Science
                and Natural Language Processing. My passion for coding and
                development is the very reason why I am currently working on
                FrontEnd Projects (ReactJS) . I love participating in
                competitive coding competitions, C++ being the language I am
                most fluent in.
              </p>
              <br />
              <p>
                In the forthcoming days I plan to learn Backend, NodeJS being
                the primary environment and probably basics of Linux and DevOps
                as well. My immediate goals include becoming a full-stack
                developer by the end of my final year. Apart from academics, If
                you are a person who loves to discuss about Football, Chess,
                F.R.I.E.N.D.S. or Marvel or any random space mystery feel free
                to hit me up!
              </p>
            </div>
          </div>

          <div className="flex flex-row justify-center items-center w-[80rem] mt-[15%]">
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

      <hr className="mx-auto border-2 border-white my-20 w-[80%]" />
    </div>
  );
}
