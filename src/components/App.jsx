import "../styles/App.scss";
import { useEffect, useState } from "react";
import getDataApi from "../services/api";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";

function App() {
  
  const [characters, setCharacters] = useState([]);

  useEffect(()=> {
    getDataApi().then((data)=> {setCharacters(data)})
  }, [])

  return (
    <Routes>
      <Route path="/" element={
        <>
        <Header/>        
        
        </>}>
      
      </Route>

    </Routes>
  )
}

export default App
