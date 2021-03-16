import React from "react";
import { DatePicker, Button } from "antd";
import { Tag } from "yforms-provider";

import RemoteModal1 from "remote/Modal1";
import RemoteProvider from "remote/Provider";
import ConfigProvider from "./Provider";

const App = () => {
  return (
    <ConfigProvider>
      <RemoteProvider>
        <h2>Host v4 主 v3 子</h2>
        <Tag>Tag</Tag>
        <DatePicker />
        <Button type="primary">Open Modal</Button>

        <div style={{ paddingTop: 100 }}>
          <RemoteModal1 />
        </div>
      </RemoteProvider>
    </ConfigProvider>
  );
};

export default App;
