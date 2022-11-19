import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import userImage from "../../assets/userImage.jpg";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import api from "../../api";
import CircularProgress from "@mui/material/CircularProgress";
import Modal from "@mui/material/Modal";
import HeightBox from "../HeightBox";
import { styled } from "@mui/material/styles";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BackButton = styled(Button)({
  "&:hover": {
    backgroundColor: "#424242",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#616161",
  },
});

export default function ModeratorCard(props) {
  const {
    name,
    email,
    moderatorID,
    isActive,
    acceptedCount,
    rejectedCount,
    colour,
  } = props;

  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // async function removeModerator(values) {
  //   console.log("=========================");
  //   console.log(values.email);
  //   console.log("=========================");
  //   try {
  //     const user = await api.user.removeUser(values.email);
  //   } catch (error) {
  //     console.log("Can't remove user");
  //   }
  // }

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
              <Button size="small" color="success" onClick={handleOpen}>
                View Activity Log
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    {name}
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography variant="body2" color="text.secondary">
                        Accepted: {acceptedCount}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2" color="text.secondary">
                        Rejected: {rejectedCount}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters,
                  </Typography>
                  <HeightBox height={15} />
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <BackButton
                        size="small"
                        variant="contained"
                        fullWidth
                        sx={{ backgroundColor: "#616161" }}
                        onClick={handleClose}
                      >
                        Back
                      </BackButton>
                    </Grid>
                    <Grid item xs={6}>
                      <Button
                        type="submit"
                        size="small"
                        variant="contained"
                        fullWidth
                        color="error"
                        // onClick={removeModerator({ email })}
                      >
                        Remove Moderator
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Modal>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
