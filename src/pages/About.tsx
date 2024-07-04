import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled from "styled-components";
import MyDreamBackground from "../assets/MyDream.jpg";
import MyDreamBackground2 from "../assets/MyDream2.jpg";

import CleanCode from "../assets/books/Clean Code.jpg";
import Git from "../assets/books/Git.jpg";
import CoreJS from "../assets/books/CoreJS.jpg";
import Front from "../assets/books/Front.jpg";
import React from "../assets/books/React.jpg";

import Udemy from "../assets/books/udemy.png";
import Nomad from "../assets/books/nomad.png";

import Thorn from "../assets/thorn.png";
import Sich from "../assets/sich.png";
import Barcode from "../assets/barcode.png";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  
  useGSAP(() => {

    gsap.to(".img_box", {
      scrollTrigger: {
        trigger: ".img_box",
        start: "top bottom",
        end: "top top",
        toggleActions: "restart none reverse none"
      },
      y: 40,
      duration: 1
    })

    gsap.to(".video_box", {
      scrollTrigger: {
        trigger: ".video_box",
        start: "top bottom",
        end: "top top",
        toggleActions: "restart none reverse none"
      },
      y: -50,
      duration: 1
    })

    gsap.to(".spin", {
      scrollTrigger: {
        trigger: ".spin",
        start: "top bottom",
        end: "top top",
        scrub: true
      },
      rotate: 360,
    })

    gsap.to(".intro_text", {
      scrollTrigger: {
        trigger: ".intro_text",
        start: "top bottom",
        end: "center center",
        scrub: true
      },
      x: -300,
    })

    gsap.to(".intro_text2", {
      scrollTrigger: {
        trigger: ".intro_text2",
        start: "top bottom",
        end: "center center",
        scrub: true
      },
      x: 300,
    })

    gsap.to(".h1_text", {
      opacity: 1,
      duration: 1
    })

    gsap.to(".p_text", {
      opacity: 1,
      duration: 2
    })
  })


  return (
    <Container>
      <DreamBox className='text'>
        <h1 className='h1_text'>
          스스로의 성장과 발전을 위해 <br/>
          끊임없이 노력합니다.
        </h1>
        <p className='p_text'>훗날 저는 유명 회사에 CTO 가 될 것입니다.</p>
        <p className='p_text'>나중에 100만명이 사용하는 사이트를 만들것입니다.</p>
        <p className='p_text'>개발을 어떻게 해야 할지 모르는 분들의 길잡이가 되고 싶습니다.</p>
      </DreamBox>

      <BookBox>
        <h1>제가 읽었던 코딩 책,강의들</h1>
        <Book>
          <BookImageBox className='img_box'>
            <BookImg src={CleanCode}/>
          </BookImageBox>
          <BookImageBox className='img_box'>
            <BookImg src={Git}/>
          </BookImageBox>
          <BookImageBox className='img_box'>
            <BookImg src={CoreJS}/>
          </BookImageBox>
          <BookImageBox className='img_box'>
            <BookImg src={Front}/>
          </BookImageBox>
          <BookImageBox className='img_box'>
            <BookImg src={React}/>
          </BookImageBox>
        </Book>

        <Video>
          <VideoImg className='video_box' src={Nomad}/>
          <VideoImg className='video_box' src={Udemy}/>
        </Video>

      </BookBox>

      <MyIntro>
        <SichImg src={Sich}/>
        <ThornImg className='spin' src={Thorn}/>
        <MiddleBox/>
        <TextBox className='intro_text'>
          <BarcodeImg src={Barcode}/>
          <h1>
            하루에 4시간은 코딩하면서 개발의 즐거움을 느끼고 있습니다. <br/>
            모르는 부분은 구글링, chat GPT 를 이용해서 어떻게든 해결하려고 합니다. <br/>
            해결한 문제, 공부한 부분은 항상 블로그에 기록합니다. <br/>
          </h1>
        </TextBox>

        <TextBox className='intro_text2'>
          <BarcodeImg src={Barcode}/>
          <h1>
          개발자는 무엇인가를 구현하는것만 잘하면 훌륭한 개발자가 아니라 <br/>
          사람을 위한 코드, 유지보수가 쉬운 폴더 구조, 비즈니스까지 생각하는 UI 등을 <br/>
          생각을 하는 개발자가 훌륭한 개발자 라고 생각합니다. <br/>
          </h1>
        </TextBox>
        <MiddleBox/>
      </MyIntro>

    </Container>
  )
}


// 1
const Container = styled.div``

const DreamBox = styled.div`
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${MyDreamBackground}) no-repeat center/cover;
  padding: 200px 100px 0px;
  h1 {
    color: white;
    font-size: 50px;
    line-height: 70px;
    font-weight: bold;
    opacity: 0;
  }
  p {
    color: white;
    font-size: 30px;
    padding: 25px 0px 5px;
    font-weight: bold;
    opacity: 0;
  }
`

// 2

const BookBox = styled.div`
  padding: 100px 0px 50px;
  h1 {
    color: black;
    font-size: 40px;
    font-weight: bold;
    text-align: center;
    padding: 20px 0px 25px;
  }
`

const Book = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`

const Video = styled(Book)`
  margin-top: 150px;
`

const BookImageBox = styled.div`
  width: 150px;
  height: 200px;
  margin: 0px 10px;
  padding: 30px 0px;
  border-radius: 10px;
  background-color: #f7f7f7;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`

const BookImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

const VideoImg = styled.img`
  width: 600px;
  object-fit: contain;
`

// 3

const MyIntro = styled.div`
  position: relative;
  background: url(${MyDreamBackground2}) no-repeat center/cover;
  padding-top: 100px;
  h1 {
    color: black;
    font-size: 20px;
    color: white;
    font-weight: bold;
    margin: 30px;
    line-height: 30px;
  }
`

const MiddleBox = styled.div`
  height: 300px;
`

const SichImg = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  object-fit: contain;
`

const ThornImg = styled(SichImg)`
  z-index: 2;
  width: 200px;
`

const BarcodeImg = styled.img`
  width: 200px;
  object-fit: contain;
`

const TextBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 30px 0px 40px;
  text-align: center;
`

export default About
