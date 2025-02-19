import L from 'leaflet';
import 'leaflet.awesome-markers';
import 'leaflet.awesome-markers/dist/leaflet.awesome-markers.css';
import { v4 } from 'uuid';

const API_KEY = process.env.REACT_APP_API_KEY;

export const getMarker = (item, color = 'blue') => {
  const { lon, lat } = item.data.position;

  const leafletIcon = L.AwesomeMarkers.icon({
    icon: 'map-marker',
    markerColor: color,
    prefix: 'fa',
  });

  return {
    ...item,
    icon: leafletIcon,
    position: [lat, lon],
  };
};

export const fetchSuggestions = async (
  query,
  queryCache,
  setSuggestions,
  setOptions,
  options
) => {
  try {
    const url = `https://api.mapy.cz/v1/suggest?lang=cs&limit=5&locality=cz&type=poi,regional.address&apikey=${API_KEY}&query=${query}`;
    const response = await fetch(url);
    const data = await response.json();

    const items = data.items.map((item) => ({
      id: v4(),
      label: item.name,
      location: item.location,
      data: item,
      radius: {
        active: false,
        size: 350,
      },
    }));
    const suggestions = [];

    items.forEach((item) => suggestions.push(getMarker(item, 'purple')));

    queryCache.current[query] = suggestions;
    setSuggestions(suggestions);
    setOptions({ ...options, suggestions });
  } catch (error) {
    alert(error);
  }
};
