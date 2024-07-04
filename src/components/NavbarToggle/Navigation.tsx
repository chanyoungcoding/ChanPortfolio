import { motion } from "framer-motion";
import MenuItem from "./MenuItem";

import { FaGithub } from "react-icons/fa";
import { SiTistory } from "react-icons/si";
import { SiVelog } from "react-icons/si";

const items = [
  {
    name: "GitHub",
    url: "https://github.com/chanyoungcoding",
    image: <FaGithub size={25} color="black"/>
  },
  {
    name: "티스토리",
    url: "https://chanyoungcoding.tistory.com/",
    image: <SiTistory size={25} color="black"/>
  },
  {
    name: "velog",
    url: "https://velog.io/@chanyoungcoding/posts",
    image: <SiVelog size={25} color="black"/>
  },
]

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = () => (
  <motion.ul variants={variants}>
    {items.map((item, key) => (
      <MenuItem key={key} name={item.name} url={item.url} image={item.image}/>
    ))}
  </motion.ul>
);
