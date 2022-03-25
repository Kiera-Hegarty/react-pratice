import { useEffect, useState } from "react";
import axios from "axios";
import Drink from'./Drink';

const Bar = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.punkapi.com/v2/beers?&per_page=80")
      .then((response) => {
        // console.log(response.data);
        setData(response.data);
      });
  }, []);

  return (
    <div>
    {
        data.map((beer, key) => {
            return <Drink data={beer} key={key}/>
        })
    }
</div>
  );
};

export default Bar;
