import Carousel from "react-multi-carousel";
import ReactPlayer from 'react-player';


function AddsSlider() {
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
            <div className='mx-5 videoPlayer my-5'>
                <div className='shadow rounded'>
                    <div>
                        <ReactPlayer width={'100%'} url='https://www.youtube.com/watch?v=ysz5S6PUM-U'/>
                    </div>
                </div>
            </div>
            <Carousel className='mycarosal my-5'
                transitionDuration={100}
                infinite={true}
                autoPlaySpeed={3000}
                // centerMode={true}
                autoPlay={true}
                responsive={responsive}>
                <div className="card mx-1">
                    <div className="card-body">
                        <img className="card-img" alt="" src='https://unsplash.com/photos/XWl8Pu3HrgY/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjYwNzEwODAw&force=true&w=640' height="200px" />
                        <div className="card-text">
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, qui beatae assumenda voluptates, totam tempora odio modi fugiat iure id.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card mx-1">
                    <div className="card-body">
                        <img className="card-img" alt="" src='https://unsplash.com/photos/XWl8Pu3HrgY/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjYwNzEwODAw&force=true&w=640' height="200px" />
                        <div className="card-text">
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, qui beatae assumenda voluptates, totam tempora odio modi fugiat iure id.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card mx-1">
                    <div className="card-body">
                        <img className="card-img" alt="" src='https://unsplash.com/photos/XWl8Pu3HrgY/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjYwNzEwODAw&force=true&w=640' height="200px" />
                        <div className="card-text">
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, qui beatae assumenda voluptates, totam tempora odio modi fugiat iure id.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card mx-1">
                    <div className="card-body">
                        <img className="card-img" alt="" src='https://unsplash.com/photos/XWl8Pu3HrgY/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjYwNzEwODAw&force=true&w=640' height="200px" />
                        <div className="card-text">
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, qui beatae assumenda voluptates, totam tempora odio modi fugiat iure id.
                            </p>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}

export default AddsSlider;