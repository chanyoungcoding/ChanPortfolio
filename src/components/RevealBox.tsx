import styled from "styled-components";
import BoxReveal from "./magicui/box-reveal";
import { useNavigate } from "react-router-dom";
import { TfiLocationArrow } from "react-icons/tfi";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

const ReavealBox = () => {

  const navigate = useNavigate();

  const onClickAbout = () => {
    navigate('/about')
  }

  useGSAP(() => {
    gsap.to(".arrow", {
      y: -10,
      repeat: -1,     // 무한히 반복
      yoyo: true,    // 앞뒤로 애니메이션 반복
      duration: 1   // 애니메이션 시간 설정
    })
  })

  return (
    <Container>
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <Title>Hello!!</Title>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <TitleIntroduce>I'm <span>FrontEnd Developer</span></TitleIntroduce>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <Introduce>
          <p>코딩은 <span>예술</span>, 오류는 <span>도전</span></p>
        </Introduce>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <AboutBox>
          <AboutButton onClick={onClickAbout}>
            <p>제가 더 궁금하시면 클릭해 주세요.</p>
          </AboutButton>
          <TfiLocationArrow className="arrow" size={24} color="#5046e6" />
        </AboutBox>
      </BoxReveal>

    </Container>
  );
}

const Container = styled.div`
  margin: 40px;
  h1 { font-size: 6rem; }
  h2 { font-size: 3rem; }
  p { font-size: 4rem; }
  @media screen and (max-width: 1300px) {
    h1 { font-size: 4rem}
    h2 { font-size: 2rem}
    p { font-size: 2.5rem}
  }
`

const Title = styled.h1`
  padding: 20px 0px;
`

const TitleIntroduce = styled.h2`
  span { color: #5046e6 }
`

const Introduce = styled.div`
  padding: 30px 0px;
  p {
    padding: 5px 0px;
    span {
      color: #5046e6;
    }
  }
`

const AboutBox = styled.div`
  margin: 0px 30px 20px 0px;
  .arrow {
    position: relative;
    right: -260px;
  }
`

const AboutButton = styled.div`
  padding: 15px 20px;
  background-color: #3620FF;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  p {
    font-size: 16px;
  }
`

export default ReavealBox;
