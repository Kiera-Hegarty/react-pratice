import { useState } from "react";
import axios from "axios";

const ProfileManager = () => {

    
    const[data, setData] = useState([]);

  const [id, setId] = useState(0);

  const [profile, setProfile] = useState({});

  const[query, setQuery] = useState("");

  const getData = () => {
    axios.get(`https://reqres.in/api/${query}`)
    .then((response) => {
        console.log(response);
        console.log(response.data.data);
        if(Array.isArray(response.data.data)){
            console.log("type of running");
            setData(response.data.data)
        } else{
            setData([response.data.data]);
        }
    })
}

  const setObject = (event) => {
    const { name, value } = event.target;
    setProfile((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const postData = () => {
    axios.post(`https://reqres.in/api/users/`, profile)
    .then((response) => {
      console.log(response);
    });
  };

  const deleteData = () => {
      axios.delete(`https://reqres.in/api/users/${id}`)
      .then(() => {
          console.log("Profile deleted")
      });
  };

  const updateData = () => {
      axios.put(`https://reqres.in/api/users/${id}`, profile)
      .then((response) => {
          console.log(response);
          setData(response.data)
      })
  }

  return (
    <>
      <input type="text" value={profile.name} name="name" onChange={setObject} placeholder="Enter name"/>
      <input type="number" value={profile.year} name="job" onChange={setObject} placeholder="Enter year" />
      <button type="button" onClick={postData}>Click to post data</button>
      <br></br>

      <input type="number" value={id} onChange={(e) => setId(e.target.value)}/>
      <button type="button" onClick={() => {deleteData()}}> Delete by id </button>
      <br></br>

      <input type="text" value={query} onChange={(e) => {setQuery(e.target.value)}}/>
      <button type="button" onClick={() => {getData()}}> Click me to see data! </button>
      {
          data.map((profile, key) => {
              return <h2> Name: {profile.name}</h2>
          })
      }
    <br></br>

      <input type="text" value={id} onChange={(e) => setId(e.target.value)}/>
      <button type="button" onClick={() => {updateData()}}> Update data </button>
      <h4>{data.name}</h4>
      <h4></h4>
    </>
  );
};

export default ProfileManager;
