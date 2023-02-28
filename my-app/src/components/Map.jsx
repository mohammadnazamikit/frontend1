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

function getIcon() {
  return L.icon({
    iconUrl: symbol,
    iconSize: [40],
  });
}

function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position} icon={getIcon()}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

class Map extends Component {
  render() {
    return (
      <div className="d-flex m-5 justify-content-center">
        <MapContainer
          center={[49.006889, 8.403653]}
          zoom={13}
          scrollWheelZoom={true}
          className="ms-5"
          style={{ height: "40vh", width: "100vh" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap </a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationMarker />
        </MapContainer>
      </div>
    );
  }
}

export default Map;
