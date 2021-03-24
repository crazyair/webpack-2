import React from "react";
// const RemoteNewsList = React.lazy(() => import("remote/NewsList"));
import RemoteNewsList from "remote/NewsList";
import Modal1 from "./Modal1";

const App = () => {
  return (
    <div id="container" style={{ height: "100vh" }}>
      <h2>远程组件 NewsList</h2>
      <React.Suspense fallback="Loading NewsList">
        <RemoteNewsList />
      </React.Suspense>
      <Modal1 />
    </div>
  );
};

export default App;
