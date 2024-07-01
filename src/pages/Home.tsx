//@ts-expect-error You can ignore this error 
import Fullpage ,{FullPageSections, FullpageSection, FullpageNavigation } from "@ap.cx/react-fullpage";
import styled from 'styled-components'

import KeyboardBackground from "../assets/keyboardBackground.png";

import InteractiveIcon from '../components/InteractiveIcon'
import ReavealBox from '../components/RevealBox'

import ChanImg from "../assets/chanyoungimage.jpeg";
import FrontSkillsBox from "../components/FrontSkillsBox";
import BackSkillsBox from "../components/BackSkillsBox";
import LastSkillsBox from "../components/LastSkillsBox";
import ProjectBox from "../components/ProjectBox";
import Achieving from "../components/Achieving";

const Home = () => {

  return (
    <Container>
      <Fullpage>
        <FullpageNavigation/>
        <FullPageSections>

          <FullpageSection style={{height: '100vh', backgroundColor: "black"}}>
            <IntroBox>
              <ReavealBox/>
              <ChanImageBox src={ChanImg}/>
              <Circle/>
              <ArrowText>⇣ 스크롤을 내려보세요.</ArrowText>
            </IntroBox>
          </FullpageSection>

          <FullpageSection style={{height: '100vh'}}>
            <SkillText>Skills</SkillText>
            <SkillContainer>
              <SkillBox>
                <FrontSkillsBox/>
                <BackSkillsBox/>
                <LastSkillsBox/>
              </SkillBox>
              <InteractiveIcon/>
            </SkillContainer>
          </FullpageSection>

          <FullpageSection className="background" style={{height: '100vh'}}>
            <ProjectBox/>
          </FullpageSection>

          <FullpageSection style={{height: '100vh'}}>
            <Achieving/>
          </FullpageSection>

        </FullPageSections>
      </Fullpage>
    </Container>
  )
}

const Container = styled.div`
  .background {
    background: url(${KeyboardBackground});
    background-repeat: no-repeat;
    background-size: cover;
  }
`

const IntroBox = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`

const ChanImageBox = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;
  border-radius: 100%;
  margin-left: 100px;
  z-index: 1;
  @media screen and (max-width: 1300px) {
    width: 300px;
    height: 300px;
  }
  @media screen and (max-width: 700px) {
    width: 200px;
    height: 200px;
    position: absolute;
    top: -70px;
    right: 60px;
  }
`

const Circle = styled.div`
  position: absolute;
  right: -600px;
  top: 25px;
  width: 1500px;
  height: 1500px;
  background-color: rgba(255,255,255,0.1);
  border-radius: 100%;
`

const ArrowText = styled.p`
  position: absolute;
  bottom: -200px;
  right: 44%;
`

const SkillText = styled.p`
  padding-top: 70px;
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
  color: black;
`

const SkillContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`

const SkillBox = styled.div`
  margin: 0px 10px;
  padding: 40px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
`

export default Home