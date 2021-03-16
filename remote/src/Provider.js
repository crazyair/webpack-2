import React from "react";
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import { Tag } from "yforms-provider";

console.log("Tag", Tag);

const prefixCls = "ant-v4-remote";

ConfigProvider.config({ prefixCls });

const Provider = ({ children }) => {
  return (
    <ConfigProvider prefixCls={prefixCls} locale={zhCN}>
      {children}
      <Tag>11</Tag>
    </ConfigProvider>
  );
};

export default Provider;
