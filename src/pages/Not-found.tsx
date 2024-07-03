import styled from "styled-components"
import NotFoundImage from "../assets/notfound.png";
import { useNavigate } from "react-router-dom";

const NotFound = () => {

  const navigate = useNavigate();

  const onClickBack = () => {
    navigate(-1);
  }

  return (
    <Container>
      <NotFoundImg src={NotFoundImage}/>
      <p>페이지를 찾을 수 없습니다.</p>
      <BackButton onClick={onClickBack}>
        <p>뒤로가기</p>
      </BackButton>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  p {
    color: black;
  }
`

const NotFoundImg = styled.img`
  width: 500px;
  height: 500px;
  object-fit: cover;
`

const BackButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  padding: 10px 20px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  cursor: pointer;
`

export default NotFound