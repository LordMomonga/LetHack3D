import { IoIosNotificationsOutline } from "react-icons/io";
import { useState, useEffect } from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export default function Topbar() {
  const [scrollClass, setScrollClass] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrollClass(
          "backdrop-blur-xl bg-light/50 dark:bg-dark/50 rounded-full mx-auto my-1 !w-[calc(100vw-20px)] !border-white dark:!border-gray-500"
        );
      } else {
        setScrollClass("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex justify-center w-full">
      <div
        className={`max-w-7xl m-auto h-14 fixed top-0 z-40 ${scrollClass} border-b border-transparent flex justify-between items-center px-4 md:px-5 w-screen transition-all`}
      >
        <NavLink to="/" className="">
          <FaBars className="text-xl" />
        </NavLink>

        <div className="flex items-center gap-3">
          <div>
            <IoIosNotificationsOutline className="text-2xl" />
          </div>
          <div>
            <BiMoon className="text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};
