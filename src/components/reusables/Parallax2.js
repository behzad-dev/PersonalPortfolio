import { ParallaxBanner } from "react-scroll-parallax";
// import BehTransparent from "./BehTransparent.png";
import stars from "./stars.jpg";
import ContentGrid from "../ContentGrid";
// const Parallax2 = () => {
//   return (
//     <ParallaxBanner
//       layers={[
//         {
//           image: "https://www.w3schools.com/w3css/img_lights.jpg",
//           speed: -101,
//         },
//         {
//           image:
//             "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
//           speed: -20,
//         },
//       ]}
//       className="aspect-[2/1]"
//       style={{
//         height: "500px",
//       }}
//     >
//       <h1>Banner Children</h1>
//     </ParallaxBanner>
//   );
// };
// export default Parallax2;

const Parallax2 = () => {
  const background = {
    image:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-background.jpg",
    translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1.05, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const headline = {
    translateY: [0, 30],
    scale: [1, 1.05, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-6xl md:text-8xl text-white font-thin">hey</h1>
      </div>
    ),
  };

  const foreground = {
    image:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-foreground.png",
    translateY: [0, 15],
    scale: [1, 1.1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const gradientOverlay = {
    opacity: [0, 0.9],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-blue-900" />
    ),
  };

  return (
    <ParallaxBanner
      layers={[background, headline, foreground, gradientOverlay]}
      className="aspect-[2/1] bg-gray-900"
    >
      <div style={{ height: "100vh", width: "500px" }}></div>
    </ParallaxBanner>
  );
};

export default Parallax2;
