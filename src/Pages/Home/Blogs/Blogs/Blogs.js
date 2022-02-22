import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
  return (
    <Box>
      <Container>
        <Typography
          variant="h4"
          gutterBottom
          component="div"
          sx={{ fontWeight: 600, color: "darkBlue", my: 5 }}
        >
          Our Services
        </Typography>
      </Container>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} sx={{ my: 2 }}>
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
                <Typography
                  gutterBottom
                  component="div"
                  sx={{ textAlign: "left" }}
                >
                  Though their roles and functions vary from country to country,
                  the variations among teachers are generally greater within a
                  country than they are between countries.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} sx={{ mb: 2 }}>
            <Card sx={{ minWidth: 275 }}>
              <CardMedia
                component="img"
                sx={{ width: "100%", height: "auto" }}
                image="https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg?t=st=1645540845~exp=1645541445~hmac=f2c694ea153f3a913a527d2915d1ce4a6caae3c2f71f62123773853c7c53b997"
                alt="Paella dish"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  sx={{ fontWeight: 600, my: 3 }}
                >
                  Live Classes
                </Typography>
                <Typography
                  gutterBottom
                  component="div"
                  sx={{ textAlign: "left" }}
                >
                  Though their roles and functions vary from country to country,
                  the variations among teachers are generally greater within a
                  country than they are between countries.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} sx={{ mb: 2 }}>
            <Card sx={{ minWidth: 275 }}>
              <CardMedia
                component="img"
                sx={{ width: "100%", height: "auto" }}
                image="https://img.freepik.com/free-vector/online-courses-concept_23-2148533386.jpg"
                alt="Paella dish"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  sx={{ fontWeight: 600, my: 3 }}
                >
                  Graphics Design
                </Typography>
                <Typography
                  gutterBottom
                  component="div"
                  sx={{ textAlign: "left" }}
                >
                  Though their roles and functions vary from country to country,
                  the variations among teachers are generally greater within a
                  country than they are between countries.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} sx={{ my: 2 }}>
            <Card sx={{ minWidth: 275 }}>
              <CardMedia
                component="img"
                sx={{ width: "100%", height: "auto" }}
                image="https://img.freepik.com/free-vector/webinar-concept-illustration_114360-4764.jpg?t=st=1645540864~exp=1645541464~hmac=639e3c682e154cacf9499f7baa9fd0551f048943a43d7a0bebf1e7bbfe80dbe0"
                alt="Paella dish"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  sx={{ fontWeight: 600, my: 3 }}
                >
                  Online Class
                </Typography>
                <Typography
                  gutterBottom
                  component="div"
                  sx={{ textAlign: "left" }}
                >
                  Though their roles and functions vary from country to country,
                  the variations among teachers are generally greater within a
                  country than they are between countries.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Blogs;
