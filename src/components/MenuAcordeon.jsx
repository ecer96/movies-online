import React, { useState } from "react";
import { TiMinus, TiPlus } from "react-icons/ti";

export const MenuAcordeon = (props) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <div
                className="container mt-4"
                onClick={() => setIsActive(!isActive)}
            >
                <div>
                    <div className="container bg-dark  d-flex">
                        <h4 className="bolder text-white">{props.titulo}</h4>
                        <button
                            className="rounded mx-2 border-0 d-flex invert text-white"
                            style={{ background: "   none" }}
                        >
                            {isActive ? <TiMinus /> : <TiPlus />}
                        </button>
                    </div>
                </div>
                {isActive && (
                    <div className="container bg-secondary">
                        <p className="parrafo text-start p-5 text-slate-50">{props.info}</p>
                    </div>
                )}
                ;
            </div>
        </>
    );
};
