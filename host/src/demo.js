import React from "react";
import { Modal, Tag as AntdTag, Button } from "antd";

import { Form } from "@ant-design/compatible";
import { Tag } from "yforms-provider";

const dom = (
  <>
    <Tag>tag</Tag>
    <br />
    <AntdTag>antd tag</AntdTag>
    <br />
    <Form.Item>form</Form.Item>
  </>
);

const App = () => {
  return (
    <>
      {dom}
      <a
        onClick={() => {
          Modal.confirm({
            icon: null,
            content: dom,
          });
        }}
      >
        host modal
      </a>
      <Button type="primary">btn</Button>
    </>
  );
};

export default App;
