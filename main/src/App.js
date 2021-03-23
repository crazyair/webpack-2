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
import HostDemo from "host/Demo";

require("react-dom");
window.React2 = require("react");
console.log(window.React1 === window.React2);
console.log(1, window.React1);
console.log(2, window.React2);

console.log("host", HostDemo);

const App = () => {
  const [Demo, setDemo] = useState("");
  return (
    <>
      <HostDemo />
    </>
  );
};

export default App;
