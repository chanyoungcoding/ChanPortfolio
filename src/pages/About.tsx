import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled from 'styled-components';

// GSAP 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const boxRef = useRef(null);

  useLayoutEffect(() => {
    if (boxRef.current) { 
      gsap.to(boxRef.current, { 
        x: 300, 
        opacity: 1,
        scrollTrigger: {
          trigger: boxRef.current, 
          start: 'top bottom',
          end: 'top 20%', 
          scrub: true, 
        },
      });
    }


    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <Container>
      <Box></Box>
      <section className="section flex-center column">
        <h2>Basic ScrollTrigger with React</h2>
        <p>Scroll down to see the magic happen!!</p>
      </section>
      <div className="section flex-center column">
        <div className="box gradient-blue" ref={boxRef}>box</div> 
      </div>
      <section className="section"></section>
    </Container>
  );
}

const Box = styled.div`
  height: 100vh;
  background-color: aliceblue;
`

const Container = styled.div`
  height: 2000px;
  .section {
    padding: 50px 0;
    text-align: center;
  }

  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .column {
    flex-direction: column;
  }

  .box {
    width: 100px;
    height: 100px;
    margin: 20px;
    background: #3498db;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
  }

  .gradient-blue {
    background: linear-gradient(135deg, #1e90ff, #00bfff);
  }

`

export default About;

