import { Button, Col, Form, Input, Row, Space } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import React, { FC } from 'react';
import Lottie from 'lottie-react';
import registrationLottie from '../../../assets/register.json';
import { Link } from 'react-router-dom';

const index: FC = () => {

  const onFinish = (values: any) => {
    console.log(values);
  }

  return (
    <React.Fragment>
      <Row>
        <Col lg={12}>
          <Form
            onFinish={onFinish}
          >
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Please input your Email!', type: 'email' }]}
            >
              <Input prefix={<UserOutlined />} placeholder="email" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your Password!' }]}
            >
              <Input
                prefix={<LockOutlined />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Log in
              </Button>
              Or <Link to={'../register'}>register now!</Link>
            </Form.Item>
          </Form>
        </Col>
        <Col lg={12}>
          <Lottie animationData={registrationLottie} loop={false} />
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default index;