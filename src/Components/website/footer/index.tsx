import { Col, Divider, Row, Space } from "antd";

import React, { FC } from "react";
import {
  FacebookOutlined,
  HomeOutlined,
  LinkedinOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";

const FooterComponent: FC = () => {
  return (
    <React.Fragment>
      <Row>
        <Col span={8}>
          <address>
            <div>Sindhi Seva Samithi</div>
            <div>#10/7, Kumara Krupa Road, Bangalore 560001</div>
          </address>
        </Col>
        <Col span={8}>
          <div>Email: sindhisevasamiti@gmail.com</div>
          <div>Phone: 080-4151 2028</div>
        </Col>
        <Col span={8}>
          <Space style={{ fontSize: "20px", color: "#08c" }}>
            <HomeOutlined />
            <FacebookOutlined />
            <LinkedinOutlined />
            <WhatsAppOutlined />
          </Space>
        </Col>
      </Row>
      {/* <hr></hr> */}
      <Divider orientation="center">
        <h5>Copyright © 2022 Sindhi College</h5>
      </Divider>
    </React.Fragment>
  );
};

export default FooterComponent;
