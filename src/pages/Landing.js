import { Typography, Button } from "@mui/material";
import { styled, Container, Box } from "@mui/system";
import Grid from "@mui/material/Unstable_Grid2";
import Header from "../components/Header.js";
import backgound from "../assets/images/background.jpg";
import "../assets/fonts/AlfaSlabOne-Regular.ttf";
import fuLogo from "../assets/images/landing-profile.png";

export default function Landing() {
  const Fold = styled("div")({
    width: "100%",
    background: `url(${backgound}) no-repeat center center fixed`,
    backgroundSize: "cover",
  });

  const Step = styled("div")({
    display: "grid",
    gridTemplateColumns: "60px 5fr",
    backgroundColor: "#cff0fc",
    color: "#333",
    padding: "20px",
    borderRadius: "5px",
    height: {
      sm: "400px",
      xs: "auto",
    },
  });

  return (
    <>
      <Fold>
        <Header />

        <Container
          sx={{
            color: "#333",
            width: {
              md: "70%",
              sm: "85%",
              xs: "100%",
            },
            m: "0 auto",
            pb: "50px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "top",
            alignItems: "center",
          }}
        >
          <Typography
            fontSize={12}
            sx={{
              textAlign: "center",
            }}
          >
            FOR STARTUPS WITHOUT A MARKETING TEAM:
          </Typography>
          <Typography
            sx={{
              fontFamily: "FuturaLT Extrabold",
              textAlign: "center",
              textJustify: "inter-character",
              fontSize: {
                lg: 30,
                md: 25,
                sm: 25,
                xs: 24,
              },
              width: {
                lg: "80%",
              },
            }}
          >
            CUSTOM LANDING PAGE SYSTEM GUARANTEED TO TURN ICE-COLD TRAFFIC INTO
            BUYING CUSTOMERS OR IT'S FREE!
          </Typography>
          <Typography
            variant="body"
            textAlign="center"
            fontSize={18}
            sx={{
              width: {
                md: "80%",
                sx: "90%",
              },
              textTransform: "title",
              m: 1,
            }}
          >
            Discover how to attract, nurture and gain the trust of a large
            segment of your audience as you could possibly handle
          </Typography>
          <Button
            variant="contained"
            sx={{ m: 1, p: 3 }}
            align="center"
            href="https://calendly.com/francisuloko/30-minute-discovery"
          >
            <Typography> BOOK YOUR FREE DISCOVERY CALL NOW</Typography>
          </Button>
        </Container>
      </Fold>

      <Container>
        <Grid container color="#555" spacing={5} sx={{ margin: "50px auto" }}>
          <Grid container spacing={5} justifyContent="center" xs={12}>
            <Grid xs={12} sm={5} order={{ xs: 1, sm: 2 }}>
              <img src={fuLogo} alt="" width="100%" />
            </Grid>
            <Grid xs={12} sm={5} order={{ xs: 2, sm: 1 }}>
              <Typography
                variant="h2"
                color="#222"
                sx={{ fontSize: "22px", fontWeight: "bold" }}
              >
                You may get a lot of traffic on your marketing landing pages,
                but it can be difficult to know the cause of poor conversion
                rates.
              </Typography>
              <Typography my={3}>
                You’ve spent hours building a landing page. You’re throwing in
                cash to PPC ads and email marketing campaigns. But, conversion
                rates are low. The average landing page conversion rate across
                all industries is 9.7%. With no clear picture of whether or not
                you're on the right track, it's easy to feel stuck.
              </Typography>
              <Typography>
                There are various factors responsible for poor conversion rates
                including having a poorly designed or a generic landing page,
                your copy and offer are dead or not compelling enough, your
                conversion goal is not clearly defined or you’re probably not
                tracking and responding to the activities of your visitors.
              </Typography>
            </Grid>
          </Grid>

          <Grid container mt="10px" spacing={5} justifyContent="center" xs={12}>
            <Grid xs={12} sm={5}>
              <img src={fuLogo} alt="" width="100%" />
            </Grid>
            <Grid xs={12} sm={5}>
              <Typography
                variant="h2"
                color="#222"
                sx={{ fontSize: "22px", fontWeight: "bold" }}
              >
                Turn more visitors into customers by making it easy for them to
                convert.
              </Typography>
              <Typography my={3}>
                Creating a great landing page is both an art and a science. You
                don’t have to suffer with poor landing page conversion rates
                forever. Plug into a complete landing page system guaranteed to
                influence visitors to take your desired action.
              </Typography>
              <Typography>
                You can be made profitable with solid information about what
                your visitors want and their activities on your landing page.
                Why settle for average when you could dramatically increase
                conversion rates and explode your revenue?
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <Container
        maxWidth={false}
        sx={{ bgcolor: "#cfe8fc", p: { xs: "70px 0", sm: "70px 150px" } }}
      >
        <Box
          sx={{ width: { xs: "100%", lg: "70%" }, m: "0 auto", p: "0 10px" }}
        >
          <Typography
            variant="h2"
            color="#222"
            textAlign="center"
            sx={{ fontSize: "28px", fontWeight: "bold", m: "auto" }}
          >
            Here's how I can help explode your profit margins with my
            high-converting landing page system
          </Typography>
        </Box>
        <Grid container mx={2} spacing={{ sx: 0, sm: 2 }} mt={5}>
          <Grid xs={12} lg={4}>
            <Step
              sx={{
                height: {
                  sm: "400px",
                  xs: "auto",
                },
              }}
            >
              <Typography variant="h3">1.</Typography>
              <Typography>
                <Typography variant="h5">Copywriting</Typography>

                <Typography my={2}>
                  Write a compelling copy to save you time and stress worrying
                  if your landing page message is compelling or not. Get a
                  selling copy that speaks directly to the fears, hopes, and
                  dreams of your target audience.
                </Typography>
              </Typography>
            </Step>
          </Grid>
          <Grid xs={12} lg={4}>
            <Step>
              <Typography variant="h3">2.</Typography>
              <Typography>
                <Typography variant="h5">UI/UX Design</Typography>

                <Typography my={2}>
                  Create UI/UX designs tailored to your brand to help you stand
                  out from your competitors who rely on generic landing page
                  templates. Get your landing page specifically designed to your
                  target audience following behavioural and usability best practices.
                </Typography>
              </Typography>
            </Step>
          </Grid>
          <Grid xs={12} lg={4}>
            <Step>
              <Typography variant="h3">3.</Typography>
              <Typography>
                <Typography variant="h5">Development</Typography>

                <Typography my={2}>
                  Deploy hand-coded Landing Pages and save thousands $$$ from
                  page builder subscriptions. Increase your conversion rates
                  with code optimized for speed, small screens and SEO. Crush
                  68% bounce rate caused by slow and unresponsive landing pages.
                </Typography>
              </Typography>
            </Step>
          </Grid>

          <Grid xs={12} lg={4}>
            <Step>
              <Typography variant="h3">4.</Typography>
              <Typography>
                <Typography variant="h5">A/B Testing</Typography>

                <Typography my={2}>
                  Learn more about your audience and make changes so that you’re
                  reaching them in the most effective way. If you're guessing,
                  you're dead.
                </Typography>
              </Typography>
            </Step>
          </Grid>

          <Grid xs={12} lg={4}>
            <Step>
              <Typography variant="h3">5.</Typography>
              <Typography>
                <Typography variant="h5">Weekly Reports</Typography>

                <Typography my={2}>
                  If you're guessing, you're dead. Learn more about your
                  audience and make changes so that you’re reaching them in the
                  most effective way.
                </Typography>
              </Typography>
            </Step>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
