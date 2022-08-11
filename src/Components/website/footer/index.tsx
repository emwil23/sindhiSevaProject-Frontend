import './index.scss';
import { FC } from "react";
import {
  FacebookOutlined,
  LinkedinOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";

const FooterComponent: FC = () => {
  return (
    <footer>
      <div className="row py-2">
        <div className="col-md-4 text-center text-white">
          <address>
            Sindhi Seva Samithi<br/>#10/7, Kumara Krupa Road, Bangalore 560001
          </address>
        </div>
        <div className="col-md-4 text-center text-white">
          <div>Email: sindhisevasamiti@gmail.com</div>
          <div>Phone: 080-4151 2028</div>
        </div>
        <div className="col-md-4 text-center">
            <FacebookOutlined className="text-white" />
            <LinkedinOutlined className="text-white" />
            <WhatsAppOutlined className="text-white" />
        </div>
      </div>
      <div>
      <p className="text-white d-flex justify-content-center">
        Copyright © 2022 Sindhi College
      </p>
      </div>
    </footer>
  );
};

export default FooterComponent;
