import { useGSAP } from '@gsap/react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// GSAP 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

const Test = () => {

  useGSAP(() => {

    const tl = gsap.timeline();
    tl.from(".purple", {xPercent: -100})
      .from(".red", {xPercent: 100})
      .from(".blue", {xPercent: -100})

    ScrollTrigger.create({
      animation: tl,
      trigger: "#container",
      start: "top, top",
      end: "+=5000",
      scrub: true,
      pin:true,
      anticipatePin: 1
    })

    gsap.to(".a", {
      x: 400,
      rotate: 360,
      repeat: -1,  // 무한히 반복
      yoyo: true,  // 앞뒤로 애니메이션 반복
      duration: 3
    })  

    gsap.to(".b", {
      scrollTrigger: {
        trigger: ".b",
        start: "top, center",
        end: "top, top",
        scrub: true,
      },
      x: 400,
      rotate: 360,
      ease: "none",
    })
  })

  return (
    <Container>

      <View>
        <Box className='a'/>
      </View>


      <View style={{backgroundColor: "orange"}}>
        <Box className='b' style={{position: "absolute"}}/>
      </View>

      <div id='container' style={{position:"relative"}}>
        <GreenBox style={{ position:"absolute"}}/>
        <PurpleBox className='purple' style={{ position:"absolute"}}/>
        <RedBox className='red' style={{ position:"absolute"}}/>
        <BlueBox className='blue' style={{ position:"absolute"}}/>
      </div>
      <View/>

    </Container>
  );
}

const Container = styled.div``

const View = styled.div`
  height: 100vh;
  width: 100vw;
`

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: black;
`

const GreenBox = styled(View)`
  background-color: green;
`

const PurpleBox= styled(View)`
  background-color: purple;
`

const RedBox = styled(View)`
  background-color: red;
`

const BlueBox = styled(View)`
  background-color: blue;
`




export default Test;

