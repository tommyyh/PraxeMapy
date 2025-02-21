import React, { useContext } from 'react';
import style from './modalHeader.module.scss';
import { ModalContext } from '../../../context/ModalContext';

export const ModalHeader = ({ title, type }) => {
  const { setModal, modal } = useContext(ModalContext);

  const onClick = () => {
    if (type === 'editArea') return setModal({ ...modal, [type]: false });

    setModal({ ...modal, [type]: false, radius: {} });
  };

  return (
    <div className={style.header}>
      <h2>{title}</h2>

      <button className={style.close} onClick={onClick}>
        Zavřít
      </button>
    </div>
  );
};
