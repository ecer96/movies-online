import React, { useState, useEffect } from "react";

const MovieContext = React.createContext();

const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=02fad26e95ab5e512e037525b32d12c3";

const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [horrorMovies,setHorrorMovies]=useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isPopularLoading, setIsPopularLoading] = useState(false);
  const [isHorrorMovieLoading,setIsHorrorMovieLoading]=useState(false);

  useEffect(() => {
    const fetchData = async (url) => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const data = await response.json();
        setMovies(data.results);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData(API_URL);
  }, []);

  const fetchPopularMovies = async () => {
    setIsPopularLoading(true);
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setPopularMovies(data.results);
    } catch (err) {
      setError(err);
    } finally {
      setIsPopularLoading(false);
    }
  };

  const fetchHorrorMovies = async () => {
    setIsHorrorMovieLoading(true);
    try {
      const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=02fad26e95ab5e512e037525b32d12c3&with_genres=27');
      const data = await response.json();
      setHorrorMovies(data.results);
    } catch (err) {
      setError(err);
    } finally {
      setIsHorrorMovieLoading(false);
    }
  };


  

  return (
    <MovieContext.Provider
      value={{
        movies,
        error,
        isLoading,
        popularMovies,
        isPopularLoading,
        fetchPopularMovies,
        fetchHorrorMovies,
        horrorMovies,
        isHorrorMovieLoading
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export { MovieContext, MoviesProvider };
