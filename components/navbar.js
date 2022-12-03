import Link from "next/link";

function NavBar() {
  return (
    <div className="bg-slate-500">
      <Link href="/home">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/skills">Skills</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/experience">Experience</Link>
      <Link href="/blogs">Blogs</Link>
    </div>
  );
}

export default NavBar;
