import React from "react";
import HostProvider from "host/Provider";
import RemoteProvider from "remote/Provider";
import HostDemo from "host/Demo";
import RemoteDemo from "remote/Demo";

const App = () => {
  return (
    <HostProvider>
      <RemoteProvider>
        <HostDemo />
        <RemoteDemo />
      </RemoteProvider>
    </HostProvider>
  );
};

export default App;
