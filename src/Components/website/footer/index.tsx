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
            Sindhi Seva Samithi
            <br />
            #10/7, Kumara Krupa Road, Bangalore 560001
          </address>
        </div>
        <div className="col-md-4 text-center text-white">
          <div>Email: sindhisederationofbangalore@gmail.com</div>
          <div>Phone: +91 9449364010</div>
        </div>
        <div className="col-md-4 text-center">
          <FacebookOutlined
            className="text-white me-3 fs-5"
            onClick={() =>
              (window.location.href =
                "https://www.facebook.com/Sindhi-Seva-Samiti-Bangalore-1935940370031884/")
            }
          />
          <LinkedinOutlined className="text-white me-3 fs-5" />
          <WhatsAppOutlined
            className="text-white me-3 fs-5"
            onClick={() =>
              (window.location.href =
                "https://api.whatsapp.com/send?phone=919449364010")
            }
          />
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
