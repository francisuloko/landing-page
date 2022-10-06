import React from "react";
import { Typography } from "@mui/material";
import { styled, Container } from "@mui/system";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import backgound from "../assets/bird.png";
// import Avatar from "@mui/material/Avatar";

const Wrapper = styled("div")({
  width: "100%",
  background: `rgba(0, 0, 0, .65) url(${backgound}) no-repeat center`,
  backgroundSize: "cover",
  backgroundBlendMode: "darken",
});

const testimonials = [
  {
    client: "Chimdinma Kalu, CEO Tenyne",
    message: "Francis is simply incredible. Working with him, you're getting a true professional Developer who listens carefully and delivers excellently well. I highly recommend him.",
  },
  {
    client: "Musa Idoko Garba, CEO MIG Travels",
    message: "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    client: "Lawrence Attah, CEO Paylidate",
    message: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

export default function Testimonials() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxtestimonials = testimonials.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Wrapper
      sx={{
        display: "flex",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Container>
        <Grid
          container
          color="#fff"
          spacing={5}
          sx={{
            padding: "50px",
          }}
        >
          <Grid
            container
            spacing={5}
            justifyContent="center"
            display={{ xs: "none", sm: "block" }}
            sm={7}
          ></Grid>
          <Grid
            container
            color="#fff"
            spacing={5}
            justifyContent="start"
            sm={5}
            xs={12}
          >
            <Typography
              variant="h2"
              sx={{ fontSize: "28px", fontWeight: "bold", m: "auto" }}
            >
              Truly humbled by the nice things said about my landing
              pages
            </Typography>
            <Box sx={{ maxWidth: 400, flexGrow: 1, my: 2 }}>
              <Box sx={{ height: 100, maxWidth: 400, width: "100%" }}>
                {testimonials[activeStep].message}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  mt: 1,
                }}
              >
                {/* <Avatar alt="Remy Sharp" src={backgound} /> */}
                <Typography>{testimonials[activeStep].client}</Typography>
              </Box>
              <MobileStepper
                variant="none"
                sx={{ backgroundColor: "transparent" }}
                testimonials={maxtestimonials}
                position="static"
                activeStep={activeStep}
                nextButton={
                  <Button
                    size="small"
                    onClick={handleNext}
                    sx={{ color: "#fff" }}
                    disabled={activeStep === maxtestimonials - 1}
                  >
                    Next
                    {theme.direction === "rtl" ? (
                      <KeyboardArrowLeft />
                    ) : (
                      <KeyboardArrowRight />
                    )}
                  </Button>
                }
                backButton={
                  <Button
                    size="small"
                    sx={{ color: "#fff", ml: -2 }}
                    onClick={handleBack}
                    disabled={activeStep === 0}
                  >
                    {theme.direction === "rtl" ? (
                      <KeyboardArrowRight />
                    ) : (
                      <KeyboardArrowLeft />
                    )}
                    Prev
                  </Button>
                }
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
}
