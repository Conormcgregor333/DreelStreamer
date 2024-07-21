import { useEffect } from "react";
import "../App.css";

import "../App.css";
export default function Pricing() {
  useEffect(() => {
    /* document.getElementById("card").classList.remove("scale"); */
    document.getElementById("card").classList.add("scaleup");
    document.getElementById("card2").classList.add("scaleup2");
    document.getElementById("card3").classList.add("scaleup3");
  }, []);
  return (
    <div>
      <p
        className={
          localStorage.getItem("theme") == "dark"
            ? "text-md text-center text-wrap mt-10 font-bold text-white sm:text-2xl md:text-2xl xl:text-2xl 2xl:text-2xl w-64 sm:w-64 md:w-auto xl:w-auto 2xl:w-auto mx-auto"
            : "text-md text-center text-wrap mt-10 font-bold sm:text-2xl md:text-2xl xl:text-2xl 2xl:text-2xl w-64 sm:w-64 md:w-auto xl:w-auto 2xl:w-auto mx-auto"
        }
      >
        Subscribe for the best <span className="text-pink-500">deals</span> and
        never miss on the latest streams
      </p>
      <div className="flex mx-auto w-2/3 justify-around mt-10 flex-wrap ">
        <div
          id="card"
          className={
            localStorage.getItem("theme") == "dark"
              ? "w-64 h-auto rounded-md border-2 border-gray-100 hover:scale-110 hover:transition-all mt-8 "
              : "w-64 h-auto rounded-md border-2 border-gray-800 hover:scale-110 hover:transition-all mt-8 "
          }
        >
          <p className="text-purple-300 text-2xl font-bold ml-2 mt-10">Free</p>
          <p className="text-4xl font-bold text-gray-600 ml-2">
            $0 <span className="text-sm font-normal">/month</span>
          </p>
          <p className="text-gray-600 ml-2 mt-2">
            Great for starting basic features
          </p>
          <p className="text-gray-600 text-center mt-2">∘₊✧──────✧₊∘</p>
          <p className="text-gray-600 text-center mt-2">Features</p>

          <p className="text-gray-600 ml-2 mt-2">✅Access to limited streams</p>

          <p className="text-gray-600 ml-2 mt-2">✅limited strem channels</p>
          <p className="text-gray-600 ml-2 mt-2">✅email support</p>
          <p className="w-28 h-8 pt-1.5 rounded-md text-white text-center font-bold text-sm  mx-auto mt-2 bg-purple-600 mb-2 cursor-pointer hover:bg-purple-700 ">
            SUBSCRIBE
          </p>
        </div>

        <div
          id="card2"
          className={
            localStorage.getItem("theme") == "dark"
              ? "w-64 h-auto rounded-md border-2 border-gray-100 hover:scale-110 hover:transition-all mt-8"
              : "w-64 h-auto rounded-md border-2 border-gray-800 hover:scale-110 hover:transition-all mt-8"
          }
        >
          <p className="text-purple-300 text-2xl font-bold ml-2 mt-10">
            Professional
          </p>
          <p className="text-4xl font-bold text-gray-600 ml-2">
            $2 <span className="text-sm font-normal">/month</span>
          </p>
          <p className="text-gray-600 ml-2 mt-2">
            Best for professional and commercial use.
          </p>
          <p className="text-gray-600 text-center mt-2">∘₊✧──────✧₊∘</p>
          <p className="text-gray-600 text-center mt-2">Features</p>
          <p className="text-gray-600 ml-2 mt-2">✅Access to all data</p>

          <p className="text-gray-600 ml-2 mt-2">✅all streams available</p>
          <p className="text-gray-600 ml-2 mt-2">✅email and call support</p>
          <p className="w-28 h-8 pt-1.5 rounded-md text-white text-center font-bold text-sm  mx-auto mt-2 bg-purple-600 mb-2 cursor-pointer hover:bg-purple-700 ">
            SUBSCRIBE
          </p>
        </div>
        <div
          id="card3"
          className={
            localStorage.getItem("theme") == "dark"
              ? "w-64 h-auto rounded-md border-2 border-gray-100 hover:scale-110 hover:transition-all mt-8"
              : "w-64 h-auto rounded-md border-2 border-gray-800 hover:scale-110 hover:transition-all mt-8"
          }
        >
          <p className="text-purple-300 text-2xl font-bold ml-2 mt-10">Pro</p>
          <p className="text-4xl font-bold text-gray-600 ml-2">
            $5<span className="text-sm font-normal">/month</span>
          </p>
          <p className="text-gray-600 ml-2 mt-2">
            Good for pro users , provides premium streams.
          </p>
          <p className="text-gray-600 text-center mt-2">∘₊✧──────✧₊∘</p>

          <p className="text-gray-600 text-center mt-2">Features</p>
          <p className="text-gray-600 ml-2 mt-2">✅Access to all streams</p>
          <p className="text-gray-600 ml-2 mt-2">✅Premium streams ,no ads</p>
          <p className="text-gray-600 ml-2 mt-2">✅All services included</p>
          <p className="w-28 h-8 pt-1.5 rounded-md text-white text-center font-bold text-sm  mx-auto mt-2 bg-purple-600 mb-2 cursor-pointer hover:bg-purple-700 ">
            SUBSCRIBE
          </p>
        </div>
      </div>
      <p
        className={
          localStorage.getItem("theme") == "dark"
            ? "text-white  selection:text-orange-400 text-center mt-20"
            : "text-black  selection:text-orange-400 text-center mt-20"
        }
      >
        ━━━━ ◦: ✧✲✧ :◦━━━━
      </p>
    </div>
  );
}
