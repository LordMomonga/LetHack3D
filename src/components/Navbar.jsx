import { BiHomeAlt } from "react-icons/bi"; 
import { BiLibrary } from "react-icons/bi"; 
import { AiOutlineUser } from "react-icons/ai";
import { createElement } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const nav = [
    {
      link: "/",
      icon: BiHomeAlt,
      name: "Home",
    },
    {
      link: "/courses",
      icon: BiLibrary,
      name: "Courses",
    },
    {
      link: "/profile",
      icon: AiOutlineUser,
      name: "Profil",
    },
  ];

  return (
    <div className="flex justify-center w-full">
      <nav
        id="navbar"
        className="fixed z-20 w-full border-t border-gray-500 rounded-[8px_8px_0_0] md:rounded-lg sm:max-w-2xl mx-3 grid grid-cols-[1fr_1fr_1fr] gap-3 bg-white shadow-card dark:shadow-none dark:bg-dark-accent/50 backdrop-blur-md p-2 dark:backdrop-blur-md duration-300 bottom-0 sm:bottom-10"
      >
        {nav.map((item, key) => (
          <NavLink
            key={key}
            to={item.link}
            className={`relative rounded-full !w-full text-xl px-4 py-3 sm:cursor-pointer hover:bg-primary flex justify-center items-center hover:text-white transition-all`}
          >
            <div
              className={`${item.center && 'add_btn_active scale-125 bg-gray-300 !text-writing dark:!text-white ring-white/50 dark:bg-dark ring-4 dark:ring-dark-accent/50 absolute -top-2 rounded-full p-3'} flex justify-center items-center gap-1`}
            >
              {createElement(item.icon)} {!item.center && <span className="text-sm">{item?.name}</span>}
            </div>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};