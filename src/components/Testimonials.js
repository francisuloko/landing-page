import React from "react";
import { Container, Typography, Card, Box } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import Grid from "@mui/material/Unstable_Grid2";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import img2 from "../assets/images/landingpage-2.png";
import lawrence from "../assets/images/lawrence-attah.webp";
import chimdi from "../assets/images/chimdi-kalu.jpeg";
import musa from "../assets/images/garba-musa.jpeg";



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
              width: { xs: "90%", lg: "65%" },
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
            p: { xs: 1, sm: 5 },
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
                    avatar={<Avatar aria-label="recipe" src={item.src} />}
                    title={item.client}
                    subheader={item.company}
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
    client: "Lawrence Attah",
    company: "Lotusfort Technologies",
    src: lawrence,
    message: `Working with Francis proved itself to be a real success for my Project. He's a very talented designer who is also very professional and proficient with his work. I'd recommend anyone to work with him.`,
  },
  {
    client: "Garba Musa",
    company: "MIG Travels",
    src: musa,
    message:
      "A true specialist in his field. Francis is my go-to guy whenever I'm starting a new campaign. He shares many marketing insights beyond building landing pages that have proved to position my campaigns for success. I'm always looking forward to working with him.",
  },
  {
    client: "Chimdinma Kalu",
    company: "Tenyne",
    src: chimdi,
    message:
      "Francis is simply incredible. Working with him, you're getting a true professional Developer who listens carefully and delivers excellently well. I highly recommend him.",
  },
];
