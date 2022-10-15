import { FC, useState } from 'react';
import Lottie from 'lottie-react';
import registrationLottie from '../../../assets/register.json';
import { Button} from 'antd';
import { getRequest, patchRequest, postRequest } from '../../../services/apiHelperService';
import { openNotification } from '../../../services/notificationService';
import { useDispatch} from 'react-redux';
import { loggedInTrue } from '../../app/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { pushUserDetails, updateDownloadAccess, updateMembers } from '../../app/slices/userSlice';
import { AxiosError } from 'axios';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import OTPInput, { ResendOTP } from 'otp-input-react';
import React from 'react';

const LoginComponent: FC = () => {

  const [step, setStep] = useState<string>('otp');
  const [phoneNumber, setPhoneNumber] = useState<string>();
  const [OTP, setOTP] = useState<number>();
  const [otpAttempted, setOtpAttempted] = useState<number>(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentTime = new  Date();

  const onFinish = (values: any) => {
    postRequest('/login', values).then((res:any) => {
      let allowedDownloadDate = new Date(res?.downloadsAllowed?.time);
      let members: object[] = res?.members;
      dispatch(pushUserDetails(res));
      openNotification('Logged In');
      dispatch(loggedInTrue());
      if (allowedDownloadDate) {
        const msBetweenDates = Math.abs(allowedDownloadDate.getTime() - currentTime.getTime());
        // 👇️ convert ms to hours                  min  sec   ms
        const hoursBetweenDates = msBetweenDates / (60 * 60 * 1000);
        if(hoursBetweenDates > 24){
          dispatch(updateDownloadAccess({ allowed: false }));
          patchRequest('/members', res?.id, { downloadsAllowed: { allowed: false } });
        }
      }
      if(members){
        let newMemberArray: object[] = [];
        members.map(async (member:any) => {
          await getRequest('/members', { filter: { where: { uid: member.relationId } } }).then((res:any) => {
            var exists: object[] = res;
            if(exists.length > 0){
              newMemberArray.push(member);
            }
          });
        });
        dispatch(updateMembers(newMemberArray));
        patchRequest('/members', res?.id, { members: newMemberArray });
      }
      navigate('/', { replace: true });
    }).catch((err : AxiosError) => {
      let error:any = err.response?.data;
      openNotification(error.error.message);
    })
  }

  const verifyPhoneNumber = (mobile: string): boolean => {
    return isValidPhoneNumber(mobile);
  }

  const sendOtp = (mobile: string) => {
    if(verifyPhoneNumber(mobile)){
      postRequest(`/otp-login/${mobile}`).then(res => {
          if(res.userNotFound)
            return openNotification('User Not Found');
          openNotification(res.message);
          setStep('otp-verification');
      })
    }
    else
      openNotification('Not a valid phone number');
  }

  const resendOtp = () => {
    if (otpAttempted >= 3)
      openNotification('Too many Attepmts', 'Please try again later');
    else
      postRequest(`/otp-send/${phoneNumber}`).then(res => {
        openNotification(res.message);
        setOtpAttempted(otpAttempted + 1);
      })
  }

  const verifyOtp = (otp: number) => {
    postRequest(`/otp-verification/${phoneNumber}/${otp as number}`).then(res => {
      if(res.varified){
        openNotification('Verification successful');
        onFinish({ mobile: phoneNumber });
      }
      else
        openNotification('Invalid OTP')
    })
  }

  const renderButton = (buttonProps: any) => {
    return (
      <Button disabled={otpAttempted >= 3} className='mt-4' {...buttonProps}>
        {buttonProps.remainingTime !== 0 ? `Please wait for ${buttonProps.remainingTime} sec` : "Resend"}
      </Button>
    );
  };
  const renderTime = () => React.Fragment;

  

  return (
    <div className='container my-5'>
      <div className='row align-items-center'>
        <div className='col-md-6'>
          {step === 'otp' ? 
          <>
              <PhoneInput
                placeholder="Enter phone number"
                value={phoneNumber}
                onChange={setPhoneNumber} 
                defaultCountry='IN'
                />
              <div className='text-end'>
              <Button className='mt-4' onClick={() => sendOtp(phoneNumber as string)}>Send OTP</Button>
              <span>&nbsp;or&nbsp;</span>
              <Button className='mt-4' onClick={() => navigate('/auth/register') }>Register</Button>
              </div>
          </> 
          : 
          <div className='d-flex align-items-center flex-column '>
            <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={4} otpType="number" disabled={false} />
            <div className='d-flex align-items-center'>
              <ResendOTP onResendClick={() => resendOtp()} renderButton={renderButton} renderTime={renderTime} />
              <Button className='mt-4 ms-3' onClick={() => verifyOtp(OTP as number)}>Verify OTP</Button>
            </div>
          </div> 
          }
        </div>
        <div className='col-md-6'>
          <Lottie animationData={registrationLottie} loop={false} />
        </div>
      </div>
    </div>
  )
}

export default LoginComponent;