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
        <div className="col-md-4 d-flex justify-content-center">
          <address>
            <div>Sindhi Seva Samithi</div>
            <div>#10/7, Kumara Krupa Road, Bangalore 560001</div>
          </address>
        </div>
        <div className="col-md-4 flex-column justify-content-center">
          <div>Email: sindhisevasamiti@gmail.com</div>
          <div>Phone: 080-4151 2028</div>
        </div>
        <div className="col-md-4 d-flex justify-content-center">
          <Space style={{ fontSize: "20px", color: "#08c" }}>
            <HomeOutlined />
            <FacebookOutlined />
            <LinkedinOutlined />
            <WhatsAppOutlined />
          </Space>
        </div>
      </div>
      {/* <hr></hr> */}
      <Divider orientation="center">
        <p className="fw-light">Copyright © 2022 Sindhi College</p>
      </Divider>
    </footer>
  );
};

export default FooterComponent;
