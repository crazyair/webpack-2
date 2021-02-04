import React from "react";
// const RemoteNewsList = React.lazy(() => import("remote/NewsList"));
import { Popconfirm } from "antd";
import RemoteNewsList from "remote/NewsList";
import Modal1 from "./Modal1";

const App = () => {
  return (
    <div>
      <h2>远程组件 NewsList</h2>
      <React.Suspense fallback="Loading NewsList">
        <RemoteNewsList />
      </React.Suspense>
      <Modal1 />
      <div style={{ paddingTop: 100 }}>
        <Popconfirm title="测试">
          <a> Popconfirm </a>
        </Popconfirm>
      </div>
    </div>
  );
};

export default App;
