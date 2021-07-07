import React from "react";
import ConfigProvider from "./Provider";
import Demo from "./demo";

const App = () => {
  return (
    <ConfigProvider>
      <Demo />
    </ConfigProvider>
  );
};

export default App;
