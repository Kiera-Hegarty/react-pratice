import { useState } from "react";

const Shopping = () => {
  const [item, setItem] = useState([]);
  const [itemName, setItemName] = useState("");

  const addItem = (event) => {
    event.preventDefault();
    setItem([...item, { id: item.length, name: itemName }]);
    setItemName("");
  };

  return (
    <>
      <form onSubmit={addItem}>
        <input
          type="text"
          name="Item"
          placeholder="Enter an item"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <button type="submit"> Add</button>
      </form>
      <ul>
          {item.map(item => (
              <li key={item.id}>{item.name}</li>
          ))}
      </ul>
    </>
  );
};

export default Shopping;
