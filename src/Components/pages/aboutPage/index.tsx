import { AntDesignOutlined } from "@ant-design/icons";
import { Avatar, Card } from "antd";
import Meta from "antd/lib/card/Meta";
import React from "react";
import "./index.scss";
const AboutComponent = () => {
  return (
    <div>
      <div className="p-3">
        <h1 className="text-center">Sindhi Seva Samiti</h1>
        <p className="fs-4 mx-5 text-center">
          Sindhi Seva Samiti was founded in 1956 as a social organization by the
          Sindhis of Bangalore to serve the Sindhi community in Bangalore and
          also act as a window to integrate with the local population. Starting
          with a Darbar in the centre of the City, the Sindhi Seva Samiti is
          today a centre for the Sindhis of Bangalore, to get together on
          various Social and Religious occasions. The Samiti has also laid
          emphasis in the field of Education and has a number of Educational
          institutions with a total strength of around 6000 students.
        </p>
      </div>
      {/* card  */}
      <div className="row align-items-center">
        <div className="col md-3 mx-5 justify-content-center">
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

        <div className="col md-3 mx-5 justify-content-center">
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
        <div className="col md-3 mx-5 justify-content-center">
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

        <div className="col md-3 mx-5 justify-content-center">
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

      <div className="row mx-5 my-5 align-items-center">
        <div className="col-md-6">
          <div className="text-center">
            <h3>
              "Sri Parmanand Khatter Sindhi Council of India- National
              President, Sri Shrikanth Bhatia Fmr Vice-Chairman NCPSL, Sri
              Sudesh Sachdev Chairman-Sindhi Academy, Sri Shyam Jumani Past
              President- Sindhi Federation of South India and Sri J C Prakash
              President of Sindhi Federation of South India"
            </h3>
          </div>
        </div>
        <div className="col-md-6 text-center">
          <Avatar
            size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
            // icon={<AntDesignOutlined />}
            src="http://sindhisevasamiti.org/wp-content/uploads/2015/12/president-photo-new.jpg"
          />
          <div> MADAN DOULATRAM</div>
        </div>
      </div>
    </div>
  );
};
export default AboutComponent;
