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
    <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default InteractiveIcon;
