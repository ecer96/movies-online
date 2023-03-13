import React, { useState, useContext,useEffect } from "react";
import { MovieContext } from "./MoviesProvider";
import { Slider } from "./Slider";

const MovieDetails = () => {
const { popularMovies, horrorMovies, fetchPopularMovies, fetchHorrorMovies} = useContext(MovieContext);
const [selectedMovie, setSelectedMovie] = useState(null);


useEffect(() => {
    const fetchData=async ()=>{
        await fetchPopularMovies();
        await fetchHorrorMovies();
    }
    fetchData();
        
}, [fetchPopularMovies, fetchHorrorMovies]);


const handleClick = (movie) => {
    setSelectedMovie(movie);
};

if (!selectedMovie) {
    return (
        <>
            <Slider />
            <h1 className="text-white ml-4 mt-5 t">Popular Movies</h1>
            <div className="flex flex-wrap justify-center">
                {popularMovies.map((peliculas) => {
                    return (
                        <div key={peliculas.id} className="m-4" onClick={() => handleClick(peliculas)}>
                            <img
                                src={`https://image.tmdb.org/t/p/w500/${peliculas.poster_path}`}
                                alt={peliculas.title}
                                className="h-72 object-contain hover:scale-125 cursor-pointer rounded-xl"
                            />
                        </div>
                    );
                })}
            </div>

            <h1 className="text-white ml-4 mt-4">Horror Movies</h1>
            <div className="flex flex-wrap justify-center">
                {horrorMovies.map((peliculas) => {
                    return (
                        <div key={peliculas.id} className="m-4" onClick={() => handleClick(peliculas)}>
                            <img
                                src={`https://image.tmdb.org/t/p/w500/${peliculas.poster_path}`}
                                alt={peliculas.title}
                                className="h-72 object-contain hover:scale-125 cursor-pointer rounded-xl"
                            />
                        </div>
                    );
                })}
            </div>
        </>
    );

} else {
    return (
       
        <div className="flex flex-col items-center">
            <img
                src={`https://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}`}
                alt={selectedMovie.title}
                className="h-96 object-contain m-8"
            />
            <h1 className="text-white">{selectedMovie.title}</h1>
              <p className="text-white font-semibold">{`Rating: ${selectedMovie.vote_average}`}</p>
              <p className="text-white">{selectedMovie.primary_release_year ? `Year: ${selectedMovie.primary_release_year}` : ""}</p>

            <p className="text-white">{selectedMovie.overview}</p>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-8"
                onClick={() => setSelectedMovie(null)}
            >
                Volver
            </button>
        </div>
        
    );
}



};

export default MovieDetails;