import NavBar from "../components/navbar.js";
import MyImage2 from "../components/MyImage2.js";
import MyName from "../components/MyName.js";
import ResumeDownload from "../components/ResumeDownload.js";
import LinkedinButton from "../components/LinkedinButton.js";

export default function Home() {
  return (
    <div>
      <NavBar activeSection="Home" />
      <div className="pl-40 pt-60">
        <div className="">
          <div className="">
            <MyName />
          </div>
          <div className="flex">
            <LinkedinButton />
            <ResumeDownload />
          </div>
        </div>
        <MyImage2 />
      </div>
    </div>
  );
}
