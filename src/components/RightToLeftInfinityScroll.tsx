import styled, { keyframes } from "styled-components"

import CoffeeProject from "../assets/ProjectCoffee.png";
import Opet from "../assets/opet.png";
import CoffeeBalance from "../assets/coffeeBalance.png";
import ChanMovie from "../assets/chanMovie.png";
import LastProject from "../assets/lastProject.png";
import MapleMInfo from "../assets/mapleMInfo.png";

const RightToLeftInfinityScroll = () => {

  const items = [
    {
      num: 1,
      url: CoffeeProject
    },
    {
      num: 2,
      url: Opet
    },
    {
      num: 3,
      url: CoffeeBalance
    },
    {
      num: 4,
      url: ChanMovie
    },
    {
      num: 5,
      url: MapleMInfo
    },
    {
      num:6,
      url: LastProject
    }
  ]
  
  return (
    <Container>
      <Wrapper>
        {items.map((item,index) => (
          <Box key={index} className={`box_${item.num}`}>
            <ProjectImg src={item.url}/>
          </Box>
        ))}
      </Wrapper>
    </Container>
  )
}

const ProjectImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 230px;
`

const Wrapper = styled.div`
  position: relative;
  width: 1000px;
  height: 100px;
  overflow: hidden;
  -webkit-mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1) 20%,
    rgba(0, 0, 0, 1) 80%,
    rgba(0, 0, 0, 0)
  );
  mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1) 20%,
    rgba(0, 0, 0, 1) 80%,
    rgba(0, 0, 0, 0)
  );

  // animation boxs
  .box_1 { animation-delay: calc(30s / 5 * (5 - 1) * -1)}
  .box_2 { animation-delay: calc(30s / 5 * (5 - 2) * -1)}
  .box_3 { animation-delay: calc(30s / 5 * (5 - 3) * -1)}
  .box_4 { animation-delay: calc(30s / 5 * (5 - 4) * -1)}
  .box_5 { animation-delay: calc(30s / 5 * (5 - 5) * -1)}
`

// animation

const scrollLeft = keyframes`
  to {
    left: -200px;
  }
`

const Box = styled.div`
  position: absolute;
  width: 200px;
  height: 100px;
  background-color: #006dcd;
  left: 1000px;
  border-radius: 10px;
  animation: ${scrollLeft} 30s linear infinite;
`

export default RightToLeftInfinityScroll