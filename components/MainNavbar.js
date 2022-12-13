import Link from "next/link";

const navigationRoutes = [
  {
    name: "Home",
    path: "/",
    width: "w-12",
  },
  {
    name: "About",
    path: "/about",
    width: "w-12",
  },
  {
    name: "Projects",
    path: "/projects",
    width: "w-16",
  },
  {
    name: "Experiences",
    path: "/experience",
    width: "w-24",
  },
  {
    name: "Blogs",
    path: "/blogs",
    width: "w-10",
  },
  {
    name: "Contact",
    path: "/contact",
    width: "w-20",
  },
];

function MainNavbar({ activeSection }) {
  return (
    <div className="navbar-bgcolor flex gap-2 w-screen justify-center fixed z-10 ">
      {navigationRoutes.map((route) => (
        <Link key={route.name} href={route.path} passHref>
          <div
            className={
              [route.name === activeSection
                ? "text-[#fd5d5d] underline underline-offset-4": "text-white",
                 "text-2xl m-8 hover:text-[#e37c73]"].join(" ")
            }
          >
            <div className= { [route.width, "font-semibold ease-in-out duration-300"].join(" ")}>
              {route.name}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default MainNavbar;
