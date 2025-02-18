import React, { useState } from 'react';
import style from './map.module.scss';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import Leaflet from 'leaflet';
import { SearchInput } from '../SearchInput/SearchInput';

const center = [49.8175, 15.47296];
const pragueCenter = [50.073658, 14.41854];
const customIcon = Leaflet.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

export const Map = () => {
  const [markers, setMarkers] = useState([]);

  return (
    <div className={style.cont}>
      <MapContainer
        center={center}
        zoom={8}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={pragueCenter} icon={customIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>

      <SearchInput setMarkers={setMarkers} />
    </div>
  );
};
