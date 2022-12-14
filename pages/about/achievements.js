import MainNavbar from "../../components/MainNavbar.js";
import InnerNavbar from "../../components/InnerNavbar.js";

const myAchievements = [[], [], [], []];

export default function Achievements() {
  return (
    <div>
      <MainNavbar activeSection="About" />

      <div className="sm:px-40 px-10">
        <InnerNavbar activeSection="Achievements" />

        <div className="flex flex-col gap-20 justify-between items-center">
          <h1 className="text-white pt-10 sm:text-5xl text-3xl font-semibold">
            My Achievements
          </h1>
        </div>
        <div className="text-white pt-10 sm:text-4xl text-2xl font-semibold">
          Coming Soon!
        </div>
      </div>

      <hr className="mx-auto border-2 border-white sm:my-20 my-10 w-[80%]" />
    </div>
  );
}
