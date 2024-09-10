import React from 'react'

const SearchResult = ({id, name, setInput}) => {

  const handler = () => {
    setInput(id);
    console.log('trigger');
  }
  

  return (
    <div className='search-result' key={id}
    onClick={(e) => {handler()}}>
      {id} - {name}
    </div>
  )
}


export default SearchResult