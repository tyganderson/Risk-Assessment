import {useState } from "react";
import "./App.css"
import SearchBar from "./components/SearchBar";
import SearchResultsList from "./components/SearchResultsList";



export default function App() {

    const [results, setResults] = useState('');
    const [input, setInput] = useState('');

    const [results2, setResults2] = useState('');
    const [input2, setInput2] = useState('');


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