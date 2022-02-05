import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import MuiTypography from "@mui/material/Typography";
import MuiButton from "@mui/material/Button";
import "./ContentTop.css";
import "./Content2.css";
import BounceBall from "./reusables/BounceBall";
// import BehTransparent from "./reusables/BehTransparent5.png";
import WELCOME from "./reusables/WELCOME.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import "./reusables/BText.css";
import TextAnimation from "./reusables/TextAnimation";
import CardMedia from "@mui/material/CardMedia";

// const theme = createTheme({
//   typography: {
//     fontFamily: [
//       "-apple-system",
//       "BlinkMacSystemFont",
//       '"Segoe UI"',
//       "Roboto",
//       '"Helvetica Neue"',
//       "Arial",
//       "sans-serif",
//       '"Apple Color Emoji"',
//       '"Segoe UI Emoji"',
//       '"Segoe UI Symbol"',
//     ].join(","),
//   },
// });
const theme = createTheme({
  typography: {
    fontFamily: ["Quicksand", "sans-serif"].join(","),
  },
});
const LayoutRoot = styled("section")(({ theme }) => ({
  color: theme.palette.common.white,

  position: "relative",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    height: "45vh",
    minHeight: 350,
    maxHeight: 1300,
  },
}));
const WavePart = styled("div")(({}) => ({
  color: "red",
  zIndex: "0",
}));
const myColor =
  "linear-gradient(60deg, #3d3393 0%, #2b76b9 37%, #2cacd1 65%, #35eb93 100%)";
// "linear-gradient(to right, #f9d423 0%, #ff4e50 100%);";

function ContentTop() {
  return (
    <div>
      {" "}
      <ThemeProvider theme={theme}>
        <LayoutRoot
          className="BStyle7"
          sx={
            {
              // backgroundImage: `url(${WELCOME})`,
              // fontFamily: "sans-serif",
              // backgroundImage: myColor,
            }
          }
        >
          <Container
            sx={{
              mt: 3,
              mb: -5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              // fontFamily: "sans-serif",
            }}
          >
            <Grid container spacing={5}>
              <Grid item xs={12} sm={1}></Grid>
              <Grid item xs={12} sm={3}>
                {/* <Paper elevation={7}>
                  <img
                    style={{
                      height: "400px",
                      position: "absolute",
                    }}
                    src={BehTransparent}
                    alt="Logo"
                  />{" "}
                </Paper> */}
              </Grid>
              <Grid item xs={12} sm={7}>
                {" "}
                <MuiTypography
                  zIndex="1"
                  color="inherit"
                  align="left"
                  variant="h2"
                  marked="center"
                  // sx={{ fontFamily: "BlinkMacSystemFont" }}
                >
                  <span> Welcome!</span>
                </MuiTypography>
                <MuiTypography
                  color="inherit"
                  align="left"
                  variant="h5"
                  sx={{
                    // fontFamily: "BlinkMacSystemFont",
                    mb: 4,
                    mt: { sx: 4, sm: 10 },
                  }}
                >
                  <span style={{ color: "white" }}>... I am </span>{" "}
                  <TextAnimation></TextAnimation>
                </MuiTypography>{" "}
                <BounceBall></BounceBall>
                {/* <MuiButton
                  color="warning"
                  variant="contained"
                  align="right"
                  size="large"
                  component="a"
                  href="/premium-themes/onepirate/sign-up/"
                  sx={{ color: "black", background: "white", minWidth: 200 }}
                >
                  Better than you imagine!
                </MuiButton> */}
                <MuiTypography variant="h5" color="inherit" sx={{ mt: 2 }}>
                  Let me tell you about myself...
                </MuiTypography>
              </Grid>
              <Grid item xs={12} sm={1}></Grid>
            </Grid>{" "}
            {/* <img
            style={{
              height: "400px",
              position: "absolute",
            }}
            src={BehTransparent}
            alt="Logo"
          />{" "}
          <div width="147" height="80"></div>
          <MuiTypography
            zIndex="1"
            color="inherit"
            align="right"
            variant="h2"
            marked="center"
          >
            <span className="changecolor3">And here you are !</span>
          </MuiTypography>
          <MuiTypography
            color="inherit"
            align="center"
            variant="h5"
            sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
          >
            A bright person to to do all!
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
            Better than you imagine!
          </MuiButton>
          <MuiTypography variant="body2" color="inherit" sx={{ mt: 2 }}>
            Discover new talents
          </MuiTypography> */}
          </Container>{" "}
        </LayoutRoot>{" "}
        <WavePart
          className="BStyle7"
          sx={
            {
              // backgroundImage: myColor,
            }
          }
        >
          <div className="custom-shape-divider-bottom-1643280713">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                // className="shape-fill"
                className="BStyle9"
                // #wavetop
              ></path>
            </svg>
          </div>
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="5 12 1440 100 ">
          <g transform="translate(1,1)">
            {" "}
            <path
              fill={{ backgroundColor: "primary.main" }}
              fill-opacity="1"
              // d="M 0 0 Q 150 300 200 100 Q 250 300 300 100 Q 350 300 450 0 C 450 50 650 100 700 100 C 900 100 850 100 1100 0 A 0 50 0 1 1 1450 0 "
              d="M1609.9,12.82a7.9,7.9,0,0,0-3.46-5.05q1.55-1.47,3.08-3c8.72-8.61-4.88-21.89-13.58-13.3-76,75-192.47,72.64-290.65,58.39-59.82-8.68-119.21-20.81-179.73-23.67-61.24-2.89-122.48,2.12-183.42,7.8-60.49,5.64-121,11.94-181.85,12-60.56.11-121-5.21-181.22-10.72C459.34,24.4,339.57,14.41,221,40.64,164.63,53.11,108.36,70.77,50.16,71.86c-45.39.86-94.37-8.74-130.92-37.2a136.66,136.66,0,0,1-23.78-23.5c-7.44-9.52-23.85.09-16.34,9.7C-92.47,57.19-50.68,78.07-5.94,86.33c-1.09,4.16.41,9.15,4.42,11.34l.15.4c-1.31,5.68,1.68,12.06,8.93,11l63.55-9.34c.23,4.61,3.38,9,9.37,8.84l14.65-.41a7.86,7.86,0,0,0,8.1,4.2l51.88-5.88,118-3.31.25,0a9.7,9.7,0,0,0,9.28,2.48,20.63,20.63,0,0,0,3.65-1.24,9.45,9.45,0,0,0,4.24.67l49.53-2.83,11.56.15a9.2,9.2,0,0,0,7,2.94l417,3.49,415.4,3.49,234,2a8.41,8.41,0,0,0,7.25-3.43l43.22-4.88,97.58.52a8.26,8.26,0,0,0,3.62-.8,10.48,10.48,0,0,0,5.59-1.19l2.24-1.15.16.82c1.61,8.2,13.79,8.91,17.44,2a81,81,0,0,0,3-69.47A32.46,32.46,0,0,0,1609.9,12.82Z"
              transform="translate(30.93 15.18)"
            />
          </g>
        </svg> */}
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0099ff"
            fillOpacity="1"
            d="M0,224L60,208C120,192,240,160,360,128C480,96,600,64,720,96C840,128,960,224,1080,229.3C1200,235,1320,149,1380,106.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg> */}
        </WavePart>
      </ThemeProvider>
    </div>
  );
}

export default ContentTop;
