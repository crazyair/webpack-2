import React from "react";
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";

import RemoteModal1 from "remote/Modal1";

const App = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <h2>Host v4 主 v3 子</h2>

      <div style={{ paddingTop: 100 }}>
        <RemoteModal1 />
      </div>
    </ConfigProvider>
  );
};

export default App;
