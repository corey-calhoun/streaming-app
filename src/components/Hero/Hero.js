import React, {useState, useEffect} from 'react';
import './Hero.css'
import axios from '../../axios';
import requests from '../../requests'

const base_url = "https://image.tmdb.org/t/p/original/";

function Hero() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);

    console.table(movie);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

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
                <h1 className="hero__title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="hero__buttons">
                    <button className="hero_button">Play</button>
                    <button className="hero_button">My List</button>
                </div>
                <h3 className="hero__description">{truncate(movie?.overview, 150)}</h3>
            </div>
        </header>
    )
}

export default Hero
