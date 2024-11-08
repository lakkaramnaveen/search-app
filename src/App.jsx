import { useState } from 'react'
import './App.css'
import { SearchBar } from './components/SearchBar'
import { SearchResultsLists } from './components/SearchResultsLists';

function App() {
  const [results, setResults] = useState([]);
  return (
      <div className='App'>
        <div className='search-bar-container'>
          <SearchBar setResults = {setResults}></SearchBar>
          <SearchResultsLists results = {results}></SearchResultsLists>
        </div>
      </div>
  )
}

export default App
