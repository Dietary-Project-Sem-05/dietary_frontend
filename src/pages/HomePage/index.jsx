import React from "react";
import { Box, Typography } from "@mui/material";
import SignNavBar from "../../components/SignNavBar";
import HeightBox from "../../components/HeightBox";
import MealPlanComponent from "../../components/MealPlanComponent";
import Footer from "../../components/Footer";
import "./index.css";

export default function HomePage() {
  return (
    <Box>
      <SignNavBar />
      <Box
        sx={{
          height: 500,
          color: "#ffffff",
          textAlign: "center",
          paddingLeft: 50,
          paddingRight: 50,
        }}
        className="homeUppercontainer"
      >
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          sx={{
            paddingTop: 20,
            fontWeight: 600,
            letterSpacing: ".2rem",
            color: "inherit",
          }}
        >
          Welcome to the Dietary !
        </Typography>
        <HeightBox height={10} />
        <Box align="center" sx={{ opacity: 0.7 }}>
          <Typography variant="body2" gutterBottom align="center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </Typography>
        </Box>
      </Box>
      <Box
        style={{
          "background-image":
            "linear-gradient(to bottom, #ffffff, #eeeeee, #bdbdbd)",
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          align="center"
          sx={{
            paddingTop: 3,
            fontWeight: 600,
            letterSpacing: ".1rem",
            color: "#9e9e9e",
          }}
        >
          Meal Plans
        </Typography>
        <HeightBox height={10} />
        <Box
          sx={{
            marginLeft: 20,
            marginRight: 20,
          }}
        >
          <MealPlanComponent />
        </Box>
        <HeightBox height={100} />
      </Box>
      <Footer />
    </Box>
  );
}
