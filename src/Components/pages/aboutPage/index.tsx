import { Avatar, Card } from "antd";
import Meta from "antd/lib/card/Meta";
import "./index.scss";

const AboutComponent = () => {
  return (
    <div className="container">
      <h1 className="text-center my-md-3" style={{ color: "#096dd9" }}>
        Strength is Life, Weakness is Death.
        <br></br>
        <span className="fw-light" style={{ color: "#69c0ff" }}>
          Expansion is Life, Contraction is Death.
        </span>
      </h1>
      <p className="fs-6 text-center my-md-5">
        Sindhi Seva Samiti was founded in 1956 as a social organization by the
        Sindhis of Bangalore to serve the Sindhi community in Bangalore and also
        act as a window to integrate with the local population. Starting with a
        Darbar in the centre of the City, the Sindhi Seva Samiti is today a
        centre for the Sindhis of Bangalore, to get together on various Social
        and Religious occasions. The Samiti has also laid emphasis in the field
        of Education and has a number of Educational institutions with a total
        strength of around 6000 students.
      </p>
      {/* card  */}
      <div className="text-center mb-3 ">
        <span className="fs-1 me-2" style={{ color: "#0050b3" }}>
          Our
        </span>
        <span className="fs-1" style={{ color: "#69c0ff" }}>
          Service
        </span>
      </div>

      <div className="row">
        <div className="col-md-3">
          <Card
            hoverable={true}
            className="card"
            cover={
              <img
                alt="Education"
                src="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2019/11/23171737/Modern-Education.png"
              />
            }
          >
            <Meta
              className="meta"
              title="Education"
              description="    To establish, maintain, develop and aid Schools, Colleges, Polytechnics and other educational institutions, including vocational training centres"
            />
          </Card>
        </div>

        <div className="col-md-3">
          <Card
            hoverable={true}
            className="card"
            cover={
              <img
                alt="Eye Donation"
                src="https://d1avenlh0i1xmr.cloudfront.net/e49deb5a-f290-423c-81ed-3061e95095ac/eye-donation.jpg"
              />
            }
          >
            <Meta
              className="meta"
              title="Eye Donation"
              description="Working constantly and diligently is this subcommittee in convincing the families of departed souls to donate eyes and help people from darkness to light."
            />
          </Card>
        </div>
        <div className="col-md-3">
          <Card
            hoverable={true}
            className="card"
            cover={
              <img
                alt="Scholarships"
                src="https://uniteduniversity.edu.in/images/scholarships.png"
              />
            }
          >
            <Meta
              className="meta"
              title="Scholarships"
              description="Sindhi Seva Samiti  have continued their main ideology of the service of RETURN by liberally granting scholarships to needy and deserving students regardless of religion or caste."
            />
          </Card>
        </div>

        <div className="col-md-3">
          <Card
            hoverable={true}
            className="card"
            cover={
              <img
                alt="Needy Family Welfare"
                src="https://cf.ltkcdn.net/save/images/std-xs/208280-340x227-paperfamily.jpg"
              />
            }
          >
            <Meta
              className="meta"
              title="Needy Family Welfare"
              description="Our Samiti distributes Wheat to 103 needy and under-privileged families every month.
              Family welfare includes not only planning of birth, but they welfare of wholes family."
            />
          </Card>
        </div>
      </div>

      <div className="text-center my-3 ">
        <span className="fs-1 me-2" style={{ color: "#0050b3" }}>
          president
        </span>
        <span className="fs-1" style={{ color: "#69c0ff" }}>
          message
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
