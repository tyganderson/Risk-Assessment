import React,{useState} from 'react';
import SearchResult from "./SearchResult";


const SearchResultsList = ({results, setInput}) => {

    if(results && results.length > 0) {
        return (
            <div className="results-list">
                {
                    results.map((result, id) => {
                        return <SearchResult/>
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
