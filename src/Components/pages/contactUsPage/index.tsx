import { UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import mapboxgl from 'mapbox-gl';
import { useEffect, useRef, useState } from "react";
import geoJson from './geoJson.json';
import { MapBoxKeys } from "./keys";

mapboxgl.accessToken = MapBoxKeys.API_KEY;

const ContactUsComponent = () => {

  const mapContainer = useRef(null);
  const [lng] = useState(77.598391);
  const [lat] = useState(13.050423);
  const [zoom] = useState(13);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });
    // Create default markers
    geoJson.features.map((feature) =>
      new mapboxgl.Marker().setLngLat(feature.geometry.coordinates).addTo(map)
    );

    // Clean up on unmount
    return () => map.remove();
    // eslint-disable-next-line
  }, []);

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
          <div className="fw-light fs-4">Where to find us ?</div>
          <div ref={mapContainer} className="map-container" />
        </div>
      </div>
    </div>
  );
};

export default ContactUsComponent;
