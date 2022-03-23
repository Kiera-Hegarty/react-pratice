import { useState } from "react";

const Zoo = () => {

const[zooData, setZooData] = useState({});

let animalObj = {
    type: "",
    // carnivore: false,
    environment: "",
    lifeExp: 0
}

const setStateFromObj = () => {
    setZooData(animalObj);
};

    return ( 
        <>
        <form>
            <input type="text" name="animalType" placeholder="Enter animal type"  onChange={(event) => {animalObj.type = event.target.value}}/>
            {/* <input type="radio" name="carnivore" onChange={() => animalObj.carnivore = true}/>
            <span> True </span>
            <input type="radio" name="carnivore" onChange={() => animalObj.carnivore = false}/>
            <span> False </span> */}
            <input type="text" name="animalEnvironment" placeholder="Enter animals environment"  onChange={(event) => {animalObj.environment = event.target.value}}/>
            <input type="number" name="animalLifeExp" placeholder="Enter animals life expectancy"  onChange={(event) => {animalObj.lifeExp = event.target.value}}/>
            <button type="button" onClick={setStateFromObj}> Click me to enter data </button>
        </form>

        <h2> Animal: {zooData.type} </h2>
        {/* <h2> Is the animal a carnivore: {zooData.carnivore} </h2> */}
        <h2> Animals environment: {zooData.environment} </h2>
        <h2> Animals life expectancy: {zooData.lifeExp} </h2>
        </>
     );
}
 
export default Zoo;