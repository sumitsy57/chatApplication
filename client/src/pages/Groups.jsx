import React from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import { KeyboardBackspace as KeyboardBackspaceIcon, Menu as MenuIcon } from "@mui/icons-material";
import { matBlack } from "../constants/color";
import { useNavigate } from "react-router-dom";

export default function Groups() {

  const handleMobile = () => { };

  const navigate = useNavigate();

  const navigateBack = () => {
    navigate("/");
  }

  const IconsBtns = (
    <>
      <Box
        sx={{
          display: {
            xs: "block",
            sm: "none",
            position: "fixed",
            right: "1rem",
            top: "1rem",
          }
        }}
      >
        <IconButton onClick={handleMobile}>
          <MenuIcon />
        </IconButton>
      </Box>


      <Tooltip title="Back">
        <IconButton
          sx={{
            position: "absolute",
            top: "2rem",
            left: "2rem",
            bgcolor: matBlack,
            color: "white",
            ":hover": {
              bgcolor: "rgba(0,0,0,0.7)",
            },
          }}
          onClick={navigateBack}
        >
          <KeyboardBackspaceIcon />
        </IconButton>
      </Tooltip>
    </>
  );

  return (
    <Box display="flex" height="100vh">
      {/* Left Sidebar (30%) */}
      <Box
        sx={{
          width: "30%",
          bgcolor: "bisque",
          padding: "1rem",
        }}
      >
        Groups List
      </Box>

      {/* Right Content (70%) */}
      <Box
        sx={{
          width: "70%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          padding: "1rem 3rem",
        }}
      >
        {IconsBtns}
      </Box>
    </Box>
  );
}
