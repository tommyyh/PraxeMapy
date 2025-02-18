import React, { useState, useEffect, useRef } from 'react';
import style from './searchInput.module.scss';

const API_KEY = process.env.REACT_APP_API_KEY;

export const SearchInput = ({ setMarkers }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const queryCache = useRef({});
  const inputRef = useRef(null);

  useEffect(() => {
    if (query.length < 2) {
      setSuggestions([]);

      return;
    }

    if (queryCache.current[query]) {
      setSuggestions(queryCache.current[query]);

      return;
    }

    const fetchSuggestions = async () => {
      try {
        const url = `https://api.mapy.cz/v1/suggest?lang=cs&limit=5&locality=cz&type=poi,regional.address&apikey=${API_KEY}&query=${query}`;
        const response = await fetch(url);
        const data = await response.json();

        const items = data.items.map((item) => ({
          label: item.name,
          location: item.location,
          data: item,
        }));

        queryCache.current[query] = items;
        setSuggestions(items);
      } catch (error) {
        alert(error);
      }
    };

    fetchSuggestions();
  }, [query]);

  const handleSelect = (item) => {
    setShowDropdown(false);
  };

  return (
    <div className={style.cont}>
      <div className={style.search}>
        <input
          ref={inputRef}
          type='text'
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowDropdown(true);
          }}
          onFocus={() => setShowDropdown(true)}
          placeholder='Hledat'
        />

        {showDropdown && suggestions.length > 0 && (
          <ul>
            {suggestions.map((item, index) => (
              <li key={index} onClick={() => handleSelect(item)}>
                <b>{item.label}</b>
                <div>{item.location}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
