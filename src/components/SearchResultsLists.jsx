import { SearchResult } from "./SearchResult";
import "./SearchResultsLists.css";

export const SearchResultsLists = ({results}) => {
  return (
    <div className='results-list'>
        {results.map((result, id) => {
                return <SearchResult result={result} key={id}/>
            })}
    </div>
  )
}
