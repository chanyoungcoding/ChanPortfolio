import styled from "styled-components"
import { FaGithub } from "react-icons/fa6";
import { SiTistory, SiVelog } from "react-icons/si";

import GDSC from "../assets/GDSC.png";
import Developer from "../assets/developerPeaple.png";

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

      <IntroBox>
        <Box>
          <TitleBox>
            <GDSCImage src={GDSC} alt="" />
            <h2>GDSC</h2>
          </TitleBox>
          <a target="_blank" href="https://developers.google.com/community/gdsc?hl=ko">developers.google.com/community/gdsc</a>
          <p>Google Developer student club 에서 활동</p>
          <p>FrontEnd 부분 멤버로 활동했습니다.</p>
          <h3>2023. 08 ~ 2024. 08</h3>
        </Box>

        <Box>
          <TitleBox>
            <DeveloperImage src={Developer}/>
            <p style={{color: "gray"}}>현재도 개발중입니다 ☺️ ☺️ ☺️ ☺️</p>
          </TitleBox>
        </Box>
      </IntroBox>
      
    </Container>
  )
}

const Container = styled.div`
  color: black;
  h1 {
    padding: 100px 0px;
    text-align: center;
    font-size: 4rem;
    color: black;
  }
  h2 {
    margin-left: 15px;
    font-size: 50px;
    font-weight: bold;
  }
  h3 {
    margin-top: 5px;
    color: gray;
  }
`

const IntroBox = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 20px;
`

const Box = styled.div`
  width: 600px;
  padding: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  a {
    display: block;
    margin: 20px 0px;
    color: #15ABFF;
    text-decoration: none;
  }
  p {
    font-size: 18px;
    line-height: 24px;
  }
`

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  .enter {
    margin-right: 15px;
  }
`

const GDSCImage = styled.img`
  width: 250px;
  object-fit: cover;
`

const DeveloperImage = styled.img`
  width: 200px;
  object-fit: cover;
`

export default Achieving