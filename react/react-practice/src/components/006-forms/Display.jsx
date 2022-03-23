const Display = ({username, password}) => {
    if(username === "test1" && password === "pass1"){
        return <h2> Succesfully logged in! </h2>
    } else if(username === "" && password === "") {
        return <h2> Please enter username and password </h2>
    } else if (username === "") {
        return <h2> Please enter username </h2>
    } else if (password === "") {
        return <h2> Please enter password </h2>
    } else {
        return <h2> Check username and password!! </h2>
    }
};
 
export default Display;