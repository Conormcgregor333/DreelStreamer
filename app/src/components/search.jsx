export default function Search() {
  return (
    <div>
      <p
        style={
          localStorage.getItem("theme") == "dark"
            ? { color: "white" }
            : { color: "black" }
        }
        className="2xl:text-4xl xl:text-4xl md:text-4xl sm:text-4xl text-3xl font-bold text-center mt-5 "
      >
        Search for more than{" "}
        <span className="bg-gradient-to-r from-pink-400  to-purple-300 text-transparent bg-clip-text">
          1+ million
        </span>{" "}
        videos
      </p>
      <input
        type="text"
        placeholder="enter for content here...."
        className="block mt-5 mx-auto w-6/12 rounded-full h-12 border-2 border-pink-200 text-xl p-2"
      />
      <p className="shadow-md cursor-pointer w-28 h-12 rounded-full bg-gradient-to-r from-pink-400 to-purple-300  text-white font-bold text-xl text-center pt-2 mx-auto mt-4 ">
        Search
      </p>
    </div>
  );
}
