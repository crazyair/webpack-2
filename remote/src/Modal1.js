import React, { useState } from "react";
import { Modal, Button, ConfigProvider } from "antd";

import "antd/dist/antd.css";

const Modal1 = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);

  return (
    <ConfigProvider
      getPopupContainer={() => {
        return document.querySelector("#container");
      }}
    >
      <Button type="primary" onClick={() => setIsModalVisible(true)}>
        remote Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
      >
        <Button type="primary" onClick={() => setIsModalVisible2(true)}>
          Open Modal
        </Button>
        <Modal
          title="Basic Modal2"
          visible={isModalVisible2}
          onCancel={() => setIsModalVisible2(false)}
        ></Modal>
      </Modal>
    </ConfigProvider>
  );
};

export default Modal1;
