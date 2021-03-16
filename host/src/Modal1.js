import React, { useState } from "react";
import { Modal, Button } from "antd";

// import RemoteModal1 from "remote/Modal1";

const Modal1 = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div>
      <>
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
      </>
    </div>
  );
};

export default Modal1;
