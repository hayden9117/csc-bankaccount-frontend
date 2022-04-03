import * as React from "react";

import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";

function Balance(props) {
  const { setOpen, open, data } = props;

  const handleClose = () => {
    setOpen(false);
  };
  if (data !== undefined) {
    return (
      <Dialog onClose={handleClose} open={open}>
        <Button sx={{ position: "right" }} size="sm" onClick={handleClose}>
          close
        </Button>

        <Typography
          variant="h3"
          sx={{
            alignSelf: "center",
            justifySelf: "center",
            padding: "50px",
          }}
        >
          {`Your total balance is :   ${data}`}
        </Typography>
      </Dialog>
    );
  }

  return (
    <Dialog onClose={handleClose} open={open}>
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
        {`Your total balance is : error retrieving balance  `}
      </Typography>
    </Dialog>
  );
}

export default Balance;
