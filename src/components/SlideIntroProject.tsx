import React from "react";
import styled from "styled-components"

interface ProjectData {
  day: string;
  name: string;
  url: string;
  intro: string;
}

const SlideIntroProject:React.FC<ProjectData> = ({day, name, url, intro}) => {
  console.log(url)
  const goToUrl = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <Container>
      <h2>{day}</h2>
      <h1>{name}</h1>
      <div>
        <p>{intro}</p>
        <button onClick={goToUrl}>상세 프로젝트 보기</button>
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  padding: 30px;
  border-bottom: 1px solid gray;
  h1 {
    width: 300px;
    text-align: start;
    margin-right: 30px;
    font-size: 24px;
    font-weight: bold;
    color: white;
  }
  h2 {
    width: 200px;
    padding: 0px 20px;
    font-size: 20px;
    color: gray;
  }
  p {
    width: 600px;
    color: gray;
    font-weight: medium;
    padding: 0px 50px;
    line-height: 24px;
  }
  button {
    margin: 20px 50px 0px;
    padding: 10px 20px;
    color: white;
    background-color: #5047E6;
    border-radius: 5px;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
  }
`

export default SlideIntroProject