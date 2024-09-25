import styled from "styled-components";
import IconCloud from "./magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "express",
  "nextdotjs",
  "firebase",
  "vercel",
  "git",
  "github",
  "visualstudiocode",
  "figma",
  "slack",
  "ios",
  "recoil",
  "axios",
];

const InteractiveIcon = () => {
  return (
    <Container>
      <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8">
        <IconCloud iconSlugs={slugs} />
      </div>
    </Container>
  );
}

const Container = styled.div`
  @media screen and (max-width: 700px){
    display: none;
  }
`

export default InteractiveIcon;
