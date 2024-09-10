import React, {useState} from 'react'
import '../css/header.css'

const AirportField = () => {

    const [results, setResults] = useState('');
    const [input, setInput] = useState('');

    const handleSelect = (value) => {
        setInput(value);
        setResults([]);
    }

  return (

    <div className='form-block'>
        <SearchBar setResults={setResults} input={input} setInput={setInput}/>
        <SearchResultsList results={results} setInput={handleSelect} />
     </div>
  )
}

export default AirportField
