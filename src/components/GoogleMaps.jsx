import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;


const SimpleMap  = (props) => {
  const [state, setState] = useState({
    center: {
      lat: props.data,
      lng: props.data2,
    },
    zoom: 10,
  });
  console.log(props.data);
  console.log(props.data2);
  useEffect(() => {
    setState ({
      center: {
        lat: props.data,
        lng: props.data2,
        
      },
      zoom: 10,
      
    });
  }, []);
  return (
    <div>
      <div style={{ height: "60vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDvkUWlipNFPjtnd19C4Q2T3JJN4ZgRuGQ" }}
          defaultCenter={state.center}
          defaultZoom={state.zoom}
        >
          <AnyReactComponent
            lat={props.data}
            lng={props.data2}
            text={props.data3}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};
export default SimpleMap;