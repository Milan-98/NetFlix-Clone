import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Error from "../../assets/imgError.png";
import { Link } from "react-router-dom";
import { deleteItem } from "../../Store/watchList";
import Trashcane from "../../assets/trashcan.png";

const WatchList = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const watchListdata = useSelector((state) => {
    return state.watchList;
  });

  //for getting unique objects of movies

  const key = "id";
  const DisplayedData = [
    ...new Map(watchListdata.map((item) => [item[key], item])).values(),
  ];

  const dispatch = useDispatch();
  const handleDelete = (idToDelete) => {
    dispatch(deleteItem(idToDelete));
  };

  return (
    <div className="text-white">
      {DisplayedData.length == 0 ? (
        <h1 className="pt-5 text-center text-2xl font-bold text-[#636161bf] md:pt-24 md:text-3xl">
          Your WatchList Is Empty
        </h1>
      ) : (
        <ul className="grid grid-cols-3 gap-2 md:grid-cols-5 md:gap-5 md:pt-[4.3rem]">
          {DisplayedData.map((i) => {
            return (
              <li key={i.id}>
                {i.poster_path ? (
                  <Link to={`/movie/${i.id}`}>
                    {" "}
                    <img
                      className="rounded-xl "
                      src={`https://image.tmdb.org/t/p/original/${i.poster_path}`}
                      alt=""
                    />
                  </Link>
                ) : (
                  <img className="h-[10.7rem] md:h-[23.8rem]" src={Error} />
                )}
                <button
                  className="relative bottom-[10.7rem] left-[4.9rem] ml-4 rounded-bl-md rounded-tr-2xl bg-[#9b99997e] px-[.12rem] py-1 md:bottom-[23.8rem]  md:left-[12rem]  md:bg-inherit"
                  onClick={() => {
                    handleDelete(i.id);
                  }}
                >
                  {" "}
                  <img className="w-4 md:w-6" src={Trashcane} />{" "}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default WatchList;
