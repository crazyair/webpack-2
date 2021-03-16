import React from "react";

import { Tag } from "yforms-provider";

// import HostModal from "host/Modal1";
import HostProvider from "host/Provider";
import ConfigProvider from "./Provider";

const App = () => {
  return (
    <>
      <ConfigProvider>
        <HostProvider>
          <h2>Remote v3 主 v4 子</h2>
          <Tag>11</Tag>
        </HostProvider>
      </ConfigProvider>
    </>
  );
};

export default App;
