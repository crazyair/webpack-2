import React from "react";
import { Popconfirm, Button } from "antd";
// import Modal1 from "./Modal1";
import Popconfirm1 from "remote/Popconfirm1";

const App = () => {
  return (
    <div>
      <h2>v4 主 v3 子</h2>

      <div style={{ paddingTop: 100 }}>
        <Popconfirm title="测试">
          <Button type="primary">host local Popconfirm</Button>
        </Popconfirm>
      </div>

      <div style={{ paddingTop: 100 }}>
        <Popconfirm1 />
      </div>
    </div>
  );
};

export default App;
