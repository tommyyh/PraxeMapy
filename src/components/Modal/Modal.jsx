import React, { useContext } from 'react';
import style from './modal.module.scss';
import { ModalContext } from '../../context/ModalContext';
import { EditArea } from './EditArea/EditArea';
import { EditRadius } from './EditRadius/EditRadius';
import { ModalHeader } from './ModalHeader/ModalHeader';

export const Modal = () => {
  const { modal } = useContext(ModalContext);
  const { editArea, editRadius } = modal;
  const blurClass =
    editArea || editRadius ? `${style.blur} ${style.blurActive}` : style.blur;
  const modalClass =
    editArea || editRadius
      ? `${style.modal} ${style.modalActive}`
      : style.modal;

  return (
    <div className={blurClass}>
      <div className={modalClass}>
        {/* Reusable Header */}
        {editArea && (
          <ModalHeader title={'Edit reklamní plochy'} type={'editArea'} />
        )}
        {editRadius && (
          <ModalHeader title={'Edit radiusu'} type={'editRadius'} />
        )}

        {/* Content */}
        {editArea && <EditArea />}
        {editRadius && <EditRadius />}
      </div>
    </div>
  );
};
