import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import MuiTypography from "@mui/material/Typography";

import MuiButton from "@mui/material/Button";
import { green, purple } from "@mui/material/colors";
import { gsap } from "gsap";
import BounceBall from "./reusables/BounceBall";
// import BehTransparent from "./reusables/BehTransparent.png";
const ProductHeroLayoutRoot = styled("section")(({ theme }) => ({
  color: theme.palette.common.white,

  position: "relative",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    height: "50vh",
    minHeight: 500,
    maxHeight: 1300,
  },
}));

const Background = styled(Box)({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  zIndex: -2,
  backgroundColor: "#0099ff",
});

function ProductHeroLayout(props) {
  const { sxBackground, children } = props;

  return (
    <div>
      {" "}
      <ProductHeroLayoutRoot sx={{ backgroundColor: "primary.main" }}>
        <Container
          sx={{
            mt: 3,
            mb: 14,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {" "}
          {/* <img
            style={{
              height: "400px",
              position: "absolute",
            }}
            src={BehTransparent}
            alt="Logo"
          />{" "} */}
          <div width="147" height="80" />
          <MuiTypography
            zIndex="1"
            color="inherit"
            align="right"
            variant="h2"
            marked="center"
          >
            Ready to be hired ! please please please
          </MuiTypography>
          <MuiTypography
            color="inherit"
            align="center"
            variant="h5"
            sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
          >
            A bright person to to do shits! pleaseeee
          </MuiTypography>{" "}
          <BounceBall></BounceBall>
          <MuiButton
            color="secondary"
            variant="contained"
            size="large"
            component="a"
            href="/premium-themes/onepirate/sign-up/"
            sx={{ minWidth: 200 }}
          >
            Hire me! please
          </MuiButton>
          <MuiTypography variant="body2" color="inherit" sx={{ mt: 2 }}>
            Discover new talents
          </MuiTypography>
          {children}
          <Box
            sx={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              backgroundColor: "common.black",
              opacity: 0.5,
              zIndex: -1,
            }}
          />
          <Background sx={sxBackground} />
        </Container>{" "}
      </ProductHeroLayoutRoot>{" "}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0099ff"
          fillOpacity="1"
          d="M0,224L60,208C120,192,240,160,360,128C480,96,600,64,720,96C840,128,960,224,1080,229.3C1200,235,1320,149,1380,106.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
      {/* <svg viewBox="0 0 5555 777">
        <path
          d="M478.608,300.522v-33.39h-66.781V233.74h33.39v-0.001h0.001v-33.391h33.391V66.783h-33.392v-33.39h-33.39V0H0v100.174
			h33.39v322.783H0V512h445.217v-33.39h33.39v-0.001h0.001v-33.391H512V300.522H478.608z M367.304,389.565h-33.391v33.391H144.696
			V322.783h189.217v33.391h33.391V389.565z M367.304,155.826h-33.391v33.391H144.696V89.044h189.217v33.391h33.391V155.826z"
        />
      </svg> */}
    </div>
  );
}

ProductHeroLayout.propTypes = {
  children: PropTypes.node,
  sxBackground: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default ProductHeroLayout;
