import React, { useContext, useState } from 'react';
import style from './editArea.module.scss';
import { AreaContext } from '../../../context/AreaContext';
import { ModalContext } from '../../../context/ModalContext';
import { v4 } from 'uuid';

export const EditArea = () => {
  const { areas } = useContext(AreaContext);
  const { modal, setModal } = useContext(ModalContext);
  const [areaData, setAreaData] = useState({
    points: 'single',
    type: '',
    area: '',
  });
  const types = [...new Set(areas.map((area) => area.type))];

  const onChange = (name, value) => {
    setAreaData({ ...areaData, [name]: value });
  };

  const onClick = () => {
    const { area } = areaData;
    const areaObj = areas.find((x) => x.id === area);

    setModal({
      ...modal,
      editArea: false,
      area: { id: v4(), active: true, points: areaData.points, area: areaObj },
    });
  };

  return (
    <form className={style.cont}>
      {/* Type */}
      <RadioInput
        value='single'
        text='Jeden Bod'
        areaData={areaData}
        onChange={onChange}
      />
      <RadioInput
        value='multiple'
        text='Více bodů'
        areaData={areaData}
        onChange={onChange}
      />

      {/* Type of area */}
      <Select
        areaData={areaData}
        onChange={onChange}
        label='Filtrovat podle typu'
        name='type'
        defaultOption='Bez filtru'
      >
        {types.map((type) => (
          <option value={type} key={type}>
            {type}
          </option>
        ))}
      </Select>

      <Select
        areaData={areaData}
        onChange={onChange}
        label='Vybrat plochu'
        name='area'
        defaultOption='Žádná plocha'
      >
        {areas
          .filter((area) => !areaData.type || areaData.type === area.type)
          .map((area) => (
            <option value={area.id} key={area.id}>
              {area.title}
            </option>
          ))}
      </Select>

      <button
        type='button'
        className={style.submit}
        onClick={onClick}
        disabled={!areaData.area}
      >
        Editovat plochu
      </button>
    </form>
  );
};

const RadioInput = ({ value, text, areaData, onChange }) => {
  return (
    <div className={style.radio}>
      <input
        type='radio'
        name='points'
        id={value}
        value={value}
        checked={areaData.points === value}
        onChange={(e) => onChange('points', e.target.value)}
      />
      <label htmlFor={value}>{text}</label>
    </div>
  );
};

export const Select = ({
  areaData,
  onChange,
  label,
  name,
  defaultOption,
  children,
}) => {
  return (
    <div className={style.select}>
      <label htmlFor={style[name]}>{label}</label>

      <select
        name={name}
        id={style[name]}
        value={areaData[name]}
        onChange={(e) => onChange(name, e.target.value)}
      >
        <option value=''>{defaultOption}</option>

        {children}
      </select>
    </div>
  );
};
