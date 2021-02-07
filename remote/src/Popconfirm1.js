import React from "react";
import { ConfigProvider, Popconfirm, Button } from "antd";

// import "antd/dist/antd.less";

const Popconfirm1 = () => {
  return (
    <div>
      <ConfigProvider>
        <Popconfirm title="测试">
          <Button type="primary"> remote Popconfirm</Button>
        </Popconfirm>
      </ConfigProvider>
    </div>
  );
};

export default Popconfirm1;
