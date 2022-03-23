import PokedexData from './Pokedex.json'

import Pokemon from './Pokemon';



console.log(PokedexData[1]);



const Pokedex = () => {

    return (

<div>

    {PokedexData.map((pokemon, key) => {

       return <Pokemon data={pokemon}/>

    })}

</div>

    );

   

}

 

export default Pokedex;