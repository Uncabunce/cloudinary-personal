import Link from "next/link";

export default function Header() {
    return (
        <div className="navbar bg-base-100 shadow-sm">
          <a className="btn btn-ghost text-xl">SCP FILES</a>
          <div className="flex-1"></div>
          <ul className="menu menu-horizontal p-0">
            <li>
                <Link href="/skills">Skills</Link>
            </li>
            <li>
                <Link href="/">About</Link>
            </li>
            <li>
                <Link href="/login">Login</Link>
            </li>
            <li>
                <Link href="/register">Register</Link>
            </li>
          </ul>
        </div>
    );
}