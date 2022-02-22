import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

/* 
https://img.freepik.com/free-vector/learning-concept-illustration_114360-6186.jpg?t=st=1645523238~exp=1645523838~hmac=fbc383527f17946f1c9d36d7782cf0df402116bc42222f76983f4feef14255e5&w=826

*/
const TopBanner = () => {
  return (
    <Box>
      <Grid
        container
        spacing={2}
        sx={{ height: { xs: "480px", md: "400px" }, weight: "100%" }}
      >
        <Grid
          item
          xs={12}
          md={6}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            component="div"
            sx={{ fontWeight: 600, pt: 3 }}
          >
            Welcome to <span style={{ color: "blue" }}>Hypatia</span>, <br />{" "}
            Your best study partner
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="https://img.freepik.com/free-vector/stressed-millennial-guy-studying-before-college-exams-distressed-student-meeting-deadline-doing-assignment-preparing-test-home-with-books-flat-illustration_74855-20731.jpg?t=st=1645523134~exp=1645523734~hmac=adff54c758dbcbffaabb9faed9c218660ca7aa8063d4e0ba4cff8c865b53725f"
            alt=""
            style={{ height: "250px" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TopBanner;
