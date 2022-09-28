import { Avatar, Card } from "antd";
import Meta from "antd/lib/card/Meta";
import { FC } from "react";
import "./index.scss";

const Associations: FC = () => {
  return  <div className="container my-5">
 
  <div className="row align-items-center g-4">
       <h1 className="text-center my-md-3" style={{ color: "#096dd9" }}>
        Association
      </h1>

    <div className="col-md-6">
    <Card >
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title="Card title"
          description="This is the description"
         
        />
       
      </Card>
    </div>
    <div className="col-md-6">
    <Card >
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title="Card title"
          description="This is the description"
        />
      </Card>
    </div>
    <div className="col-md-6">
    <Card >
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title="Card title"
          description="This is the description"
        />
      </Card>
    </div>
    <div className="col-md-6">
    <Card >
        <Meta
          avatar={<Avatar className="img" src="https://images.pexels.com/photos/1927612/pexels-photo-1927612.jpeg" />}
          title="Card title"
          description="This is the description"
        />
      </Card>
    </div>
    <div className="col-md-6">
    <Card >
        <Meta
          avatar={<Avatar className="img" src="https://joeschmoe.io/api/v1/random" />}
          title="Card title"
          description="This is the description"
        />
      </Card>
    </div>
    <div className="col-md-6">
    <Card >
        <Meta
          avatar={<Avatar className="img" src="https://joeschmoe.io/api/v1/random" />}
          title="Card title"
          description="This is the description"
        />
      </Card>
    </div>
    <div className="col-md-6">
    <Card >
        <Meta
          avatar={<Avatar className="img" src="https://joeschmoe.io/api/v1/random" />}
          title="Card title"
          description="This is the description"
        />
      </Card>
    </div>
    <div className="col-md-6">
    <Card >
        <Meta
          avatar={<Avatar className="img" src="https://joeschmoe.io/api/v1/random" />}
          title="Card title"
          description="This is the description"
        />
      </Card>
    </div>
    <div className="col-md-6">
    <Card >
        <Meta
          avatar={<Avatar className="img" src="https://joeschmoe.io/api/v1/random" />}
          title="Card title"
          description="This is the description"
        />
      </Card>
    </div>
    <div className="col-md-6">
    <Card >
        <Meta
          avatar={<Avatar className="img" src="https://joeschmoe.io/api/v1/random" />}
          title="Card title"
          description="This is the description"
        />
      </Card>
    </div>
    <div className="col-md-6">
    <Card >
        <Meta
          avatar={<Avatar className="img" src="https://joeschmoe.io/api/v1/random" />}
          title="Card title"
          description="This is the description"
        />
      </Card>
    </div>
    <div className="col-md-6">
    <Card >
        <Meta
          avatar={<Avatar className="img" src="https://joeschmoe.io/api/v1/random" />}
          title="Card title"
          description="This is the description"
        />
      </Card>
    </div>
    </div>
    </div>;
};

export default Associations;
