import { Avatar } from 'antd';
import { FC, useEffect, useState } from 'react';
import NewsTicker from "react-advanced-news-ticker";
import { getRequest } from '../../../services/apiHelperService';
import LoadingService from '../../../services/loadingService';
import AddsSlider from './AddsSlider';


const HomeComponent: FC = () => {

  const [feeds, setFeeds] = useState<{ feedsList: any[], loading: boolean }>({
    feedsList: [],
    loading: true
  });

  useEffect(() => {
    getRequest('/feeds').then(res => {
      setFeeds({ feedsList: res[0].feedsList, loading: false });
    });
  }, []);

  return (
    <div className='container py-4'>
      <div className='row'>
        <div className='col-md-6'>
          <div className="text-center my-3 ">
            <span className="fs-1 me-2" style={{ color: "#0050b3" }}>
              President
            </span>
            <span className="fs-1" style={{ color: "#69c0ff" }}>
              Message
            </span>
          </div>
          <div className="row my-5 align-items-center text-center">
            <div className="col-md-6">
             
              <p className="fw-light fs-6">
                "&nbsp;Sri Parmanand Khatter Sindhi Council of India- National
                President, Sri Shrikanth Bhatia Fmr Vice-Chairman NCPSL, Sri Sudesh
                Sachdev Chairman-Sindhi Academy, Sri Shyam Jumani Past President-
                Sindhi Federation of South India and Sri J C Prakash President of
                Sindhi Federation of South India&nbsp;"
              </p>
            </div>
            <div className="col-md-6">
              {/* <Avatar
                size={100}
                src="https://joeschmoe.io/api/v1/random"
              /> */}
              <div className="mt-3">MADAN DOULATRAM</div>
            </div>
          </div>
        </div>
        <div className='col-md-6'>
          <div className='feedsCard'>
          <div className='fw-light mb-3 fs-3 text-center'>Feeds</div>
          <div className='d-flex justify-content-center'>
          {!feeds.loading ? <NewsTicker maxRows={5} rowHeight={20}>
            {feeds?.feedsList?.map((feed: any, index: number) => {
              return <div key={index}>
                <a href={feed?.link}>{feed?.description}</a>
              </div>
            })} 
          </NewsTicker> : <LoadingService />}
          </div>
          </div>
        </div>
      </div>
      <AddsSlider />
    </div>
  )
}

export default HomeComponent;