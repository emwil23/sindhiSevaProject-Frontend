import { FC, useState } from 'react';
import Lottie from 'lottie-react';
import registrationLottie from '../../../assets/register.json';
import { Button, DatePicker, Form, Input, Select } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import TextArea from "antd/lib/input/TextArea";
import { genderOptions, professionOptions, bloodGroupOptions, qualificationOptions, martialStatusOptions, relationsOptions } from '../../selectOptions';

const RegisterComponent: FC = () => {
  const [hideAnniversary, setHideAnniversary] = useState(true);

  const onMartialStatusChange = (value: string) => {
    switch(value){
      case 'Married': 
        setHideAnniversary(false);
        return;
      default:
        setHideAnniversary(true);
        return;
    }
  }

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
                  <Input.Password placeholder="Enter the password" />
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
                  <Input.Password placeholder="Confirm the password" />
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
                      type: 'email',
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
                  <DatePicker placeholder="select date" className="w-100" format={'YYYY-MM-DD'} />
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
                    {genderOptions.map((option, index) => {
                      return <Select.Option value={option} key={index}>{option}</Select.Option>
                    })}
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
                    {professionOptions.map((option, index) => {
                      return <Select.Option value={option} key={index}>{option}</Select.Option>
                    })}
                  </Select>
                </Form.Item>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <Form.Item
                  label="Phone"
                  name="mobile"
                  rules={[
                    {
                      required: true,
                      message: "Please enter mobile number",
                      type: 'string',
                    },
                  ]}
                >
                  <Input type={'number'} placeholder="Enter Mobile Number" />
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
                  <Select placeholder='Select Blood Group'>
                    {bloodGroupOptions.map((option, index) => {
                      return <Select.Option value={option} key={index}>{option}</Select.Option>
                    })}
                  </Select>
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
                    {qualificationOptions.map((option, index) => {
                      return <Select.Option value={option} key={index}>{option}</Select.Option>
                    })}
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
                  <Select placeholder="Select" onChange={onMartialStatusChange}>
                    {martialStatusOptions.map((option, index) => {
                      return <Select.Option value={option} key={index}>{option}</Select.Option>
                    })}
                  </Select>
                </Form.Item>
              </div>
            </div>
            <Form.Item
              label="Anniversary Date"
              name="anniversary"
              dependencies={['maritalStatus']}
              rules={[
                {
                  required: true,
                  message: "Please select date",
                  type: "date",
                }
              ]}
              hidden={hideAnniversary}
            >
              <DatePicker placeholder="select date" className="w-100" format={'YYYY-MM-DD'} />
            </Form.Item>
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
            <Form.List name="members">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, ...restField }) => (
                    <div className='row mx-1' key={key}>
                      <Form.Item
                        {...restField}
                        name={[name, "relationId"]}
                        rules={[
                          {
                            required: true,
                            message: "Please enter member idhusband",
                          },
                        ]}
                        className='col-5'
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
                        className='col-5 ms-1'
                      >
                        <Select placeholder='Select Relation'>
                          {relationsOptions.map((option, index) => {
                            return <Select.Option value={option} key={index}>{option}</Select.Option>
                          })}
                        </Select>
                      </Form.Item>

                      <MinusCircleOutlined onClick={() => remove(name)} className='col-1 mt-2' />
                    </div>
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