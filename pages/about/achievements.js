import NavBar from "../../components/navbar";

const myAchievements = [
    [],
    [],
    [],
    [],
]

export default function Achievements() {
  return (
    <div>
      <NavBar activeSection="About" />

      <div className="px-40">

        <div className="text-white pt-20 font-semibold">
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>

        <div className="flex flex-col gap-20 justify-between">
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
