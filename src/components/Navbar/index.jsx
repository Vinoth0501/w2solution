import React from "react";
import { AppBar, Toolbar, Box, Container } from "@mui/material";
import { image } from "../../assets"; // Ensure images are imported correctly
import Dropdown from "../Component/Dropdown";
import "./index.css"; // Add custom styles if needed

const Navbar = () => {
  const options = [
    { id: 1, img: image.india, alt: "India" },
    { id: 2, img: image.aus, alt: "Australia" },
    { id: 3, img: image.news, alt: "New Zealand" },
    { id: 4, img: image.egypt, alt: "Egypt" },
  ];

  return (
    <AppBar
      sx={{
        backgroundColor: "#fff9e6",
        boxShadow: "none",
      }}
    >
      <Container>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            m: {
              xs: "10px",
              sm: "20px",
              md: "40px 80px 0px 80px",
              lg: "40px 100px 0px 100px",
            },
            paddingBottom: "10px",
            borderBottom: "1px solid rgba(38, 38, 38, 0.12)",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src={image.logo} alt="Logo" className="logo-img" />
          </Box>

          <Box>
            <Dropdown options={options} showFlags={true} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
