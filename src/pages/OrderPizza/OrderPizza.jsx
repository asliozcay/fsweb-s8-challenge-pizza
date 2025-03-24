import Header from "../../components/Header/Header";
import OrderForm from "../../components/OrderForm/OrderForm";
import PizzaInfo from "../../components/PizzaInfo/PizzaInfo";
import "./index.css";

export default function OrderPizza() {
  return (
    <div className="main-container">
      <Header />
      <PizzaInfo />
      <OrderForm />
    </div>
  );
}
