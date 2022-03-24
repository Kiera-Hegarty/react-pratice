const Drink = ({data}) => {
    return (  
        <>
            <h2> Drink name: {data.name} </h2>
            <img src={data.image_url} alt={data.name} width="60px"/>
            <h3> {data.tagline} </h3>
            <h4> Alcohol content: {data.abv} </h4>
        </>
    );
}
 
export default Drink;