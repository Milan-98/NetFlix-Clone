import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Error from "../../assets/imgError.png";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useDispatch } from "react-redux";
import { addId } from "../../Store/watchList";
import PlaySvg from "../../assets/Play.svg";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const Movie = () => {
  const { id } = useParams({});
  const [movie, setMovie] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [display, setDisplay] = useState(false);
  const [playButton, setPlayButton] = useState(3);
  const [trailerURL, setTrailerURL] = useState("");

  if (playButton % 3 == 1) {
    setTimeout(() => {
      setPlayButton(playButton + 1);
    }, 3500);
  }
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

  const dispatch = useDispatch();
  display &&
    setTimeout(() => {
      setDisplay(false);
    }, 1000);
  useEffect(() => {
    async function MovieFetcher() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
      );
      const MovieData = await response.json();
      setMovie(MovieData);
    }
    MovieFetcher();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    window.scroll(0, 0);
  }, []);

  const setId = (payload) => {
    async function MovieFetcher() {
      const response = await fetch(
        `https://api.themoviedb.org/3${payload}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
      );
      const data = await response.json();
      dispatch(addId(data));
    }
    MovieFetcher();
  };
  return Loading ? (
    <>
      <div className="relative mx-auto h-[12.5rem] w-full  animate-pulse space-y-5  overflow-hidden bg-gray-800 bg-gradient-to-r from-transparent  via-gray-600 to-transparent pb-2 shadow-xl shadow-black/5  before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1s_infinite] before:border-t before:border-gray-900 before:bg-gradient-to-r before:from-transparent before:via-gray-900 before:to-transparent md:h-[42rem] md:w-[72rem]">
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <p>
            <Skeleton duration={2} />
          </p>
        </SkeletonTheme>
      </div>
      <div className="relative -mt-32 ml-4 h-[12.5rem]  w-36 animate-pulse space-y-5 overflow-hidden rounded-xl   bg-gray-800   bg-gradient-to-r from-transparent via-gray-600 to-transparent  pb-2 shadow-xl shadow-black/5 before:absolute before:inset-0  before:-translate-x-full before:animate-[shimmer_1s_infinite] before:border-t before:border-gray-900 before:bg-gradient-to-r before:from-transparent before:via-gray-900 before:to-transparent md:-mt-[16rem] md:ml-32 md:h-[26rem] md:w-72">
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <p>
            <Skeleton duration={2} />
          </p>
        </SkeletonTheme>
      </div>
    </>
  ) : (
    <div className="text-white">
      <div className="md:grid md:place-items-center">
        {movie && movie.backdrop_path ? (
          <img
            className="md:w-[74rem] md:rounded-b-md"
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt={movie.original_title}
          />
        ) : (
          <img src={Error} />
        )}
      </div>
      {movie && movie.poster_path ? (
        <img
          className="-mt-32 ml-4 w-36 rounded-xl md:-mt-[16rem] md:ml-32 md:w-72"
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={movie.original_title}
        />
      ) : (
        <img className="-mt-10 ml-6 w-40" src={Error} />
      )}

      <button
        id={`/movie/${movie.id}`}
        className={`${
          movie.poster_path || movie.backdrop_path ? "block" : "hidden"
        } absolute right-5 top-[17.2rem] ml-12 mt-6 flex items-center rounded-lg  bg-white px-12 py-[.32rem] font-light text-black md:right-20 md:top-[45rem] md:font-semibold`}
        onClick={(e) => {
          setId(e.target.id), setDisplay(true);
        }}
      >
        {" "}
        <span className="mr-1 text-xl">+</span> My List{" "}
      </button>
      <button
        className={`${
          movie.title || movie.original_title ? "block" : "hidden"
        } absolute right-2  top-[14.6rem]  ml-12  mr-3 mt-6 flex w-40 items-center  justify-center  rounded-lg bg-white py-[.42rem] font-light text-black md:right-[4.5rem] md:top-[42rem] md:font-semibold `}
        onClick={() => {
          handleClick(movie),
            window.scroll(0, 300),
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

      {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
      <h1 className="ml-5 mt-2  text-2xl font-bold md:absolute  md:left-[25.3rem] md:top-[41.5rem] md:text-3xl">
        {movie.original_title}
      </h1>
      <h1 className="bg-red mb-1 ml-5 text-xs md:absolute md:left-[25.3rem] md:top-[44rem] md:pt-2 md:text-sm md:font-normal">
        {movie.tagline}
      </h1>
      <h1 className=" ml-5 font-semibold md:absolute md:left-[25.3rem] md:top-[44.8rem] md:pt-3 md:text-xl">
        {Math.round(movie.vote_average * 10) / 10} ⭐
        <span className="ml-1   text-xs font-normal md:text-sm">
          ({movie.vote_count}) Votes
        </span>
      </h1>
      <h1 className="ml-5 text-sm font-thin md:absolute md:left-[25.3rem] md:top-[46.8rem] md:pt-[.3rem]  md:text-base md:font-medium">
        {movie.runtime} mins
      </h1>
      <h1 className="mb-2 ml-5 text-sm font-extralight md:absolute md:left-[25.3rem] md:top-[48.4rem] md:text-base md:font-normal">
        {movie.release_date}
      </h1>
      <ul className="ml-2 flex flex-wrap gap-1 md:absolute md:left-[25.3rem] md:top-[50.2rem] md:gap-5 md:pl-2">
        {movie && movie.genres
          ? movie.genres.map((i, j) => (
              <li
                className="rounded-full border px-2 py-1 md:border-2 md:px-3 md:font-medium"
                key={j}
              >
                {i.name}
              </li>
            ))
          : " "}
      </ul>

      <h1 className="ml-2 mt-5   text-2xl font-bold text-slate-300 md:mb-5 md:ml-20 md:mt-8  md:text-3xl">
        Synopsis
      </h1>
      <h1 className="mx-2 mt-1 text-sm md:ml-20 md:w-[50rem] md:text-lg">
        {movie && movie.overview
          ? movie.overview
          : "API doesn't Provide Description too"}
      </h1>
      {movie && movie.homepage ? (
        <a id="row" href={movie && movie.homepage}>
          {" "}
          <button className="mb-10 ml-1 mt-7 rounded-full bg-neutral-900 px-3 py-3 font-semibold md:ml-[4.9rem] md:mt-5 md:rounded-md md:px-6 md:py-4  md:hover:text-gray-700 ">
            Movie HomePage
          </button>
        </a>
      ) : (
        ""
      )}
      {movie &&
      movie.production_companies &&
      movie.production_companies.length > 0 ? (
        <h1 className="mt-10 rounded-full border-b-2 pb-2 text-center text-2xl font-bold text-neutral-300 md:mx-auto md:mt-5 md:w-fit md:border-4 md:px-10 md:py-2 md:text-3xl">
          Production Companies
        </h1>
      ) : (
        " "
      )}

      <ul className="mt-2 grid place-items-center gap-10 pb-14 pt-14 text-center text-xl font-semibold text-zinc-500 md:col-auto md:grid-cols-3 md:gap-5 ">
        {movie && movie.production_companies && movie.production_companies
          ? movie.production_companies.map((i) => {
              return (
                <li key={i.id} className="rounded-lg bg-[#ffffffe3] px-10 py-4">
                  {i.logo_path ? (
                    <>
                      <img
                        src={`https://image.tmdb.org/t/p/original/${i.logo_path}`}
                        className="w-60 rounded-lg"
                      />
                      <h1 className="pt-2">{i.logo_path && i.name}</h1>
                    </>
                  ) : (
                    <span className="flex flex-col">
                      ⭐<span className="mt-5">GetFlix Originals</span>
                    </span>
                  )}
                </li>
              );
            })
          : ""}
      </ul>
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

export default Movie;
