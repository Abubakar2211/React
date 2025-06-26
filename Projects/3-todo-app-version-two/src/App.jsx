import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem1 from "./components/Todoitem1";
import TodoItem2 from "./components/Todoitem2";
import TodoItem from "./components/Todoitem";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
    const todoItems = [
        {
            name: "Buy Milk",
            dueDate: "4/12/2005"
        },
        {
            name: "Go To College",
            dueDate: "21/2/2005"
        },
        {
            name: "Like This Video",
            dueDate: "Right Now"
        },
    ];
    return (
        <div>
            <center className="todo-container">
                <AppName />
                <AddTodo />
                <TodoItems todoItems={todoItems} />
                <div className="container text-center"></div>
            </center>
        </div>
    );
}

export default App;
