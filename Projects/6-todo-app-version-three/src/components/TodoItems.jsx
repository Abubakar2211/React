import TodoItem from "./Todoitem";
import styles from "./Todoitems.module.css"

const TodoItems = ({ todoItems,onDeleteClick }) => {
    return <>
        <div className={styles.itemsContainer}>
            {todoItems.map(item =>
                <TodoItem key={item.name} todoName={item.name} todoDate={item.dueDate} onDeleteClick={onDeleteClick}
            />)}
        </div>
    </>
}
export default TodoItems;