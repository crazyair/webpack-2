import React from "react";
import ReactDom from "react-dom";
import { message, Modal, ConfigProvider } from "antd";
import App from "./App";

const prefixCls = "ant-v4";

message.config({ prefixCls: `${prefixCls}-message` });
Modal.config({ rootPrefixCls: prefixCls });

ReactDom.render(
  <ConfigProvider
    prefixCls={prefixCls}
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
