import ContactCard from "./ContactCard";

const CardArry = [
    {
        name: "Elephant",
        email: "elephant@gmail.com",
        age: 25,
        isCute: true,
        // favFood: "roots",
        favFood: ["fruit", "root","shrubs"],
        image: "https://i.natgeofe.com/n/422329fe-22d1-46df-9cdd-8623f8565a47/30651.jpg?w=1200"
    },
      
    {
        name: "Tiger",
        email: "tiger@hotmail.com",
        age:30,
        isCute: true,
        // favFood: "meat",
        favFood: ["deer", "bird"],
        image: "https://himalayantribune.com/wp-content/uploads/2020/07/TIGER-1024x647.jpg"
    },
    {
        name: "Ladybird",
        email: "lb@qa.co.uk",
        age: 2,
        isCute: true,
        // favFood: "berries",
        favFood: ["berries", "grapes"],
        image: "https://thoughtsofdawn.com/wp-content/uploads/edd/2019/03/Ladybird.jpg"
    },
]

const ContactCardManager = () => {
    return ( 
        <>
            {/* <ContactCard name="Rhino"
        email="rhino@gmail.com"
        age= {40}
        isCute={true}
        favFood="grass"
        image="https://www.denverpost.com/wp-content/uploads/2020/02/Rhino-Calf_5.jpg"/>
        <br></br> */}
    
         {CardArry.map((card, key) =>{
            return (
                <>
                <ContactCard name={card.name}
                email={card.email}
                age= {card.age}
                isCute={card.isCute}
                favFood={card.favFood}
                image={card.image}/> 
               </> 
            )
        })}
        </>
    );
}
export default ContactCardManager;


