import React from "react";
// import NewsList from "./NewsList";
import { Popconfirm } from "antd";
import Modal1 from "./Modal1";

const App = () => {
  return (
    <div>
      <h2>Modal 测试</h2>

      {/* <NewsList /> */}
      <Modal1 />
      <Popconfirm title="测试">
        <a>demo </a>
      </Popconfirm>
    </div>
  );
};

export default App;
