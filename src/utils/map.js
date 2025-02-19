import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

export const getMarker = (item) => {
  const { lon, lat } = item.data.position;
  const leafletIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41], // Fix: use pixel values, not lat/lon
    popupAnchor: [1, -34],
  });

  return {
    icon: leafletIcon,
    position: [lat, lon], // Fix: Use [lat, lon] (not [lon, lat])
  };
};
