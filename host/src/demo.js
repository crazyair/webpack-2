import React from "react";

import { version, Modal, Tag as AntdTag, Button } from "antd";
// import PorForm from "@ant-design/pro-form";
import { Form } from "@ant-design/compatible";
import { Tag } from "yforms-provider";

console.log("version", version);
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
      {/* <PorForm>11</PorForm> */}
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
