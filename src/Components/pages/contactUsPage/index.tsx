import { UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import mapboxgl from 'mapbox-gl';
import { useEffect, useRef, useState } from "react";

mapboxgl.accessToken = 'pk.eyJ1IjoiZXdpbGx5IiwiYSI6ImNsNnYxMncyaTAyNjUzZG1lMzFoOWJtcWsifQ.MwTeNszMhkGiCzPgr_zzYA';

const ContactUsComponent = () => {

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(77.598391);
  const [lat] = useState(13.050423);
  const [zoom] = useState(17);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });
  });

  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <Form layout="vertical">
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your Email!",
                  type: "email",
                },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="email" />
            </Form.Item>
            <Form.Item
              label="Message"
              name="message"
              rules={[
                {
                  required: true,
                  message: "Please input your message!",
                  type: "string",
                },
              ]}
            >
              <TextArea rows={3} placeholder="Enter your messsage" />
            </Form.Item>
            <div>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  SUBMIT
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
        <div className="col-md-6" >
          <div ref={mapContainer} className="map-container" />
        </div>
      </div>
    </div>
  );
};

export default ContactUsComponent;
