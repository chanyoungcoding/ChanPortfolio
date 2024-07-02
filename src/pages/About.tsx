import { useInView } from "react-intersection-observer"
import styled, { keyframes } from "styled-components"


const About = () => {

  const { ref, inView } = useInView({
    threshold: 0.5
  })

  return (
    <Container>
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box1 ref={ref} style={{ animationPlayState: inView ? 'running' : 'paused' }}/>
    </Container>
  )
}


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 200px;
`

//animation 

const autoAnimation = keyframes`

  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const Box = styled.div`
  width: 500px;
  height: 500px;
  margin: 30px;
  background-color: #006dcd;
`

const Box1 = styled.div`
  width: 500px;
  height: 500px;
  margin: 30px;
  background-color: #006dcd;
  opacity: 0; // 기본값을 0으로 설정하여 보이지 않도록 함
  animation: ${autoAnimation} 1s forwards;
  animation-play-state: paused; // 기본적으로 애니메이션이 일시 중지 상태로 설정
`


export default About

