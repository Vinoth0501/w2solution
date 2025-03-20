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
        "#band1",
        { scale: 0.9 },
        { scale: 1, duration: 1, ease: "bounce.out" },
        "<"
      )
      .fromTo(
        "#band2",
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
            textAlign: { xs: "center", lg: "left" },
          }}
        >
          <Grid
            container
            spacing={5}
            alignItems="center"
            flexDirection={{
              xs: "column-reverse",
              md: "column-reverse",
              lg: "row",
            }}
          >
            <Grid item md={12} lg={6}>
              <p className=" text-bk custom-font-700 custom-font-50 mb--lg-5">
                Phasellus a vitae iaculis magna eleifend pulvinar velit odio.
              </p>
              <u className="mb-0 text-bk custom-font-600 custom-font-20">
                Vulputate et vulputate suspendisse natoque!
              </u>

              <p className="mb-0 text-bk custom-font-400 custom-font-20">
                Euismod magna id purus eget nunc ligula suspendisse dui netus.
                Condimentum blandit rutrum at mauris enim pulvinar duis etiam
                duis vulputate et vulputate suspendisse natoque id tellus
                consectetur pulvinar et.
              </p>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: {
                    xs: "center",
                    lg: "flex-start",
                    paddingTop: "40px",
                  },
                }}
              >
                <Button
                  showIcon={true}
                  icon={image.arrowLeft}
                  text={"Lorem Ipsum"}
                  bgColor={"#262626"}
                  color={"white"}
                />
              </Box>
            </Grid>
            <Grid className="ps-0 p-lg-5" item xs={12} lg={6}>
              <Box sx={{ position: "relative", display: "inline-block" }}>
                <Box
                  component="img"
                  src={image.triangle}
                  id="triangle"
                  alt="Feature2"
                  sx={{
                    borderRadius: "24px",
                    width: { xs: "200px", sm: "250px", md: "410px" },
                    height: { xs: "215px", sm: "260px", md: "415px" },
                    position: "relative",
                    zIndex: 0,
                  }}
                />

                <Box
                  component="img"
                  src={image.threeDOt}
                  alt="Feature1"
                  sx={{
                    position: "absolute",
                    width: {
                      xs: "90px",
                      sm: "110px",
                      md: "130px",
                      lg: "142px",
                    },
                    height: { xs: "35px", sm: "40px", md: "45px", lg: "49px" },
                    left: "110%",
                    top: { xs: "45px", sm: "50px", md: "100px" },
                    transform: "translateX(-50%)",
                    borderRadius: "24px",
                    zIndex: 2,
                  }}
                />

                <Box
                  component="img"
                  src={image.textArea}
                  alt="Feature1"
                  id="box"
                  sx={{
                    position: "absolute",
                    width: { xs: "91px", sm: "120px", md: "167px" },
                    height: { xs: "98px", sm: "130px", md: "180px" },
                    left: { xs: "100%", sm: "115%", md: "115%" },
                    top: "65%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 3,
                    borderRadius: { xs: "12px", sm: "16px", md: "24px" },
                  }}
                />
                <Box
                  component="img"
                  src={image.cart}
                  alt="cart"
                  id="cart"
                  sx={{
                    position: "absolute",
                    width: { xs: "101px", sm: "150px", md: "209px" },
                    height: { xs: "55px", sm: "75px", md: "116px" },
                    left: { xs: "-23px", sm: "-40px", md: "-50px" },
                    top: { xs: "20px", sm: "30px", md: "20px" },
                    // transform: "translate(-50%, -50%)",
                    borderRadius: { xs: "10px", sm: "14px", md: "20px" },
                    zIndex: 1,
                  }}
                />
                <Box
                  component="img"
                  src={image.heart}
                  alt="heart"
                  id="heart"
                  sx={{
                    position: "absolute",
                    width: { xs: "40px", sm: "60px", md: "81px" },
                    height: { xs: "40px", sm: "60px", md: "81px" },
                    left: { xs: "-10px", sm: "-15px", md: "-25px" },
                    top: { xs: "135px", sm: "160px", md: "225px" },
                    borderRadius: { xs: "8px", sm: "12px", md: "16px" },
                    zIndex: 2,
                  }}
                />
                <Box
                  component="img"
                  src={image.flower}
                  alt="flower"
                  id="flower"
                  sx={{
                    position: "absolute",
                    width: { xs: "12px", sm: "18px", md: "25px" },
                    height: { xs: "12px", sm: "18px", md: "25px" },
                    left: { xs: "-10px", sm: "-15px", md: "-20px" },
                    bottom: { xs: "20px", sm: "25px", md: "40px" },
                    zIndex: 2,
                  }}
                />
                <Box
                  component="img"
                  src={image.flower}
                  alt="flower"
                  id="flower"
                  sx={{
                    position: "absolute",
                    width: { xs: "12px", sm: "18px", md: "25px" },
                    height: { xs: "12px", sm: "18px", md: "25px" },
                    left: { xs: "5px", sm: "6px", md: "10px" },
                    bottom: { xs: "12px", sm: "18px", md: "28px" },
                    zIndex: 2,
                  }}
                />
                <Box
                  component="img"
                  src={image.stem}
                  alt="flower"
                  sx={{
                    position: "absolute",
                    width: { xs: "14px", sm: "21px", md: "28px" },
                    height: { xs: "21px", sm: "31px", md: "44px" },
                    left: { xs: "-5px", sm: "-10px", md: "-10px" },
                    bottom: { xs: "5px", sm: "5px", md: "10px" },
                    zIndex: 1,
                  }}
                />
                <Box
                  component="img"
                  src={image.smStem}
                  alt="flower"
                  sx={{
                    position: "absolute",
                    width: { xs: "2px", sm: "3px", md: "5px" },
                    height: { xs: "10px", sm: "15px", md: "22px" },
                    left: { xs: "10px", sm: "12px", md: "20px" },
                    bottom: { xs: "7px", sm: "9px", md: "15px" },
                    zIndex: 1,
                  }}
                />
                <Box
                  component="img"
                  src={image.pot}
                  alt="flower pot"
                  sx={{
                    position: "absolute",
                    width: { xs: "24px", sm: "36px", md: "49px" },
                    height: { xs: "5px", sm: "7.5px", md: "10px" },
                    left: { xs: "-3px", sm: "-10px", md: "-5px" },
                    bottom: { xs: "4px", sm: "5px", md: "10px" },
                    zIndex: 1,
                  }}
                />
                <Box
                  component="img"
                  src={image.borderBottom}
                  alt="border"
                  sx={{
                    position: "absolute",
                    width: { xs: "240px", sm: "375px", md: "520px" },
                    height: "3px",
                    left: { xs: "20px", sm: "35px", md: "50px" },
                    bottom: "-5px",
                    zIndex: 1,
                  }}
                />
                <Box
                  component="img"
                  src={image.leftHand}
                  alt="leftHand"
                  sx={{
                    position: "absolute",
                    width: { xs: "49px", sm: "75px", md: "100px" },
                    height: { xs: "100px", sm: "150px", md: "205px" },
                    left: { xs: "50px", sm: "75px", md: "100px" },
                    bottom: { xs: "-20px", sm: "-20px", md: "-20px" },
                    zIndex: 2,
                  }}
                />
                <Box
                  component="img"
                  src={image.rightHand}
                  alt="rightHand"
                  sx={{
                    position: "absolute",
                    width: { xs: "114px", sm: "155px", md: "233px" },
                    height: { xs: "42px", sm: "64px", md: "88px" },
                    left: { xs: "120px", sm: "170px", md: "220px" },
                    bottom: { xs: "-10px", sm: "-10px", md: "-10px" },
                    zIndex: 2,
                  }}
                />
                <Box
                  component="img"
                  src={image.body}
                  alt="body"
                  sx={{
                    position: "absolute",
                    width: { xs: "154px", sm: "220px", md: "315px" },
                    height: { xs: "84px", sm: "120px", md: "172px" },
                    left: { xs: "78px", sm: "100px", md: "135px" },
                    bottom: { xs: "25px", sm: "50px", md: "50px" },
                    zIndex: 1,
                  }}
                />
                <Box
                  component="img"
                  src={image.dress}
                  alt="body"
                  sx={{
                    position: "absolute",
                    width: { xs: "79px", sm: "120px", md: "161px" },
                    height: { xs: "53px", sm: "95px", md: "109px" },
                    left: { xs: "105px", sm: "150px", md: "195px" },
                    bottom: { xs: "25px", sm: "50px", md: "50px" },
                    zIndex: 1,
                  }}
                />
                <Box
                  component="img"
                  src={image.face}
                  alt="body"
                  sx={{
                    position: "absolute",
                    width: { xs: "55px", sm: "75px", md: "113px" },
                    height: { xs: "62px", sm: "88px", md: "128px" },
                    left: { xs: "110px", sm: "140px", md: "190px" },
                    top: { xs: "45px", sm: "5px", md: "68px" },
                    zIndex: 2,
                  }}
                />
                <Box
                  component="img"
                  src={image.hair}
                  alt="body"
                  sx={{
                    position: "absolute",
                    width: { xs: "55px", sm: "75px", md: "113px" },
                    height: { xs: "56px", sm: "76px", md: "116px" },
                    left: { xs: "118px", sm: "150px", md: "201px" },
                    top: { xs: "35px", sm: "-5px", md: "55px" },
                    zIndex: 1,
                  }}
                />
                <Box
                  component="img"
                  src={image.hair1}
                  alt="body"
                  sx={{
                    position: "absolute",
                    width: { xs: "43px", sm: "63px", md: "88px" },
                    height: { xs: "43px", sm: "62px", md: "89px" },
                    left: { xs: "150px", sm: "200px", md: "278px" },
                    top: { xs: "70px", sm: "50px", md: "145px" },
                    zIndex: 0,
                  }}
                />
                <Box
                  component="img"
                  src={image.hand}
                  id="hand"
                  alt="body"
                  sx={{
                    position: "absolute",
                    width: { xs: "38px", sm: "50px", md: "77px" },
                    height: { xs: "69px", sm: "65px", md: "130px" },
                    left: { xs: "54px", sm: "75px", md: "100px" },
                    top: { xs: "95px", sm: "92px", md: "125px" },
                    zIndex: 1,
                    filter: "drop-shadow(0px 0px 5px black)",
                  }}
                />
                <Box
                  component="img"
                  src={image.band1}
                  alt="body"
                  id="band1"
                  sx={{
                    position: "absolute",
                    width: { xs: "38px", sm: "42px", md: "48px" },
                    height: { xs: "50px", sm: "55px", md: "62px" },
                    left: { xs: "168px", sm: "218px", md: "310px" },
                    top: { xs: "25px", sm: "0px", md: "90px" },
                    zIndex: 1,
                  }}
                />
                <Box
                  component="img"
                  src={image.band2}
                  id="band2"
                  alt="body"
                  sx={{
                    position: "absolute",
                    width: { xs: "50px", sm: "60px", md: "67px" },
                    height: { xs: "25px", sm: "28px", md: "32px" },
                    left: { xs: "168px", sm: "220px", md: "310px" },
                    top: { xs: "50px", sm: "25px", md: "120px" },
                    zIndex: 1,
                  }}
                />
                <Box
                  component="img"
                  src={image.mouth}
                  id="mouth"
                  alt="body"
                  sx={{
                    position: "absolute",
                    width: { xs: "11px", sm: "16.5px", md: "22px" },
                    height: { xs: "7px", sm: "10px", md: "15px" },
                    left: { xs: "115px", sm: "150px", md: "205px" },
                    top: { xs: "80px", sm: "54px", md: "140px" },
                    zIndex: 3,
                  }}
                />
                <Box
                  component="img"
                  src={image.eye}
                  id="eye"
                  alt="body"
                  sx={{
                    position: "absolute",
                    width: { xs: "4.5px", sm: "5.75px", md: "6.75px" },
                    height: { xs: "4.5px", sm: "5.75px", md: "6.75px" },
                    left: { xs: "128px", sm: "170px", md: "225px" },
                    top: { xs: "69px", sm: "40px", md: "115px" },
                    zIndex: 3,
                  }}
                />
                <Box
                  component="img"
                  src={image.small}
                  alt="body"
                  sx={{
                    position: "absolute",
                    width: { xs: "15px", sm: "18px", md: "20.75px" },
                    height: { xs: "15px", sm: "18px", md: "20.75px" },
                    left: { xs: "163px", sm: "215px", md: "310px" },
                    top: { xs: "60px", sm: "35px", md: "135px" },
                    zIndex: 4,
                  }}
                />
                <Box
                  component="img"
                  src={image.circle}
                  alt="body"
                  sx={{
                    position: "absolute",
                    width: { xs: "8px", sm: "10px", md: "11.75px" },
                    height: { xs: "8px", sm: "10px", md: "11.75px" },
                    left: { xs: "148px", sm: "195px", md: "275px" },
                    top: { xs: "73px", sm: "48px", md: "133px" },
                    zIndex: 4,
                  }}
                />
                <Box
                  component="img"
                  src={image.ear}
                  id="ear"
                  alt="body"
                  sx={{
                    position: "absolute",
                    width: { xs: "10px", sm: "12px", md: "15.75px" },
                    height: { xs: "9px", sm: "10px", md: "11.75px" },
                    left: { xs: "148px", sm: "195px", md: "274.5px" },
                    top: { xs: "71px", sm: "45px", md: "129px" },
                    zIndex: 4,
                  }}
                />
                <Box
                  component="img"
                  src={image.borderBottom}
                  alt="border"
                  sx={{
                    position: "absolute",
                    width: { xs: "30px", sm: "40px", md: "64px" },
                    height: "3px",
                    left: { xs: "59px", sm: "85px", md: "120px" },
                    top: { xs: "150px", sm: "160px", md: "260px" },
                    borderRadius: "18px",
                    background: "transparent",
                    zIndex: 3,
                  }}
                />
                <Box
                  component="img"
                  src={image.borderBottom}
                  alt="border"
                  sx={{
                    position: "absolute",
                    width: { xs: "30px", sm: "45px", md: "64px" },
                    height: "3px",
                    left: { xs: "130px", sm: "170px", md: "220px" },
                    bottom: { xs: "8px", sm: "19px", md: "27px" },
                    borderRadius: "18px",
                    background: "transparent",
                    zIndex: 3,
                    transform: "rotate(90deg)",
                  }}
                />
                <Box
                  component="img"
                  src={image.borderBottom}
                  alt="border"
                  sx={{
                    position: "absolute",
                    width: { xs: "40px", sm: "55px", md: "64px" },
                    height: "3px",
                    left: { xs: "180px", sm: "280px", md: "320px" },
                    bottom: { xs: "30px", sm: "60px", md: "78px" },
                    borderRadius: "18px",
                    background: "transparent",
                    zIndex: 2,
                  }}
                />
                <Box
                  component="img"
                  src={image.borderBottom}
                  alt="border"
                  sx={{
                    position: "absolute",
                    width: { xs: "28px", sm: "28px", md: "66px" },
                    height: "3px",
                    left: { xs: "150px", sm: "228px", md: "285px" },
                    top: { xs: "120px", sm: "100px", md: "225px" },
                    borderRadius: "18px",
                    background: "transparent",
                    zIndex: 2,
                    transform: "rotate(90deg)",
                  }}
                />
                <Box
                  component="img"
                  src={image.borderBottom}
                  alt="border"
                  sx={{
                    position: "absolute",
                    width: { xs: "28px", sm: "28px", md: "66px" },
                    height: "3px",
                    left: { xs: "95px", sm: "140px", md: "170px" },
                    top: { xs: "120px", sm: "100px", md: "225px" },
                    borderRadius: "18px",
                    background: "transparent",
                    zIndex: 3,
                    transform: "rotate(90deg)",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </>
  );
};

export default Features;
