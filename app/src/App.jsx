import { useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./components/home";
import Footer from "./components/footer";
import Pricing from "./components/pricing";
import Explore from "./components/explore";
import SignUp from "./components/signUp";

function App() {
  let [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  let [ham, setHam] = useState(false);

  function alertMessage() {
    alert("Coming soon!");
  }
  function handleDark() {
    setTheme("dark");
    localStorage.setItem("theme", "dark");
  }
  function handleLight() {
    setTheme("light");
    localStorage.setItem("theme", "light");
  }
  localStorage.getItem("theme") == "dark"
    ? (document.body.style.backgroundColor = "black")
    : (document.body.style.backgroundColor = "white");
  let tl = gsap.timeline();
  useGSAP(() => {
    tl.from(".nav", {
      width: 0,
      opacity: 0,
      stagger: 0.2,
      duration: 0.5,
    });
  }, []);
  return (
    <div>
      <div className="relative">
        <div className="absolute   h-32 bg-red-300 top-grad blur-3xl "></div>
        <div className="absolute   h-14 bg-blue-300 top-grad2 blur-3xl "></div>
      </div>

      <div className="nav-container flex justify-between mx-4 mt-6 ">
        <Link to="/">
          <p
            style={
              localStorage.getItem("theme") == "dark"
                ? { color: "white" }
                : null
            }
            className="text-4xl bg-gradient-to-r from-blue-700  to-red-400 bg-clip-text text-transparent logo z-20"
          >
            Dreel.ai
          </p>
        </Link>
        <div
          style={
            localStorage.getItem("theme") == "dark"
              ? { color: "white" }
              : { color: "black" }
          }
          className="z-10 hidden sm:flex md:flex  xl:flex 2xl:flex nav"
        >
          <Link to="/">
            {" "}
            <div className="hover:text-red-500 home">Home</div>
          </Link>
          <Link to="/pricing">
            {" "}
            <div className="mx-6 hover:text-red-500 price">Pricing</div>
          </Link>
          <Link to="/explore">
            {" "}
            <div className="hover:text-red-500 explore">Explore</div>
          </Link>
          <div
            className="ml-6 relative cursor-pointer"
            onClick={() => {
              alertMessage();
            }}
          >
            <div className="hover:text-red-500 ai">AI</div>
            <p className="absolute w-14 h-8 border-2 border-pink-400 rounded-md text-center -top-4 left-2 scale-50 ">
              new
            </p>
          </div>
        </div>
        <div className="flex z-20">
          <p
            className="text-2xl cursor-pointer "
            style={
              localStorage.getItem("theme") == "dark"
                ? { color: "white" }
                : { color: "black" }
            }
            onClick={() => {
              localStorage.getItem("theme") == "dark"
                ? handleLight()
                : handleDark();
            }}
          >
            {localStorage.getItem("theme") == "dark" ? "☼" : "☾"}
          </p>

          <Link to="/sign">
            {" "}
            <p className="ml-6 w-28 h-10 text-white rounded-md bg-gradient-to-r from-pink-400  to-purple-300 text-center text-xl font-bold pt-1 hidden sm:block md:block xl:block 2xl:block hover:scale-110 cursor-pointer transition-all">
              signup
            </p>
          </Link>
          <div
            id="hamburger"
            onClick={() => {
              setHam(!ham);
            }}
            className={
              ham
                ? "hamburger sm:hidden md:hidden xl:hidden 2xl:hidden hamburger-press mt-2 ml-2"
                : "hamburger block sm:hidden md:hidden xl:hidden 2xl:hidden mt-2 ml-2"
            }
          >
            <div
              className={
                localStorage.getItem("theme") == "dark"
                  ? "ham1 bg-white rounded-md"
                  : "ham1 bg-black rounded-md"
              }
            ></div>
            <div
              className={
                localStorage.getItem("theme") == "dark"
                  ? "ham2 bg-white rounded-md"
                  : "ham2 bg-black rounded-md"
              }
            ></div>
            <div
              className={
                localStorage.getItem("theme") == "dark"
                  ? "ham3 bg-white rounded-md"
                  : "ham3 bg-black rounded-md"
              }
            ></div>
          </div>
        </div>
        {ham ? (
          <div
            className={
              localStorage.getItem("theme") == "dark"
                ? "block nav2 fixed sm:hidden md:hidden xl:hidden 2xl:hidden bg-gray-700 w-2/3 sm:w-2/3 md:w-2/3 xl:w-1/2 rounded-xl    text-white z-30"
                : "block nav2 fixed sm:hidden md:hidden xl:hidden 2xl:hidden bg-gray-200 w-2/3 sm:w-2/3 md:w-2/3 xl:w-1/2 rounded-xl  z-30"
            }
          >
            <div className="text-center mt-1 font-bold text-xl">
              <Link to="/">
                {" "}
                <p>Home</p>
              </Link>
            </div>
            <div className="text-center mt-1 my-1 font-bold text-xl">
              <Link to="/pricing">
                {" "}
                <p>Pricing</p>
              </Link>
            </div>
            <div className="mx-auto font-bold text-xl">
              <div
                className="flex justify-center"
                onClick={() => {
                  alertMessage();
                }}
              >
                <p className="translate-x-1">AI</p>
                <p className=" w-14 h-8 border-2 border-pink-400 rounded-md text-center scale-50 -translate-x-2">
                  new
                </p>
              </div>
              <div className="text-center mt-1 mb-1 font-bold text-xl bg-gradient-to-r from-blue-700  to-red-400 bg-clip-text text-transparent">
                <Link to="/sign">
                  {" "}
                  <p className="">SignUp</p>
                </Link>
              </div>
            </div>
          </div>
        ) : null}
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/sign" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
