import MainNavbar from "../../components/MainNavbar.js";
import InnerNavbar from "../../components/InnerNavbar.js";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen">
      <MainNavbar activeSection="About" />

      <div className="sm:px-40 px-10 pb-20">
        <InnerNavbar activeSection="About Me" />

        <div className="flex lg:flex-row flex-col gap-16 justify-between items-start">
          <div className="flex-1 glass-card p-8 rounded-2xl">
            <h1 className="text-white pt-4 sm:text-4xl text-3xl font-bold text-center bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent mb-8">
              All About Me
            </h1>

            <div className="sm:text-lg text-base text-justify text-white/90 leading-relaxed space-y-4">
              <p className="backdrop-blur-sm bg-white/5 p-4 rounded-lg">
                I am Software Engineer (L3) at Google (Offline Ads), where I apply my skills to create innovative solutions for conversion tracking and data infrastructure.
                Before joining Google in December 2024, I was an Associate Software Engineer at Ivanti, where I gained valuable experience 
                in developing, testing, and deploying software applications. 
            </p>
            <p className="backdrop-blur-sm bg-white/5 p-4 rounded-lg">
                Before that, I interned at Walmart Global Tech India where I worked in Data Enginnering team and learnt about
                various tools like Tableau, Google Secret Manager, Spark, Kafka, etc. I have also worked as a React Developer in 2 startups. 
                I also contributed to the GirlScript Winter of Contributing and Code For Government program as a opensource contributor, and was a senior core member of the 
                Student Technical Community at VIT Vellore, where I organized and participated in various technical events and workshops.    
            </p>
            <p className="backdrop-blur-sm bg-white/5 p-4 rounded-lg">
                I have completed my B.Tech in Computer Science from Vellore Institute of Technology, where I have completed 
                multiple courses and certifications in machine learning, cloud, and Microsoft technologies. 
                I am passionate about learning new technologies and applying them to real-world problems, 
                and I aspire to become a leader and a mentor in the field of Software Engineering.
            </p>
            <p className="backdrop-blur-sm bg-white/5 p-4 rounded-lg">
                Apart from academics, If you are a person who loves to discuss about Football, Chess, F.R.I.E.N.D.S. or
                Marvel or any random space mystery feel free to hit me up!
            </p>
            </div>
          </div>

          <div className="lg:w-96 w-full flex justify-center items-center glass-card p-8 rounded-2xl">
            <Image
              className="rounded-full shadow-2xl hover:scale-105 transition-transform duration-300"
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
