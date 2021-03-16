import React from "react";
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";

const prefixCls = "ant-v4-host";

ConfigProvider.config({ prefixCls });

const Provider = ({ children }) => {
  return (
    <ConfigProvider prefixCls={prefixCls} locale={zhCN}>
      {children}
    </ConfigProvider>
  );
};

export default Provider;
