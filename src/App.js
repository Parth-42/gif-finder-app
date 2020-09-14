import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import Search from './components/Search'
import GIFgrid from './components/GIFgrid'

function App() {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {


    const fetchItems = async () => {
      const result = await Axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=GoTsp929zvOe3k9jYM1Qw0pOhbzBEJay&limit=20`)
      setItems(result.data.data);
      setIsLoading(false);
    }
    console.log(items);
    fetchItems();
  }, [query])

  return (
    <div>
      <Search getQuery={(q) => { setQuery(q) }} />
      <GIFgrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
