import React, { useState } from "react";
import { Modal, Button, ConfigProvider } from "antd";

import "antd/dist/antd.css";
import RemoteModal1 from "remote/Modal1";

const Modal1 = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <ConfigProvider
      getPopupContainer={() => {
        return document.querySelector("#container");
      }}
    >
      <Button type="primary" onClick={() => setIsModalVisible(true)}>
        host Open Modal
      </Button>
      <Modal
        title="host Basic Modal"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
      >
        <RemoteModal1 />
      </Modal>
    </ConfigProvider>
  );
};

export default Modal1;
