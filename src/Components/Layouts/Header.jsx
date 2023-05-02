import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Netflix from "../../assets/Netflix.webp";
import NetflixLOGO from "../../assets/NetFlix2.png";
import User1 from "../../assets/User1.png";
import User2 from "../../assets/User2.png";
import User3 from "../../assets/User3.jfif";
import User4 from "../../assets/User4.jpg";
import User5 from "../../assets/User5.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  const userImage = useSelector((state) => {
    return state.ProfileData;
  });
  const listenScrollEvent = (event) => {
    if (window.scrollY > 7) {
      return setIsScrolled(true);
    } else if (window.scrollY < 7) {
      return setIsScrolled(false);
    }
  };
  return (
    <div
      className={`${
        isScrolled ? "md:bg-[#0c0c0cd5]" : "md:bg-transparent"
      } sticky top-0 z-10  flex items-center   justify-between rounded-b-lg bg-[#0c0c0cee] px-3 text-zinc-600 md:fixed md:w-full md:rounded-b-none`}
    >
      <Link to="/home" className="md:ml-10">
        {" "}
        <img
          className="w-12 rounded-full bg-transparent md:hidden "
          src={Netflix}
          alt="NetFlix Logo"
        />{" "}
        <img
          className="hidden md:block  md:w-[7.5rem]"
          src={NetflixLOGO}
          alt=""
        />{" "}
      </Link>
      <div className="hidden font-medium text-white md:-ml-[40rem] md:flex md:w-[22rem] md:justify-between ">
        <Link to="/home" className="hover:text-zinc-600">
          Home
        </Link>
        <Link to="/new" className="hover:text-zinc-600">
          New & Popular
        </Link>
        <Link to="/watchlist" className="hover:text-zinc-600 ">
          My List
        </Link>
      </div>
      <Link to="/profile" className="md:mr-12">
        <img
          className="w-7 rounded-sm md:w-9 "
          src={ eval(userImage) }
          alt="User Image"
        />
      </Link>
    </div>
  );
};

export default Header;
