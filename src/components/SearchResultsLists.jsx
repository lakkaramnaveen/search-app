import "./SearchResultsLists.css";

export const SearchResultsLists = ({results}) => {
  return (
    <div className='results-list'>
        {
            results.map((result, id) => {
                return <div key={id}>{result.name}</div>
            }) 
        }
    </div>
  )
}
