import { useEffect, useState } from "react";
import { Button, ButtonGroup, Form, FormGroup, Input, Label } from "reactstrap";
import "./index.css";

export default function OrderForm(props) {
  const { pizzaPrice } = props;
  const toppings = [
    "Pepperoni",
    "Sosis",
    "Kanada Jambonu",
    "Tavuk Izgara",
    "Soğan",
    "Domates",
    "Mısır",
    "Succuk",
    "Jalepeno",
    "Sarımsak",
    "Biber",
    "Sucuk",
    "Ananas",
    "Kabak",
  ];

  const [selectedToppings, setSelectedToppings] = useState([]);
  const [totalPrice, setTotalPrice] = useState(pizzaPrice);
  const [toppingPrice, setToppingPrice] = useState(0);
  const [orderCount, setOrderCount] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedDough, setSelectedDough] = useState("");

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.id);
  };
  const handleDoughChange = (e) => {
    setSelectedDough(e.target.value);
  };
  const handleToppingChange = (e) => {
    if (e.target.checked) {
      setSelectedToppings([...selectedToppings, e.target.id]);
      setToppingPrice(toppingPrice + 5);
    } else {
      setSelectedToppings(
        selectedToppings.filter((item) => item !== e.target.id)
      );
      setToppingPrice(toppingPrice - 5);
    }
  };

  useEffect(() => {
    setTotalPrice(pizzaPrice + toppingPrice);
  }, [selectedToppings, selectedSize, selectedDough, orderCount]);

  return (
    <>
      <section className="pizza-order">
        <div className="container">
          <Form>
            <div className="size-dough">
              <FormGroup
                check
                className="pizza-size"
                onChange={handleSizeChange}
              >
                <h3>
                  Boyut Seç<span className="red"> *</span>
                </h3>
                <span>
                  <Input name="size-radio" type="radio" id="Kuçuk" />
                  <Label check htmlFor="Kucuk">
                    Küçük
                  </Label>
                </span>
                <span>
                  <Input name="size-radio" type="radio" id="Orta" />
                  <Label check htmlFor="Orta">
                    Orta
                  </Label>
                </span>
                <span>
                  <Input name="size-radio" type="radio" id="Buyuk" />
                  <Label check htmlFor="Buyuk">
                    Büyük
                  </Label>
                </span>
              </FormGroup>
              <FormGroup
                className="dough-thickness"
                onChange={handleDoughChange}
              >
                <Label htmlFor="dough">
                  <h3>
                    Hamur Seç<span className="red"> *</span>
                  </h3>
                </Label>
                <Input id="dough" name="select" type="select">
                  <option hidden>Hamur Kalınlığı</option>
                  <option>İnce</option>
                  <option>Orta</option>
                  <option>Kalın</option>
                </Input>
              </FormGroup>
            </div>
            <FormGroup
              className="pizza-toppings"
              onChange={handleToppingChange}
            >
              <h3>Ek Malzemler</h3>
              <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
              <div className="toppings">
                {toppings.map((item, index) => {
                  return (
                    <Label htmlFor={item} key={index}>
                      <Input type="checkbox" id={item} />
                      {item}
                    </Label>
                  );
                })}
              </div>
            </FormGroup>
            <FormGroup className="checkout">
              <Label htmlFor="name" className="name-input">
                <h3>İsim</h3>
                <Input id="name" placeholder="Lütfen isminizi giriniz." />
              </Label>
              <Label htmlFor="note" className="note-input">
                <h3>Sipariş Notu</h3>
                <textarea
                  id="note"
                  placeholder="Siparişine eklemek istediğin bir not var mı?"
                />
              </Label>
              <hr />
              <div className="order">
                <ButtonGroup className="count-group">
                  <Button
                    className="btn btn-left"
                    onClick={() => {
                      if (orderCount > 1) {
                        setOrderCount(orderCount - 1);
                      }
                    }}
                  >
                    -
                  </Button>
                  <p className="count">{orderCount}</p>
                  <Button
                    className="btn btn-right"
                    onClick={() => {
                      setOrderCount(orderCount + 1);
                    }}
                  >
                    +
                  </Button>
                </ButtonGroup>
                <div className="order-detail">
                  <div className="order-text">
                    <h3>Sipariş Toplamı</h3>
                    <span className="selected">
                      <p>Seçimler</p>
                      <p>{toppingPrice.toFixed(2)}₺</p>
                    </span>
                    <span className="total">
                      <p>Toplam</p>
                      <p>{totalPrice.toFixed(2) * orderCount}₺</p>
                    </span>
                  </div>
                  <Button className="order-submit">Sipariş Ver</Button>
                </div>
              </div>
            </FormGroup>
          </Form>
        </div>
      </section>
    </>
  );
}
