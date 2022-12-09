import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import React from "react";
import "leaflet/dist/leaflet.css";
import "react-bootstrap";

const Map = (props) => {
  return (
    <MapContainer
      style={{
        height: "60vh",
        width: "100vh",
      }}
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap </a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
