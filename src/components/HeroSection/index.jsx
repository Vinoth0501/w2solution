import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import "./index.css";
import Button from "../Component/Button";
import { image } from "../../assets";
import { Box } from "@mui/material";

const HeroSection = () => {
  const words = [
    "Cursus Integer",
    "Integer Consequat",
    "Tellus Euismod Pellentesque",
    "Aliquot Tristique",
    "Pellentesque Tempus",
    "Mauris Fermentum Praesent",
  ];

  const texts = "Tristique. ";
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => texts.slice(0, latest));

  const cursorX = useTransform(count, (latest) => `${latest * 10}px`);

  useEffect(() => {
    const typeAndErase = () => {
      animate(count, texts.length, {
        type: "tween",
        duration: 0.5,
        ease: "easeInOut",
        onComplete: () => {
          setTimeout(() => {
            animate(count, 0, {
              type: "keyframes",
              duration: 0.5,
              ease: "easeInOut",
              onComplete: () => {
                typeAndErase();
              },
            });
          }, 1000);
        },
      });
    };

    typeAndErase();

    return () => count.stop();
  }, []);

  return (
    <Box
      component="section"
      className="hero-section d-flex text-center"
      sx={{
        p: {
          xs: "40px 10px",
          sm: "60px 50px",
          md: "80px 80px",
          lg: "90px 100px 45px 100px",
        },
      }}
    >
      <Box
        sx={{
          p: {
            md: "30px 50px",
            lg: "50px 110px",
          },
        }}
      >
        <div>
          <h5 className="text-yw custom-font-700 custom-font-30">
            RISUS PRAESENT VULPUTATE.
          </h5>
          <h1 className="text-bk custom-font-700 custom-font-80 d-flex align-items-center justify-content-center flex-wrap">
            <span className="me-3">Cursus Consequat</span>{" "}
            <span className="me-3 d-block d-md-none">Cursus</span>
            <motion.span>{displayText}</motion.span>
            <motion.span
              className="blink-cursor"
              style={{
                right: cursorX,
              }}
              animate={{
                opacity: [1, 1, 1, 0.5],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </h1>
          <div className="gap-3 d-flex justify-content-center align-items-center flex-wrap my-5">
            {words.map((word, index) => (
              <div className="gap-1 card-container" key={index}>
                <img
                  src={image.checkCircle}
                  alt={word}
                  style={{ width: "24px", height: "24px" }}
                />
                <p className="mb-0 ps-1 text-bk custom-font-600 custom-font-20">
                  {word}
                </p>
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-center">
            <Button
              text="Lorem Ipsum"
              showIcon={true}
              icon={image.arrowLeft}
              onClick={() => alert("Clicked!")}
            />
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default HeroSection;
