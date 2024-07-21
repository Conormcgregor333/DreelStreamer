import Features from "./features";
import Search from "./search";
import Testimonials from "./testimonials";
import VideoPlayer from "./videoPlayer";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import Recents from "./recentlyPlayed";
gsap.registerPlugin(useGSAP, ScrollTrigger);
export default function Home() {
  useGSAP(() => {
    gsap.from(".heading", { x: -200, duration: 1 });
  }, []);
  let compArray = [
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65266958d1b6be6bd4e44c51_sylvi.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65266958030e4b24786a6907_tahiliya.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/652673d679d1942e616b3675_everloom.svg",

    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/662f471ef2f2ec313a3f5557_athlos.svg",

    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/662f471ebeab55128d85b2a8_zavya.svg",

    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64abbb55980929236adb436a_dlight.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77c2b88fe75cb4e9e62_BLUE%20TRIBE.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77c88f37016d6cd94f5_mosaic.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77cae6da5aab64f973a_P-TAL.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65266958d1b6be6bd4e44c51_sylvi.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65266958030e4b24786a6907_tahiliya.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/652673d679d1942e616b3675_everloom.svg",

    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/662f471ef2f2ec313a3f5557_athlos.svg",

    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/662f471ebeab55128d85b2a8_zavya.svg",

    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64abbb55980929236adb436a_dlight.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77c2b88fe75cb4e9e62_BLUE%20TRIBE.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77c88f37016d6cd94f5_mosaic.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77cae6da5aab64f973a_P-TAL.svg",
  ];
  return (
    <div>
      <p
        className="2xl:text-5xl xl:text-5xl md:text-4xl sm:text-4xl text-3xl font-bold text-center m-10 heading"
        style={
          localStorage.getItem("theme") == "dark"
            ? { color: "white" }
            : { color: "black" }
        }
      >
        <span className="text-green-400">Stream</span> your{" "}
        <span className="text-pink-500">heart</span> out, share with{" "}
        <span className="text-purple-500">friends</span>
      </p>
      <img
        className="w-9/12 h-9/12 block mx-auto 2xl:-translate-y-32 xl:-translate-y-24 md:-translate-y-20 -translate-y-14 sm:w-8/12 sm:h-8/12 md:w-6/12 md:h-6/12 xl:w-5/12 xl:h-5/12 2xl:w-5/12 2xl:h-5/12"
        src="https://static.vecteezy.com/system/resources/previews/011/345/257/original/teenagers-watching-television-together-3d-character-illustration-png.png"
        alt=""
      />

      <Link to="/sign">
        <p className="w-44 h-10 text-center bg-gradient-to-r from-pink-400  to-purple-300 text-white rounded-xl font-bold text-xl pt-1 mx-auto  hover:scale-125 transition-all cursor-pointer 2xl:-translate-y-52 xl:-translate-y-44 md:-translate-y-36 sm:-translate-y-28 -translate-y-20">
          Get Started
        </p>
      </Link>

      <p
        style={
          localStorage.getItem("theme") == "dark"
            ? { color: "white" }
            : { color: "black" }
        }
        className="2xl:-translate-y-40 xl:-translate-y-32 md:-translate-y-28 sm:-translate-y-20 -translate-y-20 text-center font-bold text-sm mt-2"
      >
        Our streaming partners
      </p>
      <div
        id="marquee"
        className=" mx-auto w-8/12 2xl:-translate-y-36 xl:-translate-y-28 md:-translate-y-24 sm:-translate-y-16 -translate-y-14 rounded-md "
        style={
          localStorage.getItem("theme") == "dark"
            ? { backgroundColor: "#f472b6" }
            : { backgroundColor: "white" }
        }
      >
        <div className="marquee-container ">
          <div className="pic-container">
            {compArray.map((index) => {
              return (
                <div className="pic">
                  <img className="marquee-img" src={index} alt="" />
                </div>
              );
            })}
            {/*  #f472b6 */}
          </div>
        </div>
      </div>

      <Features />
      <Search />
      {/*  <VideoPlayer /> */}
      <Recents />
      <Testimonials />
    </div>
  );
}
