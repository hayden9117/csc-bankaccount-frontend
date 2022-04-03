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
function CardWithdrawalForm(props) {
  const { label, token } = props;

  const [withdraw, setWithDraw] = useState();

  const handleClick = (props) => {
    console.log(withdraw);
    return fetch(
      `http://localhost:8080/CheckingAccounts/withdrawal/${token.accountID}`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "same-origin",
        body: JSON.parse(withdraw),
      }
    ).then((res) => res.json());
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
            value={withdraw}
            onChange={(e) => setWithDraw(e.target.value)}
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
            onClick={() => handleClick(withdraw)}
          >
            submit
          </Button>
        </Stack>
      </FormControl>
    </>
  );
}

export default CardWithdrawalForm;
