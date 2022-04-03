import { Button } from "@mui/material";
import { useState } from "react";
import AccountSummary from "./dialouge/AccountSummary";

function SummarySubmit(props) {
  const { token, label } = props;
  const [open, setOpen] = useState(false);

  const [summary, setSummary] = useState();
  console.log(label);
  const handleClick = () => {
    return fetch(
      `http://localhost:8080/CheckingAccounts/summary/${token.accountID}`,
      {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "same-origin",
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setSummary(res);
        handleOpen();
        console.log(open);
      });
  };
  console.log(summary);
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
      <AccountSummary
        label={label}
        token={token}
        data={summary}
        open={open}
        setOpen={setOpen}
      />
    </>
  );
}
export default SummarySubmit;
