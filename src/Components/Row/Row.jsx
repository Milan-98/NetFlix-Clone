import React, { useEffect, useState } from "react";
import axios from "../../Requests/axios";
import Card from "../Card/Card";

const baseUrl = "https://image.tmdb.org/t/p/original/";
const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovieArray() {
      const recievedMoviesArray = await axios.get(fetchUrl);
      setMovies(recievedMoviesArray.data.results);
    }
    getMovieArray();
  }, []);
  return (
    <div className="pt-6">
      <h1 className="mb-2  ml-[.7rem] text-xl font-bold text-white md:font-semibold">
        {title}
      </h1>
      <div className="no-scrollbar grid grid-flow-col overflow-x-scroll px-2 md:hidden ">
        {movies &&
          movies.length > 0 &&
          movies.map((i) => (
            <Card
              key={i && i.id}
              image_src={`${baseUrl}${
                i && i.poster_path
                  ? `${i.poster_path}`
                  : "/kpTqWqLYcf1uErnx5VXLah4EWJZ.jpg"
              }`}
              image_alt={i && i.original_title}
              id={i.id}
            />
          ))}
      </div>
      <div className="no-scrollbar hidden grid-flow-col overflow-x-scroll px-2 md:grid  ">
        {movies &&
          movies.length > 0 &&
          movies.map((i) => (
            <Card
              key={i && i.id}
              image_src={`${baseUrl}${
                i && i.backdrop_path
                  ? `${i.backdrop_path}`
                  : "/pWG70WnGxK77gWySabRd9kCeNsH.jpg"
              }`}
              image_alt={i && i.original_title}
              id={i.id}
            />
          ))}
      </div>
    </div>
  );
};

export default Row;
