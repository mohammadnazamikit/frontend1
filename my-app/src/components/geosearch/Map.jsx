/*  import React, { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import SearchBox from "./SearchBox";

function Map1() {
  const [destination, setDestination] = useState(null);
  const [walkingTime, setWalkingTime] = useState(10);

  const handleSearch = (result) => {
    setDestination(result);
  };

  return (
    <div>
      <SearchBox onSearch={handleSearch}  />
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>
    </div>
  );
}

export default Map1; */
