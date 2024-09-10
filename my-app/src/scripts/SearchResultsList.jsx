import React,{useState} from 'react';
import "./SearchResultsList.css";
import {SearchResult} from "./SearchResult";


const SearchResultsList = ({results, setInput}) => {

    if(results.length > 0) {
        return (
            <div className="results-list">
                {
                    results.map((result, id) => {
                        return <SearchResult result={result} setInput={setInput}/>
                    })
                }
            </div>
          );
    }

    else return (
        <div></div>
    )
};

export default SearchResultsList
