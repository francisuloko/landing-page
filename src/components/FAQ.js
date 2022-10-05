import * as React from "react";
import { styled } from "@mui/material/styles";
import { Container, Box } from "@mui/material";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

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
      <Box sx={{ width: { xs: "100%", lg: "60%" }, m: "0 auto", p: "0 10px" }}>
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
                hair on fire? Would you walk them round your office or guide
                them to the fire extinguisher? The right answer is to help them
                to put out the fire, otherwise they'd run to the next building
                for help.
              </Typography>
              <Typography mt={2}>
                A landing page is a dedicated webpage designed to promote
                specific products, services or event, while a homepage informs
                visitors about your entire business. When visitors come to your
                website with a hair on fire problem, you really want to FOCUS on
                providing them a solution to their problem except you want them
                to turn to your competitors. And that's why a landing page is focused on
                getting your visitors to perform a specific action like filling
                a form, making a purchase, booking an appointment or whatever
                action you want them to take towards solving their problem.
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
                Imagine a stranger bursting through your office doors with their
                hair on fire? Would you walk them round your office or put them
                out of their misery with a fire extinguisher? The right answer
                is to put out the fire, otherwise they'd run to the next
                building for help.
              </Typography>
              <Typography mt={2}>
                When visitors come on your website with a hair on fire problem,
                you really want to focus on providing a solution except you want
                them to turn to your competitors. Your landing page promotes
                specific products, services or event, while your homepage
                informs visitors about your entire business. A landing page is
                focused on getting your visitors to perform a specific action
                like filling a form, making a purchase, booking an appointment
                or whatever action you want them to take.
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
              <Typography>Collapsible Group Item #3</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </Box>
    </Container>
  );
}
