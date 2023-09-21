import React, { useEffect, useRef, useState } from 'react';
import './styles.css';
import mockData from '../../consts/mockData.json';
import { generateSuggestions } from './utils';

const AutocompleteInput = ({setSearch}) => {
  const [inputValue, setInputValue] = useState('');
  const [allData, setAllData] = useState(mockData)
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef(null);
  const suggestionsRef = useRef(null);

  const handleDocumentClick = (e) => {
    if (
      suggestionsRef.current &&
      !suggestionsRef.current.contains(e.target) && 
      !inputRef.current.contains(e.target)
    ) {
      setShowSuggestions(false);
    }
  };

  useEffect(() => {
    setSuggestions(mockData)
    inputRef.current.focus();
  }, []);
  
  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  useEffect(() => {
    const combinedSuggestions = generateSuggestions(inputValue, allData)
    setSuggestions(combinedSuggestions);
  }, [allData, inputValue]);


  const handleInputChange = (e) => {
    const value = e.target.value;

    setInputValue(value);
    if(!value) {
        setShowSuggestions(false);
            return 
    }   
    setShowSuggestions(true);
  };

  const handleInputFocus = () => {
    if(!inputValue) {
        const searchHistorySuggestions = allData.filter(
            (suggestion) => suggestion.isSearchHistory
        );
        if(searchHistorySuggestions.length) {
            setSuggestions(searchHistorySuggestions);
            setShowSuggestions(true);
        }
    }
  };

  const handleSuggestionClick = (clickedSuggestion) => {
        const updatedSuggestions = allData.map((suggestion) =>
        suggestion.text === clickedSuggestion
          ? { ...suggestion, isSearchHistory: true }
          : suggestion
      );
      setAllData(updatedSuggestions)
      setInputValue(clickedSuggestion);
      setShowSuggestions(false);
      setSearch(clickedSuggestion)
  };

  const handleSubmit = (e, vl) => {
    e.preventDefault();
    setSearch(e.target[0].value)
    setShowSuggestions(false);
  };

  const removeSuggestionFromHistory = (event, suggestionToRemove) => {
    event.stopPropagation();
    const updatedSuggestions = allData.map((suggestion) => {
      if (suggestion.text === suggestionToRemove) {
        return { ...suggestion, isSearchHistory: false };
      }
      return suggestion;
    });
    setAllData(updatedSuggestions);
  };
  
  const renderSuggestions = () => {
    if (showSuggestions && suggestions.length > 0) {
      return (
        <ul className="suggestions-list" ref={suggestionsRef}>
          {suggestions.map((suggestion, index) => (
            <li 
            className={`suggestion-record ${suggestion.isSearchHistory ? "search-history" : ''}`}
            key={index} onClick={() => handleSuggestionClick(suggestion.text)}>
              {suggestion.text}
              {suggestion.isSearchHistory && <span
                onClick={(event) =>
                  removeSuggestionFromHistory(event, suggestion.text)
                }
                className={
                  suggestion.isSearchHistory
                    ? 'remove-suggestion'
                    : 'remove-suggestion-hidden'
                }
              >
                X
              </span>}
            </li>
          ))}
        </ul>
      );
    }
    return null;
  };

  return (
    <div className="autocomplete-input">
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        ref={inputRef}
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
      />
    </form>
    {renderSuggestions()}
    </div>
  );
};

export default AutocompleteInput;
