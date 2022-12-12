import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { icon } from "leaflet";

const Map = () => {
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
        <Marker position={[49.00968546521465, 8.423712538515858]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
