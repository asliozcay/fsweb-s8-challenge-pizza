import { useEffect, useState } from "react";
import { Button, ButtonGroup, Form, FormGroup, Input, Label } from "reactstrap";
import "./index.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function OrderForm(props) {
  const { pizzaPrice, setOrderData } = props;
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
  const errorMessages = {
    size: "Lütfen bir boyut seçiniz.",
    dough: "Lütfen bir hamur seçiniz.",
    name: "Lütfen en az 3 karakter olacak şekilde isminizi giriniz.",
    topping: "En fazla 10 malzeme seçebilirsiniz.",
    topping2: "Lütfen en az 4 malzeme seçiniz.",
  };

  const [selectedToppings, setSelectedToppings] = useState([]);
  const [totalPrice, setTotalPrice] = useState(pizzaPrice);
  const [toppingPrice, setToppingPrice] = useState(0);
  const [orderCount, setOrderCount] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedDough, setSelectedDough] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const isActive =
    selectedToppings.length > 3 &&
    selectedToppings.length < 11 &&
    selectedSize &&
    selectedDough &&
    name.length >2;

  const validateField = (field, value) => {
    const newErrors = { ...errors };
    if (field === "size") {
      if (!value) newErrors.size = errorMessages.size;
      else delete newErrors.size;
    } else if (field === "dough") {
      if (!value) newErrors.dough = errorMessages.dough;
      else delete newErrors.dough;
    } else if (field === "name") {
      if (!value || value.length <= 3) newErrors.name = errorMessages.name;
      else delete newErrors.name;
    } else if (field === "toppings") {
      if (value.length > 10) newErrors.topping = errorMessages.topping;
      else delete newErrors.topping;
      if (value.length < 4) newErrors.topping2 = errorMessages.topping2;
      else delete newErrors.topping2;
    }
    setErrors(newErrors);
  };

  const handleSizeChange = (e) => {
    const value = e.target.id;
    setSelectedSize(value);
    validateField("size", value);
  };

  const handleDoughChange = (e) => {
    const value = e.target.value;
    setSelectedDough(value);
    validateField("dough", value);
  };

  const handleToppingChange = (e) => {
    let newSelectedToppings;
    if (e.target.checked) {
      newSelectedToppings = [...selectedToppings, e.target.id];
      setToppingPrice(toppingPrice + 5);
    } else {
      newSelectedToppings = selectedToppings.filter(
        (item) => item !== e.target.id
      );
      setToppingPrice(toppingPrice - 5);
    }
    setSelectedToppings(newSelectedToppings);
    validateField("toppings", newSelectedToppings);
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    validateField("name", value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const orderDetails = {
      name: name,
      size: selectedSize,
      dough: selectedDough,
      toppings: selectedToppings,
      note: e.target.note.value,
      orderCount: orderCount,
      totalPrice: totalPrice * orderCount,
      toppingPrice: toppingPrice,
    };

    axios
      .post(" https://reqres.in/api/pizza", orderDetails)
      .then((response) => {
        console.log(response.data);
        setOrderData(orderDetails);
        navigate("/success");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const useCheckMobileScreen = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
    };

    useEffect(() => {
      window.addEventListener("resize", handleWindowSizeChange);
      return () => {
        window.removeEventListener("resize", handleWindowSizeChange);
      };
    }, []);

    return width <= 768;
  };

  const isMobile = useCheckMobileScreen();

  useEffect(() => {
    setTotalPrice(pizzaPrice + toppingPrice);
  }, [selectedToppings, selectedSize, selectedDough, orderCount]);

  return (
    <>
      <section className="pizza-order">
        <div className="container">
          <Form onSubmit={handleSubmit}>
            <div className="size-dough">
              <FormGroup
                check
                className="pizza-size"
                onChange={handleSizeChange}
              >
                <h3>
                  Boyut Seç<span className="red"> *</span>
                </h3>
                <div className="radio-buttons">
                  <Label htmlFor="S" className="radio-label">
                    <Input
                      name="size-radio"
                      type="radio"
                      id="S"
                      data-cy="s-size-input"
                      className="radio-input"
                    />
                    <span className="radio-text">S</span>
                  </Label>
                  <Label htmlFor="M" className="radio-label">
                    <Input
                      name="size-radio"
                      type="radio"
                      id="M"
                      data-cy="m-size-input"
                      className="radio-input"
                    />
                    <span className="radio-text">M</span>
                  </Label>
                  <Label htmlFor="L" className="radio-label">
                    <Input
                      name="size-radio"
                      type="radio"
                      id="L"
                      data-cy="l-size-input"
                      className="radio-input"
                    />
                    <span className="radio-text">L</span>
                  </Label>
                </div>
                {errors.size && <p className="error">{errors.size}</p>}
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
                <Input
                  id="dough"
                  name="select"
                  type="select"
                  data-cy="dough-select"
                >
                  <option hidden>--Hamur Kalınlığı Seç --</option>
                  <option>Süpper İnce</option>
                  <option>İnce</option>
                  <option>Orta</option>
                  <option>Kalın</option>
                  <option>Süpper Kalın</option>
                </Input>
                {errors.dough && <p className="error">{errors.dough}</p>}
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
                  const datacy = `input-topping-${index}`;
                  return (
                    <Label htmlFor={item} key={index}>
                      <Input
                        className="checkbox"
                        type="checkbox"
                        id={item}
                        data-cy={datacy}
                      />
                      {item}
                    </Label>
                  );
                })}
              </div>
              {errors.topping && <p className="error">{errors.topping}</p>}
              {errors.topping2 && <p className="error">{errors.topping2}</p>}
            </FormGroup>
            <FormGroup className="checkout">
              <Label htmlFor="name" className="name-input">
                <h3>İsim</h3>
                <Input
                  id="name"
                  placeholder="Lütfen isminizi giriniz."
                  value={name}
                  onChange={handleNameChange}
                  data-cy="name-input"
                />
                {errors.name && <p className="error">{errors.name}</p>}
              </Label>
              <Label htmlFor="note" className="note-input">
                <h3>Sipariş Notu</h3>
                <textarea
                  id="note"
                  placeholder="Siparişine eklemek istediğin bir not var mı?"
                />
              </Label>
              <hr />
              {!isMobile ? (
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
                  <div className="form-submit">
                    <div className="order-detail">
                      <div className="order-text">
                        <h3>Sipariş Toplamı</h3>
                        <span className="selected">
                          <p>Seçimler</p>
                          <p>{toppingPrice.toFixed(2)}₺</p>
                        </span>
                        <span className="total">
                          <p>Toplam</p>
                          <p>{(totalPrice * orderCount).toFixed(2)}₺</p>
                        </span>
                      </div>
                    </div>
                    <Button
                      className={`${
                        isActive ? "order-submit" : "disabled-btn"
                      }`}
                      type="submit"
                      disabled={!isActive}
                      data-cy="order-button"
                    >
                      Sipariş Ver
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="order">
                  <div className="form-submit">
                    <div className="order-detail">
                      <div className="order-text">
                        <h3>Sipariş Toplamı</h3>
                        <span className="selected">
                          <p>Seçimler</p>
                          <p>{toppingPrice.toFixed(2)}₺</p>
                        </span>
                        <span className="total">
                          <p>Toplam</p>
                          <p>{(totalPrice * orderCount).toFixed(2)}₺</p>
                        </span>
                      </div>
                    </div>
                    <div className="order-buttons">
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
                      <Button
                        className={`${
                          isActive ? "order-submit" : "disabled-btn"
                        }`}
                        type="submit"
                        disabled={!isActive}
                        data-cy="order-button"
                      >
                        Sipariş Ver
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </FormGroup>
          </Form>
        </div>
      </section>
    </>
  );
}
