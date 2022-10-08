import * as React from "react";
import { Typography, Button } from "@mui/material";
import { Container, Box } from "@mui/system";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import CheckIcon from "@mui/icons-material/Check";
import Avatar from "@mui/material/Avatar";

export default function Appointment() {
  return (
    <Container
      maxWidth={false}
      sx={{ bgcolor: "#fff", p: { xs: "10px 0 30px 0", sm: "70px 150px" } }}
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
            Sneak peek of what you'll discover in the free discovery call
          </Typography>
        </Box>

        <List sx={{ width: { xs: "95%", lg: "70%"}, bgcolor: "background.paper" }}>
          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ backgroundColor: "green" }}>
                <CheckIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="What are the elements of high converting landing pages?"
              secondary="Discover 7+ elements of high converting landing pages (#3 proves to dramatically increase conversion rates by 80%)"
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ backgroundColor: "green" }}>
                <CheckIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="5 tips to demonstrate how much you care about your readers + more tips for scroll stopping headlines"
              secondary="Discover how to craft your landing page copy to address the fears, hopes, ad dreams of your ideal customer following the Rule of One. What is the Rule of One?"
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ backgroundColor: "green" }}>
                <CheckIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Why is your landing page not converting enough?"
              secondary="Spot 3 elements that are currently killing your landing page conversion rates. Discover how to optimize them for maximum conversion or weed them out with a chain saw."
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ backgroundColor: "green" }}>
                <CheckIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="The secret formula of a powerful lead magnet for building email list"
              secondary="Drive more sales by delivering value. Discover how to attract, nurture and gain the trust of a large segment of your audience as you could possibly handle."
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ backgroundColor: "green" }}>
                <CheckIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Discover how to capture more leads with popups"
              secondary="Landing Page popups are popular and effective. But they can get in the way of your visitors resulting in poor conversion rates. Discover a new and innovative popup formula guaranteed to score you more email subs."
            />
          </ListItem>
        </List>

        <Box align="center">
          <Button
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
