import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { cardDummyData } from "./cardDummyData";
import { Stack, Grid } from "@mui/material";
import CardForm from "./cardForm/CardForm";
import CardSubmit from "./cardForm/CardSubmit";
import CardWithdrawalForm from "./cardForm/CardWithdrawalForm";
import SummarySubmit from "./cardForm/SummarySubmit";

export default function CardsArray(props) {
  const { token } = props;

  return (
    <Stack
      sx={{ flexWrap: "wrap" }}
      direction={"row"}
      justifyContent={"center"}
    >
      {cardDummyData.map((card) => {
        return (
          <Card
            variant={"elevation"}
            key={card.label}
            sx={{
              bgcolor: card.color,
              width: 715,
            }}
          >
            <Box>
              <Stack
                direction={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{ mb: 10 }}
              >
                <Stack textAlign={"center"}>
                  <CardContent>
                    <Typography variant="h2" component="div">
                      {card.label}
                    </Typography>
                  </CardContent>
                </Stack>
                {card.label === "Deposit" ? (
                  <CardForm label={card.label} token={token} />
                ) : card.label === "Check Balance" ? (
                  <CardSubmit token={token} />
                ) : card.label === "Withdraw" ? (
                  <CardWithdrawalForm label={card.label} token={token} />
                ) : (
                  <SummarySubmit token={token} />
                )}
              </Stack>
            </Box>
          </Card>
        );
      })}
    </Stack>
  );
}
