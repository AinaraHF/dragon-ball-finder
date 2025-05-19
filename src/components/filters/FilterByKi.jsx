import PropTypes from "prop-types";

function FilterByKi({minKi, setMinKi, maxKi, setMaxKi}){

    const handleMinKi = (ev) => {
        setMinKi(ev.target.value)
    }

    const handleMaxKi = (ev) => {
        setMaxKi(ev.target.value)
    }
    
    return(
        <div>
            <label htmlFor="ki_from">Busca por poder Ki </label>
            <input type="number" id="ki_from" placeholder="de" onChange={handleMinKi} value={minKi}/>
            <label htmlFor="ki_to"> </label>
            <input type="number" id="ki_to" placeholder="a" onChange={handleMaxKi} value={maxKi}/>
        </div>
    )
}

FilterByKi.propTypes = {
  setMinKi: PropTypes.func,
  minKi: PropTypes.string,
  setMaxKi: PropTypes.func,
  maxKi: PropTypes.string,
};

export default FilterByKi;