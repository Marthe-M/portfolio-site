import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsSun, BsMoon } from "react-icons/bs"
import { GoLocation } from "react-icons/go";
import { useTheme } from "next-themes";
import Image from "next/image";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <Image
        src='/../public/images/me.jpg'
        alt="avatar"
        className=" mx-auto border rounded-full "
        height="128px"
        width="128px"
        layout="intrinsic"
        quality="100"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-bebas">
        Marthe Minderman
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-300 rounded-full dark:bg-dark-200 dark:bg-black-500">
        Scientist
      </p>
      <p className="px-2 py-1 my-3 bg-gray-300 rounded-full dark:bg-dark-200 dark:bg-black-500">
        Front-end Developer
      </p>

      <div className="flex justify-around w-9/12 mx-auto my-5 text-blue-900 md:w-full dark:text-yellow-600 ">
        <a href="https://www.linkedin.com/in/marthe-m/" >
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://github.com/Marthe-M">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />{" "}
        </a>
      </div>

      <div
        className="py-4 my-5 bg-gray-300 dark:bg-dark-200 dark:bg-black-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" /> <span>Utrecht, The Netherlands </span>
        </div>
        <p className="my-2 "> martheminderman@gmail.com </p>
        <p className="my-2"> 06-15516525 </p>
      </div>

      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-yellow-500 to-blue-900 dark:from-blue-900 dark:to-yellow-500 focus:outline-none hover:scale-105 "
      >
        <span className="flex items-center justify-between">Toggle Theme {theme === "light" || theme === undefined ? <BsMoon className='w-6 h-6' /> : <BsSun className='w-6 h-6' />}</span>
      </button>
    </>
  );
};

export default Sidebar;
