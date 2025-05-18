import FilterByKi from "./FilterByKi";
import FilterByName from "./FilterByName";

function Filters({filterName, setFilterName, filterKi, setFilterKi}){

    const handleForm =(ev) =>{
        ev.preventDefault()
    }

return (
    <form onSubmit={handleForm}>
        <FilterByName filterName={filterName} setFilterName={setFilterName}/>
        <FilterByKi filterKi={filterKi} setFilterKi={setFilterKi}/>
    </form>
)
}

export default Filters;