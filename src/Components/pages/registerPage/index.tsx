import  {FC} from 'react';
import Lottie from 'lottie-react';
import registrationLottie from '../../../assets/register.json';

const index: FC = () => {
  return (
    <div className='container my-5'>
      <div className='row align-items-center'>
        <div className='col-md-6'>
          Form for Registration
        </div>
        <div className='col-md-6'>
          <Lottie animationData={registrationLottie} loop={false} />
        </div>
      </div>
    </div>
  )
}

export default index