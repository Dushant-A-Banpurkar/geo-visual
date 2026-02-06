import { MapContainer, TileLayer, Marker } from "react-leaflet";
import type { GeoRecord }  from "../../types/geo.ts";
import L from "leaflet";

type Props = {
  data: GeoRecord[];
  selectedId: string | null;
  onSelect: (id: string) => void;
};

const defaultIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
});

const selectedIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-red.png",
  iconSize: [30, 45],
});

export const MapView = ({ data, selectedId, onSelect }: Props) => {
  return (
    <MapContainer
      center={[20.5937, 78.9629]}
      zoom={5}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {data.map((item) => (
        <Marker
          key={item.id}
          position={[item.latitude, item.longitude]}
          icon={item.id === selectedId ? selectedIcon : defaultIcon}
          eventHandlers={{
            click: () => onSelect(item.id),
          }}
        />
      ))}
    </MapContainer>
  );
};
