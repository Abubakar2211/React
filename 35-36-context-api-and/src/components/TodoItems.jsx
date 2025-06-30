import { useContext } from "react";
import { TodoItemContext } from "../store/todo-item-store";
import TodoItem from "./Todoitem";
import styles from "./Todoitems.module.css"

const TodoItems = ({ onDeleteClick }) => {
    const todoItems = useContext(TodoItemContext)
    
    return <>
        <div className={styles.itemsContainer}>
            {todoItems.map(item =>
                <TodoItem key={item.name} todoName={item.name} todoDate={item.dueDate} onDeleteClick={onDeleteClick}
            />)}
        </div>
    </>
}
export default TodoItems;