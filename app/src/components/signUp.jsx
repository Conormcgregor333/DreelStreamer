export default function SignUp() {
  return (
    <div className="mb-44   w-11/12 sm:w-9/12 md:w-3/12 xl:w-3/12 2xl:w-3/12 mx-auto border-2 border-pink-500 mt-5 rounded-md">
      <form className="basis-2/4 ml-2">
        <p
          className={
            localStorage.getItem("theme") == "dark"
              ? "text-white font-bold text-sm mb-2  mt-2 text-center sm:text-start md:text-start xl:text-start 2xl:text-start"
              : "font-bold text-sm mb-2  mt-2 text-center sm:text-start md:text-start xl:text-start 2xl:text-star"
          }
        >
          Username :
        </p>
        <input
          className="border-2 border-pink-500 rounded-md mb-2 p-1 mx-auto block sm:inline-block md:inline-block xl:inline-block 2xl:inline-block"
          required
          placeholder="name"
          type="text"
        />
        <p
          className={
            localStorage.getItem("theme") == "dark"
              ? "text-white font-bold text-sm mb-2 text-center sm:text-start md:text-start xl:text-start 2xl:text-star"
              : "font-bold text-sm mb-2 text-center sm:text-start md:text-start xl:text-start 2xl:text-star"
          }
        >
          Email :
        </p>
        <input
          className="border-2 border-pink-500 rounded-md mt-2 p-1 mx-auto block sm:inline-block md:inline-block xl:inline-block 2xl:inline-block"
          type="email"
          required
          placeholder="email"
        />
        <p
          className={
            localStorage.getItem("theme") == "dark"
              ? "text-white font-bold text-sm mb-2 mt-2 text-center sm:text-start md:text-start xl:text-start 2xl:text-star"
              : "font-bold text-sm mb-2 mt-2 text-center sm:text-start md:text-start xl:text-start 2xl:text-star"
          }
        >
          Password :
        </p>
        <input
          className="border-2 border-pink-500 rounded-md mb-2 p-1 mx-auto block sm:inline-block md:inline-block xl:inline-block 2xl:inline-block"
          type="password"
          placeholder="password"
        />
        <button
          type="submit"
          className="w-20 h-8 font-bold text-sm bg-pink-500 hover:bg-green-500 text-white rounded-md mt-6 block mx-auto mb-4"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
