// import mapboxgl from 'mapbox-gl';
// // import { useEffect, useRef, useState } from "react";
// // import geoJson from './geoJson.json';
// import { MapBoxKeys } from "./keys";

// mapboxgl.accessToken = MapBoxKeys.API_KEY;
// //  The following is required to stop "npm build" from transpiling mapbox code.
// // notice the exclamation point in the import.
// // @ts-ignore
// // eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
// mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

const ContactUsComponent = () => {

  // const mapContainer = useRef(null);
  // const [lng] = useState(77.598391);
  // const [lat] = useState(13.050423);
  // const [zoom] = useState(13);

  // useEffect(() => {
  //   const map = new mapboxgl.Map({
  //     container: mapContainer.current,
  //     style: 'mapbox://styles/mapbox/streets-v11',
  //     center: [lng, lat],
  //     zoom: zoom
  //   });
  //   // Create default markers
  //   geoJson.features.map((feature) =>
  //     new mapboxgl.Marker().setLngLat(feature.geometry.coordinates).addTo(map)
  //   );

  //   // Clean up on unmount
  //   return () => map.remove();
  //   // eslint-disable-next-line
  // }, []);

  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="text-center fs-5" >
            <span className="" >Email: </span>
            <span className="text-secondary" >sindhisederationofbangalore@gmail.com</span>
          </div>
          <div className="text-center fs-5 mt-4" >
            <span className="" >Phone: </span>
            <span className="text-secondary" >+91 9449364010</span>
          </div>
        </div>
        {/* <div className="col-md-6" >
          <div className="fw-light fs-4">Where to find us ?</div>
          <div ref={mapContainer} className="map-container" />
        </div> */}
      </div>
    </div>
  );
};

export default ContactUsComponent;
