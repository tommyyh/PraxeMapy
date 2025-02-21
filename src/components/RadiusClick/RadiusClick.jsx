import { useContext } from 'react';
import { useMapEvents } from 'react-leaflet';
import { OptionsContext } from '../../context/OptionsContext';

export const RadiusClick = ({ radius }) => {
  const { options, setOptions } = useContext(OptionsContext);
  const { radiuses } = options;
  const newId = radius.id;
  const { id, radius: radiusSize } = radius.radius;

  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      const newRadius = {
        id: newId,
        radiusId: id,
        radius: radiusSize,
        position: [lat, lng],
      };
      // Check if the user only wants to update radius
      const findRadius = radiuses.find((radius) => radius.id === id);

      if (findRadius) {
        const updateRadius = radiuses.map((radius) =>
          radius.id === id ? newRadius : radius
        );

        setOptions({ ...options, radiuses: updateRadius });
        return;
      }

      // Check if radius exists
      const updatedRadiuses = radiuses.find((radius) => radius.id === newId)
        ? radiuses.map((radius) => (radius.id === newId ? newRadius : radius))
        : [...radiuses, newRadius];

      setOptions({ ...options, radiuses: updatedRadiuses });
    },
  });

  return null;
};
