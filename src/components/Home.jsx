import HeroImage from "../assets/hero_2_2.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaGithub, FaPhoneAlt, FaLocationArrow } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-82 mr-14">
          <h2 className="text-4xl sm:text-6xl font-bold text-white ml-12 mt-12">
            Front-End Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-lg ml-12">
            Hi, i'm Nikola Ljangovski, Fornt-End Developer with 3 years of
            experiance, using HTML, CSS and JavaScript to build all aspects of
            the user experience and user interface for client-facing pages,
            using React JS library.
          </p>
          <div className="flex justify-between ">
            <div className="ml-14 mr-2">
              <button className="group text-white w-fit px-2 py-3 my-1 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                <a href="/Ln_resume.pdf" download={true}>
                  Resume
                </a>
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={20} className="ml-1" />
                </span>
              </button>
              <button className="group text-white w-fit px-2 py-3 my-1 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                <a href="https://github.com/lankin-0" target="_blank">
                  GitHub
                </a>
                <span className="group-hover:scale-110 duration-200">
                  <FaGithub size={20} className="ml-3" />
                </span>
              </button>
            </div>
            <div className="text-white mt-2 flex flex-col justify-between mb-10 ">
              <div className="flex flex-row">
                <FaPhoneAlt size={25} className="text-blue-500 " />
                <p className="ml-1 text-sm">+389 076 615 896</p>
              </div>
              <div className="flex flex-row mt-3">
                <HiOutlineMail size={25} className="text-blue-500" />
                <p className="ml-1 text-sm">nik_lankin@hotmail.com</p>
              </div>
              <div className="flex flex-row mt-3">
                <FaLocationArrow size={25} className="text-blue-500" />
                <p className="ml-1 text-sm">Bitola, R.Macedonia</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-80 ml-5"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
