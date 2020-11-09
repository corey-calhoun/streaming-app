const APIKEY = "b006987798a50a01cf5a0b529e0a11ee";


const requests = {
    fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${APIKEY}&language=en-US&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${APIKEY}&language=en-US&with_genres=35`,
    fetchRomanceMovies: `/discover/movie?api_key=${APIKEY}&language=en-US&with_genres=10749`,
    fetchHorrorMovies: `/discover/movie?api_key=${APIKEY}&language=en-US&with_genres=27`,
    fetchDocumentaries: `/discover/movie?api_key=${APIKEY}&language=en-US&with_genres=99`
}

export default requests;          