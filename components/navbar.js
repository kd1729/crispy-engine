import Link from "next/link";

const navigationRoutes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "Skills",
    path: "/skills",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Experience",
    path: "/experience",
  },
  {
    name: "Blogs",
    path: "/blogs",
  },
];

function NavBar() {
  return (
    <div className="text-xl bg-emerald-800 flex justify-end">
      {navigationRoutes.map((route) => (
        <Link key={route.name} href={route.path} passHref>
          <div className="text-gray-50 m-4 hover:bg-emerald-700">
            {route.name}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default NavBar;
