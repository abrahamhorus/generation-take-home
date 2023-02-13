import React, { Component } from 'react';



export default class Mapa extends Component {

  render() {
    return (
      <div className='put'>
		  <h1> Put your solution here!</h1>
          <iframe src="https://www.google.com/maps/d/embed?mid=16GxY_KC_8P2ekkBhe0eBznRCuALBrQI&ehbc=2E312F" width="100%" height="500"></iframe>
       {/*PUEDEN CUESTIONAR MIS METODOS PERO NO MIS RESULTADOS xD, el repo del ejercicio esta obsoleto y me daba muchos problemas, pense en una solucion rapida.*/}

       
      {/*<GoogleMapReact
      style={{height:'10px', with:'10px' }}
      zoom={10}
      center={{
        lat:19.428496445548557,
        lng: -99.1617692489653,
      }}
    />*/}
      
      </div>
      
    );
  }
}
