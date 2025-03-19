import React from "react";
import { Container, Typography, Box, Grid } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "../Component/Button";
import { image } from "../../assets";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        p: {
          xs: "20px 10px",
          sm: "20px 30px",
          md: "35px 50px",
          lg: "45px 70px",
        },
      }}
    >
      <Box
        className="bg-dark text-white"
        sx={{
          p: {
            xs: "50px 20px",
            sm: "60px 30px",
            md: "60px 50px",
            lg: "50px 60px",
          },
          borderRadius: "50px",
        }}
      >
        <div className="row">
          {/* Text Section */}
          <div className="col-12 col-lg-8 text-center text-lg-start">
            <p className="custom-font-700 custom-font-50">
              Vulputate et pulvinar ethre Suspendisse tellus consectetur
            </p>
          </div>

          <div className="col-12 col-lg-4 text-center d-flex align-items-center ">
            <Button
              text="Lorem Ipsum"
              showIcon={true}
              icon={image.arrowLeft}
              onClick={() => alert("Clicked!")}
              fullWidth
              bgColor="#FFFFFF"
            />
          </div>
        </div>

        <hr className="border-light my-4" />

        {/* Footer Bottom Section */}
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          sx={{
            mt: "30px",
            flexDirection: { xs: "column", sm: "row" },
            textAlign: { xs: "center", sm: "start" },
          }}
        >
          <p className="custom-font-600 custom-font-20">
            Copyright © 2022 Lorem Ipsum.
          </p>

          <p className="custom-font-600 custom-font-20">
            <a href="#" className="text-white text-decoration-none mx-2">
              Privacy Policy
            </a>
            |
            <a href="#" className="text-white text-decoration-none mx-2">
              Terms & Conditions
            </a>
          </p>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
