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

export default function AboutMeNavbar({ activeSection }) {
  return (
    <div className="flex text-white pt-20 font-semibold">
      {navigationRoutes.map((route) => (
        <Link key={route.name} href={route.path} passHref>
          <div
            className={[
              route.name === activeSection
                ? "text-[#2bff00] underline underline-offset-4 m-4"
                : "text-white",
              "text-lg m-4 hover:text-[#60f08b]",
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
