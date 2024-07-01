import Fullpage ,{FullPageSections, FullpageSection, FullpageNavigation } from "@ap.cx/react-fullpage";

const About = () => {

  return (
    <Fullpage>
      <FullpageNavigation/>
      <FullPageSections>
        <FullpageSection style={{height: '100vh', backgroundColor: "black"}}>
          <p>hello</p>
        </FullpageSection>
        
        <FullpageSection style={{height: '100vh', backgroundColor: "black"}}>
          <p>hello</p>
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  )
}

export default About

