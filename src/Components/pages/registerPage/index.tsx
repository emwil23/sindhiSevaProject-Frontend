import { Col, Row } from 'antd';
import  React, {FC} from 'react';
import Lottie from 'lottie-react';
import registrationLottie from '../../../assets/register.json';

const index: FC = () => {
  return (
    <React.Fragment>
      <Row>
        <Col lg={12}>
          Form for Registration
        </Col>
        <Col lg={12}>
          <Lottie animationData={registrationLottie} loop={false} />
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default index