import { Spin } from 'antd';

const loadingService = () => {
  return (
    <div className='text-center'>
        <Spin />
    </div>
  )
}

export default loadingService;