import * as React from "react";
import "./App.css";
import "./index.css";
import Gird from "@mui/material/Grid";
import Login from "./component/Login";
import "@fontsource/roboto/300.css";

function App() {
  return (
    <div className="App">
      <Gird container justifyContent="center" alignItems="center">
        <Gird item xs={0}>
          <Login />
        </Gird>
      </Gird>
    </div>
  );
}

export default App;
