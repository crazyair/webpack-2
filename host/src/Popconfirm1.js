import React from "react";
import { ConfigProvider, Popconfirm, Popover, Button, Tooltip } from "antd";

// import "antd/dist/antd.less";

const Popconfirm1 = () => {
  return (
    <div>
      <ConfigProvider prefixCls="ant-v4">
        <Popconfirm title="测试">
          <Button type="primary"> host remote Popconfirm</Button>
        </Popconfirm>
        <Tooltip title="Tooltip">
          <Button type="primary"> host remote Tooltip</Button>
        </Tooltip>
        <Popover title="Popover">
          <Button type="primary"> host remote Popover</Button>
        </Popover>
      </ConfigProvider>
    </div>
  );
};

export default Popconfirm1;
