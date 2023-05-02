import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [fieldActive, setfieldActive] = useState({
    HotnNew: false,
    Explore: false,
    Watchlist: false,
  });
  return (
    <div className="fixed bottom-0 flex w-full   items-center justify-between  rounded-t-full  bg-[#101010e9] px-10 py-2 text-xs text-zinc-600 md:hidden">
      <Link to="/new">
        {" "}
        <span
          className={`grid ${
            fieldActive.HotnNew ? `fill-white` : ` fill-zinc-600`
          }   place-items-center`}
          onClick={() => {
            setfieldActive({
              ...fieldActive,
              HotnNew: true,
              Explore: false,
              Watchlist: false,
            });
          }}
        >
          <svg
            className=" w-4"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 30.016q0 0.832 0.576 1.408t1.44 0.576h28q0.8 0 1.408-0.576t0.576-1.408v-22.016q0-0.832-0.576-1.408t-1.408-0.576h-8v-4q0-0.832-0.608-1.408t-1.408-0.608h-8q-0.832 0-1.408 0.608t-0.576 1.408v4h-4v-2.016h-2.016v2.016h-1.984q-0.832 0-1.44 0.576t-0.576 1.408v22.016zM4 28v-9.984h6.368q-0.352 0.992-0.352 1.984 0 2.496 1.728 4.256t4.256 1.76 4.256-1.76 1.76-4.256q0-0.96-0.384-1.984h6.368v9.984h-24zM4 16v-5.984h24v5.984h-7.552q-1.184-1.312-2.848-1.76t-3.264 0-2.784 1.76h-7.552zM6.016 14.016h1.984v-2.016h-1.984v2.016zM10.016 14.016h1.984v-2.016h-1.984v2.016zM12 20q0-1.632 1.184-2.816t2.816-1.184 2.816 1.184 1.184 2.816-1.184 2.848-2.816 1.152-2.816-1.152-1.184-2.848zM14.016 6.016v-2.016h4v2.016h-4zM22.016 14.016h4v-2.016h-4v2.016z"></path>
          </svg>
          <span className=" pt-[.27rem]">New & Hot</span>
        </span>
      </Link>
      <Link to="/home">
        <span
          className={`grid place-items-center ${
            fieldActive.Explore ? `fill-white` : `fill-zinc-600`
          } `}
          onClick={() => {
            setfieldActive({
              ...fieldActive,
              HotnNew: false,
              Explore: true,
              Watchlist: false,
            });
          }}
        >
          <svg
            className=" h-5 w-5  "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="50px"
            height="50px"
          >
            <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z" />
          </svg>
          <span className=" mt-[.14rem] pl-1">Explore</span>
        </span>
      </Link>
      <Link to="/watchlist">
        <span
          className={`${
            fieldActive.Watchlist ? `fill-white` : `fill-zinc-600`
          } grid place-items-center `}
          onClick={() => {
            setfieldActive({
              ...fieldActive,
              HotnNew: false,
              Explore: false,
              Watchlist: true,
            });
          }}
        >
          <svg
            className=" w-4 "
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 26.016v-20q0-2.496 1.76-4.256t4.256-1.76h20q2.464 0 4.224 1.76t1.76 4.256v20q0 2.496-1.76 4.224t-4.224 1.76h-20q-2.496 0-4.256-1.76t-1.76-4.224zM4 26.016q0 0.832 0.576 1.408t1.44 0.576h20q0.8 0 1.408-0.576t0.576-1.408v-20q0-0.832-0.576-1.408t-1.408-0.608h-20q-0.832 0-1.44 0.608t-0.576 1.408v20zM8 24v-4h4v4h-4zM8 18.016v-4h4v4h-4zM8 12v-4h4v4h-4zM14.016 24v-4h9.984v4h-9.984zM14.016 18.016v-4h9.984v4h-9.984zM14.016 12v-4h9.984v4h-9.984z"></path>
          </svg>
          <span className=" pt-[.27rem]">Watch List</span>
        </span>
      </Link>
    </div>
  );
};

export default Footer;
