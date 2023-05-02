import React, { useState } from "react";
import User1 from "../../assets/User1.png";
import User2 from "../../assets/User2.png";
import User3 from "../../assets/User3.jfif";
import User4 from "../../assets/User4.jpg";
import User5 from "../../assets/User5.png";
import Github from "../../assets/Github.png";
import linkedIn from "../../assets/linkedIn.png";
import { useDispatch } from "react-redux";
import { setProfile } from "../../Store/profile";
import { Link } from "react-router-dom";

const Profile = () => {
  const [imageArray, setImageArray] = useState([User1, User2]);
  const [count, setCount] = useState(0);
  const [imageContainer, setImageContainer] = useState([User3, User4, User5]);
  const [selected, setSelected] = useState(false);
  const [display, setDisplay] = useState(false);
  const dispatch = useDispatch();

  const SetUserProfile = (payload) => {
    dispatch(setProfile(payload));
  };

  display &&
    setTimeout(() => {
      setDisplay(false);
    }, 1000);
  return (
    <div className="h-[90vh] text-white">
      <div className="flex items-center justify-center px-10">
        <ul className="mt-5 flex h-fit w-[60vw]  flex-wrap md:mt-20">
          {imageArray.map((i,j) => {
            return (
              <li key={i.substring(12, 17)} className="mb-2 mr-5 text-xs">
                <Link to="/home">
                  {" "}
                  <img
                    onClick={(e) => {
                      {
                        selected ? " " : (e.target.style.borderWidth = "3px");
                      }
                      setSelected(true);
                      SetUserProfile(`User${j+1}`);
                    }}
                    className="w-12 rounded-sm md:w-28 md:hover:border-4"
                    src={i}
                    alt="user image"
                  />{" "}
                </Link>
              
              </li>
            );
          })}
        </ul>
        <span className="justify-centern absolute right-10 top-[4.8rem] flex flex-col items-center font-extralight text-white md:right-32 md:top-[5rem]">
          <button
            className="rounded-xl border bg-[#101010f9] px-3    py-1 text-3xl font-bold md:mt-16 md:px-8 md:py-6   "
            onClick={() => {
              count > 2
                ? ""
                : (setImageArray([...imageArray, imageContainer[count]]),
                  setCount(count + 1),
                  setDisplay(true));
            }}
          >
            +
          </button>
          <span className="mt-1 text-sm md:hidden">Add</span>
        </span>
      </div>
      <ul className="absolute bottom-48 w-full text-base font-light text-slate-200 md:static md:mt-20 md:grid   md:grid-cols-2  md:gap-2 md:font-semibold">
        <Link to="/watchlist">
          {" "}
          <li className="mx-3 mb-3 flex h-12 cursor-pointer items-center rounded-md bg-[#151414e9] px-3 md:py-8">
            <svg
              className="w-5 fill-white md:w-6"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 26.016v-20q0-2.496 1.76-4.256t4.256-1.76h20q2.464 0 4.224 1.76t1.76 4.256v20q0 2.496-1.76 4.224t-4.224 1.76h-20q-2.496 0-4.256-1.76t-1.76-4.224zM4 26.016q0 0.832 0.576 1.408t1.44 0.576h20q0.8 0 1.408-0.576t0.576-1.408v-20q0-0.832-0.576-1.408t-1.408-0.608h-20q-0.832 0-1.44 0.608t-0.576 1.408v20zM8 24v-4h4v4h-4zM8 18.016v-4h4v4h-4zM8 12v-4h4v4h-4zM14.016 24v-4h9.984v4h-9.984zM14.016 18.016v-4h9.984v4h-9.984zM14.016 12v-4h9.984v4h-9.984z"></path>
            </svg>
            <span className="ml-4">My WatchList</span>
          </li>
        </Link>
        <li className="mx-3 mb-3 flex h-12 cursor-pointer items-center rounded-md bg-[#151414e9] px-1 md:py-8">
          <svg
            className="w-8 fill-black md:w-12"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            width="64px"
            height="64px"
          >
            <path d="M106.9,55.3c-0.8-2.8-1.8-5.4-3.2-7.9l8.8-8.8L99.8,26l-8.8,8.8c-4.9-2.8-10.5-4.3-16.3-4.4l-3.2-12l-17.3,4.6l3.2,12c-5,2.9-9.1,7.1-11.9,11.9l-12-3.2L29,61.1l12,3.2c0,2.8,0.4,5.6,1.1,8.4c0.8,2.8,1.8,5.4,3.2,7.9l-8.8,8.8L49.2,102l8.8-8.8c4.9,2.8,10.5,4.3,16.3,4.4l3.2,12l17.3-4.6l-3.2-12c5-2.9,9.1-7.1,11.9-11.9l12,3.2l4.6-17.3l-12-3.2C108.1,60.9,107.7,58.1,106.9,55.3z M78.6,79.1c-8.4,2.2-16.9-2.7-19.2-11.1s2.7-16.9,11.1-19.2c8.4-2.2,16.9,2.7,19.2,11.1C91.9,68.3,86.9,76.9,78.6,79.1z" />
            <path
              fill="#fff"
              d="M96.9,55.3c-0.8-2.8-1.8-5.4-3.2-7.9l8.8-8.8L89.8,26l-8.8,8.8c-4.9-2.8-10.5-4.3-16.3-4.4l-3.2-12l-17.3,4.6l3.2,12c-5,2.9-9.1,7.1-11.9,11.9l-12-3.2L19,61.1l12,3.2c0,2.8,0.4,5.6,1.1,8.4c0.8,2.8,1.8,5.4,3.2,7.9l-8.8,8.8L39.2,102l8.8-8.8c4.9,2.8,10.5,4.3,16.3,4.4l3.2,12l17.3-4.6l-3.2-12c5-2.9,9.1-7.1,11.9-11.9l12,3.2l4.6-17.3l-12-3.2C98.1,60.9,97.7,58.1,96.9,55.3z M68.6,79.1c-8.4,2.2-16.9-2.7-19.2-11.1s2.7-16.9,11.1-19.2c8.4-2.2,16.9,2.7,19.2,11.1C81.9,68.3,76.9,76.9,68.6,79.1z"
            />
            <path
              fill="#3f4a54"
              d="M67.5,112.5c-1.3,0-2.5-0.9-2.9-2.2l-2.6-9.8c-4.6-0.3-9.2-1.6-13.4-3.6l-7.2,7.2c-1.2,1.2-3.1,1.2-4.2,0L24.4,91.4c-1.2-1.2-1.2-3.1,0-4.2l7.2-7.2c-1-2.1-1.8-4.3-2.4-6.5c-0.6-2.3-1-4.6-1.2-6.9L18.2,64c-0.8-0.2-1.4-0.7-1.8-1.4s-0.5-1.5-0.3-2.3L20.7,43c0.2-0.8,0.7-1.4,1.4-1.8c0.7-0.4,1.5-0.5,2.3-0.3l9.8,2.6c2.6-3.9,5.9-7.2,9.8-9.8l-2.6-9.8c-0.4-1.6,0.5-3.2,2.1-3.7l17.3-4.6c1.6-0.4,3.2,0.5,3.7,2.1l2.6,9.8c4.6,0.3,9.2,1.6,13.4,3.6l7.2-7.2c1.1-1.1,3.1-1.1,4.2,0l12.7,12.7c1.2,1.2,1.2,3.1,0,4.2L97.4,48c1,2.1,1.8,4.3,2.4,6.5c0.6,2.3,1,4.6,1.2,6.9l9.8,2.6c1.6,0.4,2.5,2.1,2.1,3.7L108.3,85c-0.2,0.8-0.7,1.4-1.4,1.8c-0.7,0.4-1.5,0.5-2.3,0.3l-9.8-2.6c-2.6,3.9-5.9,7.2-9.8,9.8l2.6,9.8c0.4,1.6-0.5,3.2-2.1,3.7l-17.3,4.6C68,112.5,67.7,112.5,67.5,112.5z M48,90.2c0.5,0,1,0.1,1.5,0.4c4.5,2.6,9.6,3.9,14.8,4c1.3,0,2.5,0.9,2.9,2.2l2.4,9.1l11.5-3.1l-2.4-9.1c-0.3-1.3,0.2-2.7,1.4-3.4c4.5-2.6,8.2-6.4,10.8-10.8c0.7-1.2,2.1-1.7,3.4-1.4l9.1,2.4l3.1-11.5l-9.1-2.4c-1.3-0.3-2.2-1.5-2.2-2.9c0-2.6-0.4-5.2-1-7.7l0,0c-0.7-2.5-1.7-4.9-2.9-7.2c-0.7-1.2-0.5-2.6,0.5-3.6l6.6-6.6l-8.4-8.4l-6.6,6.6c-1,1-2.4,1.2-3.6,0.5c-4.5-2.6-9.6-3.9-14.8-4c-1.3,0-2.5-0.9-2.9-2.2l-2.4-9.1L48,25.2l2.4,9.1c0.3,1.3-0.2,2.7-1.4,3.4c-4.5,2.6-8.2,6.4-10.8,10.8c-0.7,1.2-2.1,1.7-3.4,1.4l-9.1-2.4l-3.1,11.5l9.1,2.4c1.3,0.3,2.2,1.5,2.2,2.9c0,2.6,0.4,5.2,1,7.7c0.7,2.5,1.7,4.9,2.9,7.2c0.7,1.2,0.5,2.6-0.5,3.6l-6.6,6.6l8.4,8.4l6.7-6.6C46.4,90.5,47.2,90.2,48,90.2z M64.5,82.7c-3.2,0-6.4-0.8-9.3-2.5c-4.3-2.5-7.4-6.5-8.7-11.3c-1.3-4.8-0.6-9.8,1.9-14.2c2.5-4.3,6.5-7.4,11.3-8.7c9.9-2.7,20.2,3.3,22.9,13.2c1.3,4.8,0.6,9.8-1.9,14.2c-2.5,4.3-6.5,7.4-11.3,8.7l0,0C67.7,82.5,66.1,82.7,64.5,82.7z M68.6,79.1L68.6,79.1L68.6,79.1z M64.5,51.3c-1.1,0-2.2,0.1-3.3,0.4c-3.3,0.9-6,3-7.7,5.9c-1.7,2.9-2.1,6.3-1.3,9.6c0.9,3.3,3,6,5.9,7.7c2.9,1.7,6.3,2.1,9.6,1.3l0,0c3.3-0.9,6-3,7.7-5.9c1.7-2.9,2.1-6.3,1.3-9.6C75.2,55.1,70.1,51.3,64.5,51.3z"
            />
          </svg>
          <span className="ml-2">App Settings</span>
        </li>

        <li
          className="mx-3 mb-3 flex h-12 cursor-pointer items-center rounded-md bg-[#151414e9] px-2 md:py-8"
          onClick={() =>
            window.open("https://www.linkedin.com/in/milan-parmar-/")
          }
        >
          <img
            className="w-8 rounded-full bg-white md:w-12"
            src={linkedIn}
            alt="LinkedIn image"
          />
          <span className="ml-3">Visit My LinkedIn</span>
        </li>
        <li
          className="mx-3 mb-3 flex h-12 cursor-pointer items-center rounded-md bg-[#151414e9] px-2 md:py-8"
          onClick={() =>
            window.open("https://github.com/Milan-98?tab=repositories")
          }
        >
          <img
            className="w-8 rounded-full bg-white md:w-12"
            src={Github}
            alt="github image"
          />
          <span className="ml-3">Visit My GitHub</span>
        </li>
      </ul>

      <p className="absolute bottom-32 w-full text-center  font-mono text-xl text-neutral-700">
        Sign Out
      </p>
      <p
        className={`fixed bottom-20 left-20 animate-pulse rounded-lg bg-[#131212] px-10 py-3 font-thin text-white md:left-[36.4rem] ${
          display ? "block" : "hidden"
        } `}
      >
        New User Added
      </p>
    </div>
  );
};

export default Profile;
