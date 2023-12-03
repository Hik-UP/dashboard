import { useState, useEffect } from 'react';
import { Button, Modal, Input, List } from 'antd';

export function SearchBar({ childState, updateParentState }) {
  const [input, setInput] = useState('');
  const [endsearch, setendsearch] = useState(false);

  const [results, setResults] = useState([]);

  const mapboxToken = 'pk.eyJ1IjoiaGljY3VwLXN0YWZmIiwiYSI6ImNsangxeHVkbzAyNmwzdHJ4cmJiYWZmMm4ifQ.yI4259jlMq2elDiT_uK1kg';

  useEffect(() => {
    if (input && endsearch == false) {
      // Fetch and update results based on user input
      const fetchResults = async () => {
        try {
          const response = await fetch(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${input}.json?access_token=${mapboxToken}`
          );
          if (response.ok) {
            const data = await response.json();
            console.log(data.features);
            setResults(data.features);
          } else {
            console.error('Error fetching results:', response.statusText);
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
      fetchResults();
    } else {
      setResults([]);
      setendsearch(false);
    }
  }, [input]);

  const handleItemClick = (selectedValue) => {
    console.log('Selected Item:', selectedValue);
    setInput(selectedValue);
    updateParentState(selectedValue);
    setResults([]);
    setendsearch(true);
  };


  return (
    <div>
      < Input
        type="text"
        placeholder="Recherche d'une localisation:"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
     <List
      dataSource={results}
      style={{ cursor: 'pointer' }}
      renderItem={(result, index) => (
        <List.Item  onClick={() => handleItemClick(result.place_name)} >
          {result.place_name}
        </List.Item>
      )}
    />
    </div>
  );
};

export default SearchBar;