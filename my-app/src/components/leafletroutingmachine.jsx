import React from "react";
import { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useMap } from "react-leaflet";

const LeafletRoutingMachine = () => {
  const map = useMap();
  useEffect((e) => {
    console.log(e);
    L.Routing.control({
      waypoints: [L.latLng(57.74, 11.94), L.latLng(57.6792, 11.949)],
      lineOptions: {
        styles: [
          {
            color: "blue",
            weight: 1,
          },
        ],
      },
      geocoder: L.Control.Geocoder.nominatim(),
    }).addTo(map);
    console.log(L.Control.Geocoder.nominatim());
  });
  return null;
};
export default LeafletRoutingMachine;
