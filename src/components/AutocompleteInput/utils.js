export const generateSuggestions = (value, allData) => {
    const filteredSuggestions = allData.filter((suggestion) =>
    suggestion.text.toLowerCase().startsWith((value || '').toLowerCase())
);

const searchHistorySuggestions = filteredSuggestions.filter(
    (suggestion) => suggestion.isSearchHistory
);

const regularSuggestions = filteredSuggestions.filter(
    (suggestion) => !suggestion.isSearchHistory
);

const limitedSearchHistorySuggestions = searchHistorySuggestions.slice(0, 10);
const amountOfRegularSuggestions = 10-limitedSearchHistorySuggestions.length
const limitedRegularSuggestions = regularSuggestions.slice(0, amountOfRegularSuggestions);

const generatedSuggestions =  [
    ...limitedSearchHistorySuggestions,
    ...limitedRegularSuggestions,
];
return generatedSuggestions
}
