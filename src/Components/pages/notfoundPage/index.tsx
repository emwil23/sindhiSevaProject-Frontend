import {FC} from 'react';
import Lottie from 'lottie-react';
import NotFound404Image from '../../../assets/NotFound404.json';
import { Button, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

const NotFoundComponent:FC = () => {

  const navigate = useNavigate();

  return (
    <div className='container'>
      <Typography className='text-center fs-1 fw-light mt-3'>404! Page Not Found</Typography>
      <div className='row'>
      <Lottie animationData={NotFound404Image} className='col-md-6' loop={false} style={{ height: '500px'}} />
      <div className='col-md-6 d-flex align-items-center justify-content-center'>
        <Button type='primary' onClick={() => navigate('/')}>TAKE ME TO THE HOMEPAGE</Button>
      </div>
      </div>
    </div>
  )
}

export default NotFoundComponent