import React from "react";
import { Link } from "react-router-dom";
import { Paper, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  paper: {
    width: "65%",
    display: "inline-block",
    padding: "16px",
    margin: "16px 0px",
    "&:hover": {
      cursor: "pointer",
    },
  },
});
export default function PostPreview(props) {
  const classes = useStyles();
  return (
    <Link to={`/post/${props.id}`}>
      <Paper className={classes.paper}>
        <Grid container>
          <Grid item>
            <div
              style={{
                backgroundColor: "#e5e5e5",
                width: "280px",
                height: "160px",
                display: "inline-block",
              }}
            ></div>
          </Grid>
          <Grid item style={{ padding: "16px" }}>
            <Typography variant="h5" align="left">
              {props.title}
            </Typography>
            <Typography variant="body1" align="left">
              Description
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Link>
  );
}
