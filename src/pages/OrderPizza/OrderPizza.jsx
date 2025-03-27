import Home1 from "../../components/Home1/Home1";
import OrderForm from "../../components/OrderForm/OrderForm";
import PizzaInfo from "../../components/PizzaInfo/PizzaInfo";
import "./index.css";

export default function OrderPizza() {
  const pizzaPrice = 85.5;
  return (
    <div className="main-container">
      <Home1 />
      <PizzaInfo pizzaPrice={pizzaPrice} />
      <OrderForm pizzaPrice={pizzaPrice} />
    </div>
  );
}
