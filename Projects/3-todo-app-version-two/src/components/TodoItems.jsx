import TodoItem from "./Todoitem";
import styles from "./Todoitems.module.css"

const TodoItems = ({ todoItems }) => {
    return <>
        <div className={styles.itemsContainer}>
            {todoItems.map(item =>
                <TodoItem todoName={item.name} todoDate={item.dueDate}
            />)}
        </div>
    </>
}
export default TodoItems;