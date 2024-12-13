import React from "react";
import {
  Box,
  Stack,
  Button,
  Typography,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import Gif from "./Gif";
import useStore from "../Store/useStore";
import CopyLink from "./CopyLink";
import { color } from "framer-motion";
function Initial() {
  const font = createTheme({
    typography: {
      fontFamily: "Dancing Script, cursive",
    },
  });
  const { handleButtonClick, user } = useStore();
  const { userId } = useParams();

  const handleResponse = (response) => {
    handleButtonClick(response, userId);
  };

  return (
    <>
      <Stack spacing={2}>
        <Gif />
        <ThemeProvider theme={font}>
          <Typography variant="h2">Will you be my Valentine?</Typography>
        </ThemeProvider>
        <Stack spacing={2} direction="row" sx={{ justifyContent: "center" }}>
          <Button
            sx={{
              backgroundColor: "hsl(145, 54%, 48%)",
              "&:hover": {
                backgroundColor: "hsl(148, 100%, 26%)",
              },
            }}
            variant="contained"
            onClick={() => handleResponse("Yes")}
          >
            Yes
          </Button>
          <Button
            color="error"
            variant="contained"
            onClick={() => handleResponse("No")}
          >
            No
          </Button>
        </Stack>
        <Box>
          {user ? (
            <CopyLink userId={userId} />
          ) : (
            <Link
              to="/"
              style={{
                color: "white",
                textDecoration: "none",
                "&:hover": { color: "#6c6e71" },
              }}
            >
              <Typography>Click here to get your link</Typography>
            </Link>
          )}
        </Box>
      </Stack>
    </>
  );
}

export default Initial;
