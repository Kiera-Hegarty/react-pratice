const FirstComponent = () => {

    const name = "Kiera";
    const favColour = "Green";
    const favNumber = 23;

    return(
        <>
            <h1> Profile </h1>
            {/* By using {} we are seamlessly adding our JS to out HTML return */}
            <h3> My name is {name} </h3>
            <h3> My favourite colour: {favColour}</h3>
            <h3> My favourite number: {favNumber} </h3>
            <h3>My favourite animal: </h3>
            <img src="https://i.natgeofe.com/n/422329fe-22d1-46df-9cdd-8623f8565a47/30651.jpg?w=1200" 
            alt = "elephant" width = "360px" ></img>
            <h3>List of my favourite fruits: </h3>
            <ul>
                <li>Apple</li>
                <li>Strawberry</li>
                <li>Blueberry</li>
                <li>Honeydew melon</li>
            </ul>
        </>
    )
}

export default FirstComponent;