import React, { useState, useEffect, useRef } from 'react';
import style from './searchInput.module.scss';
import { fetchSuggestions } from '../../utils/map';

export const SearchInput = ({ options, setOptions }) => {
  const [query, setQuery] = useState('kaufland, pl');
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const queryCache = useRef({});
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  // Fetch
  useEffect(() => {
    const cache = queryCache.current[query];

    if (!showDropdown) return setOptions({ ...options, suggestions: [] });
    if (query.length < 2) return setSuggestions([]);
    if (cache) {
      // If user didn't modify query -> show cached suggestions instead
      setSuggestions(cache);
      setOptions({ ...options, suggestions: cache });

      return;
    }

    fetchSuggestions(query, queryCache, setSuggestions, setOptions, options);
  }, [showDropdown, query]);

  // When clicked outside -> close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // On item select
  const handleSelect = (item) => {
    const { lon, lat } = item.data.position;
    const suggestions = options.suggestions.map((suggestion) =>
      suggestion.id === item.id
        ? { ...suggestion, radius: { ...suggestion.radius, active: true } }
        : suggestion
    );

    setOptions({ ...options, center: [lat, lon], zoom: 16, suggestions });
    setShowDropdown(false);
  };

  return (
    <div className={style.cont}>
      <div className={style.search} ref={dropdownRef}>
        <div className={style.input}>
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

          {query && <button onClick={() => setQuery('')}>x</button>}
        </div>

        {/* Dropdown */}
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
