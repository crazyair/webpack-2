import React from "react";
import { Button, ConfigProvider } from "antd";
import * as demo from "yforms-provider";

import "antd/dist/antd.less";

console.log("demo: ", demo);
// console.log("demo", demo);
// console.log("subtract", subtract);

const App = () => {
  return (
    <ConfigProvider prefixCls="ant-v4-host">
      <Button type="primary">123</Button>
    </ConfigProvider>
  );
};

export default App;
