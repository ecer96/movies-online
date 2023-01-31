import React from "react";
import '../styles/Footer.css';
import { TiSocialFacebook,TiSocialLinkedin,TiSocialGithub,TiSocialInstagram } from "react-icons/ti";

export const Footer = (props) => {
    return (
        <div>
            <footer
                className=" footer text-center text-white bg-dark  "
                style={{flex:"1"}}
               
            >
                <div className="container pt-4">
                    <section className="mb-4 bg-dark">
                        <a
                            className="icon btn btn-link btn-floating btn-lg  m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        >
                            <TiSocialFacebook className="text-white"/>
                        </a>

                        <a
                            className="icon btn btn-link btn-floating btn-lg text-dark m-1"
                            href="https://www.linkedin.com/in/edwin--cervantes/"
                            role="button"
                            data-mdb-ripple-color="dark"
                        >
                            <TiSocialLinkedin className="text-white"/>
                        </a>

                        <a
                            className="icon btn btn-link btn-floating btn-lg text-dark m-1"
                            href="https://github.com/ecer96?tab=repositories"
                            role="button"
                            data-mdb-ripple-color="dark"
                        >
                            <TiSocialGithub className="text-white"/>
                        </a>

                        <a
                            className="icon btn btn-link btn-floating btn-lg text-dark m-1"
                            href="https://www.instagram.com/ecer7/"
                            role="button"
                            data-mdb-ripple-color="dark"
                        >
                            <TiSocialInstagram className="text-white"/>
                        </a>

                       
                    </section>
                </div>

                <div
                    className="copy text-center  p-3 text-white bg-dark"
                >
                    © {props.fecha} Copyright:
                    <a className="text-white mx-1 no-underline" href="/">
                      EcerMoviesOnline.com
                    </a>
                </div>
            </footer>
        </div>
    );
};
