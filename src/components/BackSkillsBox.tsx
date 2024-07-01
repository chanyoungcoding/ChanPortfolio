import styled from "styled-components"

const BackSkillsBox = () => {
  return (
    <Container>
      <h1>BackEnd</h1>
      <SkillContainer>
        <p>
          Node, Express, MongoDB, MongoDB Atlas <br/>
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

export default BackSkillsBox