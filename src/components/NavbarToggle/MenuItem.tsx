import { motion } from "framer-motion";
import styled from "styled-components";

import React from "react";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

interface MenuItemData {
  name: string;
  url: string;
  image: React.ReactElement; 
}

const MenuItem:React.FC<MenuItemData> = ({name, url, image}) => {

  const onClickUrl = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClickUrl}
    >
      <Box className="icon-placeholder">
        {image}
      </Box>
      <TitleBox className="text-placeholder" >
        <p>{name}</p>
      </TitleBox>
    </motion.li>
  );
};

const Box = styled.div`
  
`

const TitleBox= styled.div`
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  p {
    color: black;
    font-size: 20px;
  }
`

export default MenuItem;
