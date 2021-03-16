import React from "react";
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";

const prefixCls = "ant-v4-remote";

ConfigProvider.config({ prefixCls });

const Provider = ({ children }) => {
  return (
    <ConfigProvider prefixCls={prefixCls} locale={zhCN}>
      {children}
    </ConfigProvider>
  );
};

export default Provider;
