import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandVite } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { SiRedux } from "react-icons/si";

import { RiTailwindCssFill } from "react-icons/ri";
import { SiMui } from "react-icons/si";
import { SiTypescript } from "react-icons/si";


export const MyEx = [
  {
  id:'1',
  title:'Programming Languages',
  dec1:`JavaScript: Proficient in ES6+ concepts, module management, functions, and async/await `,
  dec2:'TypeScript: Skilled in working with types, interfaces, and implementing scalable projects.',
  icons:<><IoLogoJavascript color="yellow"/>  <SiTypescript color="blue"/></>
},
{
  id:'2',
  title:'Frameworks and Libraries',
  dec1:'React.js: Experienced in building dynamic user interfaces using Hooks, Context API, and lifecycle methods. ',
  dec2:'Next.js: Expertise in server-side rendering (SSR), static site generation (SSG), and routing management.',
  icons:<><FaReact color="skyblue"/> <RiNextjsFill/> <TbBrandVite color="orange"/></>
},
{
  id:'3',
  title:'UI Libraries',
  dec1:'Tailwind CSS: Creating elegant and responsive user interfaces using utility classes. ',
  dec2:'Material-UI (MUI): Leveraging prebuilt components for enhanced design and development efficiency.',
  icons:<><RiTailwindCssFill color="skyblue" /> <SiMui color="blue"/></>
},
{
  id:'4',
  title:'State Management',
  dec1:'Zustand: Efficient and flexible state management for React applications ',
  dec2:'redux: ...',
  icons:<><SiRedux color="black"/></>
},
]