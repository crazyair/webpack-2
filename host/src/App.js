import React from "react";
// const RemoteNewsList = React.lazy(() => import("remote/NewsList"));
import RemoteNewsList from "remote/NewsList";

const App = () => {
  return (
    <div>
      <h2>远程组件 NewsList</h2>
      <React.Suspense fallback="Loading NewsList">
        <RemoteNewsList />
      </React.Suspense>
    </div>
  );
};

export default App;
