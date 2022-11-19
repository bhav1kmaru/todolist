
import './App.css';
import React from 'react';
import AddTodo from './components/AddToDo';
import TodoItem from './components/TodoItem';

function App() {
  const [todos,setTodos]=React.useState([])

  const handleAdd=(text)=>{
    const newTodo={
      title:text,
      status:false,
      id:Math.round(Math.random()*Date.now().toLocaleString())
    }
    setTodos([...todos,newTodo])
    console.log(todos)
  }
  return (
    <div className="App">
      <AddTodo handleAdd={handleAdd}/>
      <div>
        {/* <div style={{border:"1px solid black",margin:"5px",padding:"5px"}}></div> */}
        {todos.map((todoItem)=>(
          <TodoItem key={todoItem.id} title={todoItem.title} status={todoItem.status} id={todoItem.id}/>
        ))}
      </div>
    </div>
  );
}

export default App;
