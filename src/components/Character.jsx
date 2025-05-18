import "../styles/Character.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

function Character({data}){

    const handleClick = () =>{
        
    }

    return(
        <li className="character">
            <p>{data.name}</p>
            <p>{data.ki}</p>
            <p><FontAwesomeIcon icon={faChevronDown} onClick={handleClick}/></p>
        </li>
    )
}

export default Character;