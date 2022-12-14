import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import FormHelperText from "@mui/material/FormHelperText";
import Link from "@mui/material/Link";

import { ReactComponent as EyeNotShow } from "../img/eyeNotShow.svg";
import { ReactComponent as EyeShow } from "../img/eyeShow.svg";
const preventDefault = (event) => event.preventDefault();
// Custom styles Input PASSWORD
const InputPassWord = styled(({ bgPassWord, ...props }) => (
  <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ bgPassWord, theme }) => ({
  // if bg ===true , borderColor ="#d00000", else   borderColor ="rgb(133, 133, 133)"
  "& .MuiFilledInput-root": {
    border: "1px solid",
    overflow: "hidden",
    fontWeight: 500,
    borderColor: bgPassWord ? "#d00000" : "rgb(133, 133, 133)",
    borderRadius: 4,
    width: "100%",
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#4cc9f0",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "boxShadow",
      "border",
    ]),
    "&:hover": {
      backgroundColor: "transparent",
      border: "1px solid #000000",
    },
    "&.Mui-focused": {
      backgroundColor: "transparent",
      border: "1px solid",
      borderColor: bgPassWord ? "#d00000" : "#4cc9f0",
      boxShadow: `-1px 0 ${bgPassWord ? "#d00000" : "#4cc9f0"}, 0 1px ${
        bgPassWord ? "#d00000" : "#4cc9f0"
      }, 1px 0 ${bgPassWord ? "#d00000" : "#4cc9f0"}, 0 -1px ${
        bgPassWord ? "#d00000" : "#4cc9f0"
      }`,
    },
  },
}));

// Custom styles Input email
const InputEmail = styled(({ bgEmail, ...props }) => (
  <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ bgEmail, theme }) => ({
  // if bg ===true , borderColor ="#d00000", else   borderColor ="rgb(133, 133, 133)"
  "& .MuiFilledInput-root": {
    border: "1px solid",
    overflow: "hidden",
    fontWeight: 500,
    borderColor: bgEmail ? "#d00000" : "rgb(133, 133, 133)",
    borderRadius: 4,
    width: "100%",
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#4cc9f0",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "boxShadow",
      "border",
    ]),
    "&:hover": {
      backgroundColor: "transparent",
      border: "1px solid #000000",
    },
    "&.Mui-focused": {
      backgroundColor: "transparent",
      border: "1px solid",
      borderColor: bgEmail ? "#d00000" : "#4cc9f0",
      boxShadow: `-1px 0 ${bgEmail ? "#d00000" : "#4cc9f0"}, 0 1px ${
        bgEmail ? "#d00000" : "#4cc9f0"
      }, 1px 0 ${bgEmail ? "#d00000" : "#4cc9f0"}, 0 -1px ${
        bgEmail ? "#d00000" : "#4cc9f0"
      }`,
    },
  },
}));

// Custom styles Button Sign In
const SignInButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  fontWeight: 500,
  lineHeight: 1.5,
  backgroundColor: "rgb(103, 58, 183)",
  borderColor: "rgb(103, 58, 183)",

  color: "#ffffff",
  "&:hover": {
    backgroundColor: "rgb(94, 53, 177)",
    borderColor: "rgb(94, 53, 177)",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "rgb(94, 53, 177)",
    borderColor: "rgb(94, 53, 177)",
  },
});
export default function CustomizedInputs() {
  const [show, setShow] = React.useState(false);
  const [type, setType] = React.useState("password");
  const [valueEmail, setValueEmail] = React.useState("info@codedthemes.com");
  const [errorEmail, setErrorEmail] = React.useState(false);
  const [bgEmail, setBgEmail] = React.useState(false);
  const [valuePassword, setValuePassword] = React.useState("123456");
  const [errorPassword, setErrorPassword] = React.useState(false);
  const [bgPassWord, setBgPassWord] = React.useState(false);
  const [helperTextPassWord, setHelperTextPassWord] = React.useState("");
  const [helperTextEmail, setHelperTextEmail] = React.useState("");

  // create function handlers change event Emails

  const handleChangeEmail = (e) => {
    let array = [];

    // eslint-disable-next-line no-useless-escape
    let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (e.target.value) {
      array.push(e.target.value);
      let n = array.join("").match(emailFormat);
      if (n) {
        setValueEmail(e.target.value);
        setErrorEmail(false);
        setBgEmail(false);
        setHelperTextEmail("");
      } else {
        setErrorEmail(true);
        setBgEmail(true);
        setHelperTextEmail("Must be a valid email");
      }
    } else {
      setErrorEmail(true);
      setBgEmail(true);
      setHelperTextEmail("Email is required");
    }
  };

  // create function handlers change event Password
  const handleChangePassword = (e) => {
    if (e.target.value) {
      setValuePassword(e.target.value);
      setErrorPassword(false);
      setBgPassWord(false);
      setHelperTextPassWord("");
    } else {
      setErrorPassword(true);
      setBgPassWord(true);
      setHelperTextPassWord("Password is required");
    }
  };
  const handleShowPassWord = () => {
    if (show) {
      setType("password");
    } else setType("text");
    setShow(!show);
  };
  return (
    <Box
      component="form"
      noValidate
      sx={{
        display: "grid",
        mt: 3,
      }}
    >
      {/*------------------------------ EMAIL-----------------------  */}
      <InputEmail
        type="email"
        bgEmail={bgEmail}
        error={errorEmail}
        label="Email Address/ Username"
        defaultValue={valueEmail}
        id="email-input"
        variant="filled"
        onChange={handleChangeEmail}
        autoComplete="on"
      />
      <FormHelperText sx={{ color: "#d00000", ml: 1.5 }}>
        {helperTextEmail}
      </FormHelperText>
      {/*------------------------------ PASSWORD --------------------*/}
      <InputPassWord
        bgPassWord={bgPassWord}
        error={errorPassword}
        sx={{ mt: 2.5 }}
        label="Password"
        defaultValue={valuePassword}
        id="password-input"
        type={type}
        variant="filled"
        onChange={handleChangePassword}
        autoComplete="on"
      />

      <IconButton
        sx={{
          mt: -7,
          width: "55px",
          ml: 43,
          fontSize: "20px",
          borderRadius: "50%",
          padding: "12px ",
          opacity: 0.6,
        }}
        onClick={handleShowPassWord}
      >
        {show ? <EyeShow /> : <EyeNotShow />}
      </IconButton>
      <FormHelperText sx={{ color: "#d00000", ml: 2 }}>
        {helperTextPassWord}
      </FormHelperText>
      <Grid
        sx={{ mt: 2, mb: 2 }}
        container
        direction="row"
        justifyContent="space-around"
        alignItems="flex-start"
      >
        <Grid item xs={6}>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Remember me"
            />
          </FormGroup>
        </Grid>
        <Grid item xs={6}>
          <Link href="/" underline="none" onClick={preventDefault}>
            <Typography
              variant="body2"
              component="p"
              sx={{
                textAlign: "right",
                color: "rgb(103, 58, 183)",
                fontWeight: 500,
                paddingTop: "12px",
              }}
            >
              Forgot Password?
            </Typography>
          </Link>
        </Grid>
      </Grid>
      <SignInButton>Sign In</SignInButton>
    </Box>
  );
}
