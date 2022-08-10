import  {FC} from 'react';
import Lottie from 'lottie-react';
import registrationLottie from '../../../assets/register.json';
import { Button, DatePicker, Form, Input, Select } from "antd";

const index: FC = () => {
  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <Form onFinish={onFinish} layout="vertical">
            <div className="row">
              <div className="col-md-6">
                <Form.Item
                  label="First Name"
                  name="firstName"
                  rules={[
                    {
                      required: true,
                      message: "Please enter first name",
                      type: "string",
                    },
                  ]}
                >
                  <Input placeholder="Enter your first name" />
                </Form.Item>
              </div>
              <div className="col-md-6">
                <Form.Item
                  label="Last Name"
                  name="lasttName"
                  rules={[
                    {
                      required: true,
                      message: "Please enter last name",
                      type: "string",
                    },
                  ]}
                >
                  <Input placeholder="Enter your last name" />
                </Form.Item>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please enter the Email",
                      type: "string",
                    },
                  ]}
                >
                  <Input placeholder="Enter your email" />
                </Form.Item>
              </div>
              <div className="col-md-6">
                <Form.Item
                  label="Date of Birth"
                  name="dob"
                  rules={[
                    {
                      required: true,
                      message: "Please select date",
                      type: "date",
                    },
                  ]}
                >
                  <DatePicker placeholder="select date" className="w-100" />
                </Form.Item>
              </div>
            </div>
            <div>
              <Form.Item
                label="Gender"
                name="gender"
                rules={[
                  {
                    required: true,
                    message: "Please select the gender",
                    type: "string",
                  },
                ]}
              >
                <Select placeholder="Select gender">
                  <Select.Option value="male">male</Select.Option>
                  <Select.Option value="female">female</Select.Option>
                  <Select.Option value="other">other</Select.Option>
                </Select>
              </Form.Item>
            </div>
            <div>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Register
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
        <div className="col-md-6">
          <Lottie animationData={registrationLottie} loop={false} />
        </div>
      </div>
    </div>
  );
};

export default index