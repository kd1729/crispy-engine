import NavBar from "../components/NavBar.js";
import MyImage2 from "../components/MyImage2.js";
import MyName from "../components/MyName.js";
import ResumeDownload from "../components/ResumeDownload.js";


export default function Home() {
  return (

    <div>
      <NavBar />
      <div className="bg-[#393E46] pl-40 pt-60">
        <div className="">
          <MyName />
          <ResumeDownload />
        </div>
        <MyImage2 />
      </div>
    </div>
  );
}
