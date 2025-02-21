import React from 'react';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import { Marker } from '../Marker/Marker';
import { Polyline, Popup } from 'react-leaflet';

// Display polylines on the map
export const DisplayPolylines = ({ polylines }) => {
  // Get polyline marker if its a single point
  const getPolylineMarker = (polyline) => {
    return {
      position: [polyline.position[0][0], polyline.position[0][1]],
      icon: polyline.icon,
    };
  };

  return (
    polylines.length > 0 && (
      <MarkerClusterGroup>
        {polylines.map((polyline, index) =>
          polyline.position.length <= 1 ? (
            <Marker marker={getPolylineMarker(polyline)} key={index}>
              <Popup>
                Plocha: {polyline.label} <br />
                Typ: {polyline.type}
              </Popup>
            </Marker>
          ) : (
            <Polyline
              pathOptions={{ color: 'blue' }}
              positions={polyline.position}
              key={index}
            >
              <Popup>
                Plocha: {polyline.label} <br />
                Typ: {polyline.type}
              </Popup>
            </Polyline>
          )
        )}
      </MarkerClusterGroup>
    )
  );
};
