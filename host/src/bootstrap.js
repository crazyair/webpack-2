import React from "react";
import ReactDom from "react-dom";
import { ConfigProvider } from "antd";
import App from "./App";

ReactDom.render(
  <ConfigProvider
    getPopupContainer={() => {
      return document.querySelector("#container");
    }}
  >
    <div style={{ height: "100vh" }} id="container">
      <div
        style={{
          width: 800,
          display: "flex",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <App />
      </div>
    </div>
  </ConfigProvider>,
  document.getElementById("root")
);
