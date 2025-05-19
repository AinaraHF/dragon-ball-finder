import PropTypes from "prop-types";

import "../styles/Character.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import CharacterDetails from "./CharacterDetails"

function Character({data}){

    const [isOpen, setIsOpen] = useState(false);
    const [chevronDown, setChevronDown]= useState("")
    const [infos, setInfos] = useState("")

    const handleOpen = () =>{
        setIsOpen(!isOpen)
        setChevronDown("hidden")
        setInfos("hidden")
    }

    return(
        <li className="character">
            <p className={isOpen ? infos : ""}>{data.name}</p>
            <p className={isOpen ? infos : ""}>{data.ki}</p>
            <p><FontAwesomeIcon icon={faChevronDown} onClick={handleOpen} className={isOpen ? chevronDown : ""}/></p>
            {isOpen && <CharacterDetails data={data} onClose={()=> setIsOpen(false)}/>}
        </li>
    )
}

Character.propTypes = {
  data: PropTypes.array,
};

export default Character;