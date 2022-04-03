import { Box, Stack, Typography } from "@mui/material";
import useToken from "./components/UseToken";
import "./App.css";
import NavBar from "./components/NavBar";
import CardsArray from "./components/carsArray/CardsArray";

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return (
      <Box>
        <NavBar token={token} setToken={setToken} />
        <Typography>Please Login</Typography>
      </Box>
    );
  }
  return (
    <Box>
      <NavBar token={token} setToken={setToken} />
      <Stack>
        <CardsArray token={token} />
      </Stack>
    </Box>
  );
}

export default App;
