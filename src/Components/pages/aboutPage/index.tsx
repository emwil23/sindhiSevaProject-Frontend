import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import "./index.scss";

const AboutComponent = () => {
  return (
    <div className="container">
      <p className="text-center fs-2 mx-5 my-4">
        <span style={{ color: "#0050b3" }}>The Sindhi Federation of Bangalore is an apex body comprising of 13 Associations.</span><br/> 
        <span className="fw-light" style={{ color: "#69c0ff" }}>The primary objectives of the federation are</span>
      </p>
      <div className="row">
        <div className="col-md-3">
          <Card
            hoverable={true}
            className="card"
            cover={
              <img height={200}
                alt="PROMOTE & PROTECT"
                src="https://unsplash.com/photos/Zyx1bK9mqmA/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY1NjQwNjkx&force=true&w=640"
              />
            }
          >
            <Meta
              className="meta"
              title="PROMOTE & PROTECT"
              description="To promote & protect the interests of the Sindhi Community at large, by the Federation and/or through its Member Associations."
            />
          </Card>
        </div>

        <div className="col-md-3">
          <Card
            hoverable={true}
            className="card"
            cover={
              <img height={200}
                alt="HELP VICTIMS"
                src="https://unsplash.com/photos/ZU94isADXDs/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8OXx8aGVscGluZyUyMHZpY3R1bXxlbnwwfHx8fDE2NjU2NDQ3OTU&force=true&w=640"
              />
            }
          >
            <Meta
              className="meta"
              title="HELP VICTIMS"
              description="To assist victims of any Natural Calamity by providing relief in cash/kind/by participating in rehabilitation works Institutions doing such work."
            />
          </Card>
        </div>
        <div className="col-md-3">
          <Card
            hoverable={true}
            className="card"
            cover={
              <img height={200}
                alt="ENCOURAGE FELLOWSHIP"
                src="https://unsplash.com/photos/TZCppMjaOHU/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY1NjQ0ODkz&force=true&w=640"
              />
            }
          >
            <Meta
              className="meta"
              title="ENCOURAGE FELLOWSHIP"
              description="To celebrate festivals and organize cultural functions which promote Fellowship, Sindhi Art & Culture."
            />
          </Card>
        </div>

        <div className="col-md-3">
          <Card
            hoverable={true}
            className="card"
            cover={
              <img height={200}
                alt="HONORING SINDHI'S"
                src="https://unsplash.com/photos/nJTcfvqcJKc/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY1NjQ0OTY4&force=true&w=640"
              />
            }
          >
            <Meta
              className="meta"
              title="HONORING SINDHI'S"
              description="To honor any Sindhi Person of Bangalore for his/her outstanding performance in the field of Social Service to the Sindhi Community."
            />
          </Card>
        </div>
      </div>
    </div>
  );
};
export default AboutComponent;
