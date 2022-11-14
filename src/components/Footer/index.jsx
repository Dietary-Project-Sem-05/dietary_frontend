import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./index.css";
import logo from "../../assets/footerlogo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <Box sx={{ paddingLeft: 10, paddingRight: 10 }}>
        <Grid container spacing={4}>
          <Grid item xs={8}>
            <Typography variant="h5" gutterBottom sx={{ color: "#ffffff" }}>
              About Dietary
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ color: "#ffffff" }}>
              Ut congue augue non tellus bibendum, in varius tellus condimentum.
              In scelerisque nibh tortor, sed rhoncus odio condimentum in. Sed
              sed est ut sapien ultrices eleifend. Integer tellus est, vehicula
              eu lectus tincidunt, ultricies feugiat leo. Suspendisse tellus
              elit, pharetra in hendrerit ut, aliquam quis augue. Nam ut nibh
              mollis, tristique ante sed, viverra massa.
            </Typography>
            <Box className="icons">
              <FacebookIcon sx={{ color: "#fff" }} />
              <TwitterIcon sx={{ color: "#fff" }} />
              <InstagramIcon sx={{ color: "#fff" }} />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              component="img"
              sx={{
                height: 150,
                width: 105,
                marginLeft: 20,
              }}
              alt="Logo"
              src={logo}
            />
          </Grid>
        </Grid>
      </Box>
      <Box className="copyright">
        <Typography variant="body2" gutterBottom sx={{ color: "#bdbdbd" }}>
          Copyright &copy; {new Date().getFullYear()}
        </Typography>
      </Box>
    </footer>
  );
}
