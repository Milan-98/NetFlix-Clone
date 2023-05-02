import React, { useState } from "react";
import User1 from "../../assets/User1.png";
import User2 from "../../assets/User2.png";
import User3 from "../../assets/User3.jfif";
import User4 from "../../assets/User4.jpg";
import User5 from "../../assets/User5.png";
import { Link } from "react-router-dom";
import { setProfile } from "../../Store/profile";
import { useDispatch } from "react-redux";
import Netflix from "../../assets/NetFlix2.png";
import NetflixAnimation from "../../assets/NetFlix Animation.gif";

const Intro = () => {
  const [imageArray, setImageArray] = useState([User1, User2]);
  const [imageContainer, setImageContainer] = useState([User3, User4, User5]);
  const [count, setCount] = useState(0);
  const [selected, setSelected] = useState(false);
  const [NetflixPromo, setNetflixPromo] = useState(true);

  const dispatch = useDispatch();

  const SetUserProfile = (payload) => {
    dispatch(setProfile(payload));
  };

  useState(() => {
    setTimeout(() => {
      setNetflixPromo(false);
    }, 1650);
  }, []);

  return NetflixPromo ? (
    <div className="grid h-screen place-items-center ">
      <img src={NetflixAnimation} alt="netflix image" />
    </div>
  ) : (
    <div className="grid px-10">
      <img className="mx-auto w-32 md:w-48" src={Netflix} alt="" />
      <p className="mx-auto mb-3 mt-10 text-lg text-white md:mb-8 md:mt-20 md:text-5xl md:font-semibold">
        {" "}
        Who's Watching?
      </p>
      <ul className="md:grid-row-1 ml-7 grid h-fit grid-cols-2 gap-3    md:mx-auto  md:ml-48 md:w-fit md:grid-flow-col  md:gap-6">
        {imageArray.map((i,j) => {
          return (
            <li
              key={i.substring(12, 17)}
              className="text-xs md:flex md:w-fit md:flex-col"
            >
              <Link to="/new">
                {" "}
                <img
                  onClick={(e) => {
                    {
                      selected ? " " : (e.target.style.borderWidth = "3px");
                    }
                    setSelected(true);
                    SetUserProfile(`User${j+1}`);
                  }}
                  className="w-24 rounded-sm md:w-32 md:hover:border-4"
                  src={i}
                  alt="user image"
                />{" "}
              </Link>
            </li>
          );
        })}
      </ul>
      <span className="absolute bottom-24 ml-9 mt-5 flex w-20 flex-col font-extralight text-white md:right-40 md:top-64  md:w-28">
        <button
          className="h-20 rounded-md border bg-[#101010f9] px-3 py-1  text-3xl font-bold md:h-28   "
          onClick={() => {
            count > 2
              ? ""
              : (setImageArray([...imageArray, imageContainer[count]]),
                setCount(count + 1));
          }}
        >
          +
        </button>
      </span>
    </div>
  );
};

export default Intro;
