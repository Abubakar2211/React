import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
    let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk"];
    // let foodItems = [];
    //   if(foodItems.length === 0 ){
    //     return <h3>I am still hungry.</h3>
    //   }
    //   let emptyMessage =  foodItems.length === 0 ? <h3>I Am Still Hungry</h3> : null
    return (
        <>
            <Container >
                <h1 className="food-heading">Healthy Food</h1>
                <ErrorMessage items={foodItems} />
                <FoodInput />
                <FoodItems items={foodItems} />
            </Container>
            <Container >
                <p>This is my first post</p>
            </Container>
        </>
    );
}

export default App;
