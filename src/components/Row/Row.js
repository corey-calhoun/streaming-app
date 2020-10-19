import React, {useState, useEffect} from 'react'
import './Row.css'
import axios from '../../axios';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
   
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
            <div className="row_posters">
                {movies.map(movie => (
                <img src={`${base_url}${movie.poster_path}`} alt={movie.name} />
                ))}
            </div>
            
            
        </div>
    )
}

export default Row;
