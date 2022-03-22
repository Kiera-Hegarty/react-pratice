const StateButton = ({updateTotal, total}) => {

const subTotal = () => {
    updateTotal(total - 1);
}



// const multiTotal = () => {
//     updateTotal(total * 2);
// }

    return ( 
        <>
        <button type="button" onClick={subTotal}> Click me to decrease the value! </button>
        </>

     );
}
 
export default StateButton;