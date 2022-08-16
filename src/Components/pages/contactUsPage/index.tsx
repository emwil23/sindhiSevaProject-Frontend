import { UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
// import GoogleMaps from "../contactUsPage/GoogleMaps";

const ContactUsComponent = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <Form layout="vertical">
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your Email!",
                  type: "email",
                },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="email" />
            </Form.Item>
            <Form.Item
              label="Message"
              name="message"
              rules={[
                {
                  required: true,
                  message: "Please input your message!",
                  type: "string",
                },
              ]}
            >
              <TextArea rows={3} placeholder="Enter your messsage" />
            </Form.Item>
            <div>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  SUBMIT
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
        <div className="col-md-6">
          Google map
          {/* <GoogleMaps /> */}
        </div>
      </div>
    </div>
  );
};

export default ContactUsComponent;
