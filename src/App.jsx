import './styles/App.scss'
import { useState } from 'react'
import Header from './components/header.jsx'
import SearchInput from './components/library/search'
import { TableBodyArray } from './data/tableArray'
import ComparisonNavBar from './components/ComparisonNavBar';
import ImageSection from './components/ImageSection';
import TableSection from './components/TableSection';

function App() {
  const [hideSame, setHideSame] = useState(false);
  console.log(Object.keys(TableBodyArray), "yoooo")

  return (
    <div className="App">
      <Header/>
      <div className="body-section">
        <div>
          <h2 className='heading'>Compare Schools</h2>
          <p className='sub-heading'>Compare top four schools you’re interested in and pick the right one for you. </p>
          <p className='sub-heading'>Use the search field to add schools to compare. You can drag to reorder schools after selection.</p>
          <SearchInput width={"720px"} className="margin-32"  background={"#ffffff"}/>
        </div>
        <ComparisonNavBar/>
        <ImageSection setHideSame={(e)=> setHideSame(e)} hideSame={hideSame}/>
        <TableSection hideSame={hideSame}/>

        
      </div>
    
    </div>
  )
}

export default App
