// import React, { Component } from "react";
// import GoogleMapReact from "google-map-react";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// class SimpleMap extends Component {
//   static defaultProps = {
//     center: {
//       lat: -26.855188,
//       lng: -65.69109,
//     },
//     zoom: 16,
//   };

//   render() {
//     return (
//       // Important! Always set the container height explicitly
//       <div style={{ height: "60vh", width: "100%" }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: "AIzaSyDvkUWlipNFPjtnd19C4Q2T3JJN4ZgRuGQ" }}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//         >
//           <AnyReactComponent
//             lat={-26.855188}
//             lng={-65.69109}
//             text="Propiedad"
//           />
//         </GoogleMapReact>
//       </div>
//     );
//   }
// }

// export default SimpleMap;

import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const SimpleMap = (props) => {
  const [state, setState] = useState({
    center: {
      lat: 1,
      lng: 1,
    },
    zoom: 7,
    band: false,
  });

  console.log(state);

  useEffect(() => {
    setState({
      center: {
        lat: props.data,
        lng: props.data2,
      },

      zoom: props.zoom,
      band: true,
    });
  }, []);

  console.log(state);

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
