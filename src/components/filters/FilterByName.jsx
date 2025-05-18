function FilterByName({filterName, setFilterName}){

    const handleInput = (ev) => {
        setFilterName(ev.target.value.toLowerCase())
    }

    return(
        <div>
            <label htmlFor="name" className="labelName">Busca por nombre </label>
            <input type="text" id="name" onChange={handleInput} value={filterName} className="inputName"/>
        </div>
    )
}

export default FilterByName;