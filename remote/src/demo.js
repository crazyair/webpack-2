import React from "react";
import { Modal } from "antd";
import { Tag } from "yforms-provider";
import { Form } from "@ant-design/compatible";

const App = () => {
  return (
    <>
      <Tag>remote demo</Tag>
      <a
        onClick={() => {
          Modal.confirm({
            icon: null,
            content: (
              <>
                <Form.Item>123</Form.Item>
              </>
            ),
          });
        }}
      >
        remote modal
      </a>
    </>
  );
};

export default App;
