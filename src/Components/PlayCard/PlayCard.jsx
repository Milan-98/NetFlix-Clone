import React, { useEffect, useState } from "react";
import axios from "../../Requests/axios";
import PlaySvg from "../../assets/Play.svg";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link } from "react-router-dom";
import { addId } from "../../Store/watchList";
import { useDispatch } from "react-redux";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const PlayCard = ({ fetchUrl }) => {
  const [receivedArray, setReceivedArray] = useState([]);
  const [random, setRandom] = useState(Math.floor(Math.random() * 20));
  const [Loading, SetLoading] = useState(true);
  const [display, setDisplay] = useState(false);
  const [trailerURL, setTrailerURL] = useState("");
  const [playButton, setPlayButton] = useState(3);

  useEffect(() => {
    async function dataFetcher() {
      let data = await axios.get(fetchUrl);
      setReceivedArray(data.data.results);
    }
    dataFetcher();
    setTimeout(() => {
      SetLoading(false);
    }, 500);
    window.scroll(0, 0);
  }, []);

  display &&
    setTimeout(() => {
      setDisplay(false);
    }, 1000);
  const dispatch = useDispatch();

  const getId = (payload) => {
    async function MovieFetcher() {
      const response = await fetch(
        `https://api.themoviedb.org/3${payload}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
      );
      const data = await response.json();
      dispatch(addId(data));
    }
    MovieFetcher();
  };

  const opts = {
    height: "200",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerURL) {
      setTrailerURL("");
    } else {
      movieTrailer(movie?.original_title || movie?.title || movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerURL(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  if (playButton % 3 == 1) {
    setTimeout(() => {
      setPlayButton(playButton + 1);
    }, 3500);
  }

  return Loading ? (
    <>
      <div className="relative mx-auto h-[30rem] w-[19.5rem] animate-pulse  space-y-5 overflow-hidden rounded-3xl bg-gray-800 bg-gradient-to-r from-transparent via-gray-600  to-transparent pb-2 shadow-xl shadow-black/5 before:absolute  before:inset-0 before:-translate-x-full before:animate-[shimmer_1s_infinite] before:border-t before:border-gray-900 before:bg-gradient-to-r before:from-transparent before:via-gray-900 before:to-transparent md:h-[43rem] md:w-[77rem] md:rounded-none">
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <p>
            <Skeleton duration={2} />
          </p>
        </SkeletonTheme>
      </div>
      <div className="mx-10 mt-2 flex  md:absolute md:left-16 md:top-[30.9rem] ">
        <div className="relative h-8 w-40 animate-pulse  space-y-5 overflow-hidden rounded-sm bg-gray-800  bg-gradient-to-r from-transparent via-gray-600 to-transparent pb-2  shadow-xl shadow-black/5 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1s_infinite] before:border-t before:border-gray-900 before:bg-gradient-to-r before:from-transparent before:via-gray-900 before:to-transparent">
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <p>
              <Skeleton duration={2} />
            </p>
          </SkeletonTheme>
        </div>
        <div className=" rounded-sm'  relative mx-auto   ml-2  flex w-40 animate-pulse items-center  justify-center space-y-5 overflow-hidden rounded-sm bg-gray-800 bg-gradient-to-r from-transparent  via-gray-600 to-transparent pb-2 font-medium text-black  shadow-xl shadow-black/5 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1s_infinite] before:border-t before:border-gray-900 before:bg-gradient-to-r before:from-transparent before:via-gray-900 before:to-transparent">
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <p>
              <Skeleton duration={2} />
            </p>
          </SkeletonTheme>
        </div>
      </div>
    </>
  ) : (
    <div className="grid place-items-center">
      <Link
        to={`/movie/${
          receivedArray && receivedArray[random] && receivedArray[random].id
        }`}
      >
        {" "}
        <div className="relative w-[19.5rem] rounded-3xl border-[.7px] md:w-fit md:rounded-none md:border-none">
          {receivedArray && receivedArray.length > 2 && (
            <>
              {" "}
              <img
                className="rounded-3xl md:hidden "
                src={`https://image.tmdb.org/t/p/original/${receivedArray[random].poster_path}`}
                alt="receivedArray[random].original_title"
              />{" "}
              <img
                className="hidden rounded-3xl md:block md:w-[77rem] md:rounded-none md:rounded-b-sm"
                src={`https://image.tmdb.org/t/p/original/${receivedArray[random].backdrop_path}`}
                alt="receivedArray[random].original_title"
              />
            </>
          )}
        </div>
      </Link>
      <div className="hidden text-white md:absolute md:left-16 md:top-[28rem] md:block">
        <h1 className="mb-16 text-3xl font-bold">
          {receivedArray &&
            receivedArray[random] &&
            receivedArray[random].original_title}
        </h1>
        <h1 className="w-[40rem] text-base font-medium">
          {receivedArray &&
            receivedArray[random] &&
            receivedArray[random].overview}
        </h1>
      </div>
      {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
      <div className="mt-4 flex ">
        {receivedArray[random] && receivedArray[random].original_title && (
          <div className="flex md:absolute md:left-16 md:top-[30.9rem]">
            <button
              className={` mr-3 flex items-center justify-center rounded-sm bg-white px-12 py-1 font-medium text-black `}
              onClick={() => {
                handleClick(receivedArray[random]),
                  window.scroll(0, 200),
                  setPlayButton(playButton + 1);
              }}
            >
              <img
                className={`${
                  playButton % 3 == 1 ? "animate-spin" : "none"
                } mr-1 w-3`}
                src={PlaySvg}
                alt="PlayButton Image"
              />
              {playButton % 3 == 1
                ? "Loading..."
                : playButton % 3 == 2
                ? "Close"
                : playButton % 3 == 0
                ? "Play"
                : " "}
            </button>
            <button
              id={`/movie/${
                receivedArray &&
                receivedArray[random] &&
                receivedArray[random].id
              }`}
              className="flex items-center rounded-sm bg-white px-8 py-1 font-medium"
              onClick={(e) => {
                getId(e.target.id), setDisplay(true);
              }}
            >
              {" "}
              <span className="mr-1 text-xl">+</span> My List{" "}
            </button>
          </div>
        )}
      </div>
      <p
        className={`fixed bottom-20 left-20 animate-pulse rounded-lg bg-[#000000] px-10 py-3 font-thin text-white md:left-[35rem] ${
          display ? "block" : "hidden"
        } `}
      >
        Added to WatchList
      </p>
    </div>
  );
};
export default PlayCard;
