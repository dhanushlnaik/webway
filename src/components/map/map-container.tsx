import Map from "react-map-gl";
import { env } from "~/env";
export function MapContainer() {
  return (
    <Map
      mapboxAccessToken={env.MAP_CLIENT}
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14,
      }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
  );
}
