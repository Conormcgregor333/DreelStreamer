import "../App.css";
import { useRef, useState } from "react";
export default function Explore() {
  let ref = useRef("");
  let ref2 = useRef(null);
  let ref3 = useRef(null);
  let setting = useRef(null);
  let progressRef = useRef(null);
  let [play, setPlay] = useState(true);
  let [vol, setVol] = useState(0.5);
  let [cur, setCur] = useState(0);
  let [per, setPer] = useState(0);
  let [mut, setMute] = useState(false);
  let [full, setFull] = useState(true);
  let [set, setSet] = useState(false);
  let [activebtn, setActiveBtn] = useState(null);
  function setProgressOnClick(e) {
    console.log("clicked");
    let duration = ref.current.duration;
    let progressWidth = ref2.current.getBoundingClientRect().width;
    let clickOffsetX = e.nativeEvent.offsetX;
    let x = (clickOffsetX / progressWidth) * duration;
    ref.current.currentTime = x;
    setPer(x);
  }
  function fast(speed) {
    ref.current.playbackRate = speed;
    console.log(speed);
    console.log("hh");
  }
  function settings() {
    set
      ? (setting.current.style.display = "block")
      : (setting.current.style.display = "none");
    setSet(!set);
  }
  function addFullScreen() {
    if (ref3.current) {
      full
        ? ref3.current.classList.add("full")
        : ref3.current.classList.remove("full");
      setFull(!full);
    }
  }
  function fastForward() {
    ref.current.currentTime += 5;
  }
  function fastReverse() {
    if (ref.current.currentTime > 5) {
      ref.current.currentTime -= 5;
    } else {
      ref.current.currentTime = 0;
    }
  }
  function playPause() {
    ref.current.paused ? ref.current.play() : ref.current.pause();
    setPlay(!play);
  }
  function curTime() {
    let x = TotalDuration(ref.current.currentTime);
    let fraction = ref.current.currentTime / ref.current.duration;
    fraction *= 100;
    fraction = Math.floor(fraction);
    setPer(fraction);

    setCur(x);
  }
  function alterVolume(e) {
    let newVol = e.target.value;
    console.log(typeof newVol);
    setVol(newVol);
    if (ref.current) {
      ref.current.volume = newVol;
    }
    if (e.target.value == 0) {
      setMute(true);
    } else {
      setMute(false);
    }
  }
  function mute() {
    ref.current.muted = !ref.current.muted;

    if (ref.current.muted) {
      setMute(true);
      setVol(0);
    } else {
      setMute(false);
      setVol(0.8);
    }
  }
  function TotalDuration(time) {
    /*     let time = ref.current.duration;
     */ const formator = new Intl.NumberFormat(undefined, {
      minimumIntegerDigits: 2,
    });
    const sec = Math.floor(time % 60);
    const min = Math.floor(time / 60) % 60;
    const hrs = Math.floor(time / 3600);
    if (hrs === 0) {
      return `${min}:${formator.format(sec)}`;
    } else {
      return `${hrs}:${formator.format(min)}:${formator.format(sec)}`;
    }
  }
  function fast(index) {
    ref.current.playbackRate = index;
    if (activebtn === index) {
      setActiveBtn(null);
    } else {
      setActiveBtn(index);
    }
  }
  let btnArray = [0.25, 0.5, 1, 1.25, 1.5, 2];
  return (
    <div
      ref={ref3}
      id="player"
      className="relative container w-10/12 xl:w-7/12 2xl:w-7/12 mx-auto mt-6 p-1 rounded-xl bg-gradient-to-r from-pink-300  to-purple-300"
    >
      <div
        ref={setting}
        className="absolute w-3/12 h-52 bg-black  rounded-md setting z-50"
      >
        {btnArray.map((index) => {
          return (
            <button
              className="block mx-auto mt-2"
              style={
                activebtn === index ? { color: "pink" } : { color: "white" }
              }
              onClick={() => {
                fast(index);
              }}
            >
              {index === 1 ? "Normal" : index}
            </button>
          );
        })}
      </div>
      <video
        onTimeUpdate={() => {
          curTime();
        }}
        ref={ref}
        id="main-video"
        /* controls */
        className="rounded-md"
      >
        <source
          /*  src="https://videos.pexels.com/video-files/17778538/17778538-sd_640_360_24fps.mp4" */
          src="https://cdn.pixabay.com/video/2020/01/05/30902-383991325_tiny.mp4"
          type="video/mp4"
        />
      </video>
      <div
        ref={ref2}
        onClick={(e) => {
          setProgressOnClick(e);
        }}
        className="progress-bar relative h-2 bg-gray-200 rounded-full hover:bg-gray-100 transition-all cursor-pointer"
      >
        <div
          className="progress absolute h-2 bg-red-500 rounded-full top-0 left-0 "
          style={{ width: `${per}%` }}
        ></div>
        <div
          className="w-6 h-6 bg-red-500 ball absolute -top-2 rounded-full "
          style={{ left: `${per - 2}%` }}
        ></div>
      </div>
      <div className="flex justify-between mx-4">
        <div className="control-left">
          <span className="icon">
            <i
              class="material-symbols-outlined fast-rewind text-white hover:text-black hover:-rotate-45 transition-all"
              onClick={() => {
                fastReverse();
              }}
            >
              replay_5
            </i>
          </span>
          <span
            className="icon"
            onClick={() => {
              playPause();
            }}
          >
            {ref.current.paused ? (
              <i class="material-symbols-outlined text-white mx-1 hover:text-black hover:scale-105">
                play_circle
              </i>
            ) : (
              <i class="material-symbols-outlined text-gray-500 mx-1 hover:text-black hover:scale-105">
                pause_circle
              </i>
            )}
          </span>
          <span className="icon">
            <i
              class="material-symbols-outlined fast-forward text-white hover:text-black hover:rotate-45 transition-all"
              onClick={() => {
                fastForward();
              }}
            >
              forward_5
            </i>
          </span>
          <span className="icon">
            {!mut ? (
              <i
                class="material-symbols-outlined volume text-white hover:text-black"
                onClick={() => {
                  mute();
                }}
              >
                volume_up
              </i>
            ) : (
              <i
                onClick={() => {
                  mute();
                }}
                class="material-symbols-outlined text-white hover:text-black"
              >
                volume_off
              </i>
            )}
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              id="volume_range"
              name="volume"
              value={vol}
              className="ml-2 -translate-y-2 slider"
              onChange={(e) => {
                alterVolume(e);
              }}
            />
          </span>
          <div className="timer ml-2 mb-1">
            <span className="current text-white">{cur}/</span>{" "}
            <span className="current text-white">
              {ref.current ? TotalDuration(ref.current.duration) : 0.0}
            </span>
          </div>
        </div>
        <div className="control-right">
          <span className="icon">
            <i class="material-symbols-outlined auto-play"></i>
          </span>
          <span className="icon md:mx-2">
            <i
              class="material-symbols-outlined settingsBtn text-white hover:text-black"
              onClick={() => {
                settings();
              }}
            >
              settings
            </i>
          </span>
          {/*  <span className="icon">
            <i class="material-symbols-outlined picture_in_picture">
              picture_in_picture_alt
            </i>
          </span> */}
          <span className="icon ">
            <i
              class="material-symbols-outlined  text-white hover:text-black"
              onClick={() => {
                addFullScreen();
              }}
            >
              fullscreen
            </i>
          </span>
        </div>
      </div>
    </div>
  );
}
