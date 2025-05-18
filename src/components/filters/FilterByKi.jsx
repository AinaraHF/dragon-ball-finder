function FilterByKi({filterKi, setFilterKi}){

    const handleKi = (ev) => {
        setFilterKi(ev.target.value)
    }

    return(
        <div>
            <label htmlFor="ki_from">Busca por Ki de </label>
            <input type="number" id="ki_from" placeholder="de" onChange={handleKi}/>
            <label htmlFor="ki_to"> a </label>
            <input type="number" id="ki_to" placeholder="a" onChange={handleKi}/>
        </div>
    )
}

export default FilterByKi;