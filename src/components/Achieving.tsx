import styled from "styled-components"
import { FaGithub } from "react-icons/fa6";
import { SiTistory, SiVelog } from "react-icons/si";

const Achieving = () => {
  return (
    <Container>
      <h1>Achieving</h1>
      <IntroBox>
        <Box>
          <TitleBox>
            <FaGithub size={40}/>
            <h2>GitHub</h2>
          </TitleBox>
          <a target="_blank" href="https://github.com/chanyoungcoding">github.com/chanyoungcoding</a>
          <p>제가 얼만큼 개발을 좋아하는지 확인하실 수 있습니다.</p>
        </Box>

        <Box>
          <TitleBox>
            <SiTistory className="enter" size={40}/>
            <SiVelog size={40}/>
            <h2>티스토리, Velog</h2>
          </TitleBox>
          <a target="_blank" href="https://chanyoungcoding.tistory.com/">chanyoungcoding.tistory.com</a>
          <a target="_blank" href="https://velog.io/@chanyoungcoding/posts">velog.io/@chanyoungcoding</a>
          <p>항상 무엇인가 배우면 기록하는 습관이 있습니다.</p>
        </Box>
      </IntroBox>
      
    </Container>
  )
}

const Container = styled.div`
  color: black;
  h1 {
    padding: 100px 0px 200px;
    text-align: center;
    font-size: 4rem;
    color: black;
  }
  h2 {
    margin-left: 15px;
    font-size: 50px;
    font-weight: bold;
  }
`

const IntroBox = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`

const Box = styled.div`
  width: 600px;
  padding: 50px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  a {
    display: block;
    margin: 20px 0px;
    color: #15ABFF;
    text-decoration: none;
  }
  p {
    font-size: 18px;
  }
`

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  .enter {
    margin-right: 15px;
  }
`

export default Achieving