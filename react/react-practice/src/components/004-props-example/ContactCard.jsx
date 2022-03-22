const ContactCard = (props) => {

    const {name, email, age, isCute, favFood, image} = props;

    return ( 
        <div>
            <h2> Name: {name} </h2>
            <h2> Email: {email} </h2>
            <h2> Age: {age} </h2>
            <h2> Is the animal Cute: {isCute.toString()} </h2>
            {/* <h2>Favourite food: {favFood} </h2> */}
            <ul>
                {favFood.map((food, key) => {
                    return <li> Food {key + 1}: {food} </li>
                })}
            </ul>
            <img src={image} alt="" width= "360px"></img>
        </div>

     );
}
 
export default ContactCard;