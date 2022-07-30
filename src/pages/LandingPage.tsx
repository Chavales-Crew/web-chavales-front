import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ModalComponent from "../components/ModalComponent";

import NavbarComponent from "../components/Navbar/NavbarComponent";

const LandingPage = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <>
      <NavbarComponent />
      <div
        id="landing-page"
        className="leading-normal tracking-normal p-6 bg-cover bg-fixed"
      >
        <div className="h-full">
          <ModalComponent show={show} setShow={setShow} />

          <div className="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">
            <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
              <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
                HOLA{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
                  QUE TAL{" "}
                </span>
                WAKAKA!
              </h1>
              <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
                ¡En chavales crew somos altamente profesionales y contamos con
                los mejores desarrolladores de todo el mundo!
              </p>

              <form className="card bg-base-200 w-full p-4">
                <div className="mb-4">
                  <label
                    className="block text-blue-400 py-2 font-bold mb-2"
                    htmlFor="emailaddress"
                  >
                    Regístrate en nuestro super club bkn
                  </label>
                  <input
                    className="input w-full"
                    id="emailaddress"
                    type="text"
                    placeholder="correo@dominio.com"
                  />
                </div>

                <div className="flex items-center justify-between pt-4">
                  <button className="btn btn-primary" type="button">
                    Registrarse
                  </button>
                </div>
              </form>
            </div>

            <div className="w-full xl:w-3/5 p-12 overflow-hidden">
              <div className="mx-auto w-full md:w-4/5 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6">
                <img
                  src="https://www.latercera.com/resizer/aTWdP83UhWShHwb9nNmOaGqxeDE=/1023x682/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/JOYOFIXWCBGBLLSLHU6OQSI3NY.jpg"
                  alt="BKN"
                />
              </div>
            </div>

            <div className="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
              <Link
                to="/"
                className="text-gray-500 no-underline hover:no-underline"
              >
                {new Date().getFullYear()} &copy; Chavales Crew
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
