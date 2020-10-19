import React, {useState, useEffect} from 'react'
import './Row.css'
import axios from '../../axios';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
   
    const [movies, setMovies] = useState([]);

        //will run on page load
    useEffect(() => {
        // if [] empty then run once, otherwise run everytime the [whateveryouwanttowatch] changes
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
         fetchData();
    }, [fetchUrl]);

    console.table(movies);

    return (
        <div className="row">
            <h2>{title}</h2>
            {/* container with cards */}
            <div className="row__posters">
                {movies.map(movie => (
                <img 
                 key={movie.id}
                 className={`poster ${isLargeRow && "posterLarge"}`}
                 src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                 alt={movie.name} />
                ))}
            </div>
            
            
        </div>
    )
}

export default Row;
