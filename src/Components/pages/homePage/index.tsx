import {FC,useEffect,useState} from 'react';
import NewsTicker from "react-advanced-news-ticker";
import people from '../../../assets/people.png';
import { getRequest } from '../../../services/apiHelperService';
import LoadingService from '../../../services/loadingService';
import AddsSlider from './AddsSlider';


const HomeComponent: FC = () => {

  const [feeds, setFeeds] = useState<{ feedsList: any[], loading: boolean}>({
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
                    <img src={people} alt="peoples" />
                </div>
                <div className='col-md-6 d-flex flex-column justify-content-center align-items-center'>
                    <div className='fw-light mb-3 fs-3'>Feeds</div>
                    { !feeds.loading ? <NewsTicker maxRows={5} rowHeight={30} className="newsList">
                      {feeds?.feedsList?.map((feed:any, index:number) => {
                        return <div key={index}>
                          <a href={feed?.link}>{feed?.description}</a>
                        </div>
                      })}
                    </NewsTicker> : <LoadingService/>}
                </div>
            </div>
        <AddsSlider />
    </div>
  )
}

export default HomeComponent;