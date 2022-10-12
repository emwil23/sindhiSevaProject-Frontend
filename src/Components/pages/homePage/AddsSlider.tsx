import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import ReactPlayer from 'react-player';
import { deleteRequest, getRequest } from "../../../services/apiHelperService";
import LoadingService from "../../../services/loadingService";


function AddsSlider() {

    const [state, setState] = useState<{ videoUrl?: string, loading?: boolean}>({
        videoUrl: '',
        loading: true
    });

    const [adsState, setAdsSate] = useState<{ adsData: any[], loading?: boolean }>({
        adsData: [],
        loading: true
    })

    useEffect(() => {
        getRequest('/cover-video').then(res => {
            setState({
                videoUrl: res[0].videoUrl,
                loading: false
            })
        });
        getRequest('/ads').then((res:any[]) => {
            // eslint-disable-next-line
            var newAds = res.filter((items => {
                var date = new Date(items.expireDate);
                if(date.getUTCDate() > new Date().getUTCDate()) return items;
            }));
            setAdsSate({
                adsData: newAds,
                loading: false
            })
            // eslint-disable-next-line
            var oldAds = res.filter((item) => {
                var date = new Date(item?.expireDate);
                if(date.getUTCDate() < new Date().getUTCDate()) return item;
            })
            if(oldAds.length){
                oldAds.map((item) => deleteRequest('/ads', item?.id))
            }
        })
    }, [])

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            // slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            // slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            // slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <div className='container'>
            { state.loading ? <LoadingService /> : 
                <div className='mx-5 videoPlayer my-5'>
                <div className='shadow rounded'>
                        <ReactPlayer width={'100%'} url={state?.videoUrl}/>
                </div>
            </div> } 
            <Carousel className='mycarosal my-5'
                transitionDuration={100}
                infinite={true}
                autoPlaySpeed={3000}
                // centerMode={true}
                autoPlay={true}
                responsive={responsive}>
                { adsState.loading ? <LoadingService /> : 
                    adsState.adsData?.length ? adsState.adsData.map((data:any, index:number) => {
                        return <div key={index} className="card mx-2" style={{ cursor: 'pointer' }} title={`${data?.redirectUrl}`} onClick={() => window.open(`${data?.redirectUrl}`, '_blank')}>
                        <div className="card-body">
                            <img className="card-img" alt="" src={`${data?.imageUrl}`} height="200px" width="600px" />
                            <div className="card-text">
                                <p>
                                    {data?.description}
                                </p>
                            </div>
                        </div>
                    </div> 
                    }) : <h4 className="text-center">Contact Admin to post Advertisments</h4>
                }
            </Carousel>
        </div>
    )
}

export default AddsSlider;