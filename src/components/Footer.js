import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled } from "@mui/system";
import Parallax2 from "./Parallax2";
import { ParallaxProvider } from "react-scroll-parallax";
const MyComponent = styled("div")({
  color: "darkslategray",

  background: "linear-gradient(to right, #fa709a 0%, #fee140 100%);",
  padding: 8,
  borderRadius: 4,
  minHeight: 100,
  borderEndEndRadius: 35,
  borderEndStartRadius: 30,
});
const Footer = () => {
  return (
    <MyComponent>
      <Container maxWidth="sm">
        {" "}
        {/* <ParallaxProvider>
        <Parallax2></Parallax2>
      </ParallaxProvider> */}
      </Container>
    </MyComponent>
  );
};
export default Footer;
