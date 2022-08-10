import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { FC } from 'react';
import Lottie from 'lottie-react';
import registrationLottie from '../../../assets/register.json';
import { Link } from 'react-router-dom';
import { Button, Form, Input } from 'antd';

const index: FC = () => {

  const onFinish = (values: any) => {
    console.log(values);
  }

  return (
    <div className='container my-5'>
      <div className='row align-items-center'>
        <div className='col-md-6'>
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
              rules={[{ required: true, message: '', min: 6}]}
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
              &nbsp;Or&nbsp; <Link to={'../register'}>register now!</Link>
            </Form.Item>
          </Form>
        </div>
        <div className='col-md-6'>
          <Lottie animationData={registrationLottie} loop={false} />
        </div>
      </div>
    </div>
  )
}

export default index;