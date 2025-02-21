import React, { useContext, useState } from 'react';
import style from './editRadius.module.scss';
import { ModalContext } from '../../../context/ModalContext';
import { v4 } from 'uuid';
import { OptionsContext } from '../../../context/OptionsContext';

export const EditRadius = () => {
  const { modal, setModal } = useContext(ModalContext);
  const { options, setOptions } = useContext(OptionsContext);
  const [radiusData, setRadiusData] = useState('1');
  const { radiuses } = options;
  const findRadius = radiuses.find(
    (radius) => radius.id === modal.radius.selectedId
  );
  const lat = findRadius?.position[0]?.toFixed(5);
  const lng = findRadius?.position[1]?.toFixed(5);

  const onClick = () => {
    const radiusObj = {
      id: findRadius ? findRadius.id : v4(),
      radius: parseInt(radiusData),
      position: [],
    };

    setModal({
      ...modal,
      editRadius: false,
      radius: { id: v4(), active: true, radius: radiusObj },
    });
  };

  const removeRadius = () => {
    const updatedRadiuses = radiuses.filter(
      (radius) => radius.id !== findRadius?.id
    );

    setOptions({ ...options, radiuses: updatedRadiuses });
    setModal({ ...modal, editRadius: false, radius: {} });
  };

  return (
    <form className={style.cont}>
      {findRadius && (
        <ul>
          <li>Lat: {lat}</li>
          <li>Lng: {lng}</li>
        </ul>
      )}

      {/* Type of area */}
      <input
        type='number'
        onChange={(e) => setRadiusData(e.target.value)}
        value={radiusData}
      />

      <button type='button' className={style.submit} onClick={onClick}>
        Editovat plochu
      </button>
      {findRadius && (
        <button type='button' className={style.remove} onClick={removeRadius}>
          Odstranit
        </button>
      )}
    </form>
  );
};
