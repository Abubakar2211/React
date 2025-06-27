import styles from './foodInput.module.css'

const FoodInput = () => {
    return <>
        <input type="text" placeholder='Enter Food Item Here' 
         className={styles.foodInput} onChange={(e) => console.log(e.target.value)
         }/>
    </>
}
export default FoodInput