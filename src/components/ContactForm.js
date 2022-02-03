import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { RatingFeedBack } from "./reusables/Rating";
import React, { useEffect, useState, useRef } from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import "./reusables/BText.css";
import "aos/dist/aos.css";
import { Create_data, Fetch_data } from "../actions/index";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Aos from "aos";

const theme = createTheme({
  typography: {
    fontFamily: ['"Segoe UI"'].join(","),
  },
});
const ContactForm = () => {
  const counter = useSelector((state) => state);
  const dispatch = useDispatch();
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Content, setContent] = useState("");
  const [Like, setLike] = useState("");
  const valueRef = useRef();

  const handleCallbackLike = (childData) => {
    setLike(childData);
  };
  useEffect(() => {
    Aos.init({ duration: 1000, easing: "ease-in-sine" });
  }, []);
  const handleSend = () => {
    dispatch(Create_data(Name, Email, Content, Like));
  };
  return (
    <ParallaxBanner layers={[]}>
      <Container maxWidth="md">
        <ThemeProvider theme={theme}>
          {" "}
          <div
            className="BBold BStyle2 BSize_large"
            style={{ textAlign: "center", fontStyle: "oblique" }}
          >
            Contact Form
          </div>{" "}
          <div>
            <Paper
              data-aos="zoom-in-up"
              className="BStyle5 "
              elevation={12}
              sx={{
                width: "100%",
                height: "100%",
                margin: "5px",
                minHeight: "25vh",
              }}
            >
              <Box
                sx={{
                  height: "100%",
                  margin: "20px",
                  display: "flex",
                  flexDirection: "row",

                  "& .MuiTextField-root": { m: 3, width: "25ch" },
                }}
              >
                {" "}
                <TextField
                  onChange={(event) => setName(event.target.value)}
                  label="Name"
                  id="outlined-size-normal"
                  defaultValue="What should I call you?"
                />
                <TextField
                  onChange={(event) => setEmail(event.target.value)}
                  label="e-Mail"
                  id="outlined-size-normal"
                  defaultValue="How I can contact you?"
                />{" "}
                <RatingFeedBack
                  parentCallback={handleCallbackLike}
                  name="simple-controlled"
                />
              </Box>
              <Box
                fullWidth
                sx={{
                  margin: "20px",
                  display: "flex",
                  flexDirection: "row",

                  "& .MuiTextField-root": { mb: 5 },
                }}
              >
                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                  <TextField
                    onChange={(event) => setContent(event.target.value)}
                    id="outlined-multiline-static"
                    label="Tell me"
                    multiline
                    rows={6}
                    defaultValue="Sup?"
                  />{" "}
                  <Button
                    onClick={() => {
                      handleSend();
                    }}
                    variant="outlined"
                    endIcon={<SendIcon />}
                  >
                    Send
                  </Button>
                </FormControl>
              </Box>{" "}
            </Paper>
          </div>
        </ThemeProvider>
      </Container>
    </ParallaxBanner>
  );
};
export default connect(null, { Create_data, Fetch_data })(ContactForm);
