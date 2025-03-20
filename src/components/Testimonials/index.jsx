import React, { useRef, useEffect, useState } from "react";
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import { gsap } from "gsap";
import "bootstrap/dist/css/bootstrap.min.css";
import { image } from "../../assets";

const testimonialsData = [
  {
    id: 1,
    name: "Holly Davidson",
    feedback:
      "Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis.",
  },
  {
    id: 2,
    name: "Michael Smith",
    feedback:
      "Aenean sit amet ex vel elit sagittis varius. Duis efficitur, massa at malesuada gravida, justo quam sagittis orci, in vulputate felis est eget nisi.",
  },
  {
    id: 3,
    name: "Sophia Miller",
    feedback:
      "Praesent facilisis dolor vel orci tristique, ac tincidunt urna scelerisque. Integer euismod, felis at venenatis scelerisque, turpis sapien dapibus felis.",
  },
  {
    id: 4,
    name: "Daniel Johnson",
    feedback:
      "Vestibulum posuere urna a felis viverra, at posuere ligula pharetra. Nunc euismod, ligula a pretium fermentum, dui risus hendrerit justo.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

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
                  {testimonialsData[currentIndex].feedback}
                </p>
                <p className="text-bk custom-font-700 custom-font-24">
                  {testimonialsData[currentIndex].name}
                </p>

                <Box
                  display="flex"
                  justifyContent={{ xs: "center", md: "flex-start" }}
                  gap={2}
                  mt={2}
                >
                  <img
                    src={image.lgLeftArrow}
                    alt="Previous"
                    style={{
                      borderRadius: "50%",
                      width: "100%",
                      maxWidth: "38px",
                      height: "16.6px",
                      cursor: "pointer",
                    }}
                    onClick={handlePrev}
                  />
                  <img
                    src={image.lgRightArrow}
                    alt="Next"
                    style={{
                      borderRadius: "50%",
                      width: "100%",
                      maxWidth: "38px",
                      height: "16.6px",
                      cursor: "pointer",
                    }}
                    onClick={handleNext}
                  />
                </Box>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </section>
  );
};

export default Testimonials;
