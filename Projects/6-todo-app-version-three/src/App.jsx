import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added : ${itemName} Date : ${itemDueDate}`);
    const newTodoItems = [...todoItems,{name:itemName,dueDate:itemDueDate}]
    setTodoItems(newTodoItems)
  };
  const handleDeleteItem = (todoItemName) => {
        const newTodoItems = todoItems.filter(item => item.name !== todoItemName)
        setTodoItems(newTodoItems);
        console.log(`Item Deleted : ${todoItemName}`);
  }
  return (
    <div>
      <center className="todo-container">
        <AppName />
        <AddTodo onNewItem={handleNewItem} />
        {todoItems.length === 0 && <WelcomeMessage  todoItems={todoItems} />}
        <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}/>
        <div className="container text-center"></div>
      </center>
    </div>
  );
}

export default App;
