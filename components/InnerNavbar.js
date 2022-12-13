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
    <div className="flex text-white pt-32 font-semibold justify-center">
      {navigationRoutes.map((route) => (
        <Link key={route.name} href={route.path} passHref>
          <div
            className={[
              route.name === activeSection
                ? "text-[#00c8ff] underline underline-offset-4" : "text-white",
                  "text-xl m-4 hover:text-[#82ddf6]",
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
