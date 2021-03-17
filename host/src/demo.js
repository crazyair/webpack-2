import { Modal, Tag as AntdTag } from "antd";
import React from "react";
import { Form } from "@ant-design/compatible";
import { Tag } from "yforms-provider";

const App = () => {
  const dom = (
    <>
      <Tag>tag</Tag>
      <br />
      <AntdTag>antd tag</AntdTag>
      <br />
      <Form.Item>123</Form.Item>
    </>
  );
  return (
    <div style={{ margin: 100 }}>
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
    </div>
  );
};

export default App;
