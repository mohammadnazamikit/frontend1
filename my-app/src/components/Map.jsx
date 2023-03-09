import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { icon } from "leaflet";
import { Component, useState } from "react";
import L from "leaflet";
import symbol from "../images/marker.png";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import LeafletGeoCoder from "./LeafletGeoCoder";
import LeafletRoutingMachine from "./leafletroutingmachine";

class Map extends Component {
  render() {
    return (
      <div className="d-flex m-2 justify-content-center">
        <MapContainer
          center={[49.006889, 8.403653]}
          zoom={13}
          scrollWheelZoom={true}
          className="ms-5"
          style={{ height: "50vh", width: "200vh" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">Mohammad jan Nazami </a> contributors'
            url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=c4pHdOKyJpGH4HutVoHO"
          />
          {/*  <LeafletGeoCoder /> */}
          {/* <LocationMarker /> */}
          <LeafletRoutingMachine />
        </MapContainer>
      </div>
    );
  }
}

export default Map;
