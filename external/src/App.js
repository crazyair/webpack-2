import React from "react";
import { Button, ConfigProvider } from "antd";
import { get } from "lodash";
// import * as webpackNumbers from "webpack-numbers";
import * as webpackNumbers from "webpackNumbers";

// import * as demo from "yforms-provider";
// import { Tag } from "yforms-provider";

import "antd/dist/antd.less";

// console.log("demo: ", demo);
// console.log("Tag", Tag);
// console.log("demo", demo);
// console.log("subtract", subtract);

console.log("webpackNumbers", webpackNumbers.wordToNum("Two"));

const App = () => {
  return (
    <ConfigProvider prefixCls="ant-v4-host">
      <Button type="primary">123</Button>
      {/* <Tag>11</Tag> */}
    </ConfigProvider>
  );
};

export default App;
