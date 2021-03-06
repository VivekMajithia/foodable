import React from "react"
import {GoogleMap,withScriptjs, withGoogleMap} from "react-google-maps"

function Map(){
    return (
        <GoogleMap 
        defaultZoom= {10} 
        defaultCenter={{lat:51.534740, lng:-0.468640}} />

       
    );
    
} 


const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <MapWrapped
        googleMapURL = {'https://maps.googleapis.com/maps/api/js?key=AIzaSyATGqE71pE34NOXtN-DIyAmlp3Hy2GCHVY&libraries=places$'}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}