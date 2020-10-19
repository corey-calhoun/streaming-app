import React, {useState, useEffect} from 'react';
import axios from '../../axios';
import requests from '../..requests'

const base_url = "https://image.tmdb.org/t/p/original/";

function Hero() {
    const [movie, setMovie] = useState([]);

    const useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(
                requests.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);

    return (
        <header className="hero"
         style={{
             backgroundSize: "cover",
             backgroundImage: `url(
                 "${base_url}${movie?.backdrop_path}"
             )`,
             backgroundPosition: "center center"
         }}
        >
            <div className="hero__contents">
                {/* title */}
                <h1>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                {/* div > 2 buttons */}
                {/* description */}
            </div>
            
        </header>
    )
}

export default Hero
