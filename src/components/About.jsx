import React from "react";
import '../styles/About.css'

export const About = (props) => {
    return (
        <div className="container text-white  mt-5 d-flex flex-wrap bg-dark rounded">
            <div className="container my-5">
                <h1 className=" mt-4">{props.titulo}</h1>
                <h4 className=" mt-2">{props.subtitulo}</h4>

                <p className="parrafo-about d-flex justify-content-center align-items-center mt-5 rounded">
                    {props.contenido}
                </p>
                
            </div>
        </div>
    );
};
