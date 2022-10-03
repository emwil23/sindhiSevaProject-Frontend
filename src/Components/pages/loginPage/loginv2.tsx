import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { FC, useState } from 'react';
import Lottie from 'lottie-react';
import registrationLottie from '../../../assets/register.json';
import { Link } from 'react-router-dom';
import { Button, Form, Input, Radio } from 'antd';
import { postRequest } from '../../../services/apiHelperService';
import { openNotification } from '../../../services/notificationService';
import { useDispatch } from 'react-redux';
import { loggedInTrue } from '../../app/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { pushUserDetails } from '../../app/slices/userSlice';
import { AxiosError } from 'axios';
import { useForm } from 'antd/lib/form/Form';
import CountryPhoneInput, { ConfigProvider } from 'antd-country-phone-input';
import en from 'world_countries_lists/data/countries/en/world.json';

const LoginComponent: FC = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [myForm] = useForm();
  const [passwordDisabled, setPasswordDisabled] = useState<boolean>(false);

  const onFinish = (values: any) => {
    console.log(values);
    
    // postRequest('/login', values).then(res => {
    //   dispatch(pushUserDetails(res));
    //   openNotification('Logged In');
    //   dispatch(loggedInTrue());
    //   navigate('/', { replace: true });
    // }).catch((err: AxiosError) => {
    //   let error: any = err.response?.data;
    //   openNotification(error.error.message);
    // })
  }

  const disablePassword = (): any => {
    myForm?.getFieldValue("isOtp") ? setPasswordDisabled(true) : setPasswordDisabled(false);
  }

  return (
    <div className='container my-5'>
      <div className='row align-items-center'>
        <div className='col-md-6'>
          <Form
            onFinish={onFinish}
            form={myForm}
            onValuesChange={disablePassword}
          >
            <Form.Item
              name="mobile"
            >
              <ConfigProvider locale={en}>
                <CountryPhoneInput required={true} />
              </ConfigProvider>
            </Form.Item>
            <Form.Item
              name="isOtp"
              initialValue={false}
            >
              <Radio.Group>
                <div>
                  <Radio value={true}>OTP</Radio>
                  <Radio value={false}>Password</Radio>
                </div>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: false, message: 'Please Input your password!' },
              () => ({
                validator(_, value: string) {
                  if (!value || value.length >= 6) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Password length should be more than 6!'))
                }
              })
              ]}
              hidden={passwordDisabled}
            >
              <Input.Password
                prefix={<LockOutlined />}
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

export default LoginComponent;