import MainNavbar from "../../components/MainNavbar.js";
import AboutMeNavbar from "../../components/AboutMeNavbar";

const myAchievements = [[], [], [], []];

export default function Achievements() {
  return (
    <div>
      <MainNavbar activeSection="About" />

      <div className="px-40">
        <AboutMeNavbar activeSection="Achievements" />

        <div className="flex flex-col gap-20 justify-between items-center">
          <h1 className="text-white pt-10 text-4xl font-semibold">
            My Achievements
          </h1>
        </div>
        <div className="text-white pt-10 text-4xl font-semibold">
          Coming Soon!
        </div>
      </div>

      <hr className="mx-auto border-2 border-white my-20 w-[80%]" />
    </div>
  );
}
