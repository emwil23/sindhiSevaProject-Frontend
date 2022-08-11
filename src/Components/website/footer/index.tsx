import { Divider, Space } from "antd";

import React, { FC } from "react";
import {
  FacebookOutlined,
  HomeOutlined,
  LinkedinOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";

const FooterComponent: FC = () => {
  return (
    <footer>
      <Divider></Divider>
      <div className="row">
        <div className="col-md-4 d-flex justify-content-center text-white">
          <address>
            <div>Sindhi Seva Samithi</div>
            <div>#10/7, Kumara Krupa Road, Bangalore 560001</div>
          </address>
        </div>
        <div className="col-md-4 flex-column justify-content-center text-white">
          <div>Email: sindhisevasamiti@gmail.com</div>
          <div>Phone: 080-4151 2028</div>
        </div>
        <div className="col-md-4 d-flex justify-content-center">
          <Space>
            <HomeOutlined className="text-white" />
            <FacebookOutlined className="text-white" />
            <LinkedinOutlined className="text-white" />
            <WhatsAppOutlined className="text-white" />
          </Space>
        </div>
      </div>
      <p className="text-white d-flex justify-content-center">
        Copyright © 2022 Sindhi College
      </p>
    </footer>
  );
};

export default FooterComponent;
