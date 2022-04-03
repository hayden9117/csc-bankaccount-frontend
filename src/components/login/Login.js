import * as React from "react";

import Button from "@mui/material/Button";

import Dialog from "@mui/material/Dialog";

import Typography from "@mui/material/Typography";
import { FormControl, TextField } from "@mui/material";

function LoginDialog(props) {
  const { setOpen, open, token, setToken } = props;
  const [password, setPassword] = React.useState("");
  const [userName, setUserName] = React.useState("");

  const handleClose = () => {
    setOpen(false);
  };
  const handleAccount = (id) => {
    fetch(`http://localhost:8080/BankAccounts/${id}`, {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setToken({ id: res.id, accountID: res.accountID });
      });
  };

  const handleSubmit = () => {
    fetch("http://localhost:8080/BankAccounts", {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
    })
      .then((res) => res.json())
      .then((res) => {
        res.forEach((element) => {
          if (element.userName === userName && element.password === password) {
            console.log(
              `userName:   ${userName}  password:  ${password}   response: ${element.id}`
            );
            handleAccount(element.id);
          }
        });
      });
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <Button sx={{ position: "right" }} size="sm" onClick={handleClose}>
        close
      </Button>
      <FormControl>
        <FormControl sx={{ display: "flex", padding: "10px 10px 10px 10px" }}>
          <Typography
            variant="h3"
            sx={{
              alignSelf: "center",
              justifySelf: "center",
              paddingBottom: 2,
            }}
          >
            Please Login
          </Typography>
          <TextField
            label="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            variant="outlined"
            style={{ height: 80 }}
          />
          <div />
          <TextField
            label="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
          />
          <div />
          <Button className="loginSubmit" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
          <div></div>
          <Button>Sign UP</Button>
        </FormControl>
      </FormControl>
    </Dialog>
  );
}

export default LoginDialog;
