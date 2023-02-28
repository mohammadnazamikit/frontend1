/*  import { useEffect, useState } from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker } from "react-leaflet"; // Your API key here
import { Routing } from "leaflet-routing-machine";

const startPoint = [40.73061, -73.935242]; // Starting point coordinates
const endPoint = [40.748817, -73.985428]; // Ending point coordinates

function App() {
  const openRouteServiceApiKey = process.env.openRouteServiceApiKey;
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  useEffect(() => {
    const routing = L.Routing.control({
      waypoints: [
        L.latLng(startPoint[0], startPoint[1]),
        L.latLng(endPoint[0], endPoint[1]),
      ],
      router: L.Routing.osrmv1({
        serviceUrl: "https://api.openrouteservice.org/v2/directions/",
        timeout: 30 * 1000,
        profile: "foot-walking",
        apiKey: openRouteServiceApiKey, // Your API key here
      }),
      routeWhileDragging: true,
      fitSelectedRoutes: false,
      showAlternatives: false,
      summaryTemplate:
        '<div class="start">{name}</div><div class="info {costing}">{distance}, {time}</div>',
    });

    routing.on("routesfound", (event) => {
      const route = event.routes[0];
      setDistance(`${route.summary.totalDistance / 1000} km`);
      setDuration(`${Math.round(route.summary.totalTime / 60)} min`);
    });

    routing.addTo(mapRef.current.leafletElement);
  }, []);

  return (
    <MapContainer
      center={startPoint}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "100vh" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={startPoint} />
      <Marker position={endPoint} />
      <div className="info-panel">
        <div className="distance">{distance}</div>
        <div className="duration">{duration}</div>
      </div>
    </MapContainer>
  );
}

export default App;
  */
