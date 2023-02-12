import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
/*
* Use this component as a launching-pad to build your functionality.
*
*/
export default class YourComponent extends Component {

  render() {
    return (
      <div style={divStyle}>
		  <h1> Put your solution here!</h1>
      <div>
      <GoogleMapReact
      style={{height:'10px', with:'10px' }}
      zoom={10}
      center={{
        lat:19.428496445548557,
        lng: -99.1617692489653,
      }}
      />
      </div>
      </div>
      
    );
  }
}

var divStyle = {
  border: 'red',
  borderWidth: 2,
  borderStyle: 'solid',
  padding: 20
};