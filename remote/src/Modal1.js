import React, { useState } from "react";
import { Modal, Button } from "antd";

import "antd/dist/antd.less";

const Modal1 = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);

  return (
    <div>
      <Button type="primary" onClick={() => setIsModalVisible(true)}>
        Open Modal
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
    </div>
  );
};

export default Modal1;
