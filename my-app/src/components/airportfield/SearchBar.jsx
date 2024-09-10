import React, { useState, useEffect, useRef } from 'react';
import '../../css/header.css';
import SearchResult from './SearchResult';
import Codes from '../../scripts/formatted_ac_codes.json';

const SearchBar = ({id, placeholder}) => {
    const [results, setResults] = useState([]);
    const [input, setInput] = useState('');
    const refContainer = useRef(null); // This ref is used to refer to the container div

    const handleChange = (value) => {
        setInput(value);
        if (value.length > 2) {
            const search = value.toLowerCase();
            const filtered = Codes.filter(airport => 
                airport.name.toLowerCase().includes(search) || airport.iata.toLowerCase().includes(search)
            );
            setResults(filtered);
        } else {
            setResults([]);
        }
    };

    const selectDropdown = (value) => {
        setInput(value);
        setResults([]);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (refContainer.current && !refContainer.current.contains(event.target)) {
                setResults([]); // This clears the dropdown if the click is outside the refContainer
            }
        };
        
        // Add event listener for clicks
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [refContainer]);

    return (
        <div ref={refContainer}>  {/* Assign ref to the container */}
            <div className='destination-block'>
                <input type="text" id={id} className='input-element' placeholder={placeholder}
                    onChange={(e) => handleChange(e.target.value)}
                    value={input}
                    required />
                <label htmlFor="{id}" className='label-element'>{placeholder}</label>
                <div className="results-list">
                    {input && results.map(result => (
                        <SearchResult key={result.iata} id={result.iata} name={result.name} setInput={selectDropdown}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SearchBar;
