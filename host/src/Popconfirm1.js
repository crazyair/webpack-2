import React from "react";
import { Popconfirm, Popover, Button, Tooltip } from "antd";

const Popconfirm1 = () => {
  return (
    <div>
      <Popconfirm title="测试">
        <Button type="primary"> host remote Popconfirm</Button>
      </Popconfirm>
      <Tooltip title="Tooltip">
        <Button type="primary"> host remote Tooltip</Button>
      </Tooltip>
      <Popover title="Popover">
        <Button type="primary"> host remote Popover</Button>
      </Popover>
    </div>
  );
};

export default Popconfirm1;
