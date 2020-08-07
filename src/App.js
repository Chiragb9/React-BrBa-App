import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './Components/UI/Header';
import CharGrid from './Components/Characters/CharacterGrid'
import Search from './Components/UI/Search'
import axios from 'axios';


const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(()=>{
    const fetchCharData=async()=>{
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

      setItems(result.data)
      setIsLoading(false)
    }
    fetchCharData()
  }, [query])

  return (
    <div className="container">
      <Header />
      <Search getQuery={q=>setQuery(q)}/>
      <CharGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
