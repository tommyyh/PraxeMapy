import React from 'react';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import { Marker } from '../Marker/Marker';
import { Popup } from 'react-leaflet';

export const DisplayMarkers = ({ markers }) =>
  markers.length > 0 && (
    <MarkerClusterGroup>
      {markers.map((marker, index) => (
        <Marker marker={marker} key={index}>
          <Popup>
            Plocha: {marker.label} <br />
            Typ: {marker.type}
          </Popup>
        </Marker>
      ))}
    </MarkerClusterGroup>
  );
