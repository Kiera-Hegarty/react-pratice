import { useState } from "react";
import Counter from "./Counter";
import StateButton from "./StateButton";

const StateManager = () => {

    const [total, setTotal] = useState(100);

    const updateTotal = () => {
        setTotal(total - 1);
    }


    return ( 
         
        <>
            <StateButton updateTotal={updateTotal} total={total}/>
            <Counter total={total}/>
        </>
     );
}
 
export default StateManager;