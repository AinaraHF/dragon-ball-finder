import PropTypes from "prop-types";
import Character from "./Character";

function CharacterList({characters}){

    const htmlList = characters.map(character=> <Character key={character.id} data={character} />)
    return(
        <ul>
            {htmlList}
        </ul>
    )
}

CharacterList.propTypes = {
  characters: PropTypes.array,
};

export default CharacterList;