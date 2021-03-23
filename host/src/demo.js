// import { ConfigProvider, Modal, Tag as AntdTag, version } from "antd";
// import * as demo from "antd";
// import React from "react";

// import "antd/dist/antd.less";

// console.log("111", React.version);
// console.log("demo", demo);
// console.log("AntdTag", AntdTag);
// console.log("ConfigProvider", ConfigProvider);
// console.log("version", version);
// const App = () => {
//   const dom = <>123</>;
//   return (
//     <ConfigProvider prefixCls="ant-v4">
//       <div style={{ margin: 100 }}>
//         {dom}
//         <a
//           onClick={() => {
//             Modal.confirm({
//               icon: null,
//               content: dom,
//             });
//           }}
//         >
//           host modal
//         </a>
//       </div>
//     </ConfigProvider>
//   );
// };

// export default App;

import React from "react";
import { version, Tag, ConfigProvider } from "antd";
// import * as yzhd from "@yzh/yzhd";
// console.log("yzhd: ", yzhd);
console.log("1", React.version);
console.log("version", version);

const App = () => {
  return (
    <>
      12345
      <Tag>222</Tag>
    </>
  );
};

export default App;
