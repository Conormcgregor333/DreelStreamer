import "../App.css";
export default function Testimonials() {
  return (
    <div>
      <p
        style={
          localStorage.getItem("theme") == "dark"
            ? { color: "white" }
            : { color: "black" }
        }
        className="2xl:text-4xl xl:text-4xl md:text-4xl sm:text-4xl text-3xl font-bold text-center mt-10"
      >
        Our streaming services have got our users{" "}
        <span className="text-red-500">hearts</span>
      </p>

      <div
        style={
          localStorage.getItem("theme") == "dark"
            ? { backgroundColor: "#374151" }
            : { backgroundColor: "#f3f4f6" }
        }
        className="w-11/12 sm:w-9/12 md:w-7/12 xl:w-7/12 2xl:w-7/12 mx-auto  mt-10 bg-gray-100  2xl:h-80 xl:h-80 md:h-96  comments rounded-xl "
      >
        <div className="h-18 w-64 border-2 border-gray-200 shadow-lg rounded-md mt-4 float-right px-2 bg-white mr-2 ml-2">
          <div className="flex mt-2">
            {" "}
            <img
              className="w-10 h-10 rounded-full block border-2 border-black"
              src="https://cdn0.iconfinder.com/data/icons/fashion-avatars/512/Avatar_13.png"
              alt=""
            />
            {/* dp */}
            <p className="text-sm leading-3 mx-1 mt-2">
              Best streaming service, has it all.
            </p>
            {/* comment */}
            <img
              className="h-6 w-6 block"
              src="https://icon-library.com/images/facebook-icon-vector-png/facebook-icon-vector-png-6.jpg"
              alt=""
            />
          </div>
          {/* logo */}
          <p className="text-gray-500 text-sm text-right mr-2 mb-1">
            8 days ago
          </p>
        </div>
        <div className="h-18 w-64 border-2 border-gray-200 shadow-lg rounded-md mt-8 sm:mt-8 md:mt-8 xl:mt-8 2xl:mt-10 float-left px-2 bg-white ml-2 mr-2">
          <div className="flex mt-2">
            {" "}
            <img
              className="w-10 h-10 rounded-full block border-2 border-black"
              src="https://cdn1.iconfinder.com/data/icons/3d-girl-avatars/512/girl06.png"
              alt=""
            />
            {/* dp */}
            <p className="text-sm leading-3 mx-1 mt-2">
              Helped a lot , my favorite streaming
            </p>
            {/* comment */}
            <img
              className="h-6 w-6 block"
              src="https://www.clipartmax.com/png/middle/12-121988_white-instagram-logo-png.png"
              alt=""
            />
          </div>
          {/* logo */}
          <p className="text-gray-500 text-sm text-right mr-2 mb-1">
            12 days ago
          </p>
        </div>
        <div className="h-18 w-64 border-2 border-gray-200 shadow-lg rounded-md mt-8 sm:mt-8 md:mt-12 xl:mt-14 2xl:mt-16 float-right px-2 bg-white mr-2 ml-2">
          <div className="flex mt-2">
            {" "}
            <img
              className="w-10 h-10 rounded-full block border-2 border-black"
              src="https://cdn0.iconfinder.com/data/icons/fashion-avatars/512/Avatar_13.png"
              alt=""
            />
            {/* dp */}
            <p className="text-sm leading-3 mx-1 mt-2">
              A good reccomendation for everyone.
            </p>
            {/* comment */}
            <img
              className="h-6 w-6 block"
              src="https://icon-library.com/images/facebook-icon-vector-png/facebook-icon-vector-png-6.jpg"
              alt=""
            />
          </div>
          {/* logo */}
          <p className="text-gray-500 text-sm text-right mr-2 mb-1">
            2 days ago
          </p>
        </div>
        <div className="h-18 w-64 border-2 border-gray-200 shadow-lg rounded-md mt-8 sm:mt-8 md:mt-12 xl:mt-16 2xl:mt-20 float-left px-2 bg-white mr-2 ml-2">
          <div className="flex mt-2">
            {" "}
            <img
              className="w-10 h-10 rounded-full block border-2 border-black"
              src="https://cdn1.iconfinder.com/data/icons/facely-metapeople-3d-avatar-set/512/17._Designer.png"
              alt=""
            />
            {/* dp */}
            <p className="text-sm leading-3 mx-1 mt-2">
              Best you can find now, good.
            </p>
            {/* comment */}
            <img
              className="h-6 w-6 block"
              src="https://www.clipartmax.com/png/middle/12-121988_white-instagram-logo-png.png"
              alt=""
            />
          </div>
          {/* logo */}
          <p className="text-gray-500 text-sm text-right mr-2 mb-1">
            20 days ago
          </p>
        </div>
        <div className="h-18 w-64 border-2 border-gray-200 shadow-lg rounded-md mt-8 sm:mt-12 md:mt-14 xl:mt-18 2xl:mt-24 float-right px-2 bg-white mr-2 ml-2">
          <div className="flex mt-2">
            {" "}
            <img
              className="w-10 h-10 rounded-full block border-2 border-black"
              src="https://cdn2.iconfinder.com/data/icons/female-avatars-4/512/avatars_accounts___female_woman_people_person_short_hair_pearl_necklace_pearl_earring_necklace_earring.png"
              alt=""
            />
            {/* dp */}
            <p className="text-sm leading-3 mx-1 mt-2">
              love th UI , so easy to use
            </p>
            {/* comment */}
            <img
              className="h-6 w-6 block"
              src="https://icon-library.com/images/facebook-icon-vector-png/facebook-icon-vector-png-6.jpg"
              alt=""
            />
          </div>
          {/* logo */}
          <p className="text-gray-500 text-sm text-right mr-2 mb-1">
            4 days ago
          </p>
        </div>
        <div className="h-18 w-64 border-2 border-gray-200 shadow-lg rounded-md mt-8 sm:mt-12 md:mt-14 xl:mt-24 2xl:mt-32  float-left px-2 bg-white mx-2">
          <div className="flex mt-2">
            {" "}
            <img
              className="w-10 h-10 rounded-full block border-2 border-black"
              src="https://cdn1.iconfinder.com/data/icons/facely-metapeople-3d-avatar-set/512/7._Asia_Woman.png"
              alt=""
            />
            {/* dp */}
            <p className="text-sm leading-3 mx-1 mt-2">
              my goto streaming platform, better than rest
            </p>
            {/* comment */}
            <img
              className="h-6 w-6 block"
              src="https://www.clipartmax.com/png/middle/12-121988_white-instagram-logo-png.png"
              alt=""
            />
          </div>
          {/* logo */}
          <p className="text-gray-500 text-sm text-right mr-2 mb-1">
            1 month ago
          </p>
        </div>
      </div>
    </div>
  );
}
