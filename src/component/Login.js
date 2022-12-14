import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import FormPropsTextFields from "./FormPropsTextFields";

import ButtonGoogle from "./ButtonGoogle";
import { ReactComponent as Berry } from "../img/berry.svg";
const preventDefault = (event) => event.preventDefault();
function Login() {
  return (
    <Box sx={{ mx: "auto", mt: 6 }}>
      <Paper
        sx={{
          height: 739.27,
          width: 473,
          backgroundColor: "#ffffff",
          p: 4,
          textAlign: "center",
        }}
      >
        <Box sx={{ my: 1 }}>
          <Berry></Berry>
        </Box>
        <Box>
          <Typography
            variant="h1"
            component="h3"
            sx={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "rgb(103, 58, 183)",
              mt: 5,
            }}
          >
            Hi, Welcome Back
          </Typography>
          <Typography
            variant="subtitle"
            component="p"
            sx={{
              lineHeight: 1.66,
              fontSize: "1.1rem",
              fontWeight: 400,
              color: "rgb(158, 158, 158)",
              mt: 2,
            }}
          >
            Enter your credentials to continue
          </Typography>
          {/* Login GOOGLE  */}

          <ButtonGoogle />
          {/* ----------------------------------------- */}
          <Divider sx={{ mt: 4 }}>
            <Button
              variant="outlined"
              sx={{
                color: "rgb(33, 33, 33) !important",
                padding: "4px 56px",
                lineHeight: "24.5px",
                fontWeight: "600",
              }}
              disabled
            >
              OR
            </Button>
          </Divider>
          <Typography
            variant="body2"
            component="p"
            sx={{
              mt: 4,
              fontWeight: 600,
              color: "rgb(33, 33, 33)",
              fontSize: "0.875rem",
              lineHeight: 1.75,
            }}
          >
            Sign in with Email address
          </Typography>
        </Box>
        <FormPropsTextFields />
        <Divider sx={{ mt: 2 }}></Divider>

        <Link href="/" underline="none" onClick={preventDefault}>
          <Typography
            variant="body2"
            component="p"
            sx={{
              mt: 3,
              textAlign: "center",
              color: " rgb(33, 33, 33)",
              fontWeight: 500,
              paddingTop: "12px",
            }}
          >
            Don't have an account?
          </Typography>
        </Link>
      </Paper>
    </Box>
  );
}

export default Login;
