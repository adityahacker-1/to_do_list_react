import React,{useState} from "react"

function App(){
  const [item, setItem] = useState("");
  const [all_items,setList] = useState([]);

  function updateItem(event){
    const newItem = event.target.value;
    setItem(newItem);
  }

  function addAndUpdateList(event){
    setList((prevItems) => {
      return [...prevItems, item];
    });

    setItem("");
  }

  function clickButton(event){
    if (event.key === "Enter") {
      addAndUpdateList();
    }
  }
  

  return (
      <div className="container">
        <div className="heading">
          <h1>To-Do List</h1>
        </div>
        <div className="form">
          <input
            onChange={updateItem}
            onKeyDown={clickButton}
            value = {item}
            type="text"
          />
          <button onClick={addAndUpdateList}>
            <span>Add</span>
          </button>
        </div>
        <div>
          <ul>
            {all_items.map((todoItem) => (
              <li>{todoItem}</li>
            ))}
          </ul>
        </div>
      </div>
  )
  
}


export default App;