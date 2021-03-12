import React, { useState } from "react";
import { Modal, Button } from "antd";

const Modal1 = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

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
        modal
      </Modal>
    </div>
  );
};

export default Modal1;
