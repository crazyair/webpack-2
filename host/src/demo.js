import { Modal } from "antd";
import React from "react";
import { Form } from "@ant-design/compatible";
import { Tag } from "yforms-provider";

const App = () => {
  return (
    <>
      <Tag>host demo</Tag>
      <a
        onClick={() => {
          Modal.confirm({
            content: (
              <>
                <Form.Item>123</Form.Item>
              </>
            ),
          });
        }}
      >
        demo
      </a>
    </>
  );
};

export default App;
