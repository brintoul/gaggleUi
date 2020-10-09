import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import GaggleEvent from './GaggleEvent.jsx';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 32.7157,
      lng: -117.161
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCPN9XdtzLoDC38pUETeH19QYs30isZlT8' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <GaggleEvent lat={32.7157} lng={-117.161} text='Stuff' />
          <GaggleEvent lat={32.7257} lng={-117.161} text='Thing' />
          {/* <AnyReactComponent
            lat={32.7157}
            lng={-117.161}
            text="My Marker"
          /> */}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
