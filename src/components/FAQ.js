import * as React from "react";
import { styled } from "@mui/material/styles";
import { Container, Box } from "@mui/material";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import CheckIcon from "@mui/icons-material/Check";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function FAQ() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        background: "#333",
        p: { xs: "10px 0 30px 0", sm: "70px 150px" },
      }}
    >
      <Box sx={{ width: { xs: "95%", lg: "60%" }, m: "0 auto", p: "0 10px" }}>
        <Typography
          variant="h2"
          color="#eee"
          textAlign="center"
          sx={{ fontSize: "28px", fontWeight: "bold", m: "30px auto" }}
        >
          Frequently Asked Questions
        </Typography>

        <div>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>
                What's the difference between a Landing Page and a Homepage?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Imagine a stranger bursting through your office doors with their
                hair on fire? Would you walk them round your office or help them
                to put out the fire? The right answer is to solve their problem,
                otherwise they'd run to the next building for help.
              </Typography>
              <Typography mt={2}>
                A landing page is a dedicated webpage designed to promote
                specific products, services or event, while a homepage informs
                visitors about your entire business. When visitors come to your
                website with a hair on fire problem, you really want to FOCUS on
                providing them a solution to their problem except you want them
                to turn to your competitors. And that's why a landing page is
                focused on getting your visitors to perform a specific action
                like filling a form, making a purchase, booking an appointment
                or whatever action you want them to take towards solving their
                big problem.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography>What is conversion rate?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Your Landing Page conversion rate is the percentage (%) of
                people who completed your desired action out of the total number
                of people who landed on your page.
              </Typography>
              <Typography mt={2}>
                It can calculated by simply taking the number of people who
                clicked the button on your landing page and dividing that by the
                total number of people who visited landing page. For example, if
                you had 50 people clicked your button out of 1,000 visitors,
                your conversion rate would be 25%, since 300 ÷ 1,200 * 100 =
                25%.
              </Typography>
              <Typography mt={2}>
                Be aware that your landing page conversion rate is not set in
                stone. The value can be influenced by a few factors, including
                your industry, where your contacts are in their customer
                journey, and the relevance of your call-to-action.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography>
                Why do I need a landing page when I have an awesome homepage?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                A homepage is typically a summary of your business and a
                directory for your products or services. Your Home Page may be
                great, but it rarely drive conversions because there's just a
                lot going on there and visitors probably don't get it. A landing
                page, in comparison, is a single focused page that is designed
                with one conversion goal in mind. As such, a landing page:
              </Typography>
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <CheckIcon sx={{ color: "green" }} />
                  </ListItemAvatar>
                  <ListItemText primary="Does not link (leaks) out to other pages" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <CheckIcon sx={{ color: "green" }} />
                  </ListItemAvatar>
                  <ListItemText primary="Does not try to sell multiple products or services" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <CheckIcon sx={{ color: "green" }} />
                  </ListItemAvatar>
                  <ListItemText primary=" Does not try to speak to multiple audiences at the same time" />
                </ListItem>
              </List>
              <Typography>
                If your goal is to sell rather than welcome people to your
                website, you're losing a lot of leads to your competitors without a landing
                page.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </Box>
    </Container>
  );
}
