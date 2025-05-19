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
  const [minKi, setMinKi] = useState("")
  const [maxKi, setMaxKi] = useState("")

  useEffect(()=> {
    getDataApi().then((data)=> {setCharacters(data)})
  }, [])

  const filterCharacters = characters.filter(character => character.name.toLowerCase().includes(filterName.toLowerCase()))
  .filter(character => {
  const min = minKi === "" ? 0 : parseInt(minKi);
    const max = maxKi === "" ? Infinity : parseInt(maxKi);

    return character.ki >= min && character.ki <= max;
  })
  

  return (
    <Routes>
      <Route path="/" element={
        <>
        <Header/>        
        <Filters filterName={filterName} setFilterName={setFilterName} minKi={minKi} setMinKi={setMinKi} maxKi={maxKi} setMaxKi={setMaxKi}/>
        <CharacterList characters={filterCharacters}/>
        </>}>
      
      </Route>

    </Routes>
  )
}

export default App
