import { useState } from 'react';
import './App.css';
import AutocompleteInput from './components/AutocompleteInput';
import ResultsList from './components/ResultsList';

function App() {
  const [search, setSearch] = useState('')
console.log('search', search)
  return (
    <div className="">
      <AutocompleteInput setSearch={setSearch}/>
      {search && <ResultsList query={search} />}
    </div>
  );
}

export default App;
