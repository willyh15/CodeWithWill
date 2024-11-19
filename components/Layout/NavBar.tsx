import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 px-6 py-4 shadow-md flex justify-between items-center">
      {/* Logo Section */}
      <Link href="/">
        <a className="flex items-center">
          <Image
            src="/logo.png" // Path to your logo
            alt="Logo"
            width={60} // Adjusted size for better visibility
            height={60}
            className="cursor-pointer"
          />
        </a>
      </Link>

      {/* Hamburger Menu */}
      <div className="relative">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-300 focus:outline-none hover:text-white transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {menuOpen && (
          <ul className="absolute right-0 mt-2 bg-gray-800 shadow-lg rounded-md py-2 w-48">
            <li className="px-4 py-2 hover:bg-gray-700">
              <Link href="#about">
                <a className="text-gray-300 hover:text-white transition">About</a>
              </Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700">
              <Link href="#projects">
                <a className="text-gray-300 hover:text-white transition">
                  Projects
                </a>
              </Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700">
              <Link href="#contact">
                <a className="text-gray-300 hover:text-white transition">
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;