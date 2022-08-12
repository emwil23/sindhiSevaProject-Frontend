import { Avatar, Card } from "antd";
import Meta from "antd/lib/card/Meta";
import "./index.scss";

const AboutComponent = () => {
  return (
    <div className="container">
      <h1 className="text-center fw-light my-md-3">Sindhi Seva Samiti</h1>
      <p className="fs-6 text-center my-md-5">
        Sindhi Seva Samiti was founded in 1956 as a social organization by the
        Sindhis of Bangalore to serve the Sindhi community in Bangalore and
        also act as a window to integrate with the local population. Starting
        with a Darbar in the centre of the City, the Sindhi Seva Samiti is
        today a centre for the Sindhis of Bangalore, to get together on
        various Social and Religious occasions. The Samiti has also laid
        emphasis in the field of Education and has a number of Educational
        institutions with a total strength of around 6000 students.
      </p>
      {/* card  */}
      <div className="row">
        <div className="col-md-3">
          <Card
            hoverable={true}
            className="card"
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Card title" description="this is discription" />
          </Card>
        </div>

        <div className="col-md-3">
          <Card
            hoverable={true}
            className="card"
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Eye Donation" description="this is discription" />
          </Card>
        </div>
        <div className="col-md-3">
          <Card
            hoverable={true}
            className="card"
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Eye Donation" description=" this is discription" />
          </Card>
        </div>

        <div className="col-md-3">
          <Card
            hoverable={true}
            className="card"
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Eye Donation" description="this is discription" />
          </Card>
        </div>
      </div>

      <div className="row my-5 align-items-center text-center">
        <div className="col-md-6">
          <p className="fw-light fs-6">
            "&nbsp;Sri Parmanand Khatter Sindhi Council of India- National
            President, Sri Shrikanth Bhatia Fmr Vice-Chairman NCPSL, Sri
            Sudesh Sachdev Chairman-Sindhi Academy, Sri Shyam Jumani Past
            President- Sindhi Federation of South India and Sri J C Prakash
            President of Sindhi Federation of South India&nbsp;"
          </p>
        </div>
        <div className="col-md-6">
          <Avatar
            size={100}
            src="http://sindhisevasamiti.org/wp-content/uploads/2015/12/president-photo-new.jpg"
          />
          <div className="mt-3">MADAN DOULATRAM</div>
        </div>
      </div>
    </div>
  );
};
export default AboutComponent;
