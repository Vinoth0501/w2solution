import React, { useRef, useEffect } from "react";
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import { gsap } from "gsap";
import "bootstrap/dist/css/bootstrap.min.css";
import { image } from "../../assets";

const Testimonials = () => {
  const cardRef = useRef(null);
  const textRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const textElements = textRef.current.querySelectorAll("p, h5");
    const overlay = overlayRef.current;

    card.addEventListener("mouseenter", () => {
      gsap.to(overlay, {
        y: -100,
        duration: 0.2,
        ease: "bounce.Out",
        onComplete: () => {
          gsap.to(overlay, {
            y: 0,
            duration: 0.2,
            ease: "bounce.in",
          });
        },
      });

      gsap.to(textElements, {
        color: "white",
        duration: 0.5,
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(overlay, {
        y: "100%",
        duration: 0.8,
        ease: "bounce.out",
      });

      gsap.to(textElements, {
        color: "black",
        duration: 0.1,
      });
    });

    return () => {
      card.removeEventListener("mouseenter", () => {});
      card.removeEventListener("mouseleave", () => {});
    };
  }, []);

  return (
    <section className="testimonials">
      <Box
        sx={{
          position: "relative",
          p: {
            xs: "20px 10px",
            sm: "20px 30px",
            md: "35px 50px",
            lg: "90px 70px 45px 70px",
          },
        }}
      >
        <Card
          ref={cardRef}
          sx={{
            padding: { xs: "40px 20px", md: "80px 60px", sm: "50px 0px" },
            borderRadius: "50px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            ref={overlayRef}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `url(${image.coverImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(40%)",
              transform: "translateY(100%)",
              opacity: "0.9",

              zIndex: 0,
            }}
          />

          <Grid
            container
            spacing={3}
            alignItems="center"
            sx={{ position: "relative", zIndex: 1 }}
          >
            <Grid item xs={12} md={5} display="flex" justifyContent="center">
              <img
                src={image.humanImage}
                alt="User"
                style={{
                  borderRadius: "50%",
                  width: "100%",
                  maxWidth: "472px",
                  height: "auto",
                }}
              />
            </Grid>

            {/* Content - Centers Text on Mobile */}
            <Grid item xs={12} md={7}>
              <CardContent
                ref={textRef}
                sx={{
                  textAlign: { xs: "center", md: "left" },
                  transition: "color 0.5s ease-in-out",
                }}
              >
                <p className="text-bk custom-font-700 custom-font-50">
                  What our customers thought?
                </p>
                <p className="text-bk custom-font-400 custom-font-30">
                  Euismod magna id purus eget nunc ligula suspendisse dui netus.
                  Condimentum blandit rutrum at mauris enim pulvinar duis etiam
                  duis.
                </p>
                <p className="text-bk custom-font-700 custom-font-24">
                  Holly Davidson
                </p>

                {/* <Box
                  display="flex"
                  justifyContent={{ xs: "center", md: "flex-start" }}
                  gap={2}
                  mt={2}
                >
                  <img
                    src={image.lgLeftArrow}
                    alt="User"
                    style={{
                      borderRadius: "50%",
                      width: "100%",
                      maxWidth: "38px",
                      height: "16.6px",
                    }}
                  />
                  <img
                    src={image.lgRightArrow}
                    alt="User"
                    style={{
                      borderRadius: "50%",
                      width: "100%",
                      maxWidth: "38px",
                      height: "16.6px",
                    }}
                  />
                </Box> */}
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </section>
  );
};

export default Testimonials;
