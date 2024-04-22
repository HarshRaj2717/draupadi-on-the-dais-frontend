import Link from "next/link";

export default function NavBar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href={"/"} className="btn btn-ghost text-xl">
          Draupadi On The Dais
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={"/login"} className="btn btn-sm btn-primary">
              Get Started
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
