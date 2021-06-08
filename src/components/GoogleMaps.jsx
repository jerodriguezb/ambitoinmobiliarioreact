import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;




const SimpleMap  = (props) => {
  const [state, setState] = useState({
    center: {
      lat:  -26.83048965,
      lng: -65.2038600956889,
      // lat: props.data,
      // lng: props.data2,

      loading: true,
    },
    zoom:8,
  });
  console.log(props.data);
  console.log(props.data2);
  // useEffect(() => {
  //   setState ({
  //     center: {
  //       lat: props.data,
  //       lng: props.data2,
  //       loading: false,
  //     },
  //     zoom:8,
      
  //   });
  // }, []);
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

