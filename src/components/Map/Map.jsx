import React, { useContext } from 'react';
import style from './map.module.scss';
import { Circle, MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Controls } from '../Controls/Controls';
import { OptionsContext } from '../../context/OptionsContext';
import { MapUpdater } from '../../hooks/MapUpdater';
import { MarkerClick } from '../MarkerClick/MarkerClick';
import { RadiusClick } from '../RadiusClick/RadiusClick';
import { ModalContext } from '../../context/ModalContext';
import { DisplayPolylines } from './DisplayPolylines';
import {
  DisplaySuggestions,
  DisplaySuggestionsRadius,
} from './DisplaySuggestions';
import { DisplayMarkers } from './DisplayMarkers';
import { DisplayRadius } from './DisplayRadius';

export const Map = () => {
  const { options, setOptions } = useContext(OptionsContext);
  const { modal, setModal } = useContext(ModalContext);
  const { center, zoom, suggestions, markers, polylines, radiuses } = options;

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

        {/* Display components */}
        <MapUpdater center={center} zoom={zoom} />
        <DisplaySuggestions suggestions={suggestions} />
        <DisplaySuggestionsRadius suggestions={suggestions} />
        <DisplayMarkers markers={markers} />
        <DisplayPolylines polylines={polylines} />
        <DisplayRadius radiuses={radiuses} setModal={setModal} modal={modal} />

        {/* Listen for marker click */}
        {modal.area.active && <MarkerClick area={modal.area} />}
        {/* Listen for radius click */}
        {modal.radius.active && <RadiusClick radius={modal.radius} />}
      </MapContainer>

      <Controls options={options} setOptions={setOptions} />
    </div>
  );
};
