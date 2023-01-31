import React from "react";
import { About } from "./About";
import { MenuAcordeon } from "./MenuAcordeon";
import data from "./data";
import "../styles/landingPage.css";

export const LandingPage = () => {
    return (
        <>
            <div className="container justify-center text-center">
           
                

                <About
                    titulo="Movies Online"
                    subtitulo="Las Ultimas Peliculas Y Series Online"
                    contenido="¡Movies Online es la opción perfecta para ti! Con su diseño moderno y fácil de usar, podrás acceder al sitio web desde cualquier dispositivo, ya sea una computadora, un celular o una tableta, y disfrutar de tus películas favoritas de forma cómoda.
                    Podras Disfrutar de las ultimas novedades desde la comodidad de tu Hogar , trabajamos constantemente en mejorar la  experiencia que te brindamos , esperamos que tengas una buena experiencia , cualquier sugerencia favor de escribir en la seccion de contacto."
                />

                   
                <div className="container d-grid justify-content-center rounded">
                    <h1 className="my-5 text-white">Preguntas Frecuentes</h1>
                    <div>
                        {data.map(({ titulo, info }) => {
                            return <MenuAcordeon titulo={titulo} info={info} />;
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};
