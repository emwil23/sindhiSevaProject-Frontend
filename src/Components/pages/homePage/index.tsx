import {FC} from 'react';
import NewsTicker from "react-advanced-news-ticker";
import people from '../../../assets/people.png';
import AddsSlider from './AddsSlider';

const HomeComponent: FC = () => {
  return (
    <div className='container py-4'>
      <div className='row'>
                <div className='col-md-6'>
                    <img src={people} alt="peoples" />
                </div>
                <div className='col-md-6 d-flex flex-column justify-content-center align-items-center'>
                    <div className='fw-light mb-3 fs-3'>Feeds</div>
                    <NewsTicker maxRows={5} rowHeight={30} className="newsList">
                        <div>Etiam imperdiet volutpat libero eu tristique.</div>
                        <div>Curabitur porttitor ante eget hendrerit adipiscing.</div>
                        <div>Praesent ornare nisl lorem, ut condimentum lectus gravida ut.</div>
                        <div>Praesent ornare nisl lorem, ut condimentum lectus gravida ut.</div>
                        <div>Praesent ornare nisl lorem, ut condimentum lectus gravida ut.</div>
                        <div>Praesent ornare nisl lorem, ut condimentum lectus gravida ut.</div>
                        <div>Praesent ornare nisl lorem, ut condimentum lectus gravida ut.</div>
                        <div>Nunc ultrices tortor eu massa placerat posuere.</div>
                    </NewsTicker>
                </div>
            </div>
        <AddsSlider />
    </div>
  )
}

export default HomeComponent;