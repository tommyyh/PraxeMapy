import React, { useContext } from 'react';
import style from './map.module.scss';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { SearchInput } from '../SearchInput/SearchInput';
import { OptionsContext } from '../../context/OptionsContext';

export const Map = () => {
  const { options, setOptions } = useContext(OptionsContext);

  return (
    <div className={style.cont}>
      <MapContainer
        center={options.center}
        zoom={options.zoom}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />

        {/* Display markers */}
        {options.suggestions.length > 0 &&
          options.suggestions.map((suggestion) => (
            <Marker position={suggestion.position} icon={suggestion.icon}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          ))}
      </MapContainer>

      <SearchInput options={options} setOptions={setOptions} />
    </div>
  );
};
