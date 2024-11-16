import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="bg-gray-900 px-6 py-4 shadow-md flex justify-between items-center">
      {/* Logo Section */}
      <Link href="/">
        <a>
          <Image
            src="/logo.png" // Path to your logo
            alt="Logo"
            width={50}
            height={50}
            className="cursor-pointer"
          />
        </a>
      </Link>

      {/* Nav Links */}
      <ul className="flex space-x-6 text-gray-300">
        <li>
          <Link href="#about">
            <a className="hover:text-white transition">About</a>
          </Link>
        </li>
        <li>
          <Link href="#projects">
            <a className="hover:text-white transition">Projects</a>
          </Link>
        </li>
        <li>
          <Link href="#contact">
            <a className="hover:text-white transition">Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;