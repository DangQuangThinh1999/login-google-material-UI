import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { Typography } from "@mui/material";

const ColorButton = styled(Button)(() => ({
  color: "rgb(97, 97, 97)",
  textAlign: "center",
  backgroundColor: "rgb(250, 250, 250)",
  border: "1px solid",
  borderColor: "rgb(245, 245, 245)",
  textTransform: "capitalize",
  height: "100%",
  fontSize: "0.9375rem",
  lineHeight: 1.75,
  padding: "7px 21px",
  width: "100%",

  "&:hover": {
    border: "1px solid",
    borderColor: "rgb(33, 150, 243)",
  },
  "&:active": {},
}));

export default function CustomizedButtons({
  iconLeft,
  iconRight,
  value,
  ...prop
}) {
  return (
    <ColorButton variant={prop.variant}>
      <Stack spacing={2} direction="row">
        {iconLeft}

        <Typography
          variant="body1"
          component="p"
          sx={{ ml: 2, fontWeight: 600 }}
        >
          {value}
        </Typography>

        {iconRight}
      </Stack>
    </ColorButton>
  );
}
