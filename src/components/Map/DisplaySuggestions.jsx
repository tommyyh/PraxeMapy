import React from 'react';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import { Marker } from '../Marker/Marker';
import { Circle, Popup } from 'react-leaflet';

// Display suggestions on the map
export const DisplaySuggestions = ({ suggestions }) =>
  suggestions.length > 0 && (
    <MarkerClusterGroup>
      {suggestions.map((suggestion, index) => (
        <Marker marker={suggestion} key={index}>
          <Popup>
            Typ plochy: {suggestion.label} <br />
            Lokace: {suggestion.location} <br />
            Dostupnost plochy: volná
          </Popup>
        </Marker>
      ))}
    </MarkerClusterGroup>
  );

export const DisplaySuggestionsRadius = ({ suggestions }) =>
  suggestions.length > 0 &&
  suggestions.map((suggestion, index) => {
    const { radius, position } = suggestion;

    return (
      radius.active && (
        <Circle
          key={index}
          center={position}
          radius={radius.size}
          color='red'
          fillColor='rgba(255, 0, 0, 0.2)'
          fillOpacity={0.3}
        />
      )
    );
  });
