import React from "react";
import { Container, Box, Stack, styled } from "@mui/system";
import { Paper, Typography, Button } from "@mui/material";

export default function Process() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(3),
    color: theme.palette.text.secondary,
    borderRadius: 0,
  }));

  return (
    <Container
      maxWidth={false}
      sx={{ bgcolor: "#efe", p: { xs: "10px 0 30px 0", sm: "70px 150px" } }}
    >
      <Box sx={{ width: { xs: "100%", lg: "60%" }, m: "0 auto", p: "0 10px" }}>
        <Typography
          variant="h2"
          color="#222"
          textAlign="center"
          sx={{ fontSize: "28px", fontWeight: "bold", m: "30px auto" }}
        >
          Here's how I plan to explode your profit margins with my
          high-converting landing page system
        </Typography>
        <Stack spacing={1}>
          <Item>
            <Typography variant="p">
              Create and manage your landing page from start to finish while you
              focus on delivering value and driving sales. You will get massive
              appointments and also build an explosive list of email subscribers
              using my powerful lead magnet blueprint.
            </Typography>
          </Item>
          <Item>
            <Typography variant="p">
              Finding the right words to describe your offer doesn't come easy.
              Save time and stress worrying if your landing page copy is
              compelling or not. Get a winning copy, which addresses the fears,
              hopes, and dreams of your target audience.
            </Typography>
          </Item>
          <Item>
            <Typography variant="p">
              Stand out from your competitors who use generic landing page
              templates. Get your landing page specifically designed for your
              target audience following behavioural and usability best
              practices. Everybody loves cute cat videos on youtube; give your
              landing page the attention it deserves.
            </Typography>
          </Item>
          <Item>
            <Typography variant="p">
              Slow and unresponsive landing pages experience 68% bounce rates;
              you really don't want to be that guy. Increase your conversion
              rates with code optimized for speed, small screens and SEO. Save
              thousands $$$ from page builder subscriptions and limitations.
            </Typography>
          </Item>
          <Item>
            <Typography variant="p">
              Test and analyze the activities of your visitor to help you learn
              more about your audience. Make instant changes so that you’re
              reaching them in the most effective way. If you're guessing,
              you're dead.
            </Typography>
          </Item>

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
        </Stack>
      </Box>
    </Container>
  );
}
