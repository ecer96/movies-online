import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export const Search = () => {
    const [search, setSearch] = useState("");
    const [dataSearch, setDataSearch] = useState([]);
    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=02fad26e95ab5e512e037525b32d12c3&query=${search}`
        )
            .then((res) => res.json())
            .then((data) => {
                setDataSearch(data.results);
            });
    };
    const handleClick = (pelicula) => {
        navigate(`/details/${pelicula.id}`, { state: { pelicula } });
    };
    return (
        <div className="h-screen overflow-y-scroll mt-8">
            <form className="form-inline" onSubmit={submitHandler}>
                <div className="container d-flex flex-wrap justify-content-center h-auto">
                    <input
                        className="form-control mr-sm-2 w-50 mb-4 rounded-lg mx-5"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button
                        className="btn btn-primary my-2 my-sm-0 mt-2 w-50 rounded-lg "
                        type="submit"
                    >
                        Search
                    </button>
                </div>
            </form>

                    <div className="flex flex-wrap mt-8">
            {dataSearch.map((pelicula) => {
                return (

                    <img
                        src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
                        alt={pelicula.id}
                        className="h-72 m-4 hover:scale-125"
                        onClick={() => handleClick(pelicula)}
                    />
                );
            })}
                    </div>
        </div>
    );
};
