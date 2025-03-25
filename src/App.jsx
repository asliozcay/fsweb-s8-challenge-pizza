import "./App.css";
import OrderPizza from "./pages/OrderPizza/OrderPizza";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Success from "./pages/Success/Success";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order-pizza" element={<OrderPizza />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;
