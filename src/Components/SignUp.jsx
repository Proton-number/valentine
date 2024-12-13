import React from "react";
import { Paper, Box, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useStore from "../Store/useStore";

function SignUp() {
  const { signUpHandler } = useStore();
  const navigate = useNavigate();
  return (
    <Paper
      sx={{ padding: "30px", cursor: "pointer" }}
      elevation={8}
      onClick={() => signUpHandler(navigate)}
    >
      <Stack direction="row" sx={{ alignItems: "center" }} spacing={2}>
        <Box component="img" src="/google.svg" alt="google-logo" />
        <Typography variant="h6">
          {" "}
          <strong>Login with Google</strong>
        </Typography>
      </Stack>
    </Paper>
  );
}

export default SignUp;
