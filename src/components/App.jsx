import "../styles/App.scss";
import { useEffect, useState } from "react";
import getDataApi from "../services/api";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import CharacterList from "./CharacterList";
import Filters from "./filters/Filters"

function App() {
  
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterKi, setFilterKi] = useState("");

  useEffect(()=> {
    getDataApi().then((data)=> {setCharacters(data)})
  }, [])

  const filterCharacters = characters.filter(character => character.name.toLowerCase().includes(filterName))

  return (
    <Routes>
      <Route path="/" element={
        <>
        <Header/>        
        <Filters filterName={filterName} setFilterName={setFilterName} filterKi={filterKi} setFilterKi={setFilterKi}/>
        <CharacterList characters={filterCharacters}/>
        </>}>
      
      </Route>

    </Routes>
  )
}

export default App
