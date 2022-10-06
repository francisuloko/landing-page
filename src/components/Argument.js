import * as React from "react";
import { Typography, Button } from "@mui/material";
import { Container, Box } from "@mui/system";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import CloseIcon from "@mui/icons-material/Close";
import Avatar from "@mui/material/Avatar";

export default function Argument() {
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
            color="#555"
            textAlign="center"
            sx={{ fontSize: "27px", fontWeight: "bold", m: "30px auto 0 auto" }}
          >
            Why custom high converting landing pages are good for
            conversion compared to templates
          </Typography>
          <Typography
            textAlign="center"
            fontSize={16}
            sx={{
              width: {
                sm: "70%",
                sx: "100%",
              },
              textTransform: "title",
              m: 1,
            }}
          >
            A few first-hand experience shared by marketers who used page builder
            templates for their marketing campaigns
          </Typography>
        </Box>

        <List sx={{ width: { xs: "95%", sm: "70%"}, bgcolor: "background.paper" }}>
          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ backgroundColor: "red" }}>
                <CloseIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText secondary=" It's hard to find a totally suitable template with the structure I need. Almost always, I'm forced to fit my landing page concept up to the chosen template." />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ backgroundColor: "red" }}>
                <CloseIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText secondary="When I change media assets to my own, the landing page doesn't look as beautiful." />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ backgroundColor: "red" }}>
                <CloseIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText secondary="It's tough to find media assets as beautiful as on the template. I mean interface screenshots, interface mockups, illustrations, pictures that are on the template. It wastes a tremendous amount of time. Often, I'm forced to create them from scratch." />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ backgroundColor: "red" }}>
                <CloseIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText secondary="When I change the copywriting to my own, the landing page looks totally different." />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ backgroundColor: "red" }}>
                <CloseIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText secondary="I always start with a template thinking it will speed things up. What ends up happening is that the original page gets redone to the point it's not recognizable." />
          </ListItem>
        </List>

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
      </Box>
    </Container>
  );
}
