import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineApi, AiFillLike, AiFillPieChart } from "react-icons/ai";
import { IProject, Service, Skill } from "./types";
import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Front-end Development",
    about:
      "HTML, CSS, JavaScript, React. Currently learning NextJS and TypeScript",
  },
  {
    Icon: FaServer,
    title: "Back-end  Development",
    about:
      "Currently experimenting with NextJS, GraphQL and REST APIs",
  },
  {
    Icon: AiFillPieChart,
    title: "Science",
    about:
      "Cell culture, Western Blotting, Flow Cytometry, RT-PCR, viral transduction and cloning.",
  },
  {
    Icon: AiFillLike,
    title: "Other",
    about:
      "CrossFit, music (piano & guitar), gaming (board and console), cooking, reading and traveling.",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "HTML",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "CSS",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "JavaScript",
    level: "75",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "65",
  },
  {
    Icon: BsCircleFill,
    name: "TypeScript",
    level: "30",
  },
  {
    Icon: BsCircleFill,
    name: "NextJS",
    level: "30",
  },
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "15",
  }
];


export const projects: IProject[] = [
  {
    name: "Todo list",
    description:
      "Classic Todo list with a dark/light theme toggle mode",
    image_path: "https://d33wubrfki0l68.cloudfront.net/61e42494987abf08617503cd/screenshot_2022-01-16-14-01-42-0000.png",
    deployed_url: "https://react-typescript-todo-list.netlify.app",
    github_url: "https://github.com/Marthe-M/todo-list",
    category: ["react", "typescript"],
    key_techs: ["React", "TypeScript", "Front-end-mentor-challenge"],
  },
  {
    name: "Winc Student Dashboard",
    image_path: "https://d33wubrfki0l68.cloudfront.net/61e430393eccb133d1798da3/screenshot_2022-01-16-14-50-33-0000.png",
    deployed_url: "https://react-winc-academy-dashboard.netlify.app/",
    github_url: "https://github.com/Marthe-M/Winc-Student-Dashboard",
    category: ["react", "javascript"],
    description:
      "A tool to keep track of student information and their scores and ratings",
    key_techs: [
      "React",
      "JavaScript",
      "Victory Chart",
      "Winc Academy",
    ],
  },

  {
    name: "Weather App",
    image_path: "https://d33wubrfki0l68.cloudfront.net/61e432a119500d0007809fba/screenshot_2022-01-16-14-59-37-0000.png",
    deployed_url: "https://react-weather-api-app.netlify.app/",
    github_url: "https://github.com/Marthe-M/My-weather-app",
    category: ["react", "javascript"],
    description:
      "A tool that shows the current weather and forecast at your current location",
    key_techs: ["React", "JavaScript", "Openweather API"],
  },
  {
    name: "Book App",
    image_path: "https://d33wubrfki0l68.cloudfront.net/61e424273eccb121a9798d3d/screenshot_2022-01-16-13-58-28-0000.png",
    deployed_url: "https://my-react-book-app.netlify.app/",
    github_url: "https://github.com/Marthe-M/My-book-app",
    category: ["react", "javascript"],
    description:
      "A tool that uses the Google Books API to search through books and collect all your favorites",
    key_techs: ["React", "JavaScript", "Google Books API"],
  },

  {
    name: "SongList",
    image_path: "https://d33wubrfki0l68.cloudfront.net/61e4247ca71e1ee25473ad8e/screenshot_2022-01-16-14-00-24-0000.png",
    deployed_url: "https://react-songlist-app.netlify.app/",
    github_url: "https://github.com/Marthe-M/SongList",
    category: ["react", "javascript"],
    description:
      "A tool to rate and keep track of your favorite songs",
    key_techs: ["React", "JavaScript", "Winc Academy"],
  },
  {
    name: "Tic Tac Toe",
    image_path: "https://d33wubrfki0l68.cloudfront.net/61e6a0138eef0bcaac2570ed/screenshot_2022-01-18-11-11-45-0000.png",
    deployed_url: "https://tic-tac-toe-game-nextjs.netlify.app/",
    github_url: "https://github.com/Marthe-M/tic-tac-toet",
    category: ["typescript", "nextjs"],
    description:
      "A fun app to play a game of Tic Tac Toe",
    key_techs: ["NextJS", "TypeScript"],
  },
  {
    name: "Shopping Cart",
    image_path: "https://d33wubrfki0l68.cloudfront.net/61fba638f706a400070efb9d/screenshot_2022-02-03-09-55-10-0000.png",
    deployed_url: "https://shopping-cart-apple.netlify.app",
    github_url: "https://github.com/Marthe-M/shopping-cart",
    category: ["typescript", "react"],
    description:
      "A website to search through Apple products and collect them in your shopping cart.",
    key_techs: ["React", "React Hooks", "TypeScript"],
  },
  {
    name: "Note Taking CRUD App",
    image_path: "https://i.ibb.co/FbxFvQ0/noteapp.png",
    deployed_url: "https://note-crud-app.vercel.app/",
    github_url: "https://github.com/Marthe-M/note-crud-app",
    category: ["typescript", "nextjs"],
    description:
      "An app to create and keep track of all your important notes.",
    key_techs: ["NextJS", "TypeScript", "PostgreSQL", "Prisma"],
  },
  {
    name: "Pokedex App",
    image_path: "https://i.ibb.co/gvJSf5f/pokedexapp.png",
    deployed_url: "https://pokedex-app-nu.vercel.app/",
    github_url: "https://github.com/Marthe-M/pokedex-app",
    category: ["typescript", "nextjs"],
    description:
      "An app to catch and collect all your favorite Pokemon!",
    key_techs: ["NextJS", "TypeScript", "PostgreSQL", "GraphQL", "Apollo", "Prisma"],
  }
];
