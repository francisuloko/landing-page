import React from "react";
import { Typography, Button } from "@mui/material";
import { styled, Container, Box } from "@mui/system";
import Header from "../components/Header.js";
// import backgound from "../assets/bird.jpg";

const Wrapper = styled("div")({
  width: "100%",
  // background: `rgba(0, 0, 0, .65) url(${backgound}) no-repeat right`,
  backgroundColor: "#333",
  backgroundSize: "cover",
  backgroundBlendMode: "darken",
});

export default function Hero() {
  return (
    <Wrapper>
      <Header />

      <Container
        sx={{
          color: "#fff",
          width: {
            lg: "70%",
            sm: "85%",
            xs: "100%",
          },
          height: "80vh",
          m: "0 auto",
          pb: "50px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "top",
          alignItems: "center",
        }}
      >
        <Box display="flex" alignItems="center" flexDirection="column">
          <Typography
            sx={{
              textAlign: "center",
              fontSize: { xs: 12, sm: 14 },
            }}
          >
            FOR SERVICE-BASED BRANDS WHO WANT MORE LEADS:
          </Typography>
          <Typography
            sx={{
              fontFamily: "FuturaLT Extrabold",
              textAlign: "center",
              textJustify: "inter-character",
              fontSize: {
                lg: 36,
                sm: 28,
                xs: 24,
              },
              width: {
                lg: "90%",
              },
            }}
          >
            INCREASE YOUR CONVERSION RATES WITH CUSTOM HIGH CONVERTING LANDING
            PAGES
          </Typography>
          <Typography
            variant="body"
            textAlign="center"
            fontSize={18}
            sx={{
              width: {
                sm: "55%",
                sx: "90%",
              },
              textTransform: "title",
              m: 1,
            }}
          >
            Discover the secret ingredients of high performing landing pages
            used by industry behemoths for maximum profits. Steal their recipe
            to increase your conversion rates and drive more sales.
          </Typography>
          <Box align="center">
            <Button
              variant="contained"
              sx={{ m: 1, padding: "20px 45px" }}
              align="center"
              href="https://calendly.com/francisuloko/30-minute-discovery"
            >
              <Typography sx={{ fontSize: { xs: "12px", sm: "14px" } }}>
                BOOK YOUR FREE DISCOVERY CALL NOW
              </Typography>
            </Button>
          </Box>
          <Typography fontSize={12}>(Others charge up to $500)</Typography>
        </Box>
      </Container>
    </Wrapper>
  );
}
