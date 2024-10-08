import * as React from "react";
import { motion } from "framer-motion";

//@ts-expect-error this is not error
const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(245.91928251121075, 100%, 56.27450980392157%)"
    strokeLinecap="round"
    {...props}
  />
);

interface MenuToggleProps {
  toggle: () => void; // toggle 함수의 타입 정의
}

export const MenuToggle:React.FC<MenuToggleProps> = ({ toggle }) => (
  <button onClick={toggle}>
    <svg width="40" height="40" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" }
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" }
        }}
      />
    </svg>
  </button>
);