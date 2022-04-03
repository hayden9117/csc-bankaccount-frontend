import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LoginDialog from "./login/Login";
import { useState } from "react";
export default function NavBar(props) {
  const { token, setToken } = props;
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <Box sx={{ flexGrow: 1, mt: 10 }}>
      <AppBar position="fixed">
        <Toolbar sx={{ bgcolor: "teal" }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Richies Banking
          </Typography>
          <Button color="inherit" onClick={handleOpen}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <LoginDialog
        open={open}
        setOpen={setOpen}
        token={token}
        setToken={setToken}
      />
    </Box>
  );
}
