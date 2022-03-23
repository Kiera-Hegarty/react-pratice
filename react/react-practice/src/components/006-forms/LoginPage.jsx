import { useState } from "react";
import Display from "./Display";
import Form from "./Form";

const LoginPage = () => {

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

const loginFunc = (user, pass) => {
    setUsername(user);
    setPassword(pass);
}

    return ( 
        <div>
             <Form loginFunc={loginFunc}/>
      <Display username={username} password={password}/>
        </div>
     );
}
 
export default LoginPage;