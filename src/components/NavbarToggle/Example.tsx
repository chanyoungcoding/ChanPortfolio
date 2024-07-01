import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import styled from "styled-components";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

export const Example = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <Container
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className="navbar"
    >
      <motion.div className="background" variants={sidebar} />
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </Container>
  );
};

const Container = styled(motion.nav)`
  position: fixed;
  right: 120px;
  top: 15px;
  z-index: 9999;
  nav {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 300px;
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 300px;
    background: #fff;
  }

  button {
    outline: none;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 18px;
    left: 15px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: transparent;
  }

  ul,
  li {
    margin: 0;
    padding: 0;
  }

  ul {
    padding: 25px;
    position: absolute;
    top: 60px;
    right: -120px;
    width: 230px;
  }

  li {
    list-style: none;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .icon-placeholder {
    padding: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    margin-right: 10px;
    border-radius: 100%;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  }

  .text-placeholder {
    width: 250px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .refresh {
    padding: 10px;
    position: absolute;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    width: 20px;
    height: 20px;
    top: 10px;
    right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`