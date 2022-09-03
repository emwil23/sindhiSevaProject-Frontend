import { Button, Form, Input, Space } from "antd";
import Lottie from "lottie-react";
import registrationLottie from "../../../assets/register.json";
import { FC, useState } from "react";

const Otp: FC = () => {
  const [status, setStatus] = useState("mobile");

  const onFinish = (values: any) => {
    console.log("Received values of form:", values);
    setStatus("otp");
  };
  return status === "mobile" ? (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <Form className="otpverification" onFinish={onFinish}>
            <Form.Item
              name="Mobile No."
              label="Enter Mobile No."
              rules={[{ required: true }]}
            >
              <Input type="number" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit Yaha hai
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="col-md-6">
          <Lottie animationData={registrationLottie} loop={false} />
        </div>
      </div>
    </div>
  ) : (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <Form>
            Enter OTP
            <Form.Item>
              <Input.Password placeholder="input OTP" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="col-md-6">
          <Lottie animationData={registrationLottie} loop={false} />
        </div>
      </div>
    </div>
  );
};

export default Otp;
