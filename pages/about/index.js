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
                I am Associate Software engineer at Ivanti, I apply my skills to create innovative solutions for IT and security management.
                I joined Ivanti in July 2023, after completing a six-month internship at the same company, where I gained valuable experience 
                in developing, testing, and deploying software applications. 
            </p>

            <p>
                Before that, I interned at Walmart Global Tech India where I worked in Data Enginnering team and learnt about
                various tools like Tableau, Google Secret Manager, Spark, Kafka, etc. I have also worked as a React Developer in 2 startups. 
                I also contributed to the GirlScript Winter of Contributing and Code For Government program as a opensource contributor, and was a senior core member of the 
                Student Technical Community at VIT Vellore, where I organized and participated in various technical events and workshops.    
            </p>

            <p>
                I have completed my B.Tech in Computer Science from Vellore Institute of Technology, where I have completed 
                multiple courses and certifications in machine learning, cloud, and Microsoft technologies. 
                I am passionate about learning new technologies and applying them to real-world problems, 
                and I aspire to become a leader and a mentor in the field of Software Engineering.
            </p>

            <p>
                Apart from academics, If you are a person who loves to discuss about Football, Chess, F.R.I.E.N.D.S. or
                Marvel or any random space mystery feel free to hit me up!
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
