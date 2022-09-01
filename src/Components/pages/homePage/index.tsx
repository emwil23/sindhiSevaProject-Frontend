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
                        <div><a href='https://unsplash.com/'>Unsplash where to get all the lastest stuff.</a></div>
                        <div>Get the latest updates here.</div>
                        <div>Praesent ornare nisl lorem, ut condimentum lectus gravida ut.</div>
                        <div>Join uor community.</div>
                        <div>Condimentum lectus gravida ut.</div>
                        <div><a href='https://www.google.com/maps/place/Sindhi+College/@13.0502188,77.59841,15z/data=!4m5!3m4!1s0x0:0xda119e2788404669!8m2!3d13.0502188!4d77.59841'>Find us here</a></div>
                        <div>Nunc ultrices tortor eu massa placerat posuere.</div>
                    </NewsTicker>
                </div>
            </div>
        <AddsSlider />
    </div>
  )
}

export default HomeComponent;