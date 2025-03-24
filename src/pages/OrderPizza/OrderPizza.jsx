import Header from "../../components/Header/Header";
import OrderForm from "../../components/OrderForm/OrderForm";
import PizzaInfo from "../../components/PizzaInfo/PizzaInfo";
import "./index.css";

export default function OrderPizza() {
  const pizzaPrice = 85.50;
  return (
    <div className="main-container">
      <Header />
      <PizzaInfo pizzaPrice={pizzaPrice}/>
      <OrderForm pizzaPrice={pizzaPrice}/>
    </div>
  );
}
