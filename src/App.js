import { useState } from 'react';
import './App.css';
import AutocompleteInput from './components/AutocompleteInput';
import ResultsList from './components/ResultsList';

function App() {
  const [search, setSearch] = useState('')
  return (
    <div>
      <AutocompleteInput setSearch={setSearch}/>
      {search && <ResultsList query={search} />}
    </div>
  );
}

export default App;
