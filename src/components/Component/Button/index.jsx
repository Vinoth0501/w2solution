import React, { useRef } from "react";
import { Button as MUIButton, Typography, Box } from "@mui/material";
import gsap from "gsap";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Button = ({
  text,
  showIcon = true,
  icon,
  onClick,
  bgColor = "#F7B500",
  color = "#1E1E1E",
  fullWidth,
}) => {
  const iconRef = useRef(null);
  const buttonRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(buttonRef.current, {
      boxShadow:
        bgColor === "#F7B500"
          ? "10px 10px 0px #1E1E1E"
          : bgColor === "#FFFFFF"
          ? "10px 10px 0px #F7B500"
          : "10px 10px 0px #FFFFFF",
      border:
        bgColor === "#F7B500"
          ? "2px solid #1E1E1E"
          : bgColor === "#FFFFFF"
          ? "2px solid #F7B500"
          : "2px solid #FFFFFF",
      duration: 0.1,
    });
    gsap.to(iconRef.current, {
      rotate: 90,
      x: 0,
      ease: "bounce.out",
      duration: 0.4,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(buttonRef.current, {
      boxShadow: "none",
      border: "none",
      duration: 0.4,
    });
    gsap.to(iconRef.current, {
      rotate: 0,
      ease: "bounce.out",
      duration: 0.4,
    });
  };

  return (
    <MUIButton
      ref={buttonRef}
      variant="contained"
      sx={{
        backgroundColor: bgColor,
        color:
          bgColor === "#F7B500" || bgColor === "#FFFFFF"
            ? "#262626"
            : "#FFFFFF",

        borderRadius: "50px",
        width: fullWidth ? "100%" : { xs: "100%", sm: "100%", md: "350px" },
        minHeight: { xs: "55px", sm: "60px", md: "76px" },
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 50px",
        "&:hover": {
          backgroundColor: bgColor,
          boxShadow: "none",
        },
      }}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Typography
        sx={{
          fontWeight: "700",
          fontSize: { xs: "16px", sm: "18px", md: "24px" },
          textTransform: "none",
        }}
      >
        {text}
      </Typography>

      {showIcon && (
        <Box ref={iconRef} sx={{ display: "flex", alignItems: "center" }}>
          {bgColor === "#262626" ? (
            <ArrowForwardIcon sx={{ color: "white", fontSize: 24 }} />
          ) : (
            <img
              src={
                bgColor === "#262626" ? (
                  <ArrowForwardIcon sx={{ color: "white" }} />
                ) : (
                  icon
                )
              }
              alt="button-icon"
              style={{
                objectFit: "contain",
                width: "24px",
              }}
            />
          )}
        </Box>
      )}
    </MUIButton>
  );
};

export default Button;
