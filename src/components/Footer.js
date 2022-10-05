import React from "react";
import { Container, Box } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Container
      maxWidth={false}
      sx={{
        background: "#222",
        p: 3,
      }}
    >
      <Box sx={{ width: { xs: "100%", lg: "60%" }, m: "0 auto", p: "0 10px" }}>
        <Typography
          color="#999"
          textAlign="center"
          fontSize={10}
        >
          Copyright &copy; Francis Uloko 2022. All Rights Reserved.
        </Typography>
      </Box>
    </Container>
  );
}
