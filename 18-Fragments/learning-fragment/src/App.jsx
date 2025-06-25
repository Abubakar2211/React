import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk"];
  // let foodItems = [];
  if(foodItems.length === 0 ){
    return <h3>I am still hungry.</h3>
  }
  return (
    <>
      <div>
        <h1>Healthy Food</h1>
        {foodItems.length === 0 ? <h3>I Am Still Hungry</h3> : null} 
      </div>
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
