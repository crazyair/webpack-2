import React from "react";
import { Popconfirm, Button } from "antd";
// import Modal1 from "./Modal1";
import Popconfirm1 from "host/Popconfirm1";

const App = () => {
  return (
    <div>
      <h2>Remote v3 主 v4 子</h2>

      <div style={{ paddingTop: 100 }}>
        <Popconfirm title="测试">
          <Button type="primary">remote local Popconfirm</Button>
        </Popconfirm>
      </div>

      <div style={{ paddingTop: 100 }}>
        <Popconfirm1 />
      </div>
    </div>
  );
};

export default App;
