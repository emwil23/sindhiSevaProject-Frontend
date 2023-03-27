import LogoutOutlined from '@ant-design/icons/lib/icons/LogoutOutlined';
import { Button, Divider, Space } from 'antd';
import { FC } from 'react';
import { useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { currentUser } from '../../app/slices/userSlice';
import { useDispatch } from 'react-redux';
import { loggedInFalse } from '../../app/slices/authSlice';
import { pushUserDetails } from '../../app/slices/userSlice';
import { openNotification } from '../../../services/notificationService';
import pdfFile from './CARNIVAL V3.pdf'; // import the PDF file

const HeaderComponent: FC = () => {

  const userLoggedIn = useSelector((state: any) => state.isLoggedIn.userLoggedIn);
  const userDetails = useSelector(currentUser);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const logoutAction = () => {
    dispatch(loggedInFalse());
    dispatch(pushUserDetails({}));
    openNotification('Logged Out');
  }

  return (
    <header className="d-flex align-items-center justify-content-center justify-content-md-between py-2 mx-2">
      <div className='col-md-4'>
        <Link to={'/'} className='text-dark fw-light fs-5'>Sindhi hello </Link>
      </div>
     

      <Space className='col-md-6' split={<Divider type="vertical" />}>
        <Link to={'/'} className='text-dark'>Home</Link>
        <Link to={'/associations'} className='text-dark'>Associations</Link>
        <Link to={'/reforms'} className='text-dark'>Reforms</Link>
        {userLoggedIn ? <Link to={'/directories'} className='text-dark'>Directories</Link> : null }
        <Link to={'/aboutUs'} className='text-dark'>About</Link>
        <Link to={'/events'} className='text-dark'>Events</Link>
        <Link to={'/events'} className='text-dark'>Events</Link>
        
        </Space>
      

      <div className="col-md-3 text-end">
        <Button type='text' hidden={userLoggedIn} onClick={() => navigate('/auth/login')}>LogIn</Button>
        <Button type='primary' hidden={userLoggedIn} onClick={() => navigate('/auth/register')}>SignUp</Button>
        <Button hidden={!userLoggedIn} onClick={() => navigate('/profile')}>{userDetails?.firstName+' '+userDetails?.lastName}</Button>
        <Button type='text' size='small' title='Logout' hidden={!userLoggedIn} onClick={() => logoutAction()}><LogoutOutlined /></Button>
        <button onClick={handleDownload}>HoJamLo</button> {/* add a button that calls handleDownload when clicked */}
      </div>
    </header>
  )
}

export default HeaderComponent
