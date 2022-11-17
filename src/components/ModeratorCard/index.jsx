import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import userImage from "../../assets/userImage.jpg";
import Button from "@mui/material/Button";

export default function ModeratorCard(props) {
  const {
    name,
    moderatorID,
    isActive,
    acceptedCount,
    rejectedCount,
    colour,
  } = props;

  return (
    <Card
      sx={{
        maxWidth: "auto",
        backgroundColor: colour,
        boxShadow: 3,
        marginTop: 2,
        marginBottom: 2,
      }}
    >
      <CardActionArea>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <img
                src={userImage}
                alt="dp"
                style={{ width: 100, height: 100 }}
              />
            </Grid>
            <Grid item xs={8}>
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
              <Grid container>
                <Grid item xs={3}>
                  <Typography variant="body2" color="text.secondary">
                    Moderator ID:
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="body2" color="text.secondary">
                    {moderatorID}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={3}>
                  <Typography variant="body2" color="text.secondary">
                    Is Active:
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="body2" color="text.secondary">
                    {isActive}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={3}>
                  <Typography variant="body2" color="text.secondary">
                    Number of item accepted:
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="body2" color="text.secondary">
                    {acceptedCount}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={3}>
                  <Typography variant="body2" color="text.secondary">
                    Number of item rejected:
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="body2" color="text.secondary">
                    {rejectedCount}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={2} sx={{ marginTop: 5.5 }}>
              <Button size="small" color="success">
                View Activity Log
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
