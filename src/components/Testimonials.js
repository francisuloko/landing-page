import React from "react";
import { Container, Typography, Card, Box } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import Grid from "@mui/material/Unstable_Grid2";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import img1 from "../assets/images/landingpage.jpg";
import img2 from "../assets/images/landingpage-2.png";

export default function Testimonials() {
  return (
    <Container
      maxWidth={false}
      sx={{ bgcolor: "#000", p: { xs: "50px 0", sm: "70px" } }}
    >
      <Box
        display="flex"
        color="#fff"
        alignItems="center"
        flexDirection="column"
        sx={{ width: "100%", m: "0 auto" }}
      >
        <Box display="flex" alignItems="center" flexDirection="column">
          <Typography
            variant="h2"
            align="center"
            pb={3}
            sx={{
              fontSize: "28px",
              fontWeight: "bold",
              m: "auto",
              width: { xs: "80%", lg: "65%" },
            }}
          >
            See what people are saying about working with me to build great
            landing pages
          </Typography>
        </Box>
        <Grid
          container
          width="100%"
          mt={1}
          color="#fff"
          spacing={3}
          sx={{
            padding: "0 50px",
          }}
        >
          <Grid
            container
            color="#333"
            spacing={2}
            justifyContent="center"
            sm={7}
            xs={12}
          >
            <Masonry columns={{ xs: 1, sm: 2 }} spacing={2}>
              {testimonials.map((item) => (
                <Card sx={{ maxWidth: 345 }}>
                  <CardHeader
                    avatar={<Avatar aria-label="recipe" src={img1} />}
                    title={item.client}
                    subheader={item.role}
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {item.message}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Masonry>
          </Grid>
          <Grid sx={12} sm={5}>
            <img src={img2} alt="landing page" width="100%" />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

const testimonials = [
  {
    client: "Chimdinma Kalu",
    role: "CEO, Tenyne",
    message:
      "Francis is simply incredible. Working with him, you're getting a true professional Developer who listens carefully and delivers excellently well. I highly recommend him.",
  },
  {
    client: "Musa Idoko Garba",
    role: "CEO, MIG Travels",
    message:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    client: "Lawrence Attah",
    role: "CEO, Paylidate",
    message: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
  {
    client: "Lawrence Attah",
    role: "CEO, Paylidate",
    message: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];
