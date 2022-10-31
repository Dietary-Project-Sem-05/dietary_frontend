import React from "react";
import Card from "@mui/material/Card";
import {
  CardActionArea,
  Grid,
  Typography,
  CardContent,
  Button,
} from "@mui/material";
import HeightBox from "../../components/HeightBox";

export default function FoodRequestCard(props) {
  const { foodName, calories, description, foodImage } = props;

  return (
    <Card
      sx={{
        maxWidth: "auto",
        maxHeight: 160,
        backgroundColor: "#fff",
        boxShadow: 3,
        marginTop: 2,
        marginBottom: 2,
      }}
    >
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <img src={foodImage} alt="dp" style={{ width: 127, height: 127 }} />
          </Grid>
          <Grid item xs={7}>
            <Typography gutterBottom variant="h5" component="div">
              {foodName}
            </Typography>
            <Grid container>
              <Grid item xs={2}>
                <Typography variant="body2" color="text.primary">
                  Calories:
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" color="text.primary">
                  {calories}
                </Typography>
              </Grid>
            </Grid>
            <HeightBox height={10} />
            <Grid container>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs={3} spacing={4} sx={{ marginTop: 6 }}>
            <Grid container sx={{ marginLeft: 6 }}>
              <Grid item xs={4}>
                <Button variant="contained" size="small" color="success">
                  Approve
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button
                  variant="contained"
                  size="small"
                  color="error"
                  style={{ minWidth: 90, maxWidth: 90 }}
                >
                  Reject
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
