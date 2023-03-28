import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImg from "../assets/react.png";
import reduxImg from "../assets/redux.png";
import tailwind from "../assets/tailwind.png";
import bash from "../assets/bash.png";
import git from "../assets/git.png";
import react_router from "../assets/react_router3.png";

const Experiance = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImg,
      title: "ReactJS",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: reduxImg,
      title: "Redux",
      style: "shadow-violet-600",
    },
    {
      id: 6,
      src: react_router,
      title: "React Router Dom",
      style: "shadow-red-400",
    },
    {
      id: 7,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 8,
      src: bash,
      title: "Bash",
      style: "shadow-gray-500",
    },
    {
      id: 9,
      src: git,
      title: "Git",
      style: "shadow-red-600",
    },
  ];

  return (
    <div
      name="experiance"
      className="bg-gradient-to-t from-black  to-gray-800 w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline bg-vi">
            Experiance
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={
                "shadow-md hover:scale-105 duration-500 py-2 rounded-lg" +
                " " +
                style
              }
            >
              <img src={src} alt="ht" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Experiance;
