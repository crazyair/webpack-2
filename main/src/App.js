// import React from "react";
// import HostProvider from "host/Provider";
// import RemoteProvider from "remote/Provider";
// import HostDemo from "host/Demo";
// import RemoteDemo from "remote/Demo";

// const App = () => {
//   return (
//     <HostProvider>
//       <RemoteProvider>
//         <HostDemo />
//         <RemoteDemo />
//       </RemoteProvider>
//     </HostProvider>
//   );
// };

// export default App;

import React, { useState } from "react";
import HostProvider from "host/Provider";
import RemoteDemo from "remote/Demo";
import HostDemo from "host/Demo";
import RemoteProvider from "remote/Provider";
const App = () => {
  return (
    <>
      <RemoteProvider>
        <HostProvider>
          <RemoteDemo />
          <hr />
          <HostDemo />
        </HostProvider>
      </RemoteProvider>
    </>
  );
};

export default App;
