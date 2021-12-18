import React, {useState} from 'react';

const App = () => {
  const [query, setQuery] = useState('');

  const changeQuery = (event) => {
    setQuery(event.target.value);
  }

  const isEnter = (event) => {
    if (event.key === "Enter")
			searchQuery();
  }

  const searchQuery = () => {
    // do search with query
    setQuery('');
    
    // init input value
  }
  return (
    <div>
      <input value = {query} onChange={changeQuery} 
        onKeyDown={isEnter}/>
      <button onClick={searchQuery}>검색</button>
    </div>
  )
}

export default App;
