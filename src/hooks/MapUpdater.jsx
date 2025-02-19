import { useMap } from 'react-leaflet';
import { useEffect } from 'react';

export const MapUpdater = ({ center, zoom }) => {
  const map = useMap();

  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);

  return null;
};
