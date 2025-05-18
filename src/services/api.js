function getDataApi(){
    return fetch ("https://dragonball-api.com/api/characters")
    .then((resp) => resp.json())
    .then((data) => {
        const newArray = data.items.map((character)=>{
            return {
                id: character.id,
                name: character.name,
                description: character.description,
                ki: character.ki,
                img: character.image
            };
        });
        return newArray;
    })

}

export default getDataApi;