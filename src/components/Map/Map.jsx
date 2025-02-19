import React, { useContext } from 'react';
import style from './map.module.scss';
import { Circle, MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { SearchInput } from '../SearchInput/SearchInput';
import { OptionsContext } from '../../context/OptionsContext';
import { MapUpdater } from '../../hooks/MapUpdater';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import { Marker } from '../Marker/Marker';
import Popup from '../Popup/Popup';

export const Map = () => {
  const { options, setOptions } = useContext(OptionsContext);
  const { center, zoom, suggestions } = options;

  return (
    <div className={style.cont}>
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />

        {/* Update map dynamically */}
        <MapUpdater center={center} zoom={zoom} />

        {/* Display markers */}
        {suggestions.length > 0 && (
          <MarkerClusterGroup>
            {suggestions.map((suggestion, index) => (
              <Marker marker={suggestion} key={index}>
                <Popup />
              </Marker>
            ))}
          </MarkerClusterGroup>
        )}

        {suggestions.length > 0 &&
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
          })}
      </MapContainer>

      <SearchInput options={options} setOptions={setOptions} />
    </div>
  );
};
