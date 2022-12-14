import Link from "next/link";

const navigationRoutes = [
  {
    name: "About Me",
    path: "/about",
  },
  {
    name: "Skills",
    path: "/about/skills",
  },
  {
    name: "Strengths",
    path: "/about/strengths",
  },
  {
    name: "Achievements",
    path: "/about/achievements",
  },
];

export default function InnerNavbar({ activeSection }) {
  return (
    <div className="sm:flex grid grid-cols-2 grid-rows-2 text-white sm:pt-32 pt-24 font-semibold justify-center">
      {navigationRoutes.map((route) => (
        <Link key={route.name} href={route.path} passHref>
          <div
            className={[
              route.name === activeSection
                ? "text-[#00c8ff] underline underline-offset-4" : "text-white",
                  "sm:text-xl text-lg sm:m-4 m-1 hover:text-[#82ddf6]",
            ].join(" ")}
          >
            <div className="font-semibold ease-in-out duration-300">
              {route.name}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
