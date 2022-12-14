import MainNavbar from "../components/MainNavbar.js";
import MyImage2 from "../components/MyImage2.js";
import MyName from "../components/MyName.js";
import ResumeDownload from "../components/ResumeDownload.js";
import LinkedinButton from "../components/LinkedinButton.js";

export default function Home() {
  return (
    <div>
      <MainNavbar activeSection="Home" />
      <div className="sm:pl-40 pl-10 sm:pt-80 pt-40">
        <div className="">
          <div className="">
            <MyName />
          </div>
          <div className="flex sm:flex-row flex-col mt-20 sm:gap-80 gap-10 w-max">
            <LinkedinButton />
            <ResumeDownload />
          </div>
        </div>
        <div className="sm:block hidden">
          <MyImage2 />
        </div>
      </div>
    </div>
  );
}
