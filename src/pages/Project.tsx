
import styled from "styled-components";
import CoffeeIntro from "../assets/coffeeIntro.png";

const Project = () => {
  return (
    <Container>
      <CoffeeIntroBox src={CoffeeIntro}/>
    </Container>
  )
}

const Container = styled.div`
height: 100%;
width: 100%;
`

const CoffeeIntroBox = styled.img`
  width: 100%;
  object-fit: cover;
`

export default Project