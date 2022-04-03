import { Button } from "@mui/material";
import { useState } from "react";
import AccountSummary from "./dialouge/AccountSummary";
import Balance from "./dialouge/Balance";

function CardSubmit(props) {
  const { token, label } = props;
  const [open, setOpen] = useState(false);
  const [balance, setBalance] = useState();
  const [summary, setSummary] = useState();
  console.log(label);
  const handleClick = () => {
    return fetch(`http://localhost:8080/CheckingAccounts/${token.accountID}`, {
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
        setBalance(res.balance);
        handleOpen();
        console.log(open);
      });
  };
  console.log(balance);
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      {" "}
      <Button
        variant={"contained"}
        color={"info"}
        sx={{
          maxWidth: "100px",
          maxHeight: "250px",
          minWidth: "250px",
          minHeight: "100px",
        }}
        onClick={handleClick}
      >
        CLICK
      </Button>
      <Balance
        label={label}
        token={token}
        data={balance}
        open={open}
        setOpen={setOpen}
      />
    </>
  );
}
export default CardSubmit;
