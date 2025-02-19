import React from 'react';
import { Marker as LeafletMarker } from 'react-leaflet';

export const Marker = ({ marker, children }) => {
  const { position, icon } = marker;

  return (
    <LeafletMarker position={position} icon={icon}>
      {children}
    </LeafletMarker>
  );
};
