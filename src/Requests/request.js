const API_KEY = "a8bd04e1711338362bc753aded515929";

const requests = {
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchPopularMovies: `/movie/popular?api_key=${API_KEY}&language=en-US`,
  fetchPopularTvShows: `/tv/popular?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanticMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchActionTvShows: `/discover/tv?api_key=${API_KEY}&with_genres=10759`,
  fetchComedyTvShows: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchHBOMax: `/discover/tv?api_key=${API_KEY}&with_networks=318`,
  fetchAmazonOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=1024`,
  fetchDisneyPlus: `/discover/tv?api_key=${API_KEY}&with_networks=2739`,
};

export default requests;
