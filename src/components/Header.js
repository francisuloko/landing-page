import React from "react";
import styled from "styled-components";
import fuLogo from "../assets/images/landing-profile.png";
import { LocalPhone } from "@mui/icons-material";
import { Typography, Box, IconButton } from "@mui/material";
import "../assets/fonts/AlfaSlabOne-Regular.ttf";

export default function Header() {
  const Wrapper = styled.section`
    width: 100%;
    padding: 2rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: top;
  `;

  const Logo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5%;
  `;

  const Photo = styled.img`
    width: 45px;
    height: 45px;
  `;

  const Contact = styled.div`
    display: flex;
    padding: 0 10;
    justify-content: space-between;
    align-items: center;
    gap: 3%;
  `;

  return (
    <>
      <Wrapper>
        <Logo>
          <Photo src={fuLogo} alt="Francis Uloko" />
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "900",
              letterSpacing: "8px",
              color: "white",
              margin: "0 10px",
              textTransform: "uppercase",
              display: { xs: "none", sm: "block" }
            }}
          >Francis Uloko</Typography>
        </Logo>
        <Contact>
          <IconButton size="small" sx={{ border: "2px solid blue" }} href="tel:+2349011138867">
            <LocalPhone sx={{ fontSize: "25px", color: "blue" }} />
          </IconButton>
          <Box sx={{ display: { xs: "none", sm: "block" } }} color="white">
            <Typography variant="caption">HAVE QUESTIONS?</Typography>
            <Typography variant="subtitle2">(+234)9011138867</Typography>
          </Box>
        </Contact>
      </Wrapper>
    </>
  );
}
