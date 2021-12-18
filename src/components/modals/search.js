import {useState} from 'react';
const Search = ({drop}) => {
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
    drop();
    // init input value
  }
  
  return(
	<div>
    <input value = {query} onChange={changeQuery} 
      onKeyDown={isEnter}/>
    <button onClick={searchQuery}>검색</button>
  </div>
  );
}

export default Search;