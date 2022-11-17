import * as React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../assets/logo.png";

const settings = ["Dashboard", "Account", "Logout"];

export default function SignNavBar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ paddingLeft: 10, paddingRight: 10, color: "#ffffff" }}
      color="transparent"
      style={{
        "background-image":
          "linear-gradient(to right, #1a237e, #1e88e5, #42a5f5)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img"
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              width: 40,
              height: 40,
              marginRight: 1,
            }}
            alt="Logo"
            src={logo}
          />

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#ffffff",
              textDecoration: "none",
            }}
          >
            DIETARY
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            DIETARY
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              key="Moderator Information"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
              href={"/admin/mod-info"}
            >
              Moderator Information
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <MenuItem
              key="Moderator Information"
              onClick={handleCloseNavMenu}
              href={"/login"}
            >
              <Typography textAlign="center">Login</Typography>
            </MenuItem>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
