import "./App.css";
import OrderPizza from "./pages/OrderPizza/OrderPizza";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Success from "./pages/Success/Success";
import { useState } from "react";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [orderData, setOrderData] = useState(null);
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/order-pizza"
          element={<OrderPizza setOrderData={setOrderData} />}
        />
        <Route path="/success" element={<Success orderData={orderData} />} />
      </Routes>
    </Router>
  );
}

export default App;
