import NavBar from "../../components/navbar";
import MyImage2 from "../../components/MyImage2";

export default function About() {
  return (
    <div>
      <NavBar activeSection="About" />
      <div className="text-center text-white pt-20 mx-40">
        <h1 className="text-3xl font-bold">About Me</h1>
        <p className="text-xl">
          I am currently a final year student pursuing my Bachelors in the field
          of Computer Science and Engineering from VIT Vellore. I belong to
          Kanpur, Uttar Pradesh. My attitude towards life is very optimistic
          which encourages me to remain positive even in the worst of
          situations.{" "}
        </p>
        <p className="text-xl">
          Coming to my skillsets, I have previously done projects based on Data
          Science and Natural Language Processing. My passion for coding and
          development is the very reason why I am currently working on FrontEnd
          Projects (ReactJS) . I love participating in competitive coding
          competitions, C++ being the language I am most fluent in.
        </p>
        <p className="text-xl">
          In the forthcoming days I plan to learn Backend, NodeJS being the
          primary environment and probably basics of Linux and DevOps as well.
          My immediate goals include becoming a full-stack developer by the end
          of my final year. Apart from academics, If you are a person who loves
          to discuss about Football, Chess, F.R.I.E.N.D.S. or Marvel or any
          random space mystery feel free to hit me up!
        </p>
      </div>
    </div>
  );
}
