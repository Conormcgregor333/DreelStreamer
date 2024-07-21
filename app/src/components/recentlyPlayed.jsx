import VideoPlayer from "./videoPlayer";
import "../App.css";
import { useRef, useState } from "react";
export default function Recents() {
  let ref = useRef(null);
  function scrollLeft() {
    ref.current.scrollLeft -= 300;
  }
  function scrollRight() {
    ref.current.scrollLeft += 300;
  }
  let videoUrls = [
    "https://cdn.pixabay.com/video/2017/08/23/11543-231232163_tiny.mp4",
    "https://cdn.pixabay.com/video/2023/01/31/148746-794599341_tiny.mp4",
    "https://cdn.pixabay.com/video/2021/01/28/63229-506616446_tiny.mp4",
    "https://cdn.pixabay.com/video/2022/07/02/122894-726392010_tiny.mp4",
    "https://cdn.pixabay.com/video/2023/04/21/159925-820010950_tiny.mp4",
    "https://cdn.pixabay.com/video/2020/01/05/30902-383991325_tiny.mp4",
  ];
  let [url, setUrl] = useState(videoUrls[0]);
  function changeUrl(index) {
    console.log(index);
    console.log(videoUrls[index]);
    setUrl(videoUrls[index]);
  }
  return (
    <div>
      <VideoPlayer urlLink={url} />
      <p
        className={
          localStorage.getItem("theme") == "dark"
            ? "text-white text-left mt-10 mb-4 text-2xl font-bold w-10/12 xl:w-7/12 2xl:w-7/12 mx-auto"
            : "text-left mt-10 mb-4 text-2xl font-bold w-10/12 xl:w-7/12 2xl:w-7/12 mx-auto"
        }
      >
        Recently <span className="text-green-500">played</span>
      </p>
      <div
        ref={ref}
        className="w-10/12 xl:w-7/12 2xl:w-7/12 mx-auto flex overflow-x-scroll video-content "
      >
        <div className="flex">
          <div
            onClick={() => {
              changeUrl(0);
            }}
            className={
              localStorage.getItem("theme") == "dark"
                ? "w-52 h-52 rounded-md shadow-lg border-2 border-white mx-4 mb-2 bg-gray-800"
                : "w-52 h-52 rounded-md shadow-lg shadow-gray-400 mx-4 mb-2 border-pink-300 border-2"
            }
          >
            <div className="\  rounded-md m-1 border-pink-300 border-2">
              <img
                className="block mx-auto mt-2 w-24 h-24"
                src="https://www.pngmart.com/files/1/Video-Icon-PNG-Image.png"
                alt=""
              />
            </div>
            <p
              className={
                localStorage.getItem("theme") == "dark"
                  ? "ml-2 font-bold text-sm mt-2 text-white"
                  : "ml-2 font-bold text-sm mt-2"
              }
            >
              Video 1
            </p>
            <p className="ml-2 text-gray-400">duration</p>
            <p className="ml-2 text-gray-400">3 days ago</p>
          </div>
          <div
            onClick={() => {
              changeUrl(1);
            }}
            className={
              localStorage.getItem("theme") == "dark"
                ? "w-52 h-52 rounded-md shadow-lg border-2 border-white mx-4 mb-2 bg-gray-800"
                : "w-52 h-52 rounded-md shadow-lg shadow-gray-400 mx-4 mb-2 border-pink-300 border-2"
            }
          >
            <div className="border-pink-300 border-2 rounded-md m-1">
              <img
                className="block mx-auto mt-2 w-24 h-24"
                src="https://www.pngmart.com/files/1/Video-Icon-PNG-Image.png"
                alt=""
              />
            </div>
            <p
              className={
                localStorage.getItem("theme") == "dark"
                  ? "ml-2 font-bold text-sm mt-2 text-white"
                  : "ml-2 font-bold text-sm mt-2"
              }
            >
              Video 2
            </p>
            <p className="ml-2 text-gray-400">duration</p>
            <p className="ml-2 text-gray-400">3 days ago</p>
          </div>
          <div
            onClick={() => {
              changeUrl(2);
            }}
            className={
              localStorage.getItem("theme") == "dark"
                ? "w-52 h-52 rounded-md shadow-lg border-2 border-white mx-4 mb-2 bg-gray-800"
                : "w-52 h-52 rounded-md shadow-lg shadow-gray-400 mx-4 mb-2 border-pink-300 border-2"
            }
          >
            <div className="border-pink-300 border-2 rounded-md m-1">
              <img
                className="block mx-auto mt-2 w-24 h-24"
                src="https://www.pngmart.com/files/1/Video-Icon-PNG-Image.png"
                alt=""
              />
            </div>
            <p
              className={
                localStorage.getItem("theme") == "dark"
                  ? "ml-2 font-bold text-sm mt-2 text-white"
                  : "ml-2 font-bold text-sm mt-2"
              }
            >
              Video 3
            </p>
            <p className="ml-2 text-gray-400">duration</p>
            <p className="ml-2 text-gray-400">3 days ago</p>
          </div>
          <div
            onClick={() => {
              changeUrl(3);
            }}
            className={
              localStorage.getItem("theme") == "dark"
                ? "w-52 h-52 rounded-md shadow-lg border-2 border-white mx-4 mb-2 bg-gray-800"
                : "w-52 h-52 rounded-md shadow-lg shadow-gray-400 mx-4 mb-2 border-pink-300 border-2"
            }
          >
            <div className="border-pink-300 border-2 rounded-md m-1">
              <img
                className="block mx-auto mt-2 w-24 h-24"
                src="https://www.pngmart.com/files/1/Video-Icon-PNG-Image.png"
                alt=""
              />
            </div>
            <p
              className={
                localStorage.getItem("theme") == "dark"
                  ? "ml-2 font-bold text-sm mt-2 text-white"
                  : "ml-2 font-bold text-sm mt-2"
              }
            >
              Video 4
            </p>
            <p className="ml-2 text-gray-400">duration</p>
            <p className="ml-2 text-gray-400">3 days ago</p>
          </div>
          <div
            onClick={() => {
              changeUrl(4);
            }}
            className={
              localStorage.getItem("theme") == "dark"
                ? "w-52 h-52 rounded-md shadow-lg border-2 border-white mx-4 mb-2 bg-gray-800"
                : "w-52 h-52 rounded-md shadow-lg shadow-gray-400 mx-4 mb-2 border-pink-300 border-2"
            }
          >
            <div className="border-pink-300 border-2 rounded-md m-1">
              <img
                className="block mx-auto mt-2 w-24 h-24"
                src="https://www.pngmart.com/files/1/Video-Icon-PNG-Image.png"
                alt=""
              />
            </div>
            <p
              className={
                localStorage.getItem("theme") == "dark"
                  ? "ml-2 font-bold text-sm mt-2 text-white"
                  : "ml-2 font-bold text-sm mt-2"
              }
            >
              Video 5
            </p>
            <p className="ml-2 text-gray-400">duration</p>
            <p className="ml-2 text-gray-400">3 days ago</p>
          </div>
          <div
            onClick={() => {
              changeUrl(5);
            }}
            className={
              localStorage.getItem("theme") == "dark"
                ? "w-52 h-52 rounded-md shadow-lg border-2 border-white mx-4 mb-2 bg-gray-800"
                : "w-52 h-52 rounded-md shadow-lg shadow-gray-400 mx-4 mb-2 border-pink-300 border-2"
            }
          >
            <div className="border-pink-300 border-2 rounded-md m-1">
              <img
                className="block mx-auto mt-2 w-24 h-24"
                src="https://www.pngmart.com/files/1/Video-Icon-PNG-Image.png"
                alt=""
              />
            </div>
            <p
              className={
                localStorage.getItem("theme") == "dark"
                  ? "ml-2 font-bold text-sm mt-2 text-white"
                  : "ml-2 font-bold text-sm mt-2"
              }
            >
              Video 6
            </p>
            <p className="ml-2 text-gray-400">duration</p>
            <p className="ml-2 text-gray-400">3 days ago</p>
          </div>
        </div>
      </div>
      <div className="w-24 mx-auto mt-8 flex justify-between">
        <button
          onClick={() => {
            scrollLeft();
          }}
          className="block w-10 h-10 border-2 border-pink-400 text-pink-400 rounded-full shadow-md shadow-gray-500 "
        >
          ←
        </button>
        <button
          onClick={() => {
            scrollRight();
          }}
          className="block w-10 h-10 border-2 border-pink-400 text-pink-400 rounded-full shadow-md shadow-gray-500 "
        >
          →
        </button>
      </div>
    </div>
  );
}
