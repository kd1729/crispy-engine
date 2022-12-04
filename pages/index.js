import NavBar from "../components/NavBar.js";
import MyImage from "../components/MyImage.js";
import MyName from "../components/MyName.js";
import ResumeDownload from "../components/ResumeDownload.js";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="bg-[#393E46] flex flex-row justify-around pt-60">
        <div className="">
          <MyName />
          <ResumeDownload />
        </div>
        <MyImage />
      </div>
    </div>
  );
}
