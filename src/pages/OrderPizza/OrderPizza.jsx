import Footer from "../../components/Footer";
import Header from "../../components/Header";
import OrderForm from "../../components/OrderForm/OrderForm";
import PizzaInfo from "../../components/PizzaInfo/PizzaInfo";
import "./index.css";

export default function OrderPizza(props) {
  const { setOrderData } = props;
  const pizzaPrice = 85.5;
  return (
    <>
      <Header />
      <PizzaInfo pizzaPrice={pizzaPrice} />
      <OrderForm pizzaPrice={pizzaPrice} setOrderData={setOrderData} />
      <Footer />
    </>
  );
}
