import MainNavbar from "../components/MainNavbar.js";
import MyImage2 from "../components/MyImage2.js";
import MyName from "../components/MyName.js";
import ResumeDownload from "../components/ResumeDownload.js";
import LinkedinButton from "../components/LinkedinButton.js";

export default function Home() {
  return (
    <div>
      <MainNavbar activeSection="Home" />
      <div className="sm:pl-40">
        <div className="sm:pt-80 pt-40">
          <div className="sm:pl-0 pl-10">
            <MyName />
          </div>
          <div className="flex justify-around sm:mt-20 mt-80 sm:gap-80 sm:w-max">
            <LinkedinButton />
            <ResumeDownload />
          </div>
        </div>
        <div className="">
          <MyImage2 />
        </div>
      </div>
    </div>
  );
}
