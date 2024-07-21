export default function Features() {
  return (
    <div className="feature">
      <p
        className="2xl:text-4xl xl:text-4xl md:text-4xl sm:text-4xl text-3xl font-bold text-center "
        style={
          localStorage.getItem("theme") == "dark"
            ? { color: "white" }
            : { color: "black" }
        }
      >
        More than just a <span className="text-pink-400">streaming</span>{" "}
        service
      </p>
      <div className="flex flex-wrap justify-center w-9/12 xl:w-7/12 2xl:w-7/12 mx-auto mt-6 ">
        <div
          style={
            localStorage.getItem("theme") == "dark"
              ? { backgroundColor: "#374151" }
              : { backgroundColor: "white" }
          }
          className="w-72 h-72  rounded-md m-2 shadow-xl shadow-pink-100 border-pink-100 border-2 hover:scale-110 transition-all"
        >
          <img
            className="w-36 h-36 block mx-auto mt-4"
            src="https://ouch-cdn2.icons8.com/j6b2IGU4GkeuGVvS7pytkl6oD__aEwYU75gRlAaLByw/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMzY1/LzQzZWYwMjc0LTdl/ZTYtNGM4Yy04ZTk2/LTUyZGJmODg3MjRl/OS5wbmc.png"
            alt=""
          />
          <p className="text-md font-bold text-center mt-4">
            <span className="text-pink-400">stream</span> from anywhere
          </p>
          <p className="text-center mt-2 text-sm text-gray-400">
            no <span className="text-blue-400">"content-not-available"</span> bs
          </p>
        </div>
        <div
          style={
            localStorage.getItem("theme") == "dark"
              ? { backgroundColor: "#374151" }
              : { backgroundColor: "white" }
          }
          className="w-72 h-72  rounded-md m-2 shadow-xl shadow-pink-100 border-pink-100 border-2 hover:scale-110 transition-all"
        >
          <img
            className="w-36 h-36 block mx-auto mt-4"
            src="https://ouch-cdn2.icons8.com/dkeaNBKMiWLdfNgP6Ncw40Sd9EFrQ4OjtNYIUNnqYAM/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMjMy/L2NiOGIyNzNjLTEw/M2ItNDcyNS04ZDgz/LWVmNzFiNzViMWMz/MS5wbmc.png"
            alt=""
          />
          <p className="text-md font-bold text-center mt-4">
            <span className="text-green-400">multiple</span> sources 1 platform
          </p>
          <p className="text-center mt-2 text-sm text-gray-500">
            no matter what you use , its there
          </p>
        </div>
        <div
          style={
            localStorage.getItem("theme") == "dark"
              ? { backgroundColor: "#374151" }
              : { backgroundColor: "white" }
          }
          className="w-72 h-72  rounded-md m-2 shadow-xl shadow-pink-100 border-pink-100 border-2 hover:scale-110 transition-all"
        >
          <img
            className="w-36 h-36 block mx-auto mt-4"
            src="https://ouch-cdn2.icons8.com/YOXcdmJ4n3K9cbQuuh2-Tl74bT21-3CHEmSV6aZtwYM/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNzYw/LzA0N2JlMzg2LTU0/MmYtNDZjNy04MTRj/LTAwNzRmNDM5YmIy/ZS5wbmc.png"
            alt=""
          />
          <p className="text-md font-bold text-center mt-4">
            <span className="text-purple-400">trends</span> start here
          </p>
          <p className="text-center mt-2 text-sm text-gray-500">
            grow your business by advertising here
          </p>
        </div>
        <div
          style={
            localStorage.getItem("theme") == "dark"
              ? { backgroundColor: "#374151" }
              : { backgroundColor: "white" }
          }
          className="w-72 h-72  rounded-md m-2 shadow-xl shadow-pink-100 border-pink-100 border-2 hover:scale-110 transition-all"
        >
          <img
            className="w-36 h-36 block mx-auto mt-4"
            src="https://ouch-cdn2.icons8.com/KKdb9cWwpNTRkeIDU9KecVuhJczNGb0Bk8ju4pNIr5o/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDkz/Lzk2NDI5M2MxLWY2/ZTYtNDYzMC04YjAx/LWZkYzU0ODFiMjUz/NC5wbmc.png"
            alt=""
          />
          <p className="text-md font-bold text-center mt-4">
            <span className="text-green-600">pocket</span> friendly rocket
          </p>
          <p className="text-center mt-2 text-sm text-gray-500">
            plans starting from just $2/month
          </p>
        </div>
      </div>
      <p
        className="text-justify mt-4 2xl:w-5/12 xl:w-5/12 md:w-8/12 sm:w-8/12 mx-auto w-8/12 "
        style={
          localStorage.getItem("theme") == "dark"
            ? { color: "white" }
            : { color: "black" }
        }
      >
        We provide the best streaming services and not only that , you can
        convert all your videos into 30 seconds shorts using our{" "}
        <a href="" className="text-blue-700">
          AI feature
        </a>
        .
      </p>
      <p
        style={
          localStorage.getItem("theme") == "dark"
            ? { backgroundColor: "pink" }
            : { backgroundColor: "black" }
        }
        className="mt-5 text-center w-20 h-8 bg-black text-white font-bold text-sm rounded-md mx-auto pt-1 animate-bounce cursor-pointer "
      >
        Read more
      </p>
    </div>
  );
}
