import React from "react";
import requests from "../../Requests/request";
import Row from "../Row/Row";
import PlayCard from "../PlayCard/PlayCard";

const Home = () => {
  return (
    <div className="pb-14">
      <PlayCard fetchUrl={requests.fetchTrending} />
      <Row
        title={"NETFLIX ORIGINALS"}
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title={"Trending Now"} fetchUrl={requests.fetchTrending} />
      <Row title={"Popular Tv Shows"} fetchUrl={requests.fetchPopularTvShows} />
      <Row title={"Popular Movies"} fetchUrl={requests.fetchPopularMovies} />
      <Row title={"Horror Movies"} fetchUrl={requests.fetchHorrorMovies} />
      <Row title={"Romance Movies"} fetchUrl={requests.fetchRomanticMovies} />
      <Row title={"Comedy Movies"} fetchUrl={requests.fetchComedyMovies} />
      <Row title={"Top Rated"} fetchUrl={requests.fetchTopRated} />
      <Row title={"Action TV Shows"} fetchUrl={requests.fetchActionTvShows} />
      <Row title={"Comedy TV Shows"} fetchUrl={requests.fetchComedyTvShows} />
      <Row title={"Documentaries"} fetchUrl={requests.fetchDocumentaries} />
      <Row title={"Action Movies"} fetchUrl={requests.fetchActionMovies} />
      <Row title={"HBO Max"} fetchUrl={requests.fetchHBOMax} />
      <Row
        title={"Amazon Originals"}
        fetchUrl={requests.fetchAmazonOriginals}
      />
      <Row title={"Disney+"} fetchUrl={requests.fetchDisneyPlus} />
    </div>
  );
};

export default Home;
