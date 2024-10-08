import React from "react";
import { Box } from "@mui/material";
import useStore from "../Store/useStore";

function Gif() {
  const { gif, happy, sad } = useStore();
  return (
    <Box>
      {gif && (
        <Box
          component="img"
          src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzA1cDBnaGo3bWtsc3g5OG05dWJhbmR0bWhtZnpmdXU0ZmVxeGF6cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TDMbOHni02MZM8fTgS/giphy.gif"
        />
      )}
      {happy && (
        <Box
          component="img"
          src="https://media.giphy.com/media/3q3ITkump6dZJt6C03/giphy.gif"
          sx={{
            width: { xs: "200px", sm: "300px", lg: "400px" },
            height: "auto",
          }}
        />
      )}
      {sad && (
        <Box
          component="img"
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTA4OXh1NTYzcnQycnB2cmw3MmVqdms0dXVhYmFrZmwzcTVyYjR5bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xUOxfd9h4zALTO4G1W/giphy.gif"
          sx={{ width: { xs: "300px", lg: "500px" }, height: "auto" }}
        />
      )}
    </Box>
  );
}

export default Gif;
