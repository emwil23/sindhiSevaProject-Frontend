import { Button, Divider, Space } from 'antd';
import { FC } from 'react';
import { useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
// import { loggedInTrue, loggedInFalse } from '../../app/slices/authSlice';
import { useNavigate } from 'react-router-dom';

const HeaderComponent: FC = () => {

  const userLoggedIn = useSelector((state: any) => state.isLoggedIn.userLoggedIn);
  // const dispatch = useDispatch();
  let navigate = useNavigate();

  return (
    <header className="d-flex align-items-center justify-content-center justify-content-md-between py-2 mx-3">
      <Link to={'/'} className='col-md-4 text-dark fw-light fs-5'>Sindhi Seva Samiti</Link>

      <Space split={<Divider type="vertical" />}>
        <Link to={'/'} className='text-dark'>Home</Link>
        <Link to={'/aboutUs'} className='text-dark'>About</Link>
        <Link to={'/contactUs'} className='text-dark'>ContatctUs</Link>
      </Space>

      <div className="col-md-4 text-end">
        <Button type='text' hidden={userLoggedIn} onClick={() => navigate('/auth/login')}>LogIn</Button>
        <Button type='primary' hidden={userLoggedIn} onClick={() => navigate('/auth/register')}>SignUp</Button>
        <Button hidden={!userLoggedIn}>Logout</Button>
      </div>
    </header>
  )
}

export default HeaderComponent