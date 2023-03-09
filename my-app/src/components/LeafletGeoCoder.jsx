import React, { useState } from "react";
import { useEffect } from "react";
import L from "leaflet";
import { useMap } from "react-leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
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

const LeafletGeoCoder = () => {
  const map = useMap();
  useEffect(() => {
    L.Control.geocoder({
      defaultMarkGeocode: false,
    })
      .on("markgeocode", function (e) {
        var latlng = e.geocode.center;
        L.marker(latlng).addTo(map).bindPopup(e.geocode.name).openPopup();
        map.fitBounds(e.geocode.bbox);
      })
      .addTo(map);
  }, []);
  return null;
};
const defaultIcon = L.icon({
  iconUrl: symbol,
  iconSize: [25, 40],
});
L.Marker.prototype.options.icon = defaultIcon;
export default LeafletGeoCoder;
