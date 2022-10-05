import React from "react";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import Grid from "@mui/material/Unstable_Grid2";
import img1 from "../assets/profile-1.jpg";
import img2 from "../assets/images/landingpage.jpg";

export default function Opening() {
  return (
    <Container>
      <Grid container color="#555" spacing={5} sx={{ margin: "50px auto" }}>
        <Grid container spacing={5} justifyContent="center" xs={12}>
          <Grid xs={12} sm={5} order={{ xs: 1, sm: 2 }}>
            <img src={img1} alt="" width="100%" />
          </Grid>
          <Grid
            xs={12}
            sm={5}
            order={{ xs: 2, sm: 1 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h2"
              color="#222"
              sx={{ fontSize: "22px", fontWeight: "bold" }}
            >
              You may get a lot of traffic on your marketing landing pages, but
              it can be difficult to determine the cause of poor conversion
              rates
            </Typography>
            <Typography my={3} fontSize={14}>
              The various factors responsible for poor conversion rates include
              having a poorly designed or a generic landing page, your copy and
              offer are dead or not compelling enough, your conversion goal is
              not clearly defined or you're not testing and analysing the
              activities of visitors on your landing page.
            </Typography>
            <Typography fontSize={14}>
              You may have spent hours putting together a decent landing page.
              You’re throwing in cash to PPC ads and email marketing campaigns.
              Yet, conversion rates are low. The average landing page conversion
              rate across all industries is 9.7%. With no clear picture of
              whether or not you're on the right track, it's easy to feel stuck.
            </Typography>
          </Grid>
        </Grid>

        <Grid container mt="10px" spacing={5} justifyContent="center" xs={12}>
          <Grid xs={12} sm={5}>
            <img src={img2} alt="" width="100%" />
          </Grid>
          <Grid
            xs={12}
            sm={5}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h2"
              color="#222"
              sx={{ fontSize: "22px", fontWeight: "bold" }}
            >
              Turn more visitors into leads by making it easy for them to
              convert
            </Typography>
            <Typography my={3} fontSize={14}>
              Creating a great landing page is both an art and a science. You
              don’t have to suffer with poor landing page conversion rates
              forever. Why settle for average when you could dramatically
              increase your conversion rates with custom high converting landing
              pages?
            </Typography>
            <Typography fontSize={14}>
              You can be made profitable with solid information about what your
              visitors want and their activities on your landing page. Simply
              plug into a complete landing page system guaranteed to influence
              visitors to take your desired action.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
