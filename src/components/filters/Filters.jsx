import PropTypes from "prop-types";

import FilterByKi from "./FilterByKi";
import FilterByName from "./FilterByName";
import "../../styles/Forms.scss";

function Filters({filterName, setFilterName, minKi, setMinKi, maxKi, setMaxKi}){

    const handleForm =(ev) =>{
        ev.preventDefault()
    }

return (
    <form onSubmit={handleForm}>
        <FilterByName filterName={filterName} setFilterName={setFilterName}/>
        <FilterByKi minKi={minKi} setMinKi={setMinKi} maxKi={maxKi} setMaxKi={setMaxKi}/>
    </form>
)}

Filters.propTypes = {
  setFilterName: PropTypes.func,
  filterName: PropTypes.string,
  setMinKi: PropTypes.func,
  minKi: PropTypes.string,
  setMaxKi: PropTypes.func,
  maxKi: PropTypes.string,
};

export default Filters;