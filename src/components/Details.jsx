import React,{useEffect,useState} from "react";
import { useParams } from "react-router-dom";

export const Details = () => {
  const { id } = useParams();
  const [pelicula, setPelicula] = useState({});

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=02fad26e95ab5e512e037525b32d12c3`
    )
      .then((res) => res.json())
      .then((data) => {
        setPelicula(data);
      });
  }, [id]);

  return (
    <div className="h-screen mt-8 overflow-y-scroll">
      <h1 className="text-2xl font-bold text-white text-center">{pelicula.title}</h1>
 
<div className="flex justify-center">

      <img
        src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
        alt={pelicula.id}
        className="h-96 m-4"
      />
</div>
    
      <p className="text-center font-bold">{`Rate: ${pelicula.vote_average}`}</p>
      <p>{pelicula.overview}</p>
    <div className="flex justify-center ">

        <a className="px-4 py-3 bg-cyan-900 align-middle no-underline rounded-lg  text-white text-center hover:bg-orange-200 hover:text-black" href={process.env.PUBLIC_URL+ "/search"}>Atras</a>
    </div>
    </div>
    
  );
};
