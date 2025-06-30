import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemContext } from "./store/todo-item-store";

function App() {
    const [todoItems, setTodoItems] = useState([]);

    const addNewItem = (itemName, itemDueDate) => {
        const newTodoItems = [
            ...todoItems,
            { name: itemName, dueDate: itemDueDate },
        ];
        setTodoItems(newTodoItems);
    };
    const deleteItem = (todoItemName) => {
        const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
        setTodoItems(newTodoItems);
        console.log(`Item Deleted : ${todoItemName}`);
    };
    return (
        <div>
            <TodoItemContext.Provider value={{
                item: todoItems,
                addNewItem: addNewItem,
                deleteItem: deleteItem
            }}>
                <center className="todo-container">
                    <AppName />
                    <AddTodo onNewItem={handleNewItem} />
                    <WelcomeMessage />
                    <TodoItems onDeleteClick={handleDeleteItem} />
                </center>
            </TodoItemContext.Provider >
        </div>
    );
}

export default App;
