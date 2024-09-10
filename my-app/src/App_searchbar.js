import {useState } from "react";
import "./App.css"
import SearchBar from "./scripts/SearchBar";
import SearchResultsList from "./scripts/SearchResultsList";



export default function App() {

    const [results, setResults] = useState('');
    const [input, setInput] = useState('');


    const handleSelect = (value) => {
        setInput(value);
        setResults([]);
    }
    

    return (
        <div className="App">
            <div className="search-bar-container">
                <SearchBar setResults={setResults} input={input} setInput={setInput}/>
                <SearchResultsList results={results} setInput={handleSelect} />
            </div>
        </div>
    );
}