import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
const Blog = () => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardMedia
        component="img"
        sx={{ width: "100%", height: "auto" }}
        image="https://img.freepik.com/free-vector/seminar-concept-illustration_114360-7480.jpg?t=st=1645540206~exp=1645540806~hmac=7daa804c4791b203fbb747bbb811bf4893f65b0e2ddb28901b11e9de76cf967e"
        alt="Paella dish"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          sx={{ fontWeight: 600, my: 3 }}
        >
          Special Care
        </Typography>
        <Typography gutterBottom component="div" sx={{ textAlign: "left" }}>
          Though their roles and functions vary from country to country, the
          variations among teachers are generally greater within a country than
          they are between countries.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Blog;
