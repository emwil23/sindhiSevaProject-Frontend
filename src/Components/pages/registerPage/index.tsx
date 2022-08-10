import  {FC} from 'react';
import Lottie from 'lottie-react';
import registrationLottie from '../../../assets/register.json';
import { Button, DatePicker, Form, Input, message, Select, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import TextArea from "antd/lib/input/TextArea";

const RegisterComponent: FC = () => {
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
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please enter the password",
                      type: "string",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value: string) {
                        if (!value || value.length >= 6) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error("Password length should be more than 6!")
                        );
                      },
                    }),
                  ]}
                >
                  <Input placeholder="Enter the password" />
                </Form.Item>
              </div>
              <div className="col-md-6">
                <Form.Item
                  label="Confirm Password"
                  name="confirmPassword"
                  dependencies={["password"]}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "Please enter same password",
                      type: "string",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error(
                            "The two passwords that you entered do not match!"
                          )
                        );
                      },
                    }),
                  ]}
                >
                  <Input placeholder="Confirm the password" />
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

            <div className="row">
              <div className="col-md-6">
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
              <div className="col-md-6">
                <Form.Item
                  label="Profession"
                  name="profession"
                  rules={[
                    {
                      required: true,
                      message: "Please select the Profession",
                      type: "string",
                    },
                  ]}
                >
                  <Select placeholder="Select Profession">
                    <Select.Option value="Doctor">Doctor</Select.Option>
                    <Select.Option value="Enginner">Enginner</Select.Option>
                    <Select.Option value="other">other</Select.Option>
                  </Select>
                </Form.Item>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <Form.Item
                  label="Phone "
                  name="mobile"
                  rules={[
                    {
                      required: true,
                      message: "Please enter mobile number",
                      type: "string",
                    },
                  ]}
                >
                  <Input placeholder="Enter Mobile Number" />
                </Form.Item>
              </div>
              <div className="col-md-6">
                <Form.Item
                  label="Blood Group"
                  name="blood"
                  rules={[
                    {
                      required: true,
                      message: "Please enter blood group",
                      type: "string",
                    },
                  ]}
                >
                  <Input placeholder="Enter Blood Group" />
                </Form.Item>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <Form.Item
                  label="Qualification"
                  name="qualification"
                  rules={[
                    {
                      required: true,
                      message: "Please enter qualification",
                      type: "string",
                    },
                  ]}
                >
                  <Select placeholder="Select">
                    <Select.Option value="10th">10th</Select.Option>
                    <Select.Option value="12th">12th</Select.Option>
                    <Select.Option value="graduate">Graduate</Select.Option>
                    <Select.Option value="postgraduate">
                      Post Graduate
                    </Select.Option>
                  </Select>
                </Form.Item>
              </div>
              <div className="col-md-6">
                <Form.Item
                  label="Marital Status"
                  name="maritalStatus"
                  rules={[
                    {
                      required: true,
                      message: "Please select marital status",
                      type: "string",
                    },
                  ]}
                >
                  <Select placeholder="Select">
                    <Select.Option value="married">Married</Select.Option>
                    <Select.Option value="unmarried">Unmarried</Select.Option>
                    <Select.Option value="divorce">Divorce</Select.Option>
                    <Select.Option value="widow">Widow</Select.Option>
                    <Select.Option value="widower">Widower</Select.Option>
                  </Select>
                </Form.Item>
              </div>
            </div>
            <div>
              <Form.Item
                label="Address"
                name="address"
                rules={[
                  {
                    required: true,
                    message: "Please enter address",
                    type: "string",
                  },
                ]}
              >
                <TextArea rows={3} placeholder="Enter Address" />
              </Form.Item>
            </div>

            <div>
              <Form.List name="members">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name, ...restField }) => (
                      <Space
                        key={key}
                        style={{ display: "flex", marginBottom: 8 }}
                        align="baseline"
                      >
                        <Form.Item
                          {...restField}
                          name={[name, "relationId"]}
                          rules={[
                            {
                              required: true,
                              message: "Please enter member idhusband",
                            },
                          ]}
                        >
                          <Input placeholder="Enter Exsiting member id" />
                        </Form.Item>

                        <Form.Item
                          {...restField}
                          name={[name, "relationName"]}
                          rules={[
                            {
                              required: true,
                              message: "Please select relation",
                            },
                          ]}
                        >
                          <Select>
                            <Select.Option value="father">Father</Select.Option>
                            <Select.Option value="mother">Mother</Select.Option>
                            <Select.Option value="husband">
                              Husband
                            </Select.Option>
                            <Select.Option value="wife">Wife</Select.Option>
                            <Select.Option value="sister">Sister</Select.Option>
                            <Select.Option value="brother">
                              Brother
                            </Select.Option>
                          </Select>
                        </Form.Item>

                        <MinusCircleOutlined onClick={() => remove(name)} />
                      </Space>
                    ))}
                    <Form.Item>
                      <Button
                        type="dashed"
                        onClick={() => add()}
                        block
                        icon={<PlusOutlined />}
                      >
                        Add Member
                      </Button>
                    </Form.Item>
                  </>
                )}
              </Form.List>
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

export default RegisterComponent;