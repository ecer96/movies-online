import React from "react";
import { Movies } from "./Movies";
import { MoviesProvider } from "./MoviesProvider";


export const Home = () => {
    return (
        <div className="bg-dark">
            <MoviesProvider>
                <Movies />
            </MoviesProvider>
        </div>
    );
};
