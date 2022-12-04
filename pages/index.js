import NavBar from "../components/NavBar.js";
import MyImage from "../components/MyImage.js";
import MyName from "../components/MyName.js";
import ResumeDownload from "../components/ResumeDownload.js";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="bg-black h-auto w-auto flex flex-row justify-around mt-40">
        <div>
          <MyName />
          <ResumeDownload />
        </div>
        <MyImage />
      </div>
    </>
  );
}
