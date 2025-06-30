import { useContext } from "react";
import { TodoItemContext } from "../store/todo-item-store";
import styles from "./WelcomeMessage.module.css";

const WelcomeMessage = () => {
    const todoItems = useContext(TodoItemContext);
    return <>
        {todoItems.length === 0 && <p className={styles.welcome}>Enjoy Your Day</p>}
    </>
}
export default WelcomeMessage;