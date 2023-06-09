import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "skills",
    },
    {
      id: 3,
      link: "technologies",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-24 text-white fixed bg-black px-4">
      <div>
        <h1 className="text-3xl font-signature">Nikola Ljangovski</h1>
      </div>
      <ul className="flex hidden md:flex">
        {links.map(({ id, link }) => {
          return (
            <li
              className="px-4 cursor-pointer capitalize font-medium
               text-gray-500 hover:scale-105 duration-200"
              key={id}
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          );
        })}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => {
            return (
              <li
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
                key={id}
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
export default NavBar;
