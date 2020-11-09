const APIKEY = "b006987798a50a01cf5a0b529e0a11ee";


const requests = {
    fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
    fetchActionMovies: `/genre/movie/action?api_key=${APIKEY}&language=en-US&`
}

export default requests;          