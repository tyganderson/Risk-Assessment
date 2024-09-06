import React from 'react'
import "./SearchResult.css"

export const SearchResult = ({result, setInput}) => {

  

  return (
    <div className="search-result"
    onClick={(e) => {setInput(result.name)}}>
      {result.name}
    </div>
  )
};
