import styles from "./Item.module.css";

const Item = ({ foodItems }) => {
    const handleBuyButtonClicked = (e) => {
        console.log(e)
        console.log(`${foodItems} Being Bought`);
    }
    return <>
        <li className={`${styles['kg-item']} list-group-item`}>
            <span className={styles['kg-span']}>{foodItems}</span>
            <button className={`${styles.button} btn btn-info`} onClick={
                (e) => handleBuyButtonClicked(e)
             }>Buy</button>
        </li>
    </>
}
export default Item;