import React from "react";
import { version, Tag, ConfigProvider } from "antd";
// import * as yzhd from "@yzh/yzhd";
// console.log("yzhd: ", yzhd);
console.log("version", version);

const App = () => {
  return (
    <ConfigProvider prefixCls="ant-v4">
      12345
      <Tag>11</Tag>
    </ConfigProvider>
  );
};

export default App;
