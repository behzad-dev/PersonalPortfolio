import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const pages = ["My TimeLine", "About me", "Resume", "Contact Me"];

const MenuBar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleScroll = (section) => {
    props.myProp(section);
  };
  return (
    <AppBar
      sx={{
        // backgroundImage: "linear-gradient(to right, #f9d423 0%, #ff4e50 100%)",
        backgroundImage:
          "linear-gradient(60deg, #3d3393 0%, #2b76b9 37%, #2cacd1 65%, #35eb93 100%)",
        // background-image: linear-gradient(60deg, #3d3393 0%, #2b76b9 37%, #2cacd1 65%, #35eb93 100%);
      }}
      position="static"
    >
      <Container maxWidth="xl">
        {" "}
        {/* <button onClick={myProp}> Click to scroll </button> */}
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <WbSunnyIcon></WbSunnyIcon>
          </Typography>
          {/* <Link to="/pathLink#yourAnchorTag">Your link text</Link> */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            {/* <a href={`#${child.get("label")}`}>{child.get("label")}</a> */}
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>{" "}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/* onClick={myProp} */}
              {pages.map((page) => (
                <MenuItem key={page}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                onClick={() => {
                  handleScroll(page);

                  handleCloseNavMenu();
                }}
                key={page}
                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}{" "}
          </Box>{" "}
          <Button variant="contained">
            {" "}
            <Link style={{ color: "white" }} to="/classComponent">
              Login
            </Link>{" "}
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default MenuBar;
