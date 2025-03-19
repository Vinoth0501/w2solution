import React, { useEffect } from "react";
import { Card, Grid, Typography, Box } from "@mui/material";
import { image } from "../../assets";
import Button from "../Component/Button";
import gsap from "gsap";

const Features = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      delay: 1,
      repeatDelay: 1,
    });

    tl.fromTo(
      "#triangle",
      { rotate: 5 },
      { rotate: 15, duration: 1, ease: "bounce.out" }
    )
      .fromTo("#box", { x: 0 }, { x: 20, duration: 1, ease: "bounce.out" }, "<")
      .fromTo(
        "#cart",
        { y: 0 },
        { y: -20, duration: 1, ease: "bounce.out" },
        "<"
      )
      .fromTo(
        "#heart",
        { y: -40 },
        { y: 0, duration: 1, ease: "bounce.out" },
        "<"
      )
      .fromTo(
        "#flower",
        { scale: 0.5 },
        { scale: 1, duration: 1, ease: "bounce.out" },
        "<"
      )
      .fromTo(
        "#hand",
        { y: 0 },
        { y: -20, duration: 1, ease: "bounce.out" },
        "<"
      )
      .fromTo(
        "#band",
        { scale: 0.9 },
        { scale: 1, duration: 1, ease: "bounce.out" },
        "<"
      )
      .fromTo(
        "#mouth",
        { rotate: 0 },
        { rotate: -20, duration: 1, ease: "bounce.out" },
        "<"
      )
      .fromTo(
        "#eye",
        { x: 0 },
        { x: -10, y: -5, duration: 1, ease: "bounce.out" },
        "<"
      )
      .fromTo(
        "#ear",
        { rotate: -5 },
        { rotate: 15, duration: 1, ease: "bounce.out" },
        "<"
      );
  }, []);

  return (
    <>
      <Box
        component="section"
        sx={{
          position: "relative",
          p: {
            xs: "20px 10px",
            sm: "20px 30px",
            md: "35px 50px",
            lg: "45px 70px 0px 70px",
          },
        }}
      >
        <Card
          sx={{
            backgroundColor: "#FFC107",
            padding: { xs: "40px 20px", md: "80px 100px" },
            borderRadius: "50px",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Grid
            container
            spacing={2}
            alignItems="center"
            flexDirection={{ xs: "column-reverse", md: "row" }}
          >
            <Grid item xs={12} md={6} sx={{ padding: { md: "0px 50px" } }}>
              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: "28px", md: "45px" },
                  fontWeight: "bold",
                }}
              >
                Phasellus a vitae iaculis magna eleifend pulvinar velit odio.
              </Typography>
              <Typography
                sx={{
                  textDecoration: "underline",
                  fontWeight: "bold",
                  fontSize: { xs: "16px", md: "20px" },
                  paddingTop: "20px",
                }}
                variant="body2"
              >
                Vulputate et vulputate suspendisse natoque!
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "16px", md: "20px" },
                  paddingBottom: "20px",
                }}
              >
                Euismod magna id purus eget nunc ligula suspendisse dui netus.
                Condimentum blandit rutrum at mauris enim pulvinar duis etiam
                duis vulputate et vulputate suspendisse natoque id tellus
                consectetur pulvinar et.
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <Button
                  showIcon={true}
                  icon={image.arrowLeft}
                  text={"Lorem Ipsum"}
                  bgColor={"black"}
                  color={"white"}
                />
              </Box>
            </Grid>
            <Grid
              className=" flex justify-center items-center h-screen"
              item
              xs={12}
              md={6}
            >
              <div className="position-relative">
                <Box
                  component="img"
                  src={image.triangle}
                  id="triangle"
                  alt="Feature2"
                  sx={{
                    maxWidth: "445px",
                    maxHeight: "475px",
                    left: "99px",
                    top: "92px",
                    borderRadius: "24px",
                  }}
                  className="absolute"
                />
                <Box
                  component="img"
                  src={image.threeDOt}
                  alt="Feature1"
                  sx={{
                    maxWidth: "142px",
                    height: "49px",
                    left: "400px",
                    top: "130px",
                    borderRadius: "24px",
                  }}
                  className="position-absolute"
                ></Box>
                <Box
                  component="img"
                  src={image.textArea}
                  alt="Feature1"
                  id="box"
                  sx={{
                    maxWidth: "187px",
                    height: "200px",
                    left: "360px",
                    top: "210px",
                    zIndex: 2,
                    borderRadius: "24px",
                  }}
                  className="position-absolute"
                ></Box>
                <Box
                  component="img"
                  src={image.cart}
                  alt="cart"
                  id="cart"
                  sx={{
                    maxWidth: "209px",
                    height: "116px",
                    left: "-50px",
                    top: "60px",
                    borderRadius: "20px",
                  }}
                  className="position-absolute"
                ></Box>
                <Box
                  component="img"
                  src={image.heart}
                  alt="heart"
                  id="heart"
                  sx={{
                    maxWidth: "81px",
                    height: "81px",
                    left: "-20px",
                    top: "250px",
                    borderRadius: "18px",
                  }}
                  className="position-absolute"
                ></Box>
                <Box
                  component="img"
                  src={image.flower}
                  alt="flower"
                  id="flower"
                  sx={{
                    maxWidth: "25px",
                    height: "25px",
                    left: "5px",
                    bottom: "80px",
                    borderRadius: "18px",
                    background: "transparent",
                    zIndex: 2,
                  }}
                  className="position-absolute"
                ></Box>
                <Box
                  component="img"
                  src={image.flower}
                  alt="flower"
                  id="flower"
                  sx={{
                    maxWidth: "25px",
                    height: "25px",
                    left: "35px",
                    bottom: "50px",
                    borderRadius: "18px",
                    background: "transparent",
                    zIndex: 2,
                  }}
                  className="position-absolute"
                ></Box>
                <Box
                  component="img"
                  src={image.stem}
                  alt="flower"
                  sx={{
                    maxWidth: "28px",
                    height: "70px",
                    left: "15px",
                    bottom: "30px",
                    borderRadius: "18px",
                    background: "transparent",
                    zIndex: 1,
                  }}
                  className="position-absolute"
                ></Box>
                <Box
                  component="img"
                  src={image.smStem}
                  alt="flower"
                  sx={{
                    maxWidth: "12px",
                    height: "30px",
                    left: "45px",
                    bottom: "30px",
                    borderRadius: "18px",
                    background: "transparent",
                    zIndex: 1,
                  }}
                  className="position-absolute"
                ></Box>
                <Box
                  component="img"
                  src={image.pot}
                  alt="flower"
                  sx={{
                    maxWidth: "50px",
                    height: "10px",
                    left: "20px",
                    bottom: "30px",
                    borderRadius: "18px",
                    background: "transparent",
                    zIndex: 1,
                  }}
                  className="position-absolute"
                ></Box>
                <Box
                  component="img"
                  src={image.borderBottom}
                  alt="border"
                  sx={{
                    maxWidth: "520px",
                    height: "3px",
                    left: "50px",
                    bottom: "0px",
                    borderRadius: "18px",
                    background: "transparent",
                    zIndex: 1,
                  }}
                  className="position-absolute"
                ></Box>
                <Box
                  component="img"
                  src={image.leftHand}
                  alt="leftHand"
                  sx={{
                    maxWidth: "100px",
                    height: "225px",
                    left: "100px",
                    top: "270px",
                    zIndex: 2,
                  }}
                  className="position-absolute"
                ></Box>
                <Box
                  component="img"
                  src={image.rightHand}
                  alt="rightHand"
                  sx={{
                    maxWidth: "233px",
                    height: "88px",
                    left: "220px",
                    top: "410px",
                    zIndex: 2,
                  }}
                  className="position-absolute"
                ></Box>
                <Box
                  component="img"
                  src={image.body}
                  alt="body"
                  sx={{
                    maxWidth: "315px",
                    height: "172px",
                    left: "135px",
                    top: "250px",
                    zIndex: 1,
                  }}
                  className="position-absolute"
                ></Box>
                <Box
                  component="img"
                  src={image.dress}
                  alt="body"
                  sx={{
                    maxWidth: "161px",
                    height: "109px",
                    left: "195px",
                    top: "320px",
                    zIndex: 1,
                  }}
                  className="position-absolute"
                ></Box>
                <Box
                  component="img"
                  src={image.face}
                  alt="body"
                  sx={{
                    maxWidth: "113px",
                    height: "128px",
                    left: "190px",
                    top: "122px",
                    zIndex: 2,
                  }}
                  className="position-absolute"
                ></Box>
                <Box
                  component="img"
                  src={image.hair}
                  alt="body"
                  sx={{
                    maxWidth: "113px",
                    height: "116px",
                    left: "201px",
                    top: "115px",
                    zIndex: 1,
                  }}
                  className="position-absolute"
                ></Box>
                <Box
                  component="img"
                  src={image.hair1}
                  alt="body"
                  sx={{
                    maxWidth: "89px",
                    height: "89px",
                    left: "271px",
                    top: "185px",
                    zIndex: 0,
                  }}
                  className="position-absolute"
                ></Box>
                <Box
                  component="img"
                  src={image.hair1}
                  alt="body"
                  sx={{
                    maxWidth: "89px",
                    height: "89px",
                    left: "305px",
                    top: "225px",
                    zIndex: 0,
                  }}
                  className="position-absolute"
                ></Box>
                <Box
                  component="img"
                  src={image.hand}
                  id="hand"
                  alt="body"
                  sx={{
                    maxWidth: "77px",
                    height: "140px",
                    left: "90px",
                    top: "155px",
                    zIndex: 1,
                    filter: "drop-shadow(0px 0px 5px black)",
                  }}
                  className="position-absolute"
                ></Box>
                <Box
                  component="img"
                  src={image.hand}
                  id="hand"
                  alt="body"
                  sx={{
                    maxWidth: "77px",
                    height: "140px",
                    left: "90px",
                    top: "155px",
                    zIndex: 1,
                    filter: "drop-shadow(0px 0px 5px black)",
                  }}
                  className="position-absolute"
                ></Box>
                <Box
                  component="img"
                  src={image.band1}
                  alt="body"
                  id="band"
                  sx={{
                    maxWidth: "48px",
                    height: "62px",
                    left: "310px",
                    top: "130px",
                    zIndex: 1,
                  }}
                  className="position-absolute"
                ></Box>
                <Box
                  component="img"
                  src={image.band2}
                  id="band"
                  alt="body"
                  sx={{
                    maxWidth: "67px",
                    height: "32px",
                    left: "310px",
                    top: "158px",
                    zIndex: 1,
                  }}
                  className="position-absolute"
                ></Box>
                <Box
                  component="img"
                  src={image.mouth}
                  id="mouth"
                  alt="body"
                  sx={{
                    maxWidth: "22px",
                    height: "15px",
                    left: "205px",
                    top: "195px",
                    zIndex: 3,
                  }}
                  className="position-absolute"
                ></Box>
                <Box
                  component="img"
                  src={image.eye}
                  id="eye"
                  alt="body"
                  sx={{
                    maxWidth: "6.75px",
                    height: "6.75px",
                    left: "225px",
                    top: "175px",
                    zIndex: 3,
                  }}
                  className="position-absolute"
                ></Box>
                <Box
                  component="img"
                  src={image.small}
                  // id="eye"
                  alt="body"
                  sx={{
                    maxWidth: "20.75px",
                    height: "20.75px",
                    left: "310px",
                    top: "173px",
                    zIndex: 4,
                  }}
                  className="position-absolute"
                ></Box>
                <Box
                  component="img"
                  src={image.circle}
                  // id="eye"
                  alt="body"
                  sx={{
                    maxWidth: "11.75px",
                    height: "11.75px",
                    left: "280px",
                    top: "185px",
                    zIndex: 4,
                  }}
                  className="position-absolute"
                ></Box>
                <Box
                  component="img"
                  src={image.ear}
                  id="ear"
                  alt="body"
                  sx={{
                    maxWidth: "13.75px",
                    height: "11.75px",
                    left: "279.5px",
                    top: "181px",
                    zIndex: 4,
                  }}
                  className="position-absolute"
                ></Box>
                <Box
                  component="img"
                  src={image.borderBottom}
                  alt="border"
                  sx={{
                    maxWidth: "64px",
                    height: "3px",
                    left: "120px",
                    top: "290px",
                    borderRadius: "18px",
                    background: "transparent",
                    zIndex: 3,
                  }}
                  className="position-absolute"
                ></Box>
                <Box
                  component="img"
                  src={image.borderBottom}
                  alt="border"
                  sx={{
                    maxWidth: "64px",
                    height: "3px",
                    left: "220px",
                    bottom: "15px",
                    borderRadius: "18px",
                    background: "transparent",
                    zIndex: 3,
                    transform: "rotate(90deg)",
                  }}
                  className="position-absolute"
                ></Box>
                <Box
                  component="img"
                  src={image.borderBottom}
                  alt="border"
                  sx={{
                    maxWidth: "64px",
                    height: "3px",
                    left: "320px",
                    bottom: "65px",
                    borderRadius: "18px",
                    background: "transparent",
                    zIndex: 3,
                    // transform: "rotate(90deg)",
                  }}
                  className="position-absolute"
                ></Box>
                <Box
                  component="img"
                  src={image.borderBottom}
                  alt="border"
                  sx={{
                    maxWidth: "66px",
                    height: "3px",
                    left: "285px",
                    top: "285px",
                    borderRadius: "18px",
                    background: "transparent",
                    zIndex: 3,
                    transform: "rotate(90deg)",
                  }}
                  className="position-absolute"
                ></Box>
                <Box
                  component="img"
                  src={image.borderBottom}
                  alt="border"
                  sx={{
                    maxWidth: "66px",
                    height: "3px",
                    left: "170px",
                    top: "285px",
                    borderRadius: "18px",
                    background: "transparent",
                    zIndex: 3,
                    transform: "rotate(90deg)",
                  }}
                  className="position-absolute"
                ></Box>
              </div>

              {/* <Box
                component="img"
                src={image.vector}
                alt="Feature3"
                id="human"
                sx={{ width: "100%", maxWidth: "500px" }}
                className="absolute"
              /> */}
            </Grid>
          </Grid>
        </Card>
      </Box>
    </>
  );
};

export default Features;
