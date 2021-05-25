import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;


class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: -26.855188, 
      lng: -65.691090
    },
    zoom: 16
  }
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '60vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyDvkUWlipNFPjtnd19C4Q2T3JJN4ZgRuGQ" }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
          <AnyReactComponent
            lat={-26.855188}
            lng={-65.691090}
            text="Propiedad"
          />
        </GoogleMapReact>
      </div>
    )
  }
}
 
export default SimpleMap