import React from "react";
import { ConfigProvider } from "antd";

import zhCN from "antd/es/locale/zh_CN";

import HostModal from "host/Modal1";

const App = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <h2>Remote v3 主 v4 子</h2>
      <div style={{ paddingTop: 100 }}>
        <HostModal />
      </div>
    </ConfigProvider>
  );
};

export default App;
