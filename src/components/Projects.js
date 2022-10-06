import * as React from "react";
import { Container, Box, Card } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import proj1 from "../assets/images/Paylidate.jpg";
import proj2 from "../assets/images/tekagon.png";
import proj3 from "../assets/images/migtravels.png";
import proj4 from "../assets/images/mylander.png";

export default function ActionAreaCard() {
  return (
    <Container
      maxWidth={false}
      sx={{
        bgcolor: "#f5f5f5",
        p: { xs: "10px 0 30px 0", sm: " 10px 70px 70px" },
      }}
    >
      <Box
        sx={{ width: { xs: "100%", lg: "60%" }, m: "0 auto", p: "30px 10px" }}
      >
        <Typography
          variant="h2"
          color="#333"
          textAlign="center"
          sx={{ fontSize: "28px", fontWeight: "bold", m: "30px auto" }}
        >
          Examples of high converting landing pages you could be deploying for
          your next marketing campaigns
        </Typography>
      </Box>
      <Container
        maxWidth={false}
        sx={{
          display: "flex",
          flexDirection: {xs: "column", sm: "row"},
          gap: ".7%",
          bgcolor: "#f5f5f5",
        }}
      >
        <Box sx={{ maxWidth: 600, display: "flex", gap: "1.5%" }}>
          <Card sx={{ maxWidth: 600 }}>
            <CardActionArea>
              <CardMedia component="img" image={proj1} alt="green iguana" />
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 600 }}>
            <CardActionArea>
              <CardMedia component="img" image={proj2} alt="green iguana" />
            </CardActionArea>
          </Card>
        </Box>
        <Box sx={{ maxWidth: 600, display: "flex", gap: "1.5%", mt: {xs: 1, sm: 0} }}>
          <Card sx={{ maxWidth: 600 }}>
            <CardActionArea>
              <CardMedia component="img" image={proj3} alt="green iguana" />
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 600 }}>
            <CardActionArea>
              <CardMedia component="img" image={proj4} alt="green iguana" />
            </CardActionArea>
          </Card>
        </Box>
      </Container>
    </Container>
  );
}
