import { useContext } from 'react';
import { useMapEvents } from 'react-leaflet';
import { getSimpleMarker } from '../../utils/map';
import { OptionsContext } from '../../context/OptionsContext';

export const MarkerClick = ({ area }) => {
  const { options, setOptions } = useContext(OptionsContext);
  const { id, title, type } = area.area;
  const { markers, polylines } = options;
  const newId = area.id; // Id of newly created marker

  useMapEvents({
    click(e) {
      if (area.points === 'single') {
        const { lat, lng } = e.latlng;
        const newMarker = {
          id: newId,
          areaId: id,
          label: title,
          type,
          position: [lat, lng],
          icon: getSimpleMarker([lat, lng]).icon,
        };
        // Check if exists -> replace
        const newMarkers = markers.find((marker) => marker.id === newId)
          ? markers.map((marker) => (marker.id === newId ? newMarker : marker))
          : [...markers, newMarker];

        setOptions({ ...options, markers: newMarkers });
      } else {
        const { lat, lng } = e.latlng;
        const newMarker = {
          id: newId,
          areaId: id,
          label: title,
          type,
          position: [[lat, lng]],
          icon: getSimpleMarker([lat, lng]).icon,
        };
        const newPolylines = polylines.find((polyline) => polyline.id === newId)
          ? polylines.map((polyline) =>
              polyline.id === newId
                ? { ...polyline, position: [...polyline.position, [lat, lng]] }
                : polyline
            )
          : [...polylines, newMarker];

        setOptions({
          ...options,
          polylines: newPolylines,
        });
      }
    },
  });

  return null;
};
