import lab1Img from '../assets/html-css.jpg';      
import lab2Img from '../assets/github.jpg';          
import lab3Img from '../assets/Node JS.jpg';    
import lab4Img from '../assets/jest.png';  
import lab5Img from '../assets/react.jpg';  
import lab6Img from '../assets/vite-react.jpg'; 
import lab7Img from '../assets/Kanban-board.jpg';      

const projectsData = [
  {
    id: 1,
    title: "Lab 1: HTML & CSS Fundamentals",
    description: " Built and styled static web pages: created Palestine information card (headings, images, lists, paragraphs) and Gaza Genocide page (paragraphs, images, video, links, anchors). Explored DOM tree and developer tools. Applied CSS selectors (universal, class, ID, descendant, pseudo-classes) and specificity rules.",
    techStack: ["Html 5 ", "CSS 3"],
    githubLink: "https://github.com/Ines-ol/caw-labs/tree/main/Lab1",
    liveLink: "", 
    image: lab1Img
  },
  {
    id: 2,
    title: "Lab 2: Git & GitHub Fundamentals",
    description: "In this lab, I explored the basics of Git as a Version Control System (VCS) and integrated it with GitHub for managing and storing code from course exercises in the Web Application Design class.",
    techStack: ["Git", "Github"],
    githubLink: "https://github.com/Ines-ol/caw-labs/tree/main/Lab2",
    liveLink: "",
    image: lab2Img
  },
  {
    id: 3,
    title: "Lab 3: Node.js & NPM Fundamentals ",
    description: "Installed Node.js and NPM, ran JS code in the terminal, worked with core modules (fs), user modules, and NPM packages (e.g., cat-me). Built simple console scripts and managed dependencies via package.json.",
    techStack: ["Node.js", "NPM"],
    githubLink: "https://github.com/Ines-ol/caw-labs/tree/main/Lab3",
    liveLink: "",
    image: lab3Img
  },
  {
    id: 4,
    title: "Lab 4:Unit Testing in JavaScript – Introduction to Jest",
    description: "Installed Jest, configured tests, wrote and ran unit tests for Lab 3 functions and new array utilities (first/last elements, chunk, join strings). Learned testing best practices and assertions.",
    techStack: ["JavaScript", "Jest", "NPM"],
    githubLink: "https://github.com/Ines-ol/caw-labs/tree/main/Lab4_Jest",
    liveLink: "",
    image: lab4Img
  },
  {
    id: 5,
    title: "Lab 5: React Components Basics",
    description: "Installed Jest, configured tests, wrote and ran unit tests for Lab 3 functions and new array utilities (first/last elements, chunk, join strings). Learned testing best practices and assertions.",
    techStack: ["React", "JavaScript"],
    githubLink: "https://github.com/Ines-ol/caw-labs/tree/main/lab5-react",
    liveLink: "",
    image: lab5Img
  },
  {
    id: 6,
    title: "Lab 6: Vite – React Development Setup",
    description: "Set up React project with Vite for fast tooling: created skeleton, installed dependencies, launched dev server, cleaned default files. Explored module import/export (default/named), conventions for components/CSS/images. Built reusable ProfileCard component with props and inline styles, integrated into App.",
    techStack: ["React", "Vite", "NPM"],
    githubLink: "https://github.com/Ines-ol/caw-labs/tree/main/lab6-MyFirstVite",
    liveLink: "",
    image: lab6Img
  },
  {
    id: 7,
    title: "Lab 7: Kanban Board",
    description: ": Developed task management app with React: App displaying columns , TaskForm for adding tasks, Column rendering TaskCards, state for moving tasks. Added styling/animations for UX, unit tests with Jest.",
    techStack: ["React", "Vite", "CSS","Jest"],
    githubLink: "https://github.com/Ines-ol/caw-labs/tree/main/lab7",
    liveLink: "",
    image: lab7Img
  },
  {
    id: 8,
    title: "Lab 8: Movie Search App",
    description: "Search and browse movies using an external API with detailed information and ratings.",
    techStack: ["React", "API", "Axios"],
    githubLink: "https://github.com/ton-username/lab8-movies",
    liveLink: "",
    image: "🎬"
  }
]

export default projectsData