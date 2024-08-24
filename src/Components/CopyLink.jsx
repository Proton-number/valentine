import React from "react";
import { Stack, Typography, IconButton, Tooltip, Box } from "@mui/material";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import useStore from "../Store/useStore";

function CopyLink({ userId }) {
  const { copy, copyHandler } = useStore();
  const domain = window?.location?.origin;
  const uniqueLink = `${domain}/initial/${userId}`;

  return (
    <Stack>
      <Typography variant="h6">
        <b>Your unique link is:</b>
      </Typography>
      <Stack
        direction="row"
        spacing={1.2}
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <Box>
          <Typography> {uniqueLink}</Typography>
        </Box>
        {!copy && (
          <CopyToClipboard text={uniqueLink} onCopy={copyHandler}>
            <IconButton>
              <ContentCopyIcon sx={{ color: "black" }} />
            </IconButton>
          </CopyToClipboard>
        )}

        {copy && (
          <Tooltip title="Link copied!" open={copy}>
            <IconButton disabled>
              <ContentCopyIcon sx={{ color: "black", opacity: 0.8 }} />
            </IconButton>
          </Tooltip>
        )}
      </Stack>
    </Stack>
  );
}

export default CopyLink;
