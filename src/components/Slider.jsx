import React, { useContext} from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../styles/Slider.css'
import { MovieContext } from "./MoviesProvider";

export const Slider = () => {
    
    const {movies} = useContext(MovieContext);

    return (
        <div className="relative">
           <Carousel>
           {movies.map((peliculas) => {
                    return (
                    <div className="contenedor-slider d-flex" key={peliculas.id}>
                    <img className=" img-slider img-fluid object-fill h-screen absolute img-position" 
                    src={`https://image.tmdb.org/t/p/w500/${peliculas.poster_path}`}
                     alt={peliculas.id}  
                        style={{bottom:'-400px','maxHeight':'1000px'}}
                     />
                    <p className="legend">{peliculas.id}</p>
                  </div>
                    );
                })}
           </Carousel>
               
            </div>

          
     
    );
};
