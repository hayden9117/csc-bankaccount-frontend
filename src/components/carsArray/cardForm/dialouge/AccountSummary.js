import * as React from "react";

import Button from "@mui/material/Button";

import Dialog from "@mui/material/Dialog";

import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

function AccountSummary(props) {
  const { setOpen, open, data } = props;

  const handleClose = () => {
    setOpen(false);
  };
  if (data !== undefined) {
    return (
      <Dialog onClose={handleClose} open={open}>
        <Box sx={{ height: "450px", width: "800px" }}>
          <Button sx={{ position: "right" }} size="sm" onClick={handleClose}>
            close
          </Button>

          <Typography
            variant="h3"
            sx={{
              alignSelf: "center",
              justifySelf: "center",
              paddingBottom: 2,
            }}
          >
            {`user name :   ${data[0]}`}
          </Typography>

          <Typography
            variant="h3"
            sx={{
              alignSelf: "center",
              justifySelf: "center",
              paddingBottom: 2,
            }}
          >
            {`First Name :   ${data[1]}`}
          </Typography>
          <Typography
            variant="h3"
            sx={{
              alignSelf: "center",
              justifySelf: "center",
              paddingBottom: 2,
            }}
          >
            {`Last Name :   ${data[2]}`}
          </Typography>
          <Typography
            variant="h3"
            sx={{
              alignSelf: "center",
              justifySelf: "center",
              paddingBottom: 2,
            }}
          >
            {`Balance:   ${data[3]}`}
          </Typography>
          <Typography
            variant="h3"
            sx={{
              alignSelf: "center",
              justifySelf: "center",
              paddingBottom: 2,
            }}
          >
            {`OverDraft enabled:   ${data[4]}`}
          </Typography>
        </Box>
      </Dialog>
    );
  }

  return (
    <Dialog
      sx={{ height: "80%", width: "80%" }}
      onClose={handleClose}
      open={open}
    >
      <Button sx={{ position: "right" }} size="sm" onClick={handleClose}>
        close
      </Button>

      <Typography
        variant="h3"
        sx={{
          alignSelf: "center",
          justifySelf: "center",
          paddingBottom: 2,
        }}
      >
        {`Your  account summary is : error retrieving summary `}
      </Typography>
    </Dialog>
  );
}

export default AccountSummary;
