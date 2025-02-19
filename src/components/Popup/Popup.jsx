import React from 'react';
import { Popup as LeafletPopup } from 'react-leaflet';

export const Popup = ({}) => {
  return (
    <LeafletPopup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </LeafletPopup>
  );
};

export default Popup;
