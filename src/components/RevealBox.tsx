import styled from "styled-components";
import BoxReveal from "./magicui/box-reveal";

const ReavealBox = () => {
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

export default ReavealBox;
