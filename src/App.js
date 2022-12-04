import { useState } from "react";
import { BiAddToQueue,BiTrash,BiEdit } from "react-icons/bi";

function App() {

  const [todoText, setToDoText] = useState('');
  const [todoList, setToDoList] = useState([]);

  const add = () => {

    if(todoText === "") {
      alert("Place fill out all field")
    } else {
      setToDoList([...todoList,{
        id : todoList.length + 1,
        text : todoText
      }])

      console.log(todoList);

      setToDoText('');
    }
      
  }

  const delItem = (id) =>{
    const delId = id;

    let confirm = window.confirm("Are you want to delete");
    
    if(confirm) {
      let filterList = todoList.filter((data) => data.id !== id);
      setToDoList(filterList);
    }

  }

  const editItem = (editId,itemName) => {
    const inputVal = prompt("Edit todo item", itemName);
    let editItems = todoList.map((todo) => {
      if(todo.id === editId){
        todo.text = inputVal;
      }
      return todo;
    })
    setToDoList(editItems)
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-5">
          <h1 className="text-center mt-3 text-secondary font-weight-bold">TO DO LIST</h1>
          <div className="border border-1 rounded p-3 mt-5">
            <div className="d-flex flex-row">
              <input value={todoText} onChange={e => setToDoText(e.target.value)} type='text' className="form-control me-3" placeholder="Say Something..." />
              <button onClick={() => add()} className="btn btn-primary">
                <BiAddToQueue className=""/>
                </button>
            </div>
            <ul className="list-group mt-4">
              {
                
                todoList.map((data) => {
                  return(
                    <li key={data.id} className="list-group-item d-flex flex-row justify-content-between align-items-center animate__animated animate__fadeInDown">
                      <div className="d-flex flex-row">
                        <p className="m-0">{data.id} . </p>
                        <p className="m-0"> {data.text}</p>
                      </div>
                      <div className="d-flex flex-row">
                        <button onClick={() => editItem(data.id,data.text)} className="btn btn-secondary">
                          <BiEdit className=""/>
                        </button>
                        <button onClick={() => delItem(data.id)} className="btn btn-danger ms-2">
                          <BiTrash className=""/>
                        </button>
                      </div>
                    </li>
                  )
                })

              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
