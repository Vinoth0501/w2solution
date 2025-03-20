import React, { Suspense, lazy, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Card, Skeleton, Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { image } from "./assets";
import "./App.css";

const HeroSection = lazy(() => import("./components/HeroSection"));
const Features = lazy(() => import("./components/Features"));
const Testimonials = lazy(() => import("./components/Testimonials"));

const SkeletonLoader = () => (
  <>
    <Card
      sx={{
        width: "100%",
        height: "80vh",
        p: {
          xs: "20px 10px",
          sm: "20px 30px",
          md: "35px 50px",
          lg: "45px 70px",
        },
        display: "flex",
        flexDirection: "column",
        gap: 2,
        backgroundColor: "rgba(249, 184, 0, 0.08)",
        mb: "40px",
      }}
    >
      <Skeleton variant="rectangular" width="100%" height="60%" />
      <Skeleton variant="text" width="80%" height={30} />
      <Skeleton variant="text" width="60%" height={30} />
    </Card>
    <Card
      sx={{
        width: "100%",
        height: "80vh",
        p: {
          xs: "20px 10px",
          sm: "20px 30px",
          md: "35px 50px",
          lg: "45px 70px",
        },
        display: "flex",
        flexDirection: "column",
        gap: 2,
        backgroundColor: "rgba(249, 184, 0, 0.08)",
      }}
    >
      <Skeleton variant="rectangular" width="100%" height="60%" />
      <Skeleton variant="text" width="80%" height={30} />
      <Skeleton variant="text" width="60%" height={30} />
    </Card>
  </>
);

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Router>
      <Navbar />
      <main>
        <Container>
          <Suspense fallback={<SkeletonLoader />}>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Box position="relative" overflow="hidden">
                      <Box
                        component="img"
                        src={isMobile ? image.vectorMob : image.vector}
                        alt="leaf-image"
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          zIndex: 0,
                          width: { xs: "90vw", sm: "80vw", md: "906.34px" },
                          height: { xs: "auto", sm: "1000.69px" },
                        }}
                      />
                      <Box position="relative" zIndex={1}>
                        <HeroSection />
                        <Features />
                      </Box>
                    </Box>

                    <Box position="relative" overflow="hidden">
                      <Box
                        component="img"
                        src={image.vector}
                        alt="leaf-image"
                        sx={{
                          position: "absolute",
                          top: "-250px",
                          left: 0,
                          zIndex: 0,
                          width: { xs: "80vw", sm: "800.34px" },
                          height: { xs: "auto", sm: "1000.69px" },
                        }}
                      />
                      <Box position="relative" zIndex={1}>
                        <Testimonials />
                      </Box>
                    </Box>
                  </>
                }
              />
            </Routes>
          </Suspense>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
