import styled from 'styled-components'

const FrontSkillsBox = () => {
  return (
    <Container>
      <h1>FrontEnd</h1>
      <SkillContainer>
        <p>
          HTML, css, JS, React.js, Next.js, React-native, TypeScript, <br/>
          React query, Redux, recoil, Scss, styled-components, <br/>
          axios, emotion, gsap...
        </p>
      </SkillContainer>
    </Container>
  )
}

const Container = styled.div`
  margin: 10px 0px;
  h1 { font-size: 24px; color: black; }
`

const SkillContainer = styled.div`
  padding: 10px 0px;
  p {
    color: #C5C5C5;
    font-size: 20px;
    line-height: 30px;
  }
`

export default FrontSkillsBox