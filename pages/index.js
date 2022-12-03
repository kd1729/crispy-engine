import NavBar from "../components/NavBar.js";
import MyImage from "../components/MyImage.js";
import MyName from "../components/MyName.js";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="bg-black h-screen w-screen flex flex-row justify-around pt-8">
        <MyName />
        <MyImage />
      </div>
    </>
  );
}
