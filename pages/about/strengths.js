import NavBar from "../../components/NavBar";

const myStrengths = [
  {
    name: "Achiever",
    desc: "People exceptionally talented in the Achiever theme work hard and possess a great deal of stamina. They take immense satisfaction in being busy and productive.",
  },
  {
    name: "Restorative",
    desc: "People exceptionally talented in the Restorative theme are adept at dealing with problems. They are good at figuring out what is wrong and resolving it.",
  },
  {
    name: "Focus",
    desc: "People exceptionally talented in the Focus theme can take a direction, follow through, and make the corrections necessary to stay on track. They prioritize, then act.",
  },
  {
    name: "Futuristic",
    desc: "People exceptionally talented in the Futuristic theme are inspired by the future and what could be. They inspire others with their visions of the future.",
  },
  {
    name: "Competitive",
    desc: "People exceptionally talented in the Competitive theme enjoy measuring themselves against others. They strive to win first place and revel in contests, whether games or negotiations.",
  },
  {
    name: "Optimistic",
    desc: "People exceptionally talented in the Optimistic theme generally expect the best. They tend to believe that everything will turn out for the best.",
  },
];

export default function strengths() {
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
            My Gallup Strengths
          </h1>

          <ol className="grid grid-cols-3 gap-20">
            {myStrengths.map((strength) => (
              <li key={strength.name} className="flex flex-col gap-5">
                <div className="text-white text-2xl font-semibold">
                  {strength.name}
                </div>
                <div className="text-white text-lg font-semibold">
                  {strength.desc}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <hr className="mx-auto border-2 border-white my-20 w-[80%]" />
    </div>
  );
}
