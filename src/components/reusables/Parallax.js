import { Parallax } from "react-scroll-parallax";
// import BehTransparent from "./BehTransparent.png";
const MyParallax = () => {
  // const { ref } = useParallax({ speed: 10 });
  return (
    <Parallax
      opacity={[0.1, 2]}
      translateY={["-11px", "-1010px"]}
      // translateX={["-500px", "-100px"]}
      scale={[0, 1, "easeOutBack"]}
      // rotate={[-180, 0]}
      easing="easeInSine"
      speed={15}
    >
      {/* <img
        style={{
          height: "400px",
          position: "absolute",
        }}
        src={BehTransparent}
        alt="Logo"
      /> */}
    </Parallax>
  );
};
export default MyParallax;
