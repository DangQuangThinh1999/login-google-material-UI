import GoogleLogin from "react-google-login";
import { useState, useEffect } from "react";
import CustomizedButtons from "./CustomizedButtons";
import { ReactComponent as Google } from "../img/google.svg";
import { gapi } from "gapi-script";

let customStyle = {
  width: "100%",
  border: "none",
  backgroundColor: "#ffffff",
  marginTop: "16px",
  marginBottom: "16px",
};

function ButtonGoogle() {
  const [loginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );

  const handleLogin = async (googleData) => {
    console.log(googleData);
    const res = await fetch("/api/google-login", {
      method: "POST",
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    setLoginData(data);
    localStorage.setItem("loginData", JSON.stringify(data));
  };
  const handleLogout = () => {
    localStorage.removeItem("loginData");
    setLoginData(null);
  };
  const handleFailure = (result) => {
    console.log(result);
  };

  const clientId =
    "899829503694-egluhjuohgdd3pph5ah4mpkelsim0m2i.apps.googleusercontent.com";

  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.client.init({
        clientId: clientId,
      });
    });
  }, []);

  console.log(process.env.REACT_PUBLIC_GOOGLE_CLIENT_ID);
  // process.env.REACT_APP_GOOGLE_CLIENT_ID not found
  return (
    <div>
      <div>
        {loginData ? (
          <div>
            <h3>You logged in as {loginData.email}</h3>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <GoogleLogin
            render={(renderProps) => (
              <div onClick={renderProps.onClick} style={customStyle}>
                <CustomizedButtons
                  iconLeft={<Google />}
                  value={"Sign In With Google"}
                  variant={"outlined"}
                />
              </div>
            )}
            clientId={clientId}
            // process.env.REACT_APP_GOOGLE_CLIENT_ID not found
            onSuccess={handleLogin}
            onFailure={handleFailure}
            cookiePolicy={"single_host_origin"}
          ></GoogleLogin>
        )}
      </div>
    </div>
  );
}

export default ButtonGoogle;
