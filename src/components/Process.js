import React from "react";
import { Container, Box, Stack, styled } from "@mui/system";
import { Paper, Typography, Button } from "@mui/material";
import { TrackClick } from "../common/events";

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
      <Box
        display="flex"
        color="#555"
        alignItems="center"
        flexDirection="column"
        sx={{ width: { xs: "100%", lg: "65%" }, m: "0 auto", p: "0 10px" }}
      >
        <Box display="flex" alignItems="center" flexDirection="column">
          <Typography
            variant="h2"
            color="#222"
            textAlign="center"
            sx={{ fontSize: "28px", fontWeight: "bold", m: "30px auto" }}
          >
            Here's how I plan to explode your profit margins with my custom high
            converting landing pages
          </Typography>
        </Box>

        <Stack spacing={1} sx={{ width: { xs: "95%", lg: "85%" } }}>
          <Item>
            <Typography variant="p">
              Create and manage your landing page from start to finish while you
              focus on delivering value and driving sales. You will get massive
              appointments and also build an explosive list of email
              subscribers.
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
              Give your landing page the attention it deserves. Stand out from
              your competitors who use generic landing page templates. Get your
              landing page specifically designed for your target audience
              following behavioural and usability best practices.
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
              Test and analyze the activities of your visitors to help you learn
              more about your audience. Make instant changes so that you’re
              reaching them in the most effective way. If you're guessing,
              you're dead.
            </Typography>
          </Item>
        </Stack>

        <Box align="center">
          <Button
           onClick={() => TrackClick("appointment")}
            variant="contained"
            sx={{ m: 1, padding: "20px 40px" }}
            align="center"
            href="https://calendly.com/francisuloko/30-minute-discovery"
          >
            <Typography sx={{ fontSize: { xs: "12px", sm: "14px" } }}>
              BOOK YOUR FREE DISCOVERY CALL NOW
            </Typography>
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
