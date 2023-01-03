import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { purple } from "@mui/material/colors";
import { Link } from "react-router-dom";

const primary = purple[500]; // #f44336

const ErrComponent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#ffffff",
      }}
    >
      <Typography variant="h1" style={{ color: "#144252" }}>
        404
      </Typography>
      <Typography variant="h6" style={{ color: "#144252" }}>
        The page you're looking for doesn't exist.
      </Typography>
      <Link to="/">
        <Button
          variant="contained"
          className="my_btn"
          style={{ borderRadius: "10px", marginTop: "20px" }}
        >
          Back Home
        </Button>
      </Link>
    </Box>
  );
};

export default ErrComponent;
