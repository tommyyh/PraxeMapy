import React, { useContext } from 'react';
import style from './controls.module.scss';
import { SearchInput } from './SearchInput/SearchInput';
import { ModalContext } from '../../context/ModalContext';
import { closeModal, openModal } from '../../utils/modal';
import { cancelChanges, revert } from '../../utils/area';

export const Controls = ({ options, setOptions }) => {
  const { modal, setModal } = useContext(ModalContext);
  const areaActive = modal.area.active;
  const radiusActive = modal.radius.active;

  return (
    <div className={style.cont}>
      <SearchInput options={options} setOptions={setOptions} />

      <div className={style.buttonRow}>
        {areaActive && (
          <EditButton
            className={style.actionBtn}
            text='❌'
            onClick={() =>
              cancelChanges('area', options, setOptions, modal, setModal)
            }
          />
        )}
        {areaActive && modal.area.points === 'multiple' && (
          <EditButton
            className={style.revertBtn}
            text='⬅️'
            onClick={() => revert('area', options, setOptions, modal, setModal)}
          />
        )}
        {areaActive && (
          <EditButton
            className={style.actionBtn}
            text='✔️'
            onClick={() => closeModal('area', setModal, modal)}
          />
        )}

        <EditButton
          onClick={() => openModal('editArea', setModal)}
          text='📌'
          disabled={radiusActive || areaActive}
        />
      </div>

      <div className={style.buttonRow}>
        {radiusActive && (
          <EditButton
            className={style.actionBtn}
            text='❌'
            onClick={() =>
              cancelChanges(
                'radius',
                options,
                setOptions,
                modal,
                setModal,
                'radiuses'
              )
            }
          />
        )}
        {radiusActive && (
          <EditButton
            className={style.actionBtn}
            text='✔️'
            onClick={() => closeModal('radius', setModal, modal)}
          />
        )}

        <EditButton
          onClick={() => openModal('editRadius', setModal)}
          text='⭕'
          disabled={radiusActive || areaActive}
        />
      </div>
    </div>
  );
};

const EditButton = ({ onClick, text, className = style.editBtn, ...props }) => {
  return (
    <button className={className} onClick={onClick} {...props}>
      {text}
    </button>
  );
};
