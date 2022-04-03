import { TextField, FormControl, Button, Stack, MenuItem } from "@mui/material";
import { useState } from "react";
const amount = [
  {
    value: 10,
    label: "$",
  },
  {
    value: 20,
    label: "€",
  },
  {
    value: 30,
    label: "฿",
  },
  {
    value: 40,
    label: "¥",
  },
];
function CardForm(props) {
  const { label, token } = props;
  const [open, setOpen] = useState(false);
  const [deposit, setDeposit] = useState();
  const [withdraw, setWithDraw] = useState();

  const handleClick = (props) => {
    const { label } = props;
    console.log(deposit);
    return fetch(`http://localhost:8080/CheckingAccounts/${token.accountID}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
      body: JSON.parse(deposit),
    }).then((res) => res.json());
  };
  return (
    <>
      <FormControl sx={{ display: "flex", padding: "10px 10px 10px 10px" }}>
        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={10}
        >
          <TextField
            id="outlined-select-currency"
            select
            label={`${label} amount`}
            value={deposit}
            onChange={(e) => setDeposit(e.target.value)}
            helperText="Please select your currency"
          >
            {amount.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                $ {option.value}
              </MenuItem>
            ))}
          </TextField>

          <Button
            variant={"contained"}
            color={"info"}
            sx={{
              maxWidth: "100px",
              maxHeight: "250px",
              minWidth: "250px",
              minHeight: "100px",
            }}
            onClick={() => handleClick(label, deposit)}
          >
            submit
          </Button>
        </Stack>
      </FormControl>
    </>
  );
}

export default CardForm;
