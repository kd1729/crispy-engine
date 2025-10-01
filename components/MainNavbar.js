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
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Experiences",
    path: "/experience",
  },
  {
    name: "Blogs",
    path: "/blogs",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

function MainNavbar({ activeSection }) {
  return (
    <div className="navbar-bgcolor sm:flex grid sm:py-0 py-2 grid-cols-3 gap-2 w-screen justify-center items-center fixed z-50">
      {navigationRoutes.map((route) => (
        <Link key={route.name} href={route.path} passHref>
          <div
            className={
              [route.name === activeSection
                ? "text-blue-300 underline underline-offset-4 decoration-2": "text-white/90",
                 "text-center sm:text-2xl text-lg sm:m-8 hover:text-blue-200 transition-all duration-300 cursor-pointer"].join(" ")
            }
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

export default MainNavbar;
