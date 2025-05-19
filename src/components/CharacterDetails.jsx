import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

function CharacerDetails({data, onClose}){
    
    return (
        <article>
            <p className="icon"><FontAwesomeIcon icon={faChevronUp} onClick={onClose}/></p>
            <div className="details">
                <div>
                    <img src={data.img} alt={data.name} className="pic"/>
                    <div className="nameKi">
                        <p>{data.name}</p>
                        <p>{data.ki}</p>
                    </div>
                </div>
                <p className="desc">{data.description}</p>
            </div>
        </article>
    )
}

CharacerDetails.propTypes = {
  data: PropTypes.object,
  onClose: PropTypes.func,
};
export default CharacerDetails;