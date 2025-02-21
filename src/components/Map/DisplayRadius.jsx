import { Circle } from 'react-leaflet';

export const DisplayRadius = ({ radiuses, setModal, modal }) => {
  const onClick = (id) => {
    setModal((prev) => ({
      ...prev,
      editRadius: true,
      radius: {
        ...prev.radius,
        selectedId: id,
      },
    }));
  };

  return radiuses.map((radius, index) => (
    <Circle
      key={index}
      center={radius.position}
      radius={radius.radius * 1000} // Convert to meters
      color='red'
      fillColor='rgba(255, 0, 0, 0.2)'
      fillOpacity={0.3}
      eventHandlers={{
        click: () => (!modal.radius.active ? onClick(radius.id) : null),
      }}
    />
  ));
};
