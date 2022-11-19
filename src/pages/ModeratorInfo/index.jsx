import React from "react";
import { useNavigate } from "react-router-dom";
import AdminNavBar from "../../components/AdminNavBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ModeratorCard from "../../components/ModeratorCard";
import HeightBox from "../../components/HeightBox";
import "./index.css";

export default function ModeratorInfo() {
  const navigate = useNavigate();
  return (
    <Box sx={{ backgroundColor: "#F7F7F7" }}>
      <AdminNavBar />

      <Box
        sx={{
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 3,
        }}
      >
        <Box sx={{ textAlign: "end" }}>
          <Button
            onClick={() => navigate("/admin/add-moderator")}
            variant="outlined"
            size="small"
          >
            Add New Add Moderator
          </Button>
        </Box>
        <Box>
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 900,

              color: "inherit",
              textDecoration: "none",
            }}
          >
            Employee
          </Typography>
        </Box>
        <HeightBox height={15} />
        <Box>
          <ModeratorCard
            name="Kasun Madushanka"
            moderatorID="11002"
            isActive="Yes"
            acceptedCount={22}
            rejectedCount={2}
          />
          <ModeratorCard
            name="Kasun Madushanka"
            moderatorID="11002"
            isActive="Yes"
            acceptedCount={22}
            rejectedCount={2}
          />
          <ModeratorCard
            name="Kasun Madushanka"
            moderatorID="11002"
            isActive="Yes"
            acceptedCount={22}
            rejectedCount={2}
          />
          <ModeratorCard
            name="Kasun Madushanka"
            moderatorID="11002"
            isActive="Yes"
            acceptedCount={22}
            rejectedCount={2}
          />
        </Box>

        <Box>
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 900,

              color: "#ef5350",
              textDecoration: "none",
            }}
          >
            Removed
          </Typography>
        </Box>

        <Box>
          <ModeratorCard
            name="Nimesh Rathnayake"
            moderatorID="19021"
            isActive="No"
            acceptedCount={22}
            rejectedCount={2}
            colour="#e0e0e0"
          />
          <ModeratorCard
            name="Nimesh Rathnayake"
            moderatorID="19021"
            isActive="No"
            acceptedCount={22}
            rejectedCount={2}
            colour="#e0e0e0"
          />
          <ModeratorCard
            name="Nimesh Rathnayake"
            moderatorID="19021"
            isActive="No"
            acceptedCount={22}
            rejectedCount={2}
            colour="#e0e0e0"
          />
          <ModeratorCard
            name="Nimesh Rathnayake"
            moderatorID="19021"
            isActive="No"
            acceptedCount={22}
            rejectedCount={2}
            colour="#e0e0e0"
          />
        </Box>
      </Box>
    </Box>
  );
}
