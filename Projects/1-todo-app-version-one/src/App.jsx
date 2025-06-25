import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem1 from "./components/Todoitem1";
import TodoItem2 from "./components/Todoitem2";
import "./App.css";

function App() {
  return (
    <div>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <div className="items-container">
          <TodoItem1 />
          <TodoItem2 />
        </div>

        <div className="container text-center"></div>
      </center>
    </div>
  );
}

export default App;
